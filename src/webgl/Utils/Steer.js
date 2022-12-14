import { Vector3, Group, Raycaster, Box3 } from "three";

class Entity extends Group {
    constructor(mesh) {
        super();
        this.mesh = mesh;
        this.mass = 1;
        this.maxSpeed = 10;

        this.position.set(0, 0, 0);
        this.velocity = new Vector3(0, 0, 0);

        this.box = new Box3().setFromObject(mesh);
        this.raycaster = new Raycaster();

        this.velocitySamples = [];
        this.numSamplesForSmoothing = 20;

        this.add(this.mesh);

        this.radius = 200; //temp
    }

    get width() {
        return this.box.max.x - this.box.min.x;
    }

    get height() {
        return this.box.max.y - this.box.min.y;
    }

    get depth() {
        return this.box.max.z - this.box.min.z;
    }

    get forward() {
        return new Vector3(0, 0, -1).applyQuaternion(this.quaternion).negate();
    }

    get backward() {
        return this.forward.clone().negate();
    }

    get left() {
        return this.forward.clone().applyAxisAngle(new Vector3(0, 1, 0), Math.PI * 0.5);
    }

    get right() {
        return this.left.clone().negate();
    }

    update() {
        this.velocity.clampLength(0, this.maxSpeed);
        this.velocity.setY(0);
        this.position.add(this.velocity);
    }

    bounce(box) {
        if (this.position.x > box.max.x) {
            this.position.setX(box.max.x);
            this.velocity.angle = this.velocity.angle + 0.1;
        }

        if (this.position.x < box.min.x) {
            this.position.setX(box.min.x);
            this.velocity.angle = this.velocity.angle + 0.1;
        }

        if (this.position.z > box.max.z) {
            this.position.setZ(box.max.z);
            this.velocity.angle = this.velocity.angle + 0.1;
        }
        if (this.position.z < box.min.z) {
            this.position.setZ(box.min.z);
            this.velocity.angle = this.velocity.angle + 0.1;
        }

        if (this.position.y > box.max.y) {
            this.position.setY(box.max.y);
        }

        if (this.position.y < box.min.y) {
            this.position.setY(-box.min.y);
        }
    }

    wrap(box) {
        if (this.position.x > box.max.x) {
            this.position.setX(box.min.x + 1);
        } else if (this.position.x < box.min.x) {
            this.position.setX(box.max.x - 1);
        }

        if (this.position.z > box.max.z) {
            this.position.setZ(box.min.z + 1);
        } else if (this.position.z < box.min.z) {
            this.position.setZ(box.max.z - 1);
        }

        if (this.position.y > box.max.y) {
            this.position.setY(box.min.y + 1);
        } else if (this.position.y < box.min.y) {
            this.position.setY(box.max.y + 1);
        }
    }

    lookWhereGoing(smoothing) {
        let direction = this.position.clone().add(this.velocity).setY(this.position.y);
        if (smoothing) {
            if (this.velocitySamples.length === this.numSamplesForSmoothing) {
                this.velocitySamples.shift();
            }

            this.velocitySamples.push(this.velocity.clone().setY(this.position.y));
            direction.set(0, 0, 0);
            for (let v = 0; v < this.velocitySamples.length; v++) {
                direction.add(this.velocitySamples[v]);
            }
            direction.divideScalar(this.velocitySamples.length);
            direction = this.position.clone().add(direction).setY(this.position.y);
        }
        this.lookAt(direction);
    }
}

export class SteeringEntity extends Entity {
    constructor(mesh) {
        super(mesh);

        this.maxForce = 5;
        this.arrivalThreshold = 400;

        this.wanderAngle = 0;
        this.wanderDistance = 10;
        this.wanderRadius = 5;
        this.wanderRange = 1;

        this.avoidDistance = 400;
        this.avoidBuffer = 20; //NOT USED

        this.inSightDistance = 200;
        this.tooCloseDistance = 60;

        this.pathIndex = 0;

        this.steeringForce = new Vector3(0, 0, 0);
    }

    seek(position) {
        const desiredVelocity = position.clone().sub(this.position);
        desiredVelocity.normalize().setLength(this.maxSpeed).sub(this.velocity);
        this.steeringForce.add(desiredVelocity);
    }

    flee(position) {
        const desiredVelocity = position.clone().sub(this.position);
        desiredVelocity.normalize().setLength(this.maxSpeed).sub(this.velocity);
        this.steeringForce.sub(desiredVelocity);
    }

    arrive(position) {
        const desiredVelocity = position.clone().sub(this.position);
        desiredVelocity.normalize();
        const distance = this.position.distanceTo(position);
        if (distance > this.arrivalThreshold) desiredVelocity.setLength(this.maxSpeed);
        else desiredVelocity.setLength((this.maxSpeed * distance) / this.arrivalThreshold);
        desiredVelocity.sub(this.velocity);
        this.steeringForce.add(desiredVelocity);
    }

    pursue(target) {
        const lookAheadTime = this.position.distanceTo(target.position) / this.maxSpeed;
        const predictedTarget = target.position.clone().add(target.velocity.clone().setLength(lookAheadTime));
        this.seek(predictedTarget);
    }

    evade(target) {
        const lookAheadTime = this.position.distanceTo(target.position) / this.maxSpeed;
        const predictedTarget = target.position.clone().sub(target.velocity.clone().setLength(lookAheadTime));
        this.flee(predictedTarget);
    }

    idle() {
        this.velocity.setLength(0);
        this.steeringForce.set(0, 0, 0);
    }

    wander() {
        const center = this.velocity.clone().normalize().setLength(this.wanderDistance);
        const offset = new Vector3(1, 1, 1);
        offset.setLength(this.wanderRadius);
        offset.x = Math.sin(this.wanderAngle) * offset.length();
        offset.z = Math.cos(this.wanderAngle) * offset.length();
        offset.y = Math.sin(this.wanderAngle) * offset.length();

        this.wanderAngle += Math.random() * this.wanderRange - this.wanderRange * 0.5;
        center.add(offset);
        center.setY(0);
        this.steeringForce.add(center);
    }

    interpose(targetA, targetB) {
        let midPoint = targetA.position.clone().add(targetB.position.clone()).divideScalar(2);
        const timeToMidPoint = this.position.distanceTo(midPoint) / this.maxSpeed;
        const pointA = targetA.position.clone().add(targetA.velocity.clone().multiplyScalar(timeToMidPoint));
        const pointB = targetB.position.clone().add(targetB.velocity.clone().multiplyScalar(timeToMidPoint));
        midPoint = pointA.add(pointB).divideScalar(2);
        this.seek(midPoint);
    }

    separation(entities, separationRadius = 300, maxSeparation = 100) {
        const force = new Vector3(0, 0, 0);
        let neighborCount = 0;

        for (let i = 0; i < entities.length; i++) {
            if (entities[i] !== this && entities[i].position.distanceTo(this.position) <= separationRadius) {
                force.add(entities[i].position.clone().sub(this.position));
                neighborCount++;
            }
        }
        if (neighborCount !== 0) {
            force.divideScalar(neighborCount);
            force.negate();
        }
        force.normalize();
        force.multiplyScalar(maxSeparation);
        this.steeringForce.add(force);
    }

    isOnLeaderSight(leader, ahead, leaderSightRadius) {
        return (
            ahead.distanceTo(this.position) <= leaderSightRadius ||
            leader.position.distanceTo(this.position) <= leaderSightRadius
        );
    }

    followLeader(
        leader,
        entities,
        distance = 400,
        separationRadius = 300,
        maxSeparation = 100,
        leaderSightRadius = 1600,
        arrivalThreshold = 200
    ) {
        const tv = leader.velocity.clone();
        tv.normalize().multiplyScalar(distance);
        const ahead = leader.position.clone().add(tv);
        tv.negate();
        const behind = leader.position.clone().add(tv);

        if (this.isOnLeaderSight(leader, ahead, leaderSightRadius)) {
            this.evade(leader);
        }
        this.arrivalThreshold = arrivalThreshold;
        this.arrive(behind);
        this.separation(entities, separationRadius, maxSeparation);
    }

    getNeighborAhead(entities) {
        const maxQueueAhead = 500;
        const maxQueueRadius = 500;
        let res;
        const qa = this.velocity.clone().normalize().multiplyScalar(maxQueueAhead);
        const ahead = this.position.clone().add(qa);

        for (let i = 0; i < entities.length; i++) {
            const distance = ahead.distanceTo(entities[i].position);
            if (entities[i] !== this && distance <= maxQueueRadius) {
                res = entities[i];
                break;
            }
        }
        return res;
    }

    queue(entities, maxQueueRadius = 500) {
        const neighbor = this.getNeighborAhead(entities);
        let brake = new Vector3(0, 0, 0);
        const v = this.velocity.clone();
        if (neighbor != null) {
            brake = this.steeringForce.clone().negate().multiplyScalar(0.8);
            v.negate().normalize();
            brake.add(v);
            if (this.position.distanceTo(neighbor.position) <= maxQueueRadius) {
                this.velocity.multiplyScalar(0.3);
            }
        }

        this.steeringForce.add(brake);
    }

    inSight(entity) {
        if (this.position.distanceTo(entity.position) > this.inSightDistance) return false;
        const heading = this.velocity.clone().normalize();
        const difference = entity.position.clone().sub(this.position);
        const dot = difference.dot(heading);
        return dot >= 0;
    }

    flock(entities) {
        const averageVelocity = this.velocity.clone();
        const averagePosition = new Vector3(0, 0, 0);
        let inSightCount = 0;
        for (let i = 0; i < entities.length; i++) {
            if (entities[i] !== this && this.inSight(entities[i])) {
                averageVelocity.add(entities[i].velocity);
                averagePosition.add(entities[i].position);
                if (this.position.distanceTo(entities[i].position) < this.tooCloseDistance) {
                    this.flee(entities[i].position);
                }
                inSightCount++;
            }
        }
        if (inSightCount > 0) {
            averageVelocity.divideScalar(inSightCount);
            averagePosition.divideScalar(inSightCount);
            this.seek(averagePosition);
            this.steeringForce.add(averageVelocity.sub(this.velocity));
        }
    }

    followPath(path, loop, thresholdRadius = 1) {
        const wayPoint = path[this.pathIndex];
        if (wayPoint == null) return;
        if (this.position.distanceTo(wayPoint) < thresholdRadius) {
            if (this.pathIndex >= path.length - 1) {
                if (loop) this.pathIndex = 0;
            } else {
                this.pathIndex++;
            }
        }
        if (this.pathIndex >= path.length - 1 && !loop) this.arrive(wayPoint);
        else this.seek(wayPoint);
    }

    avoid(obstacles) {
        const dynamic_length = this.velocity.length() / this.maxSpeed;
        const ahead = this.position.clone().add(this.velocity.clone().normalize().multiplyScalar(dynamic_length));
        const ahead2 = this.position.clone().add(
            this.velocity
                .clone()
                .normalize()
                .multiplyScalar(this.avoidDistance * 0.5)
        );
        //get most threatening
        let mostThreatening = null;
        for (let i = 0; i < obstacles.length; i++) {
            if (obstacles[i] === this) continue;
            const collision =
                obstacles[i].position.distanceTo(ahead) <= obstacles[i].radius ||
                obstacles[i].position.distanceTo(ahead2) <= obstacles[i].radius;
            if (
                collision &&
                (mostThreatening == null ||
                    this.position.distanceTo(obstacles[i].position) <
                        this.position.distanceTo(mostThreatening.position))
            ) {
                mostThreatening = obstacles[i];
            }
        }
        //end
        let avoidance = new Vector3(0, 0, 0);
        if (mostThreatening != null) {
            avoidance = ahead.clone().sub(mostThreatening.position).normalize().multiplyScalar(100);
        }
        this.steeringForce.add(avoidance);
    }

    update() {
        this.steeringForce.clampLength(0, this.maxForce);
        this.steeringForce.divideScalar(this.mass);
        this.velocity.add(this.steeringForce);
        this.steeringForce.set(0, 0, 0);
        Entity.prototype.update.call(this);
    }
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
Math.getRandomArbitrary = function (min, max) {
    return Math.random() * (max - min) + min;
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
Math.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Vector3.prototype.perp = function () {
    return new Vector3(-this.z, 0, this.x);
};

Vector3.prototype.sign = function (vector) {
    return this.perp().dot(vector) < 0 ? -1 : 1;
};

Object.defineProperty(Vector3.prototype, "angle", {
    enumerable: true,
    configurable: true,
    get() {
        return Math.atan2(this.z, this.x);
    },
    set(value) {
        this.x = Math.cos(value) * this.length();
        this.z = Math.sin(value) * this.length();
    },
});

import {RawRigidBodySet} from "../raw";
import {Rotation, RotationOps, Vector, VectorOps} from "../math";
import {Collider, ColliderHandle, ColliderSet} from "../geometry";

/**
 * The integer identifier of a collider added to a `ColliderSet`.
 */
export type RigidBodyHandle = number;

/**
 * The simulation status of a rigid-body.
 */
// TODO: rename this to RigidBodyType
export enum RigidBodyType {
    /**
     * A `RigidBodyType::Dynamic` body can be affected by all external forces.
     */
    Dynamic = 0,
    /**
     * A `RigidBodyType::Fixed` body cannot be affected by external forces.
     */
    Fixed,
    /**
     * A `RigidBodyType::KinematicPositionBased` body cannot be affected by any external forces but can be controlled
     * by the user at the position level while keeping realistic one-way interaction with dynamic bodies.
     *
     * One-way interaction means that a kinematic body can push a dynamic body, but a kinematic body
     * cannot be pushed by anything. In other words, the trajectory of a kinematic body can only be
     * modified by the user and is independent from any contact or joint it is involved in.
     */
    KinematicPositionBased,
    /**
     * A `RigidBodyType::KinematicVelocityBased` body cannot be affected by any external forces but can be controlled
     * by the user at the velocity level while keeping realistic one-way interaction with dynamic bodies.
     *
     * One-way interaction means that a kinematic body can push a dynamic body, but a kinematic body
     * cannot be pushed by anything. In other words, the trajectory of a kinematic body can only be
     * modified by the user and is independent from any contact or joint it is involved in.
     */
    KinematicVelocityBased,
}

/**
 * A rigid-body.
 */
export class RigidBody {
    private rawSet: RawRigidBodySet; // The RigidBody won't need to free this.
    private colliderSet: ColliderSet;
    readonly handle: RigidBodyHandle;

    /**
     * An arbitrary user-defined object associated with this rigid-body.
     */
    public userData?: unknown;

    constructor(
        rawSet: RawRigidBodySet,
        colliderSet: ColliderSet,
        handle: RigidBodyHandle,
    ) {
        this.rawSet = rawSet;
        this.colliderSet = colliderSet;
        this.handle = handle;
    }

    /** @internal */
    public finalizeDeserialization(colliderSet: ColliderSet) {
        this.colliderSet = colliderSet;
    }

    /**
     * Checks if this rigid-body is still valid (i.e. that it has
     * not been deleted from the rigid-body set yet.
     */
    public isValid(): boolean {
        return this.rawSet.contains(this.handle);
    }

    /**
     * Locks or unlocks the ability of this rigid-body to translate.
     *
     * @param locked - If `true`, this rigid-body will no longer translate due to forces and impulses.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    public lockTranslations(locked: boolean, wakeUp: boolean) {
        return this.rawSet.rbLockTranslations(this.handle, locked, wakeUp);
    }

    /**
     * Locks or unlocks the ability of this rigid-body to rotate.
     *
     * @param locked - If `true`, this rigid-body will no longer rotate due to torques and impulses.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    public lockRotations(locked: boolean, wakeUp: boolean) {
        return this.rawSet.rbLockRotations(this.handle, locked, wakeUp);
    }

    // #if DIM3
    /**
     * Locks or unlocks the ability of this rigid-body to translate along individual coordinate axes.
     *
     * @param enableX - If `false`, this rigid-body will no longer translate due to torques and impulses, along the X coordinate axis.
     * @param enableY - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Y coordinate axis.
     * @param enableZ - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Z coordinate axis.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    public setEnabledTranslations(
        enableX: boolean,
        enableY: boolean,
        enableZ: boolean,
        wakeUp: boolean,
    ) {
        return this.rawSet.rbSetEnabledTranslations(
            this.handle,
            enableX,
            enableY,
            enableZ,
            wakeUp,
        );
    }

    /**
     * Locks or unlocks the ability of this rigid-body to translate along individual coordinate axes.
     *
     * @param enableX - If `false`, this rigid-body will no longer translate due to torques and impulses, along the X coordinate axis.
     * @param enableY - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Y coordinate axis.
     * @param enableZ - If `false`, this rigid-body will no longer translate due to torques and impulses, along the Z coordinate axis.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     * @deprecated use `this.setEnabledTranslations` with the same arguments instead.
     */
    public restrictTranslations(
        enableX: boolean,
        enableY: boolean,
        enableZ: boolean,
        wakeUp: boolean,
    ) {
        this.setEnabledTranslations(enableX, enableY, enableZ, wakeUp);
    }

    /**
     * Locks or unlocks the ability of this rigid-body to rotate along individual coordinate axes.
     *
     * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
     * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
     * @param enableZ - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Z coordinate axis.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     */
    public setEnabledRotations(
        enableX: boolean,
        enableY: boolean,
        enableZ: boolean,
        wakeUp: boolean,
    ) {
        return this.rawSet.rbSetEnabledRotations(
            this.handle,
            enableX,
            enableY,
            enableZ,
            wakeUp,
        );
    }

    /**
     * Locks or unlocks the ability of this rigid-body to rotate along individual coordinate axes.
     *
     * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
     * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
     * @param enableZ - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Z coordinate axis.
     * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
     * @deprecated use `this.setEnabledRotations` with the same arguments instead.
     */
    public restrictRotations(
        enableX: boolean,
        enableY: boolean,
        enableZ: boolean,
        wakeUp: boolean,
    ) {
        this.setEnabledRotations(enableX, enableY, enableZ, wakeUp);
    }
    // #endif

    /**
     * The dominance group, in [-127, +127] this rigid-body is part of.
     */
    public dominanceGroup(): number {
        return this.rawSet.rbDominanceGroup(this.handle);
    }

    /**
     * Sets the dominance group of this rigid-body.
     *
     * @param group - The dominance group of this rigid-body. Must be a signed integer in the range [-127, +127].
     */
    public setDominanceGroup(group: number) {
        this.rawSet.rbSetDominanceGroup(this.handle, group);
    }

    /**
     * Enable or disable CCD (Continuous Collision Detection) for this rigid-body.
     *
     * @param enabled - If `true`, CCD will be enabled for this rigid-body.
     */
    public enableCcd(enabled: boolean) {
        this.rawSet.rbEnableCcd(this.handle, enabled);
    }

    /**
     * The world-space translation of this rigid-body.
     */
    public translation(): Vector {
        let res = this.rawSet.rbTranslation(this.handle);
        return VectorOps.fromRaw(res);
    }

    /**
     * The world-space orientation of this rigid-body.
     */
    public rotation(): Rotation {
        let res = this.rawSet.rbRotation(this.handle);
        return RotationOps.fromRaw(res);
    }

    /**
     * The world-space next translation of this rigid-body.
     *
     * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
     * method and is used for estimating the kinematic body velocity at the next timestep.
     * For non-kinematic bodies, this value is currently unspecified.
     */
    public nextTranslation(): Vector {
        let res = this.rawSet.rbNextTranslation(this.handle);
        return VectorOps.fromRaw(res);
    }

    /**
     * The world-space next orientation of this rigid-body.
     *
     * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
     * method and is used for estimating the kinematic body velocity at the next timestep.
     * For non-kinematic bodies, this value is currently unspecified.
     */
    public nextRotation(): Rotation {
        let res = this.rawSet.rbNextRotation(this.handle);
        return RotationOps.fromRaw(res);
    }

    /**
     * Sets the translation of this rigid-body.
     *
     * @param tra - The world-space position of the rigid-body.
     * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
     *                 wasn't moving before modifying its position.
     */
    public setTranslation(tra: Vector, wakeUp: boolean) {
        // #if DIM3
        this.rawSet.rbSetTranslation(this.handle, tra.x, tra.y, tra.z, wakeUp);
        // #endif
    }

    /**
     * Sets the linear velocity fo this rigid-body.
     *
     * @param vel - The linear velocity to set.
     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
     */
    public setLinvel(vel: Vector, wakeUp: boolean) {
        let rawVel = VectorOps.intoRaw(vel);
        this.rawSet.rbSetLinvel(this.handle, rawVel, wakeUp);
        rawVel.free();
    }

    /**
     * The scale factor applied to the gravity affecting
     * this rigid-body.
     */
    public gravityScale(): number {
        return this.rawSet.rbGravityScale(this.handle);
    }

    /**
     * Sets the scale factor applied to the gravity affecting
     * this rigid-body.
     *
     * @param factor - The scale factor to set. A value of 0.0 means
     *   that this rigid-body will on longer be affected by gravity.
     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
     */
    public setGravityScale(factor: number, wakeUp: boolean) {
        this.rawSet.rbSetGravityScale(this.handle, factor, wakeUp);
    }

    // #if DIM3
    /**
     * Sets the rotation quaternion of this rigid-body.
     *
     * This does nothing if a zero quaternion is provided.
     *
     * @param rotation - The rotation to set.
     * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
     * wasn't moving before modifying its position.
     */
    public setRotation(rot: Rotation, wakeUp: boolean) {
        this.rawSet.rbSetRotation(
            this.handle,
            rot.x,
            rot.y,
            rot.z,
            rot.w,
            wakeUp,
        );
    }

    /**
     * Sets the angular velocity fo this rigid-body.
     *
     * @param vel - The angular velocity to set.
     * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
     */
    public setAngvel(vel: Vector, wakeUp: boolean) {
        let rawVel = VectorOps.intoRaw(vel);
        this.rawSet.rbSetAngvel(this.handle, rawVel, wakeUp);
        rawVel.free();
    }

    // #endif


    /**
     * If this rigid body is kinematic, sets its future translation after the next timestep integration.
     *
     * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
     * an artificial velocity for this rigid-body from its current position and its next kinematic
     * position. This velocity will be used to compute forces on dynamic bodies interacting with
     * this body.
     *
     * @param t - The kinematic translation to set.
     */
    public setNextKinematicTranslation(t: Vector) {
        // #if DIM3
        this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y, t.z);
        // #endif
    }

    // #if DIM3
    /**
     * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
     *
     * This should be used instead of `rigidBody.setRotation` to make the dynamic object
     * interacting with this kinematic body behave as expected. Internally, Rapier will compute
     * an artificial velocity for this rigid-body from its current position and its next kinematic
     * position. This velocity will be used to compute forces on dynamic bodies interacting with
     * this body.
     *
     * @param rot - The kinematic rotation to set.
     */
    public setNextKinematicRotation(rot: Rotation) {
        this.rawSet.rbSetNextKinematicRotation(
            this.handle,
            rot.x,
            rot.y,
            rot.z,
            rot.w,
        );
    }

    // #endif


    /**
     * The linear velocity of this rigid-body.
     */
    public linvel(): Vector {
        return VectorOps.fromRaw(this.rawSet.rbLinvel(this.handle));
    }

    // #if DIM3
    /**
     * The angular velocity of this rigid-body.
     */
    public angvel(): Vector {
        return VectorOps.fromRaw(this.rawSet.rbAngvel(this.handle));
    }

    // #endif


    /**
     * The mass of this rigid-body.
     */
    public mass(): number {
        return this.rawSet.rbMass(this.handle);
    }

    /**
     * Put this rigid body to sleep.
     *
     * A sleeping body no longer moves and is no longer simulated by the physics engine unless
     * it is waken up. It can be woken manually with `this.wakeUp()` or automatically due to
     * external forces like contacts.
     */
    public sleep() {
        this.rawSet.rbSleep(this.handle);
    }

    /**
     * Wakes this rigid-body up.
     *
     * A dynamic rigid-body that does not move during several consecutive frames will
     * be put to sleep by the physics engine, i.e., it will stop being simulated in order
     * to avoid useless computations.
     * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
     * the position of a dynamic body so that it is properly simulated afterwards.
     */
    public wakeUp() {
        this.rawSet.rbWakeUp(this.handle);
    }

    /**
     * Is CCD enabled for this rigid-body?
     */
    public isCcdEnabled() {
        this.rawSet.rbIsCcdEnabled(this.handle);
    }

    /**
     * The number of colliders attached to this rigid-body.
     */
    public numColliders(): number {
        return this.rawSet.rbNumColliders(this.handle);
    }

    /**
     * Retrieves the `i-th` collider attached to this rigid-body.
     *
     * @param i - The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
     *         This index is **not** the same as the unique identifier of the collider.
     */
    public collider(i: number): Collider {
        return this.colliderSet.get(this.rawSet.rbCollider(this.handle, i));
    }

    /**
     * The status of this rigid-body: static, dynamic, or kinematic.
     */
    public bodyType(): RigidBodyType {
        return this.rawSet.rbBodyType(this.handle);
    }

    /**
     * Set a new status for this rigid-body: static, dynamic, or kinematic.
     */
    public setBodyType(type: RigidBodyType) {
        return this.rawSet.rbSetBodyType(this.handle, type);
    }

    /**
     * Is this rigid-body sleeping?
     */
    public isSleeping(): boolean {
        return this.rawSet.rbIsSleeping(this.handle);
    }

    /**
     * Is the velocity of this rigid-body not zero?
     */
    public isMoving(): boolean {
        return this.rawSet.rbIsMoving(this.handle);
    }

    /**
     * Is this rigid-body static?
     */
    public isFixed(): boolean {
        return this.rawSet.rbIsFixed(this.handle);
    }

    /**
     * Is this rigid-body kinematic?
     */
    public isKinematic(): boolean {
        return this.rawSet.rbIsKinematic(this.handle);
    }

    /**
     * Is this rigid-body dynamic?
     */
    public isDynamic(): boolean {
        return this.rawSet.rbIsDynamic(this.handle);
    }

    /**
     * The linear damping coefficient of this rigid-body.
     */
    public linearDamping(): number {
        return this.rawSet.rbLinearDamping(this.handle);
    }

    /**
     * The angular damping coefficient of this rigid-body.
     */
    public angularDamping(): number {
        return this.rawSet.rbAngularDamping(this.handle);
    }

    /**
     * Sets the linear damping factor applied to this rigid-body.
     *
     * @param factor - The damping factor to set.
     */
    public setLinearDamping(factor: number) {
        this.rawSet.rbSetLinearDamping(this.handle, factor);
    }

    /**
     * Recompute the mass-properties of this rigid-bodies based on its currently attached colliders.
     */
    public recomputeMassPropertiesFromColliders() {
        this.rawSet.rbRecomputeMassPropertiesFromColliders(
            this.handle,
            this.colliderSet.raw,
        );
    }

    /**
     * Sets the rigid-body's additional mass.
     *
     * The total angular inertia of the rigid-body will be scaled automatically based on this additional mass. If this
     * scaling effect isn’t desired, use Self::additional_mass_properties instead of this method.
     *
     * This is only the "additional" mass because the total mass of the rigid-body is equal to the sum of this
     * additional mass and the mass computed from the colliders (with non-zero densities) attached to this rigid-body.
     *
     * That total mass (which includes the attached colliders’ contributions) will be updated at the name physics step,
     * or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
     *
     * This will override any previous additional mass-properties set by `this.setAdditionalMass`,
     * `this.setAdditionalMassProperties`, `RigidBodyDesc::setAdditionalMass`, or
     * `RigidBodyDesc.setAdditionalMassfProperties` for this rigid-body.
     *
     * @param mass - The additional mass to set.
     * @param wakeUp - If `true` then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
     */
    public setAdditionalMass(mass: number, wakeUp: boolean) {
        this.rawSet.rbSetAdditionalMass(this.handle, mass, wakeUp);
    }

    // #if DIM3
    /**
     * Sets the rigid-body's additional mass-properties.
     *
     * This is only the "additional" mass-properties because the total mass-properties of the rigid-body is equal to the
     * sum of this additional mass-properties and the mass computed from the colliders (with non-zero densities) attached
     * to this rigid-body.
     *
     * That total mass-properties (which include the attached colliders’ contributions) will be updated at the name
     * physics step, or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
     *
     * This will override any previous mass-properties set by `this.setAdditionalMass`,
     * `this.setAdditionalMassProperties`, `RigidBodyDesc.setAdditionalMass`, or `RigidBodyDesc.setAdditionalMassProperties`
     * for this rigid-body.
     *
     * If `wake_up` is true then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
     */
    public setAdditionalMassProperties(
        mass: number,
        centerOfMass: Vector,
        principalAngularInertia: Vector,
        angularInertiaLocalFrame: Rotation,
        wakeUp: boolean,
    ) {
        let rawCom = VectorOps.intoRaw(centerOfMass);
        let rawPrincipalInertia = VectorOps.intoRaw(principalAngularInertia);
        let rawInertiaFrame = RotationOps.intoRaw(angularInertiaLocalFrame);

        this.rawSet.rbSetAdditionalMassProperties(
            this.handle,
            mass,
            rawCom,
            rawPrincipalInertia,
            rawInertiaFrame,
            wakeUp,
        );

        rawCom.free();
        rawPrincipalInertia.free();
        rawInertiaFrame.free();
    }
    // #endif


    /**
     * Sets the linear damping factor applied to this rigid-body.
     *
     * @param factor - The damping factor to set.
     */
    public setAngularDamping(factor: number) {
        this.rawSet.rbSetAngularDamping(this.handle, factor);
    }

    /**
     * Resets to zero the user forces (but not torques) applied to this rigid-body.
     *
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    public resetForces(wakeUp: boolean) {
        this.rawSet.rbResetForces(this.handle, wakeUp);
    }

    /**
     * Resets to zero the user torques applied to this rigid-body.
     *
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    public resetTorques(wakeUp: boolean) {
        this.rawSet.rbResetTorques(this.handle, wakeUp);
    }

    /**
     * Adds a force at the center-of-mass of this rigid-body.
     *
     * @param force - the world-space force to add to the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    public addForce(force: Vector, wakeUp: boolean) {
        const rawForce = VectorOps.intoRaw(force);
        this.rawSet.rbAddForce(this.handle, rawForce, wakeUp);
        rawForce.free();
    }

    /**
     * Applies an impulse at the center-of-mass of this rigid-body.
     *
     * @param impulse - the world-space impulse to apply on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    public applyImpulse(impulse: Vector, wakeUp: boolean) {
        const rawImpulse = VectorOps.intoRaw(impulse);
        this.rawSet.rbApplyImpulse(this.handle, rawImpulse, wakeUp);
        rawImpulse.free();
    }


    // #if DIM3
    /**
     * Adds a torque at the center-of-mass of this rigid-body.
     *
     * @param torque - the world-space torque to add to the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    public addTorque(torque: Vector, wakeUp: boolean) {
        const rawTorque = VectorOps.intoRaw(torque);
        this.rawSet.rbAddTorque(this.handle, rawTorque, wakeUp);
        rawTorque.free();
    }

    // #endif


    // #if DIM3
    /**
     * Applies an impulsive torque at the center-of-mass of this rigid-body.
     *
     * @param torqueImpulse - the world-space torque impulse to apply on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    public applyTorqueImpulse(torqueImpulse: Vector, wakeUp: boolean) {
        const rawTorqueImpulse = VectorOps.intoRaw(torqueImpulse);
        this.rawSet.rbApplyTorqueImpulse(this.handle, rawTorqueImpulse, wakeUp);
        rawTorqueImpulse.free();
    }

    // #endif

    /**
     * Adds a force at the given world-space point of this rigid-body.
     *
     * @param force - the world-space force to add to the rigid-body.
     * @param point - the world-space point where the impulse is to be applied on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    public addForceAtPoint(force: Vector, point: Vector, wakeUp: boolean) {
        const rawForce = VectorOps.intoRaw(force);
        const rawPoint = VectorOps.intoRaw(point);
        this.rawSet.rbAddForceAtPoint(this.handle, rawForce, rawPoint, wakeUp);
        rawForce.free();
        rawPoint.free();
    }

    /**
     * Applies an impulse at the given world-space point of this rigid-body.
     *
     * @param impulse - the world-space impulse to apply on the rigid-body.
     * @param point - the world-space point where the impulse is to be applied on the rigid-body.
     * @param wakeUp - should the rigid-body be automatically woken-up?
     */
    public applyImpulseAtPoint(
        impulse: Vector,
        point: Vector,
        wakeUp: boolean,
    ) {
        const rawImpulse = VectorOps.intoRaw(impulse);
        const rawPoint = VectorOps.intoRaw(point);
        this.rawSet.rbApplyImpulseAtPoint(
            this.handle,
            rawImpulse,
            rawPoint,
            wakeUp,
        );
        rawImpulse.free();
        rawPoint.free();
    }
}

export class RigidBodyDesc {
    translation: Vector;
    rotation: Rotation;
    gravityScale: number;
    mass: number;
    massOnly: boolean;
    centerOfMass: Vector;
    translationsEnabledX: boolean;
    translationsEnabledY: boolean;
    linvel: Vector;
    // #if DIM3
    angvel: Vector;
    principalAngularInertia: Vector;
    angularInertiaLocalFrame: Rotation;
    translationsEnabledZ: boolean;
    rotationsEnabledX: boolean;
    rotationsEnabledY: boolean;
    rotationsEnabledZ: boolean;
    // #endif
    linearDamping: number;
    angularDamping: number;
    status: RigidBodyType;
    canSleep: boolean;
    sleeping: boolean;
    ccdEnabled: boolean;
    dominanceGroup: number;
    userData?: unknown;

    constructor(status: RigidBodyType) {
        this.status = status;
        this.translation = VectorOps.zeros();
        this.rotation = RotationOps.identity();
        this.gravityScale = 1.0;
        this.linvel = VectorOps.zeros();
        this.mass = 0.0;
        this.massOnly = false;
        this.centerOfMass = VectorOps.zeros();
        this.translationsEnabledX = true;
        this.translationsEnabledY = true;
        // #if DIM3
        this.angvel = VectorOps.zeros();
        this.principalAngularInertia = VectorOps.zeros();
        this.angularInertiaLocalFrame = RotationOps.identity();
        this.translationsEnabledZ = true;
        this.rotationsEnabledX = true;
        this.rotationsEnabledY = true;
        this.rotationsEnabledZ = true;
        // #endif
        this.linearDamping = 0.0;
        this.angularDamping = 0.0;
        this.canSleep = true;
        this.sleeping = false;
        this.ccdEnabled = false;
        this.dominanceGroup = 0;
    }

    /**
     * A rigid-body descriptor used to build a dynamic rigid-body.
     */
    public static dynamic(): RigidBodyDesc {
        return new RigidBodyDesc(RigidBodyType.Dynamic);
    }

    /**
     * A rigid-body descriptor used to build a position-based kinematic rigid-body.
     */
    public static kinematicPositionBased(): RigidBodyDesc {
        return new RigidBodyDesc(RigidBodyType.KinematicPositionBased);
    }

    /**
     * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
     */
    public static kinematicVelocityBased(): RigidBodyDesc {
        return new RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
    }

    /**
     * A rigid-body descriptor used to build a fixed rigid-body.
     */
    public static fixed(): RigidBodyDesc {
        return new RigidBodyDesc(RigidBodyType.Fixed);
    }

    /**
     * A rigid-body descriptor used to build a dynamic rigid-body.
     *
     * @deprecated The method has been renamed to `.dynamic()`.
     */
    public static newDynamic(): RigidBodyDesc {
        return new RigidBodyDesc(RigidBodyType.Dynamic);
    }

    /**
     * A rigid-body descriptor used to build a position-based kinematic rigid-body.
     *
     * @deprecated The method has been renamed to `.kinematicPositionBased()`.
     */
    public static newKinematicPositionBased(): RigidBodyDesc {
        return new RigidBodyDesc(RigidBodyType.KinematicPositionBased);
    }

    /**
     * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
     *
     * @deprecated The method has been renamed to `.kinematicVelocityBased()`.
     */
    public static newKinematicVelocityBased(): RigidBodyDesc {
        return new RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
    }

    /**
     * A rigid-body descriptor used to build a fixed rigid-body.
     *
     * @deprecated The method has been renamed to `.fixed()`.
     */
    public static newStatic(): RigidBodyDesc {
        return new RigidBodyDesc(RigidBodyType.Fixed);
    }

    public setDominanceGroup(group: number): RigidBodyDesc {
        this.dominanceGroup = group;
        return this;
    }


    // #if DIM3
    /**
     * Sets the initial translation of the rigid-body to create.
     *
     * @param tra - The translation to set.
     */
    public setTranslation(x: number, y: number, z: number): RigidBodyDesc {
        if (
            typeof x != "number" ||
            typeof y != "number" ||
            typeof z != "number"
        )
            throw TypeError("The translation components must be numbers.");

        this.translation = {x: x, y: y, z: z};
        return this;
    }

    // #endif

    /**
     * Sets the initial rotation of the rigid-body to create.
     *
     * @param rot - The rotation to set.
     */
    public setRotation(rot: Rotation): RigidBodyDesc {
        // #if DIM3
        RotationOps.copy(this.rotation, rot);
        // #endif
        return this;
    }

    /**
     * Sets the scale factor applied to the gravity affecting
     * the rigid-body being built.
     *
     * @param scale - The scale factor. Set this to `0.0` if the rigid-body
     *   needs to ignore gravity.
     */
    public setGravityScale(scale: number): RigidBodyDesc {
        this.gravityScale = scale;
        return this;
    }

    /**
     * Sets the initial mass of the rigid-body being built, before adding colliders' contributions.
     *
     * @param mass − The initial mass of the rigid-body to create.
     */
    public setAdditionalMass(mass: number): RigidBodyDesc {
        this.mass = mass;
        this.massOnly = true;
        return this;
    }


    // #if DIM3
    /**
     * Sets the initial linear velocity of the rigid-body to create.
     *
     * @param x - The linear velocity to set along the `x` axis.
     * @param y - The linear velocity to set along the `y` axis.
     * @param z - The linear velocity to set along the `z` axis.
     */
    public setLinvel(x: number, y: number, z: number): RigidBodyDesc {
        if (
            typeof x != "number" ||
            typeof y != "number" ||
            typeof z != "number"
        )
            throw TypeError("The linvel components must be numbers.");

        this.linvel = {x: x, y: y, z: z};
        return this;
    }

    /**
     * Sets the initial angular velocity of the rigid-body to create.
     *
     * @param vel - The angular velocity to set.
     */
    public setAngvel(vel: Vector): RigidBodyDesc {
        VectorOps.copy(this.angvel, vel);
        return this;
    }

    /**
     * Sets the mass properties of the rigid-body being built.
     *
     * Note that the final mass properties of the rigid-bodies depends
     * on the initial mass-properties of the rigid-body (set by this method)
     * to which is added the contributions of all the colliders with non-zero density
     * attached to this rigid-body.
     *
     * Therefore, if you want your provided mass properties to be the final
     * mass properties of your rigid-body, don't attach colliders to it, or
     * only attach colliders with densities equal to zero.
     *
     * @param mass − The initial mass of the rigid-body to create.
     * @param centerOfMass − The initial center-of-mass of the rigid-body to create.
     * @param principalAngularInertia − The initial principal angular inertia of the rigid-body to create.
     *                                  These are the eigenvalues of the angular inertia matrix.
     * @param angularInertiaLocalFrame − The initial local angular inertia frame of the rigid-body to create.
     *                                   These are the eigenvectors of the angular inertia matrix.
     */
    public setAdditionalMassProperties(
        mass: number,
        centerOfMass: Vector,
        principalAngularInertia: Vector,
        angularInertiaLocalFrame: Rotation,
    ): RigidBodyDesc {
        this.mass = mass;
        VectorOps.copy(this.centerOfMass, centerOfMass);
        VectorOps.copy(this.principalAngularInertia, principalAngularInertia);
        RotationOps.copy(
            this.angularInertiaLocalFrame,
            angularInertiaLocalFrame,
        );
        this.massOnly = false;
        return this;
    }

    /**
     * Allow translation of this rigid-body only along specific axes.
     * @param translationsEnabledX - Are translations along the X axis enabled?
     * @param translationsEnabledY - Are translations along the y axis enabled?
     * @param translationsEnabledZ - Are translations along the Z axis enabled?
     */
    public enabledTranslations(
        translationsEnabledX: boolean,
        translationsEnabledY: boolean,
        translationsEnabledZ: boolean,
    ): RigidBodyDesc {
        this.translationsEnabledX = translationsEnabledX;
        this.translationsEnabledY = translationsEnabledY;
        this.translationsEnabledZ = translationsEnabledZ;
        return this;
    }
    /**
     * Allow translation of this rigid-body only along specific axes.
     * @param translationsEnabledX - Are translations along the X axis enabled?
     * @param translationsEnabledY - Are translations along the y axis enabled?
     * @param translationsEnabledZ - Are translations along the Z axis enabled?
     * @deprecated use `this.enabledTranslations` with the same arguments instead.
     */
    public restrictTranslations(
        translationsEnabledX: boolean,
        translationsEnabledY: boolean,
        translationsEnabledZ: boolean,
    ): RigidBodyDesc {
        return this.enabledTranslations(
            translationsEnabledX,
            translationsEnabledY,
            translationsEnabledZ,
        );
    }

    /**
     * Locks all translations that would have resulted from forces on
     * the created rigid-body.
     */
    public lockTranslations(): RigidBodyDesc {
        return this.enabledTranslations(false, false, false);
    }

    /**
     * Allow rotation of this rigid-body only along specific axes.
     * @param rotationsEnabledX - Are rotations along the X axis enabled?
     * @param rotationsEnabledY - Are rotations along the y axis enabled?
     * @param rotationsEnabledZ - Are rotations along the Z axis enabled?
     */
    public enabledRotations(
        rotationsEnabledX: boolean,
        rotationsEnabledY: boolean,
        rotationsEnabledZ: boolean,
    ): RigidBodyDesc {
        this.rotationsEnabledX = rotationsEnabledX;
        this.rotationsEnabledY = rotationsEnabledY;
        this.rotationsEnabledZ = rotationsEnabledZ;
        return this;
    }

    /**
     * Allow rotation of this rigid-body only along specific axes.
     * @param rotationsEnabledX - Are rotations along the X axis enabled?
     * @param rotationsEnabledY - Are rotations along the y axis enabled?
     * @param rotationsEnabledZ - Are rotations along the Z axis enabled?
     * @deprecated use `this.enabledRotations` with the same arguments instead.
     */
    public restrictRotations(
        rotationsEnabledX: boolean,
        rotationsEnabledY: boolean,
        rotationsEnabledZ: boolean,
    ): RigidBodyDesc {
        return this.enabledRotations(
            rotationsEnabledX,
            rotationsEnabledY,
            rotationsEnabledZ,
        );
    }

    /**
     * Locks all rotations that would have resulted from forces on
     * the created rigid-body.
     */
    public lockRotations(): RigidBodyDesc {
        return this.restrictRotations(false, false, false);
    }

    // #endif

    /**
     * Sets the linear damping of the rigid-body to create.
     *
     * This will progressively slowdown the translational movement of the rigid-body.
     *
     * @param damping - The angular damping coefficient. Should be >= 0. The higher this
     *                  value is, the stronger the translational slowdown will be.
     */
    public setLinearDamping(damping: number): RigidBodyDesc {
        this.linearDamping = damping;
        return this;
    }

    /**
     * Sets the angular damping of the rigid-body to create.
     *
     * This will progressively slowdown the rotational movement of the rigid-body.
     *
     * @param damping - The angular damping coefficient. Should be >= 0. The higher this
     *                  value is, the stronger the rotational slowdown will be.
     */
    public setAngularDamping(damping: number): RigidBodyDesc {
        this.angularDamping = damping;
        return this;
    }

    /**
     * Sets whether or not the rigid-body to create can sleep.
     *
     * @param can - true if the rigid-body can sleep, false if it can't.
     */
    public setCanSleep(can: boolean): RigidBodyDesc {
        this.canSleep = can;
        return this;
    }

    /**
     * Sets whether or not the rigid-body is to be created asleep.
     *
     * @param can - true if the rigid-body should be in sleep, default false.
     */
    setSleeping(sleeping: boolean): RigidBodyDesc {
        this.sleeping = sleeping;
        return this;
    }

    /**
     * Sets whether Continuous Collision Detection (CCD) is enabled for this rigid-body.
     *
     * @param enabled - true if the rigid-body has CCD enabled.
     */
    public setCcdEnabled(enabled: boolean): RigidBodyDesc {
        this.ccdEnabled = enabled;
        return this;
    }

    /**
     * Sets the user-defined object of this rigid-body.
     *
     * @param userData - The user-defined object to set.
     */
    public setUserData(data?: unknown): RigidBodyDesc {
        this.userData = data;
        return this;
    }
}

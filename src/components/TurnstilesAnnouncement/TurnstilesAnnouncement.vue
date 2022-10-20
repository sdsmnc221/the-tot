<template>
  <div class="turnstiles-announcement" ref="container">
    <img
      class="img-crowd"
      ref="crowd"
      alt=""
      :src="`${$store.state.publicPath}images/crowd.png`"
      rel="preload"
    />
    <img
      class="img-tursntiles"
      ref="turnstiles"
      alt=""
      :src="`${$store.state.publicPath}images/turnstiles-${$i18n.locale}.png`"
      rel="preload"
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 750 1337.07"
      class="svg-ticketslot"
    >
      <defs>
        <clipPath id="a">
          <path style="fill: none" d="M0 0h750v1334H0z" />
        </clipPath>
      </defs>
      <g style="clip-path: url(#a)" ref="ticketSlot">
        <path
          style="fill: #bbb8e3; fill-rule: evenodd"
          d="m481.49 814.22 1.74 34.49h85.67l2.92-34.49h-90.33z"
        />
      </g>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1167.03 1337.07"
      class="svg"
    >
      <defs>
        <linearGradient
          id="d"
          x1="622.58"
          y1="908.9"
          x2="622.58"
          y2="873.59"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#7c0037" />
          <stop offset="1" stop-color="#b3bfec" />
        </linearGradient>
        <radialGradient
          id="e"
          cx="93.79"
          cy="1310.8"
          fx="93.79"
          fy="1310.8"
          r="430.7"
          gradientTransform="translate(0 -348.73) scale(1 .96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#402743" />
          <stop offset=".99" stop-color="#2a1032" />
        </radialGradient>
        <linearGradient
          id="f"
          x1="13.35"
          y1="620.5"
          x2="391.64"
          y2="620.5"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#503953" />
          <stop offset=".99" stop-color="#452e4c" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="364.29"
          y1="1141.02"
          x2="364.29"
          y2="934.31"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#6e5f85" />
          <stop offset="1" stop-color="#3f1f49" />
        </linearGradient>
        <radialGradient
          id="h"
          cx="296.02"
          cy="1306.04"
          fx="296.02"
          fy="1306.04"
          r="84.74"
          xlink:href="#e"
        />
        <linearGradient
          id="i"
          x1="470.43"
          y1="911.15"
          x2="470.43"
          y2="876"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#8a6991" />
          <stop offset="1" stop-color="#bbb8e3" />
        </linearGradient>
        <linearGradient
          id="j"
          x1="374.62"
          y1="1199.26"
          x2="374.62"
          y2="948.38"
          gradientTransform="translate(6.31 -45.05) rotate(6.72)"
          xlink:href="#g"
        />
        <linearGradient
          id="k"
          x1="509.75"
          y1="909.57"
          x2="509.75"
          y2="903.47"
          xlink:href="#i"
        />
        <linearGradient
          id="l"
          x1="380.87"
          y1="1122.15"
          x2="380.87"
          y2="980.92"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#bbb8e3" />
          <stop offset="1" stop-color="#8a6991" />
        </linearGradient>
        <linearGradient
          id="m"
          x1="259.82"
          y1="1129.56"
          x2="259.82"
          y2="1024.8"
          xlink:href="#l"
        />
        <linearGradient
          id="n"
          x1="234.76"
          y1="1165.51"
          x2="234.76"
          y2="1131.92"
          xlink:href="#i"
        />
        <linearGradient
          id="o"
          x1="334.57"
          y1="897.75"
          x2="375.81"
          y2="897.75"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#541d37" />
          <stop offset="1" stop-color="#a498c9" />
        </linearGradient>
        <linearGradient
          id="p"
          x1="269.06"
          y1="903.47"
          x2="315.11"
          y2="903.47"
          xlink:href="#i"
        />
        <linearGradient
          id="q"
          x1="164.81"
          y1="696.16"
          x2="164.81"
          y2="512.58"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#503953" />
          <stop offset=".99" stop-color="#614d67" />
        </linearGradient>
        <radialGradient
          id="r"
          cx="98.57"
          cy="2698.91"
          fx="98.57"
          fy="2698.91"
          r="46.01"
          gradientTransform="translate(0 -1414.83) scale(1 .83)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#bbb8e3" />
          <stop offset="1" stop-color="#8a6991" />
        </radialGradient>
        <linearGradient
          id="s"
          x1="31.56"
          y1="1313.27"
          x2="31.56"
          y2="1262.08"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ee4887" />
          <stop offset="1" stop-color="#f48eb0" />
        </linearGradient>
        <linearGradient id="t" x1="97.22" x2="97.22" xlink:href="#s" />
        <linearGradient id="u" x1="156.06" x2="156.06" xlink:href="#s" />
        <radialGradient
          id="v"
          cx="170.22"
          cy="921.08"
          fx="170.22"
          fy="921.08"
          r="43.21"
          gradientTransform="translate(-133.1 31.24) scale(1.42 .8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#7e0000" />
          <stop offset=".28" stop-color="#540000" />
          <stop offset=".6" stop-color="#260000" />
          <stop offset=".85" stop-color="#0a0000" />
          <stop offset=".99" stop-color="#000" />
        </radialGradient>
        <radialGradient
          id="w"
          cx="654.53"
          fx="654.53"
          r="430.7"
          xlink:href="#e"
        />
        <linearGradient id="x" x1="574.09" x2="952.38" xlink:href="#f" />
        <linearGradient id="y" x1="925.03" x2="925.03" xlink:href="#g" />
        <radialGradient
          id="a`"
          cx="856.76"
          cy="1306.04"
          fx="856.76"
          fy="1306.04"
          r="84.74"
          xlink:href="#e"
        />
        <linearGradient id="aa" x1="1031.17" x2="1031.17" xlink:href="#i" />
        <linearGradient
          id="ab"
          x1="931.52"
          y1="1133.65"
          x2="931.52"
          y2="882.77"
          gradientTransform="translate(6.31 -45.05) rotate(6.72)"
          xlink:href="#g"
        />
        <linearGradient
          id="ac"
          x1="1070.49"
          y1="909.57"
          x2="1070.49"
          y2="903.47"
          xlink:href="#i"
        />
        <linearGradient id="ad" x1="941.61" x2="941.61" xlink:href="#l" />
        <linearGradient
          id="ae"
          x1="820.56"
          y1="1129.56"
          x2="820.56"
          y2="1024.8"
          xlink:href="#l"
        />
        <linearGradient
          id="af"
          x1="795.5"
          y1="1165.51"
          x2="795.5"
          y2="1131.92"
          xlink:href="#i"
        />
        <linearGradient id="ag" x1="895.31" x2="936.55" xlink:href="#o" />
        <linearGradient
          id="ah"
          x1="829.8"
          y1="903.47"
          x2="875.85"
          y2="903.47"
          xlink:href="#i"
        />
        <linearGradient id="ai" x1="725.55" x2="725.55" xlink:href="#q" />
        <radialGradient id="aj" cx="659.31" fx="659.31" xlink:href="#r" />
        <linearGradient id="ak" x1="592.3" x2="592.3" xlink:href="#s" />
        <linearGradient id="al" x1="657.96" x2="657.96" xlink:href="#s" />
        <linearGradient id="am" x1="716.8" x2="716.8" xlink:href="#s" />
        <radialGradient
          id="an"
          cx="565.8"
          cy="922.09"
          fx="565.8"
          fy="922.09"
          r="43.21"
          gradientTransform="translate(-133.1 31.24) scale(1.42 .8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#00594e" />
          <stop offset=".06" stop-color="#005449" />
          <stop offset=".48" stop-color="#002621" />
          <stop offset=".81" stop-color="#000a09" />
          <stop offset=".99" stop-color="#000" />
        </radialGradient>
        <radialGradient
          id="ao"
          cx="477.6"
          cy="86.02"
          fx="477.6"
          fy="86.02"
          r="240.52"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e"
        />
        <radialGradient
          id="ap"
          cx="755.84"
          cy="5.12"
          fx="755.84"
          fy="5.12"
          r="45"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e"
        />
        <radialGradient
          id="aq"
          cx="451.16"
          cy="80.8"
          fx="451.16"
          fy="80.8"
          r="241.43"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e"
        />
        <radialGradient
          id="ar"
          cx="805.65"
          cy="212.36"
          fx="805.65"
          fy="212.36"
          r="98.55"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ad98bd" />
          <stop offset="1" stop-color="#716991" />
        </radialGradient>
        <radialGradient
          id="as"
          cx="829.41"
          cy="217.58"
          fx="829.41"
          fy="217.58"
          r="98.48"
          xlink:href="#ar"
        />
        <radialGradient
          id="at"
          cx="804.54"
          cy="222.04"
          fx="804.54"
          fy="222.04"
          r="45.94"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#e5d9e3" />
          <stop offset="1" stop-color="#a78eac" />
        </radialGradient>
        <radialGradient
          id="au"
          cx="497.87"
          cy="210.02"
          fx="497.87"
          fy="210.02"
          r="232.32"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#40555e" />
          <stop offset=".99" stop-color="#362b60" />
        </radialGradient>
        <radialGradient
          id="av"
          cx="761.47"
          cy="44.77"
          fx="761.47"
          fy="44.77"
          r="25.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e"
        />
        <radialGradient
          id="aw"
          cx="232.28"
          cy="48.89"
          fx="232.28"
          fy="48.89"
          r="25.85"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e"
        />
        <linearGradient
          id="ax"
          x1="189.78"
          y1="348.19"
          x2="800.77"
          y2="348.19"
          xlink:href="#g"
        />
        <radialGradient
          id="ay"
          cx="218.86"
          cy="8.96"
          fx="218.86"
          fy="8.96"
          r="38.26"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#e"
        />
        <linearGradient
          id="b`"
          x1="217.49"
          y1="352.85"
          x2="822.32"
          y2="352.85"
          xlink:href="#g"
        />
        <radialGradient
          id="ba"
          cx="500.14"
          cy="9700.77"
          fx="500.14"
          fy="9700.77"
          r="212.58"
          gradientTransform="translate(9.91 -4406.97) rotate(.13) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bb"
          cx="499.34"
          cy="9740.31"
          fx="499.34"
          fy="9740.31"
          r="212.13"
          gradientTransform="translate(9.96 -4406.97) rotate(.13) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bc"
          cx="498.54"
          cy="9779.87"
          fx="498.54"
          fy="9779.87"
          r="211.68"
          gradientTransform="translate(10 -4406.96) rotate(.13) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bd"
          cx="497.74"
          cy="9819.42"
          fx="497.74"
          fy="9819.42"
          r="211.24"
          gradientTransform="translate(20.07 -4408.03) rotate(.25) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="be"
          cx="496.93"
          cy="9858.98"
          fx="496.93"
          fy="9858.98"
          r="210.79"
          gradientTransform="translate(20.16 -4408.02) rotate(.25) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bf"
          cx="496.13"
          cy="9898.55"
          fx="496.13"
          fy="9898.55"
          r="210.34"
          gradientTransform="translate(19.22 -4407.91) rotate(.24) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bg"
          cx="495.32"
          cy="9938.12"
          fx="495.32"
          fy="9938.12"
          r="209.88"
          gradientTransform="translate(20.32 -4408.01) rotate(.25) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bh"
          cx="494.51"
          cy="9977.71"
          fx="494.51"
          fy="9977.71"
          r="209.43"
          gradientTransform="translate(20.4 -4408.01) rotate(.25) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bi"
          cx="493.69"
          cy="10017.29"
          fx="493.69"
          fy="10017.29"
          r="208.98"
          gradientTransform="translate(20.48 -4408.01) rotate(.25) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bj"
          cx="492.88"
          cy="10056.88"
          fx="492.88"
          fy="10056.88"
          r="208.52"
          gradientTransform="translate(20.56 -4408) rotate(.25) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bk"
          cx="492.06"
          cy="10096.48"
          fx="492.06"
          fy="10096.48"
          r="208.07"
          gradientTransform="translate(19.61 -4407.9) rotate(.24) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bl"
          cx="491.24"
          cy="10136.08"
          fx="491.24"
          fy="10136.08"
          r="207.61"
          gradientTransform="translate(19.69 -4407.89) rotate(.24) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bm"
          cx="490.42"
          cy="10175.69"
          fx="490.42"
          fy="10175.69"
          r="207.15"
          gradientTransform="translate(31.21 -4409.01) rotate(.38) scale(1 .46)"
          xlink:href="#at"
        />
        <radialGradient
          id="bn"
          cx="489.59"
          cy="10215.31"
          fx="489.59"
          fy="10215.31"
          r="206.69"
          gradientTransform="translate(30.28 -4408.91) rotate(.37) scale(1 .46)"
          xlink:href="#at"
        />
      </defs>
      <g class="ek" ref="announcement">
        <g id="a" />
        <g id="b">
          <g id="c">
            <g>
              <g>
                <g>
                  <g>
                    <polygon
                      class="dh"
                      points="833.22 79.3 822.8 81.84 654.45 330.78 210.3 349.78 812.78 350.96 833.22 79.3"
                    />
                    <polygon
                      class="ea"
                      points="699.66 10.25 752.69 17.91 812.45 17.91 818.82 14.08 819.28 0 699.66 10.25"
                    />
                    <polygon
                      class="dk"
                      points="699.66 10.25 692.41 0 819.28 0 814.86 8.16 699.66 10.25"
                    />
                    <polygon
                      class="ea"
                      points="172.24 14.08 222.33 21.74 293.22 21.74 299.6 17.91 272.73 3.83 172.24 14.08"
                    />
                    <polygon
                      class="cx"
                      points="182.42 81.3 189.78 345.96 788.27 345.73 808.71 74.08 182.42 81.3"
                    />
                    <polygon
                      class="d"
                      points="808.71 74.08 823.03 79 800.77 350.64 788.27 345.73 808.71 74.08"
                    />
                    <polygon
                      class="dd"
                      points="833.22 79.3 846.03 83.71 822.32 355.87 812.78 350.96 833.22 79.3"
                    />
                    <polygon
                      class="dq"
                      points="802.31 158.17 816.47 158.17 806.8 275.07 792.61 285.9 802.31 158.17"
                    />
                    <polygon
                      class="cc"
                      points="323.23 79.67 405.64 343.98 663.18 343.98 634.79 76.08 323.23 79.67"
                    />
                    <polygon
                      class="dn"
                      points="197.3 336.33 781.59 336.11 801.17 83.71 194.57 88.64 197.3 336.33"
                    />
                    <polygon
                      class="dp"
                      points="749.26 79.3 754.29 11.64 773.68 10.25 766.82 79.1 749.26 79.3"
                    />
                    <polygon
                      class="ea"
                      points="773.87 8.38 785.31 16.58 778.66 78.96 766.82 79.1 773.87 8.38"
                    />
                    <polygon
                      class="db"
                      points="224.3 83.71 221.14 16.05 243.42 14.08 241.86 83.5 224.3 83.71"
                    />
                    <polygon
                      class="ea"
                      points="243.45 12.79 252.16 20.98 250.79 83.4 241.86 83.5 243.45 12.79"
                    />
                    <polygon
                      class="dc"
                      points="189.78 345.96 210.3 349.78 800.77 350.64 788.27 345.73 189.78 345.96"
                    />
                    <polygon
                      class="cw"
                      points="172.24 14.08 164.98 3.83 272.73 3.83 268.63 8.95 172.24 14.08"
                    />
                    <polygon
                      class="cu"
                      points="822.32 355.87 229.83 353.6 217.49 349.83 812.78 350.96 822.32 355.87"
                    />
                  </g>
                  <g class="ec">
                    <rect
                      class="bu"
                      x="199.51"
                      y="95.13"
                      width="601.26"
                      height="1.54"
                      transform="translate(-.21 1.1) rotate(-.13)"
                    />
                    <rect
                      class="bx"
                      x="199.34"
                      y="113.48"
                      width="599.99"
                      height="1.54"
                      transform="translate(-.25 1.1) rotate(-.13)"
                    />
                    <rect
                      class="bw"
                      x="199.18"
                      y="131.84"
                      width="598.73"
                      height="1.54"
                      transform="translate(-.29 1.1) rotate(-.13)"
                    />
                    <rect
                      class="bs"
                      x="199.01"
                      y="150.19"
                      width="597.46"
                      height="1.54"
                      transform="translate(-.66 2.19) rotate(-.25)"
                    />
                    <rect
                      class="bo"
                      x="198.84"
                      y="168.55"
                      width="596.18"
                      height="1.54"
                      transform="translate(-.74 2.19) rotate(-.25)"
                    />
                    <rect
                      class="bq"
                      x="198.68"
                      y="186.92"
                      width="594.9"
                      height="1.54"
                      transform="translate(-.78 2.08) rotate(-.24)"
                    />
                    <rect
                      class="bp"
                      x="198.51"
                      y="205.28"
                      width="593.63"
                      height="1.54"
                      transform="translate(-.9 2.18) rotate(-.25)"
                    />
                    <rect
                      class="bv"
                      x="198.34"
                      y="223.65"
                      width="592.34"
                      height="1.54"
                      transform="translate(-.98 2.18) rotate(-.25)"
                    />
                    <rect
                      class="c"
                      x="198.16"
                      y="242.02"
                      width="591.06"
                      height="1.54"
                      transform="translate(-1.06 2.18) rotate(-.25)"
                    />
                    <rect
                      class="cb"
                      x="197.99"
                      y="260.39"
                      width="589.77"
                      height="1.54"
                      transform="translate(-1.15 2.17) rotate(-.25)"
                    />
                    <rect
                      class="ca"
                      x="197.82"
                      y="278.77"
                      width="588.48"
                      height="1.54"
                      transform="translate(-1.17 2.06) rotate(-.24)"
                    />
                    <rect
                      class="by"
                      x="197.65"
                      y="297.15"
                      width="587.19"
                      height="1.54"
                      transform="translate(-1.24 2.06) rotate(-.24)"
                    />
                    <rect
                      class="br"
                      x="197.47"
                      y="315.53"
                      width="585.89"
                      height="1.54"
                      transform="translate(-2.08 3.25) rotate(-.38)"
                    />
                    <rect
                      class="bt"
                      x="197.29"
                      y="333.91"
                      width="584.59"
                      height="1.54"
                      transform="translate(-2.13 3.13) rotate(-.37)"
                    />
                  </g>
                </g>
              </g>
              <text
                :class="`${
                  $i18n.locale === 'en' ? 'ed' : 'vn'
                } text-announcement`"
                transform="translate(222.46 180.34)"
              >
                <tspan class="el">
                  <tspan :x="$i18n.locale === 'en' ? 0 : 12" y="0">
                    {{ $t("scenes.turnstiles.announcement.p1") }}
                  </tspan>
                </tspan>
                <tspan class="ej middle">
                  <tspan
                    :x="$i18n.locale === 'en' ? 2.56 : 72"
                    :y="$i18n.locale === 'en' ? 48 : 54"
                  >
                    {{ $t("scenes.turnstiles.announcement.p2") }}
                  </tspan>
                </tspan>
                <tspan class="ej">
                  <tspan x="76.56" y="96">
                    {{ $t("scenes.turnstiles.announcement.p3") }}
                  </tspan>
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </svg>

    <hot-spot ref="hotspotTicket" @click="showScenePlatform" display-text />
  </div>
</template>

<script>
import { gsap } from "gsap";
import HotSpot from "@/components/HotSpot/HotSpot.vue";

export default {
  name: "TurnstilesAnnouncement",
  components: { HotSpot },
  data() {
    return {
      DOM: {},
    };
  },
  mounted() {
    this.setup();
  },
  methods: {
    setup() {
      this.DOM = {
        container: this.$refs.container,
        turnstiles: this.$refs.turnstiles,
        announcement: this.$refs.announcement,
        crowd: this.$refs.crowd,
        ticketSlot: this.$refs.ticketSlot,
        hpTicket: this.$refs.hotspotTicket.$el,
      };

      gsap.set(
        [
          this.DOM.turnstiles,
          this.DOM.crowd,
          this.DOM.announcement,
          this.DOM.ticketSlot,
        ],
        {
          transformOrigin: "50% 50%",
          opacity: 0,
        }
      );

      const { width, height, left, top } =
        this.DOM.ticketSlot.getBoundingClientRect();

      gsap
        .timeline()
        .addLabel("start", 0)
        .to(
          this.DOM.announcement,
          {
            y: 0,
            opacity: 1,
            startAt: { y: "-100vh", opacity: 0 },
            duration: 3.2,
            ease: "expo.inOut",
            onStart: () =>
              setTimeout(
                () =>
                  this.$store.commit("playSound", {
                    soundName: "platformCrowd",
                  }),
                1200
              ),
          },
          "start"
        )
        .to(
          this.DOM.turnstiles,
          {
            y: 0,
            opacity: 1,
            duration: 3.2,
            startAt: { y: "100vh", opacity: 1 },
            ease: "expo.inOut",
            delay: 0.6,
            onStart: () =>
              setTimeout(
                () =>
                  this.$store.commit("playSound", {
                    soundName: `attentionPlease${this.$i18n.locale}`,
                  }),
                3200
              ),
          },
          "start"
        )
        .to(
          this.DOM.crowd,
          {
            yPercent: -50,
            opacity: 0.64,
            duration: 2.8,
            ease: "expo.inOut",
            delay: 0.6,
            onStart: () =>
              setTimeout(
                () =>
                  this.$store.commit("playSound", {
                    soundName: `attentionPlease${this.$i18n.locale}`,
                  }),
                3200
              ),
          },
          "start"
        )
        .to(
          this.DOM.hpTicket,
          {
            opacity: 0.64,
            scale: 2.8,
            width: width + "px",
            height: height + "px",
            x: left - width / 2 + "px",
            y: top - height / 2 + "px",
            left: 0,
            top: 0,
            duration: 0.8,
            ease: "expo",
          },
          "start+=4.8"
        )
        .play();
    },
    showScenePlatform() {
      gsap
        .timeline({
          onComplete: () => {
            this.$store.commit("stopSound", {
              soundName: `platformCrowd`,
            });
            this.$store.commit("showPrompt", { path: "scenes-platform" });
          },
        })
        .addLabel("start", 0)
        .to(
          this.DOM.hpTicket,

          {
            opacity: 0,
            scale: 0,
            duration: 1.6,
            ease: "expo.inOut",
          },
          "start"
        )
        .to(
          this.DOM.turnstiles,
          {
            y: "100vh",
            opacity: 0,
            duration: 3.2,
            ease: "expo.inOut",
            delay: 0.6,
          },
          "start"
        )
        .to(
          this.DOM.crowd,
          {
            yPercent: -200,
            opacity: 0,
            duration: 2.8,
            ease: "expo.inOut",
            delay: 0.6,
          },
          "start"
        )
        .to(
          this.DOM.announcement,
          {
            opacity: 0,
            y: "-100vh",
            duration: 4.8,
            ease: "expo",
          },
          "start"
        )
        .play();
    },
  },
};
</script>

<style lang="scss" scoped>
.turnstiles-announcement {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../../assets/images/pre-release-scenes-bg.png");
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img-tursntiles {
    display: block;
    position: absolute;
    bottom: 0;
    left: -28vw;
    height: 56vh;
  }

  .img-crowd {
    transform: translate(-50%, -200%);
    width: 128vw;
    top: 35%;
    left: 55%;
    position: absolute;
    mix-blend-mode: multiply;
    opacity: 0.64;
    animation: hue-animation 3.2s linear both infinite;
  }

  .text-announcement {
    animation: blink-animation 1s steps(5, start) infinite;
  }

  .svg {
    display: block;
    width: 160vw;
    height: auto;
    left: -20vw;
    top: 0;
    position: absolute;
  }

  .svg-ticketslot {
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .bo {
    fill: url(#be);
  }
  .bp {
    fill: url(#bg);
  }
  .bq {
    fill: url(#bf);
  }
  .br {
    fill: url(#bm);
  }
  .bs {
    fill: url(#bd);
  }
  .bt {
    fill: url(#bn);
  }
  .bu {
    fill: url(#ba);
  }
  .bv {
    fill: url(#bh);
  }
  .bw {
    fill: url(#bc);
  }
  .bx {
    fill: url(#bb);
  }
  .by {
    fill: url(#bl);
  }
  .c {
    fill: url(#bi);
  }
  .ca {
    fill: url(#bk);
  }
  .cb {
    fill: url(#bj);
  }
  .cc,
  .cd,
  .ce,
  .cf,
  .cg,
  .ch,
  .ci,
  .cj,
  .ck,
  .cl,
  .cm,
  .cn,
  .co,
  .cp,
  .cq,
  .cr,
  .cs,
  .ct,
  .cu,
  .cv,
  .cw,
  .cx,
  .cy,
  .d,
  .da,
  .db,
  .dc,
  .dd,
  .de,
  .df,
  .dg,
  .dh,
  .di,
  .dj,
  .dk,
  .dl,
  .dm,
  .dn,
  .do,
  .dp,
  .dq,
  .dr,
  .ds,
  .dt,
  .du,
  .dv,
  .dw,
  .dx,
  .dy,
  .e,
  .ea,
  .eb {
    fill-rule: evenodd;
  }
  .cc,
  .dq,
  .ec,
  .eb {
    mix-blend-mode: soft-light;
  }
  .cc,
  .dt,
  .dv,
  .dw {
    opacity: 0.5;
  }
  .cc,
  .eb {
    fill: #fff;
  }
  .cd {
    fill: url(#u);
  }
  .ce {
    fill: url(#t);
  }
  .cf {
    fill: url(#e);
  }
  .cg {
    fill: url(#g);
  }
  .ch {
    fill: url(#f);
  }
  .ci {
    fill: url(#l);
  }
  .cj {
    fill: url(#n);
  }
  .ck {
    fill: url(#m);
  }
  .cl {
    fill: url(#h);
  }
  .cm {
    fill: url(#i);
  }
  .cn {
    fill: url(#j);
  }
  .co {
    fill: url(#q);
  }
  .cp {
    fill: url(#s);
  }
  .cq {
    fill: url(#r);
  }
  .cr {
    fill: url(#y);
  }
  .cs {
    fill: url(#x);
  }
  .ct {
    fill: url(#w);
  }
  .cu {
    fill: url(#b`);
  }
  .cv {
    fill: url(#a`);
  }
  .cw {
    fill: url(#ay);
  }
  .cx {
    fill: url(#aq);
  }
  .cy {
    fill: url(#al);
  }
  .d {
    fill: url(#ar);
  }
  .da {
    fill: url(#am);
  }
  .db {
    fill: url(#aw);
  }
  .dc {
    fill: url(#ax);
  }
  .dd {
    fill: url(#as);
  }
  .de {
    fill: url(#af);
  }
  .df {
    fill: url(#ai);
  }
  .dg {
    fill: url(#ad);
  }
  .dh {
    fill: url(#ao);
  }
  .di {
    fill: url(#aj);
  }
  .dj {
    fill: url(#ae);
  }
  .dk {
    fill: url(#ap);
  }
  .dl {
    fill: url(#aa);
  }
  .dm {
    fill: url(#ab);
  }
  .dn {
    fill: url(#au);
  }
  .do {
    fill: url(#ak);
  }
  .dp {
    fill: url(#av);
  }
  .dq {
    fill: url(#at);
  }
  .ed {
    fill: #ee4887;
    font-family: $font-silkscreen;
  }
  .vn {
    fill: #ee4887;
    font-family: $font-vt;
    text-transform: uppercase;

    .middle * {
      font-size: 56px;
    }
  }
  .dr {
    fill: url(#ac);
  }
  .dr,
  .ds,
  .du,
  .dx,
  .ee,
  .ef {
    mix-blend-mode: screen;
  }
  .ds {
    fill: url(#k);
  }
  .dt {
    fill: url(#ag);
  }
  .dt,
  .dv,
  .dw {
    mix-blend-mode: multiply;
  }
  .eg {
    fill: #ff0051;
  }
  .eh,
  .dy {
    fill: #0e0012;
  }
  .ei {
    fill: #6dff36;
  }
  .du {
    fill: url(#ah);
  }
  .du,
  .dx {
    opacity: 0.2;
  }
  .dv {
    fill: url(#o);
  }
  .dw {
    fill: url(#d);
  }
  .ej {
    font-size: 37px;
  }
  .dx {
    fill: url(#p);
  }
  .e {
    fill: #130617;
  }
  .ea {
    fill: #180b1c;
  }
  .ee {
    fill: url(#v);
  }
  .ef {
    fill: url(#an);
  }
  .ek {
    isolation: isolate;
  }
  .el {
    font-size: 45px;
  }
  .eb {
    opacity: 0.3;
  }
}
</style>

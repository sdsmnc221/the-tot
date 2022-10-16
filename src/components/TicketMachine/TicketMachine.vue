<template>
  <div class="ticket-machine" ref="container">
    <img
      class="img-tm"
      ref="imgTM"
      alt=""
      :src="`${$store.state.publicPath}images/ticket-machine.svg`"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 788.75 1135.41"
      v-if="$i18n.locale === 'en'"
      ref="ticketMachine"
    >
      <defs>
        <radialGradient
          id="e"
          cx="279.18"
          cy="302.9"
          fx="279.18"
          fy="302.9"
          r="579.59"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#e5d9e3" />
          <stop offset="1" stop-color="#a78eac" />
        </radialGradient>
        <linearGradient
          id="f"
          x1="647.76"
          y1="1135.41"
          x2="647.76"
          y2="0"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#6e5f85" />
          <stop offset="1" stop-color="#3f1f49" />
        </linearGradient>
        <radialGradient
          id="g"
          cx="223.21"
          cy="571.94"
          fx="223.21"
          fy="571.94"
          r="302.22"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#8b8dc2" />
          <stop offset="1" stop-color="#8a6991" />
        </radialGradient>
        <linearGradient
          id="h"
          x1="288.05"
          y1="235.77"
          x2="288.05"
          y2="99.32"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#a498c9" />
          <stop offset="1" stop-color="#541d37" />
        </linearGradient>
        <linearGradient
          id="i"
          x1="345.04"
          y1="595.57"
          x2="345.04"
          y2="229.65"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#bdbde3" />
          <stop offset="1" stop-color="#a78eac" />
        </linearGradient>
        <radialGradient
          id="j"
          cx="277.14"
          cy="483.12"
          fx="277.14"
          fy="483.12"
          r="204.52"
          xlink:href="#e"
        />
        <radialGradient
          id="k"
          cx="290.32"
          cy="478.41"
          fx="290.32"
          fy="478.41"
          r="191.39"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#402743" />
          <stop offset=".99" stop-color="#2a1032" />
        </radialGradient>
        <radialGradient
          id="l"
          cx="256.9"
          cy="743.08"
          fx="256.9"
          fy="743.08"
          r="98.78"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#e5d9e3" />
          <stop offset="1" stop-color="#b7a2bb" />
        </radialGradient>
        <radialGradient
          id="m"
          cx="252.52"
          cy="740.69"
          fx="252.52"
          fy="740.69"
          r="86.04"
          xlink:href="#g"
        />
        <linearGradient
          id="n"
          x1="138.85"
          y1="736.1"
          x2="366.65"
          y2="736.1"
          xlink:href="#h"
        />
        <radialGradient
          id="o"
          cx="254.59"
          cy="731.04"
          fx="254.59"
          fy="731.04"
          r="82.51"
          xlink:href="#g"
        />
        <radialGradient
          id="p"
          cx="386.01"
          cy="743.08"
          fx="386.01"
          fy="743.08"
          r="37.26"
          xlink:href="#g"
        />
        <linearGradient
          id="q"
          x1="147.14"
          y1="749.34"
          x2="404.88"
          y2="749.34"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#a498c9" />
          <stop offset="1" stop-color="#541d66" />
        </linearGradient>
        <linearGradient
          id="r"
          x1=".98"
          y1="1033.2"
          x2="512.3"
          y2="1033.2"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#3f1f49" />
          <stop offset="1" stop-color="#6e5f85" />
        </linearGradient>
        <linearGradient
          id="s"
          x1="243.8"
          y1="1110.36"
          x2="243.8"
          y2="1095.94"
          xlink:href="#f"
        />
        <linearGradient
          id="t"
          x1="684.03"
          y1="1135.41"
          x2="684.03"
          y2="458.57"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#7b3452" />
          <stop offset="1" stop-color="#000" />
        </linearGradient>
        <linearGradient
          id="u"
          x1="619.1"
          y1="773.69"
          x2="619.1"
          y2="0"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffc9c7" />
          <stop offset="1" stop-color="#600041" />
        </linearGradient>
        <linearGradient
          id="v"
          x1="124.15"
          y1="1297.3"
          x2="208.33"
          y2="1297.3"
          gradientTransform="translate(0 -2657.71) scale(1 2.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ee4887" />
          <stop offset="1" stop-color="#f48eb0" />
        </linearGradient>
        <radialGradient
          id="w"
          cx="226.13"
          cy="374.84"
          fx="226.13"
          fy="374.84"
          r="25.87"
          gradientTransform="translate(22.63 73.13) scale(.94 .96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ff884f" />
          <stop offset="1" stop-color="#ff2745" />
        </radialGradient>
        <radialGradient
          id="x"
          cx="207.31"
          cy="429.12"
          fx="207.31"
          fy="429.12"
          r="26.28"
          gradientTransform="translate(22.63 73.13) scale(.94 .96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffa6ff" />
          <stop offset="1" stop-color="#ec63f9" />
        </radialGradient>
        <radialGradient
          id="y"
          cx="287.7"
          cy="374.15"
          fx="287.7"
          fy="374.15"
          r="25.54"
          gradientTransform="translate(22.63 73.13) scale(.94 .96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#e5d9e3" />
          <stop offset="1" stop-color="#c1afc4" />
        </radialGradient>
        <radialGradient
          id="a`"
          cx="268.15"
          cy="507.03"
          fx="268.15"
          fy="507.03"
          r="47.78"
          gradientTransform="translate(-266.74 -163.38) scale(2.03 1.45)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f8a486" />
          <stop offset="1" stop-color="#ee4887" />
        </radialGradient>
        <radialGradient
          id="aa"
          cx="270.78"
          cy="428.95"
          fx="270.78"
          fy="428.95"
          r="25.95"
          xlink:href="#y"
        />
        <radialGradient
          id="ab"
          cx="351.01"
          cy="373.43"
          fx="351.01"
          fy="373.43"
          r="26.29"
          xlink:href="#y"
        />
        <radialGradient
          id="ac"
          cx="335.22"
          cy="428.77"
          fx="335.22"
          fy="428.77"
          r="26.21"
          xlink:href="#y"
        />
        <radialGradient
          id="ad"
          cx="414.1"
          fx="414.1"
          r="25.54"
          xlink:href="#y"
        />
        <radialGradient
          id="ae"
          cx="397.19"
          cy="428.95"
          fx="397.19"
          fy="428.95"
          r="25.95"
          xlink:href="#y"
        />
        <radialGradient
          id="af"
          cx="475.67"
          cy="373.45"
          fx="475.67"
          fy="373.45"
          r="25.22"
          xlink:href="#y"
        />
        <radialGradient
          id="ag"
          cx="460.66"
          cy="428.77"
          fx="460.66"
          fy="428.77"
          r="25.62"
          xlink:href="#y"
        />
        <linearGradient
          id="ah"
          x1="57.5"
          y1="567.77"
          x2="511.3"
          y2="567.77"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#2b2b3f" />
          <stop offset=".97" stop-color="#274472" />
          <stop offset="1" stop-color="#3d4057" />
        </linearGradient>
        <radialGradient
          id="ai"
          cx="262.25"
          cy="963.75"
          fx="262.25"
          fy="963.75"
          r="171.62"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff2e3" />
          <stop offset="1" stop-color="#ecc5c4" />
        </radialGradient>
        <linearGradient
          id="aj"
          x1="98.69"
          y1="1028.87"
          x2="98.69"
          y2="902.85"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#v"
        />
        <linearGradient
          id="ak"
          x1="295.15"
          y1="1031.14"
          x2="295.15"
          y2="982.54"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#v"
        />
        <linearGradient
          id="al"
          x1="370.82"
          y1="1029.9"
          x2="370.82"
          y2="981.11"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#v"
        />
        <linearGradient
          id="am"
          x1="439.32"
          y1="1028.07"
          x2="439.32"
          y2="981.11"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#v"
        />
        <radialGradient
          id="an"
          cx="287.55"
          cy="55.49"
          fx="287.55"
          fy="55.49"
          r="183.94"
          xlink:href="#k"
        />
        <radialGradient
          id="ao"
          cx="432.8"
          cy="285.54"
          fx="432.8"
          fy="285.54"
          r="57.74"
          xlink:href="#k"
        />
        <radialGradient
          id="ap"
          cx="249.61"
          cy="288.74"
          fx="249.61"
          fy="288.74"
          r="58.43"
          xlink:href="#k"
        />
        <radialGradient
          id="aq"
          cx="249.62"
          cy="311.99"
          fx="249.62"
          fy="311.99"
          r="53.18"
          xlink:href="#l"
        />
        <linearGradient
          id="ar"
          x1="193.62"
          y1="311.91"
          x2="304.03"
          y2="311.91"
          xlink:href="#f"
        />
        <radialGradient
          id="as"
          cx="420.54"
          cy="310.75"
          fx="420.54"
          fy="310.75"
          r="61.6"
          xlink:href="#l"
        />
        <linearGradient
          id="at"
          x1="376.8"
          y1="311.91"
          x2="487.21"
          y2="311.91"
          xlink:href="#f"
        />
        <radialGradient
          id="au"
          cx="358.83"
          cy="276.96"
          fx="358.83"
          fy="276.96"
          r="24.79"
          xlink:href="#k"
        />
        <radialGradient
          id="av"
          cx="345.73"
          cy="261.96"
          fx="345.73"
          fy="261.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="aw"
          cx="359.24"
          cy="261.96"
          fx="359.24"
          fy="261.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="ax"
          cx="371.93"
          cy="261.96"
          fx="371.93"
          fy="261.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="ay"
          cx="345.73"
          cy="276.96"
          fx="345.73"
          fy="276.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="b`"
          cx="359.24"
          cy="276.96"
          fx="359.24"
          fy="276.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="ba"
          cx="371.93"
          cy="276.96"
          fx="371.93"
          fy="276.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="bb"
          cx="345.73"
          cy="291.95"
          fx="345.73"
          fy="291.95"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="bc"
          cx="359.24"
          cy="291.95"
          fx="359.24"
          fy="291.95"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="bd"
          cx="371.93"
          cy="291.95"
          fx="371.93"
          fy="291.95"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <linearGradient
          id="be"
          x1="40.29"
          y1="240.81"
          x2="535.8"
          y2="240.81"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#541d5e" />
          <stop offset="1" stop-color="#8e83c9" />
        </linearGradient>
        <radialGradient
          id="bf"
          cx="256.62"
          cy="-796.98"
          fx="256.62"
          fy="-796.98"
          r="83.91"
          gradientTransform="translate(-44.19 956.71) scale(1.24 .5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#ff6100" />
          <stop offset=".08" stop-color="#e45700" />
          <stop offset=".22" stop-color="#a84000" />
          <stop offset=".37" stop-color="#752c00" />
          <stop offset=".51" stop-color="#4b1c00" />
          <stop offset=".64" stop-color="#2a1000" />
          <stop offset=".77" stop-color="#120700" />
          <stop offset=".89" stop-color="#040100" />
          <stop offset=".99" stop-color="#000" />
        </radialGradient>
        <radialGradient
          id="bg"
          cx="269.74"
          cy="-1046.57"
          fx="269.74"
          fy="-1046.57"
          r="83.91"
          gradientTransform="translate(-44.19 956.71) scale(1.24 .5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#5c464e" />
          <stop offset=".13" stop-color="#4a383f" />
          <stop offset=".37" stop-color="#2a2023" />
          <stop offset=".6" stop-color="#120e10" />
          <stop offset=".81" stop-color="#040304" />
          <stop offset=".99" stop-color="#000" />
        </radialGradient>
        <radialGradient
          id="bh"
          cx="169.68"
          cy="59.25"
          fx="169.68"
          fy="59.25"
          r="83.91"
          gradientTransform="translate(-44.19 411.19) scale(1.24 .8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#5c464e" />
          <stop offset=".05" stop-color="#ee4887" />
          <stop offset=".07" stop-color="#e44581" />
          <stop offset=".21" stop-color="#a8335f" />
          <stop offset=".36" stop-color="#752342" />
          <stop offset=".5" stop-color="#4b162a" />
          <stop offset=".64" stop-color="#2a0c18" />
          <stop offset=".77" stop-color="#12050a" />
          <stop offset=".89" stop-color="#040102" />
          <stop offset=".99" stop-color="#000" />
        </radialGradient>
        <radialGradient
          id="bi"
          cx="640.04"
          cy="583.2"
          fx="640.04"
          fy="583.2"
          r="196.48"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#c599ba" />
          <stop offset="1" stop-color="#8966a9" />
        </radialGradient>
        <linearGradient
          id="bj"
          x1="30.14"
          y1="836.54"
          x2="32.12"
          y2="836.54"
          xlink:href="#f"
        />
        <linearGradient
          id="bk"
          x1="485"
          y1="831.63"
          x2="507.76"
          y2="831.63"
          xlink:href="#f"
        />
      </defs>
      <g class="dx">
        <g id="a" />
        <g id="b">
          <g id="c">
            <g id="d">
              <g>
                <g class="text-special-code" ref="textSpecialCode">
                  <path
                    d="M164.47,581.6l.04-3.77,11.32,.11-.04,3.77-11.32-.11Zm11.36-3.67l.04-3.77-7.55-.07,.04-3.77-3.77-.04,.04-3.77,3.77,.04-.04,3.77,7.55,.07-.04,3.77,3.77,.04-.04,3.77-3.77-.04Zm-7.44-11.4l.04-3.77,11.32,.11-.04,3.77-11.32-.11Z"
                  />
                  <path
                    d="M184.87,581.79l.18-18.87,11.32,.11-.04,3.77,3.77,.04-.04,3.77-3.77-.04-.04,3.77-7.55-.07-.07,7.55-3.77-.04Zm3.88-11.29l7.4,.07,.04-3.77-7.4-.07-.04,3.77Z"
                  />
                  <path
                    d="M205.26,581.98l.18-18.87,11.32,.11-.04,3.77-7.55-.07-.04,3.77,7.55,.07-.04,3.77-7.55-.07-.04,3.77,7.55,.07-.04,3.77-11.32-.11Z"
                  />
                  <path
                    d="M225.63,582.17l.04-3.77-3.77-.04,.11-11.32,3.77,.04-.11,11.32,7.55,.07-.04,3.77-7.55-.07Zm7.66-11.25l.04-3.77-7.55-.07,.04-3.77,7.55,.07-.04,3.77,3.77,.04-.04,3.77-3.77-.04Zm-.07,7.55l.04-3.77,3.77,.04-.04,3.77-3.77-.04Z"
                  />
                  <path
                    d="M242.24,582.33l.18-18.87,3.77,.04-.18,18.87-3.77-.04Z"
                  />
                  <path
                    d="M251.32,582.42l.14-15.1,3.77,.04,.04-3.77,7.55,.07-.04,3.77,3.77,.04-.14,15.1-3.77-.04,.07-7.55-7.55-.07-.07,7.55-3.77-.04Zm3.88-11.29l7.55,.07,.03-3.62-7.55-.07-.03,3.62Z"
                  />
                  <path
                    d="M271.7,582.61l.18-18.87,3.77,.04-.14,15.1,7.55,.07-.04,3.77-11.32-.11Z"
                  />
                  <path
                    d="M304.91,582.92l.04-3.77-3.77-.04,.11-11.32,3.77,.04-.11,11.32,7.55,.07-.04,3.77-7.55-.07Zm7.66-11.25l.04-3.77-7.55-.07,.04-3.77,7.55,.07-.04,3.77,3.78,.04-.04,3.77-3.77-.04Zm-.07,7.55l.04-3.77,3.77,.04-.04,3.77-3.78-.04Z"
                  />
                  <path
                    d="M325.3,583.11l.04-3.77-3.77-.04,.11-11.32,3.77,.04,.04-3.77,7.55,.07-.04,3.77,3.78,.04-.11,11.32-3.78-.04-.04,3.77-7.55-.07Zm.04-3.93l7.55,.07,.1-11.02-7.55-.07-.1,11.02Z"
                  />
                  <path
                    d="M341.92,583.27l.18-18.87,11.33,.11-.04,3.77,3.78,.04-.11,11.32-3.78-.04-.04,3.77-11.33-.11Zm3.81-3.74l7.4,.07,.11-11.32-7.4-.07-.11,11.32Z"
                  />
                  <path
                    d="M362.3,583.46l.18-18.87,11.33,.11-.04,3.77-7.55-.07-.04,3.77,7.55,.07-.04,3.77-7.55-.07-.04,3.77,7.55,.07-.04,3.77-11.33-.11Z"
                  />
                </g>
                <g class="text-love" ref="textLove">
                  <path
                    class="dt"
                    d="M204.71,287.82v-18.75h3.75v15h7.5v3.75h-11.25Z"
                  />
                  <path
                    class="dt"
                    d="M227.21,287.82v-3.75h-3.75v-11.25h3.75v-3.75h7.5v3.75h3.75v11.25h-3.75v3.75h-7.5Zm0-3.9h7.5v-10.95h-7.5v10.95Z"
                  />
                  <path
                    class="dt"
                    d="M253.46,287.82v-3.75h-3.75v-7.5h-3.75v-7.5h3.75v7.5h3.75v7.5h3.75v3.75h-3.75Zm3.75-3.75v-7.5h3.75v7.5h-3.75Zm3.75-7.5v-7.5h3.75v7.5h-3.75Z"
                  />
                  <path
                    class="dt"
                    d="M272.21,287.82v-18.75h11.25v3.75h-7.5v3.75h7.5v3.75h-7.5v3.75h7.5v3.75h-11.25Z"
                  />
                </g>
                <g class="text-trust" ref="textTrust">
                  <path
                    class="dt"
                    d="M402.58,286.82v-15h-3.75v-3.75h11.25v3.75h-3.75v15h-3.75Z"
                  />
                  <path
                    class="dt"
                    d="M416.83,286.82v-18.75h11.25v3.75h3.75v3.75h-3.75v7.5h3.75v3.75h-3.75v-3.75h-3.75v-3.75h-3.75v7.5h-3.75Zm3.75-11.25h7.35v-3.75h-7.35v3.75Z"
                  />
                  <path
                    class="dt"
                    d="M442.33,286.82v-3.75h-3.75v-15h3.75v15h7.5v3.75h-7.5Zm7.5-3.75v-15h3.75v15h-3.75Z"
                  />
                  <path
                    class="dt"
                    d="M471.58,283.07v-3.75h-7.5v-3.75h-3.75v-3.75h3.75v3.75h7.5v3.75h3.75v3.75h-3.75Zm-11.25,3.75v-3.75h11.25v3.75h-11.25Zm3.75-15v-3.75h11.25v3.75h-11.25Z"
                  />
                  <path
                    class="dt"
                    d="M485.83,286.82v-15h-3.75v-3.75h11.25v3.75h-3.75v15h-3.75Z"
                  />
                </g>
                <g class="text-claim-ticket" ref="textClaimTicket">
                  <path
                    class="dt"
                    d="M75.9,71.71l-.06-3.75-3.75,.06-.17-11.25,3.75-.06,.17,11.25,7.5-.12,.06,3.75-7.5,.12Zm7.33-11.36l-.06-3.75-7.5,.12-.06-3.75,7.5-.12,.06,3.75,3.75-.06,.06,3.75-3.75,.06Zm.12,7.5l-.06-3.75,3.75-.06,.06,3.75-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M94.65,71.42l-.29-18.75,3.75-.06,.23,15,7.5-.12,.06,3.75-11.25,.17Z"
                  />
                  <path
                    class="dt"
                    d="M113.41,71.13l-.23-15,3.75-.06-.06-3.75,7.5-.12,.06,3.75,3.75-.06,.23,15-3.75,.06-.12-7.5-7.5,.12,.12,7.5-3.75,.06Zm3.58-11.31l7.5-.12-.06-3.6-7.5,.12,.06,3.6Z"
                  />
                  <path
                    class="dt"
                    d="M135.89,70.79l-.29-18.75,3.75-.06,.29,18.75-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M147.15,70.61l-.29-18.75,3.75-.06,.06,3.75,3.75-.06,.06,3.75,3.75-.06,.06,3.75-3.75,.06-.06-3.75-3.75,.06,.17,11.25-3.75,.06Zm15-.23l-.17-11.25-3.75,.06-.06-3.75,3.75-.06-.06-3.75,3.75-.06,.29,18.75-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M195.9,69.86l-.17-11.25-3.75,.06-.06-3.75-3.75,.06-.06-3.75,3.75-.06,.06,3.75,3.75-.06,.06,3.75,3.75-.06,.17,11.25-3.75,.06Zm3.58-11.31l-.06-3.75,3.75-.06,.06,3.75-3.75,.06Zm3.69-3.81l-.06-3.75,3.75-.06,.06,3.75-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M218.4,69.51l-.06-3.75-3.75,.06-.17-11.25,3.75-.06-.06-3.75,7.5-.12,.06,3.75,3.75-.06,.17,11.25-3.75,.06,.06,3.75-7.5,.12Zm-.06-3.9l7.5-.12-.17-10.95-7.5,.12,.17,10.95Z"
                  />
                  <path
                    class="dt"
                    d="M240.91,69.17l-.06-3.75-3.75,.06-.23-15,3.75-.06,.23,15,7.5-.12,.06,3.75-7.5,.12Zm7.44-3.87l-.23-15,3.75-.06,.23,15-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M259.67,68.88l-.29-18.75,11.25-.17,.06,3.75,3.75-.06,.06,3.75-3.75,.06,.12,7.5,3.75-.06,.06,3.75-3.75,.06-.06-3.75-3.75,.06-.06-3.75-3.75,.06,.12,7.5-3.75,.06Zm3.58-11.31l7.35-.11-.06-3.75-7.35,.11,.06,3.75Z"
                  />
                  <path
                    class="dt"
                    d="M297.16,68.3l-.29-18.75,11.25-.17,.06,3.75-7.5,.12,.06,3.75,7.5-.12,.06,3.75-7.5,.12,.12,7.5-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M315.91,68.01l-.29-18.75,11.25-.17,.06,3.75,3.75-.06,.06,3.75-3.75,.06,.12,7.5,3.75-.06,.06,3.75-3.75,.06-.06-3.75-3.75,.06-.06-3.75-3.75,.06,.12,7.5-3.75,.06Zm3.58-11.31l7.35-.11-.06-3.75-7.35,.11,.06,3.75Z"
                  />
                  <path
                    class="dt"
                    d="M338.42,67.66l-.29-18.75,11.25-.17,.06,3.75-7.5,.12,.06,3.75,7.5-.12,.06,3.75-7.5,.12,.06,3.75,7.5-.12,.06,3.75-11.25,.17Z"
                  />
                  <path
                    class="dt"
                    d="M357.15,67.38l-.29-18.75,11.25-.17,.06,3.75-7.5,.12,.06,3.75,7.5-.12,.06,3.75-7.5,.12,.06,3.75,7.5-.12,.06,3.75-11.25,.17Z"
                  />
                  <path
                    class="dt"
                    d="M394.66,66.8l-.23-15-3.75,.06-.06-3.75,11.25-.17,.06,3.75-3.75,.06,.23,15-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M409.67,66.57l-.29-18.75,3.75-.06,.29,18.75-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M424.67,66.33l-.06-3.75-3.75,.06-.17-11.25,3.75-.06,.17,11.25,7.5-.12,.06,3.75-7.5,.12Zm7.33-11.36l-.06-3.75-7.5,.12-.06-3.75,7.5-.12,.06,3.75,3.75-.06,.06,3.75-3.75,.06Zm.12,7.5l-.06-3.75,3.75-.06,.06,3.75-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M443.43,66.04l-.29-18.75,3.75-.06,.12,7.5,3.75-.06,.06,3.75,3.75-.06,.06,3.75,3.75-.06,.06,3.75-3.75,.06-.06-3.75-3.75,.06-.06-3.75-3.75,.06,.12,7.5-3.75,.06Zm7.33-11.36l-.06-3.75,3.75-.06,.06,3.75-3.75,.06Zm3.69-3.81l-.06-3.75,3.75-.06,.06,3.75-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M465.91,65.7l-.29-18.75,11.25-.17,.06,3.75-7.5,.12,.06,3.75,7.5-.12,.06,3.75-7.5,.12,.06,3.75,7.5-.12,.06,3.75-11.25,.17Z"
                  />
                  <path
                    class="dt"
                    d="M488.41,65.35l-.23-15-3.75,.06-.06-3.75,11.25-.17,.06,3.75-3.75,.06,.23,15-3.75,.06Z"
                  />
                  <path
                    class="dt"
                    d="M503.3,57.62l-.17-11.25,3.75-.06,.17,11.25-3.75,.06Zm.12,7.5l-.06-3.75,3.75-.06,.06,3.75-3.75,.06Z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 788.75 1135.41"
      ref="ticketMachine"
      v-else
    >
      <defs>
        <radialGradient
          id="e"
          cx="279.18"
          cy="302.9"
          fx="279.18"
          fy="302.9"
          r="579.59"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#e5d9e3" />
          <stop offset="1" stop-color="#a78eac" />
        </radialGradient>
        <linearGradient
          id="f"
          x1="647.76"
          y1="1135.41"
          x2="647.76"
          y2="0"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#6e5f85" />
          <stop offset="1" stop-color="#3f1f49" />
        </linearGradient>
        <radialGradient
          id="g"
          cx="223.21"
          cy="571.94"
          fx="223.21"
          fy="571.94"
          r="302.22"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#8b8dc2" />
          <stop offset="1" stop-color="#8a6991" />
        </radialGradient>
        <linearGradient
          id="h"
          x1="288.05"
          y1="235.77"
          x2="288.05"
          y2="99.32"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#a498c9" />
          <stop offset="1" stop-color="#541d37" />
        </linearGradient>
        <linearGradient
          id="i"
          x1="345.04"
          y1="595.57"
          x2="345.04"
          y2="229.65"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#bdbde3" />
          <stop offset="1" stop-color="#a78eac" />
        </linearGradient>
        <radialGradient
          id="j"
          cx="277.14"
          cy="483.12"
          fx="277.14"
          fy="483.12"
          r="204.52"
          xlink:href="#e"
        />
        <radialGradient
          id="k"
          cx="290.32"
          cy="478.41"
          fx="290.32"
          fy="478.41"
          r="191.39"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#402743" />
          <stop offset=".99" stop-color="#2a1032" />
        </radialGradient>
        <radialGradient
          id="l"
          cx="256.9"
          cy="743.08"
          fx="256.9"
          fy="743.08"
          r="98.78"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#e5d9e3" />
          <stop offset="1" stop-color="#b7a2bb" />
        </radialGradient>
        <radialGradient
          id="m"
          cx="252.52"
          cy="740.69"
          fx="252.52"
          fy="740.69"
          r="86.04"
          xlink:href="#g"
        />
        <linearGradient
          id="n"
          x1="138.85"
          y1="736.1"
          x2="366.65"
          y2="736.1"
          xlink:href="#h"
        />
        <radialGradient
          id="o"
          cx="254.59"
          cy="731.04"
          fx="254.59"
          fy="731.04"
          r="82.51"
          xlink:href="#g"
        />
        <radialGradient
          id="p"
          cx="386.01"
          cy="743.08"
          fx="386.01"
          fy="743.08"
          r="37.26"
          xlink:href="#g"
        />
        <linearGradient
          id="q"
          x1="147.14"
          y1="749.34"
          x2="404.88"
          y2="749.34"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#a498c9" />
          <stop offset="1" stop-color="#541d66" />
        </linearGradient>
        <linearGradient
          id="r"
          x1=".98"
          y1="1033.2"
          x2="512.3"
          y2="1033.2"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#3f1f49" />
          <stop offset="1" stop-color="#6e5f85" />
        </linearGradient>
        <linearGradient
          id="s"
          x1="243.8"
          y1="1110.36"
          x2="243.8"
          y2="1095.94"
          xlink:href="#f"
        />
        <linearGradient
          id="t"
          x1="684.03"
          y1="1135.41"
          x2="684.03"
          y2="458.57"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#7b3452" />
          <stop offset="1" stop-color="#000" />
        </linearGradient>
        <linearGradient
          id="u"
          x1="619.1"
          y1="773.69"
          x2="619.1"
          y2="0"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffc9c7" />
          <stop offset="1" stop-color="#600041" />
        </linearGradient>
        <linearGradient
          id="v"
          x1="124.15"
          y1="1297.3"
          x2="208.33"
          y2="1297.3"
          gradientTransform="translate(0 -2657.71) scale(1 2.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ee4887" />
          <stop offset="1" stop-color="#f48eb0" />
        </linearGradient>
        <radialGradient
          id="w"
          cx="226.13"
          cy="374.84"
          fx="226.13"
          fy="374.84"
          r="25.87"
          gradientTransform="translate(22.63 73.13) scale(.94 .96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ff884f" />
          <stop offset="1" stop-color="#ff2745" />
        </radialGradient>
        <radialGradient
          id="x"
          cx="207.31"
          cy="429.12"
          fx="207.31"
          fy="429.12"
          r="26.28"
          gradientTransform="translate(22.63 73.13) scale(.94 .96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffa6ff" />
          <stop offset="1" stop-color="#ec63f9" />
        </radialGradient>
        <radialGradient
          id="y"
          cx="287.7"
          cy="374.15"
          fx="287.7"
          fy="374.15"
          r="25.54"
          gradientTransform="translate(22.63 73.13) scale(.94 .96)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#e5d9e3" />
          <stop offset="1" stop-color="#c1afc4" />
        </radialGradient>
        <radialGradient
          id="a`"
          cx="268.15"
          cy="507.03"
          fx="268.15"
          fy="507.03"
          r="47.78"
          gradientTransform="translate(-266.74 -163.38) scale(2.03 1.45)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f8a486" />
          <stop offset="1" stop-color="#ee4887" />
        </radialGradient>
        <radialGradient
          id="aa"
          cx="270.78"
          cy="428.95"
          fx="270.78"
          fy="428.95"
          r="25.95"
          xlink:href="#y"
        />
        <radialGradient
          id="ab"
          cx="351.01"
          cy="373.43"
          fx="351.01"
          fy="373.43"
          r="26.29"
          xlink:href="#y"
        />
        <radialGradient
          id="ac"
          cx="335.22"
          cy="428.77"
          fx="335.22"
          fy="428.77"
          r="26.21"
          xlink:href="#y"
        />
        <radialGradient
          id="ad"
          cx="414.1"
          fx="414.1"
          r="25.54"
          xlink:href="#y"
        />
        <radialGradient
          id="ae"
          cx="397.19"
          cy="428.95"
          fx="397.19"
          fy="428.95"
          r="25.95"
          xlink:href="#y"
        />
        <radialGradient
          id="af"
          cx="475.67"
          cy="373.45"
          fx="475.67"
          fy="373.45"
          r="25.22"
          xlink:href="#y"
        />
        <radialGradient
          id="ag"
          cx="460.66"
          cy="428.77"
          fx="460.66"
          fy="428.77"
          r="25.62"
          xlink:href="#y"
        />
        <linearGradient
          id="ah"
          x1="57.5"
          y1="567.77"
          x2="511.3"
          y2="567.77"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#2b2b3f" />
          <stop offset=".97" stop-color="#274472" />
          <stop offset="1" stop-color="#3d4057" />
        </linearGradient>
        <radialGradient
          id="ai"
          cx="262.25"
          cy="963.75"
          fx="262.25"
          fy="963.75"
          r="171.62"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fff2e3" />
          <stop offset="1" stop-color="#ecc5c4" />
        </radialGradient>
        <linearGradient
          id="aj"
          x1="98.69"
          y1="1028.87"
          x2="98.69"
          y2="902.85"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#v"
        />
        <linearGradient
          id="ak"
          x1="295.15"
          y1="1031.14"
          x2="295.15"
          y2="982.54"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#v"
        />
        <linearGradient
          id="al"
          x1="370.82"
          y1="1029.9"
          x2="370.82"
          y2="981.11"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#v"
        />
        <linearGradient
          id="am"
          x1="439.32"
          y1="1028.07"
          x2="439.32"
          y2="981.11"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#v"
        />
        <radialGradient
          id="an"
          cx="287.55"
          cy="55.49"
          fx="287.55"
          fy="55.49"
          r="183.94"
          xlink:href="#k"
        />
        <radialGradient
          id="ao"
          cx="432.8"
          cy="285.54"
          fx="432.8"
          fy="285.54"
          r="57.74"
          xlink:href="#k"
        />
        <radialGradient
          id="ap"
          cx="249.61"
          cy="288.74"
          fx="249.61"
          fy="288.74"
          r="58.43"
          xlink:href="#k"
        />
        <radialGradient
          id="aq"
          cx="249.62"
          cy="311.99"
          fx="249.62"
          fy="311.99"
          r="53.18"
          xlink:href="#l"
        />
        <linearGradient
          id="ar"
          x1="193.62"
          y1="311.91"
          x2="304.03"
          y2="311.91"
          xlink:href="#f"
        />
        <radialGradient
          id="as"
          cx="420.54"
          cy="310.75"
          fx="420.54"
          fy="310.75"
          r="61.6"
          xlink:href="#l"
        />
        <linearGradient
          id="at"
          x1="376.8"
          y1="311.91"
          x2="487.21"
          y2="311.91"
          xlink:href="#f"
        />
        <radialGradient
          id="au"
          cx="358.83"
          cy="276.96"
          fx="358.83"
          fy="276.96"
          r="24.79"
          xlink:href="#k"
        />
        <radialGradient
          id="av"
          cx="345.73"
          cy="261.96"
          fx="345.73"
          fy="261.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="aw"
          cx="359.24"
          cy="261.96"
          fx="359.24"
          fy="261.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="ax"
          cx="371.93"
          cy="261.96"
          fx="371.93"
          fy="261.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="ay"
          cx="345.73"
          cy="276.96"
          fx="345.73"
          fy="276.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="b`"
          cx="359.24"
          cy="276.96"
          fx="359.24"
          fy="276.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="ba"
          cx="371.93"
          cy="276.96"
          fx="371.93"
          fy="276.96"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="bb"
          cx="345.73"
          cy="291.95"
          fx="345.73"
          fy="291.95"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="bc"
          cx="359.24"
          cy="291.95"
          fx="359.24"
          fy="291.95"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <radialGradient
          id="bd"
          cx="371.93"
          cy="291.95"
          fx="371.93"
          fy="291.95"
          r="4.9"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          xlink:href="#y"
        />
        <linearGradient
          id="be"
          x1="40.29"
          y1="240.81"
          x2="535.8"
          y2="240.81"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#541d5e" />
          <stop offset="1" stop-color="#8e83c9" />
        </linearGradient>
        <radialGradient
          id="bf"
          cx="256.62"
          cy="-796.98"
          fx="256.62"
          fy="-796.98"
          r="83.91"
          gradientTransform="translate(-44.19 956.71) scale(1.24 .5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#ff6100" />
          <stop offset=".08" stop-color="#e45700" />
          <stop offset=".22" stop-color="#a84000" />
          <stop offset=".37" stop-color="#752c00" />
          <stop offset=".51" stop-color="#4b1c00" />
          <stop offset=".64" stop-color="#2a1000" />
          <stop offset=".77" stop-color="#120700" />
          <stop offset=".89" stop-color="#040100" />
          <stop offset=".99" stop-color="#000" />
        </radialGradient>
        <radialGradient
          id="bg"
          cx="269.74"
          cy="-1046.57"
          fx="269.74"
          fy="-1046.57"
          r="83.91"
          gradientTransform="translate(-44.19 956.71) scale(1.24 .5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#5c464e" />
          <stop offset=".13" stop-color="#4a383f" />
          <stop offset=".37" stop-color="#2a2023" />
          <stop offset=".6" stop-color="#120e10" />
          <stop offset=".81" stop-color="#040304" />
          <stop offset=".99" stop-color="#000" />
        </radialGradient>
        <radialGradient
          id="bh"
          cx="169.68"
          cy="59.25"
          fx="169.68"
          fy="59.25"
          r="83.91"
          gradientTransform="translate(-44.19 411.19) scale(1.24 .8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stop-color="#5c464e" />
          <stop offset=".05" stop-color="#ee4887" />
          <stop offset=".07" stop-color="#e44581" />
          <stop offset=".21" stop-color="#a8335f" />
          <stop offset=".36" stop-color="#752342" />
          <stop offset=".5" stop-color="#4b162a" />
          <stop offset=".64" stop-color="#2a0c18" />
          <stop offset=".77" stop-color="#12050a" />
          <stop offset=".89" stop-color="#040102" />
          <stop offset=".99" stop-color="#000" />
        </radialGradient>
        <radialGradient
          id="bi"
          cx="640.04"
          cy="583.2"
          fx="640.04"
          fy="583.2"
          r="196.48"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#c599ba" />
          <stop offset="1" stop-color="#8966a9" />
        </radialGradient>
        <linearGradient
          id="bj"
          x1="30.14"
          y1="836.54"
          x2="32.12"
          y2="836.54"
          xlink:href="#f"
        />
        <linearGradient
          id="bk"
          x1="485"
          y1="831.63"
          x2="507.76"
          y2="831.63"
          xlink:href="#f"
        />
      </defs>
      <g class="dx">
        <g id="a" />
        <g id="b">
          <g id="c">
            <g id="d">
              <g class="text-special-code" ref="textSpecialCode">
                <path
                  d="M179.89,567.22c0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h-.99c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-.66c.08,.35,.12,.79,.12,1.31,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-1.98-.02c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h-.66c-.08-.38-.12-.82-.12-1.33,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h-.99c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l3.3,.03c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h.99c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32h.5c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32h.99c-.08-.37-.12-.81-.12-1.31,0-.53,.05-.97,.14-1.32h.5c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h.99c-.08-.37-.12-.81-.12-1.31,0-.53,.05-.97,.14-1.32l3.3,.03c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32Z"
                />
                <path
                  d="M193.19,579.23c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-5.28-.05c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h.99c-.08-.37-.12-.81-.12-1.31,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h.66c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h.99c-.08-.37-.12-.81-.12-1.31,0-.53,.05-.97,.14-1.32h.66c-.08-.37-.12-.81-.12-1.31,0-.53,.05-.97,.14-1.32l3.96,.04c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h.66c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32h.99c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32h.66c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h.99c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32Zm-10.36-21.22l1.98,.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-1.98-.02c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32Zm5.94,.06l2.64,.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-3.96-.04c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l3.96,.04c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32Zm.72,14.53c0-.53,.05-.97,.14-1.32h-.66c-.08-.38-.12-.82-.12-1.33,0-.53,.05-.97,.14-1.32l-1.98-.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-.66c.08,.35,.12,.79,.12,1.31,0,.51-.05,.95-.14,1.32l3.3,.03c-.08-.37-.12-.81-.12-1.32Zm3.9-14.48l-1.98-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l1.98,.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32Z"
                />
                <path
                  d="M220.45,572.88c0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-.99c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32l-1.65-.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-5.28-.05c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-1.65-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h-.99c-.08-.38-.12-.82-.12-1.33,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h.99c-.08-.37-.12-.81-.12-1.31,0-.53,.05-.97,.14-1.32l1.65,.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l5.28,.05c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l1.65,.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h.99c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32Zm-2.93,2.61c0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h-.99c-.08-.38-.12-.82-.12-1.33,0-.53,.05-.97,.14-1.32l-3.3-.03c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-.99c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h.99c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32l3.3,.03c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h.99c-.08-.37-.12-.81-.12-1.31Z"
                />
                <path
                  d="M233.89,566.41l-3.96-.04c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-3.96-.04c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l10.56,.1c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32Z"
                />
                <path
                  d="M247.4,569.18c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-1.32c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32l-6.6-.06c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l9.24,.09c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h1.32c.08,.37,.12,.81,.12,1.33,0,.51-.05,.95-.14,1.32Zm-2.78,1.29c0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-5.28-.05c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l5.28,.05c-.08-.37-.12-.81-.12-1.32Z"
                />
                <path
                  d="M274.54,573.39c0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-1.32c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32h-1.32c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32l-7.92-.07c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h1.32c-.08-.36-.12-.8-.12-1.31,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h-1.32c-.08-.39-.12-.83-.12-1.33,0-.53,.05-.97,.14-1.32h1.32c-.08-.36-.12-.8-.12-1.31,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h-1.32c-.08-.39-.12-.83-.12-1.33,0-.53,.05-.97,.14-1.32l7.92,.07c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h1.32c.08,.37,.12,.81,.12,1.33,0,.51-.05,.95-.14,1.32h1.32c.08,.37,.12,.81,.12,1.33,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32Zm-2.93,2.61c0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h-1.32c-.08-.39-.12-.83-.12-1.33,0-.53,.05-.97,.14-1.32l-2.64-.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h1.32c.08,.37,.12,.81,.12,1.33,0,.51-.05,.95-.14,1.32h-1.32c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l2.64,.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h1.32c-.08-.36-.12-.8-.12-1.31Z"
                />
                <path
                  d="M287.9,580.12c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-5.28-.05c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h.99c-.08-.37-.12-.81-.12-1.31,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h.66c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h.99c-.08-.37-.12-.81-.12-1.31,0-.53,.05-.97,.14-1.32h.66c-.08-.37-.12-.81-.12-1.31,0-.53,.05-.97,.14-1.32l3.96,.04c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h.66c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32h.99c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32h.66c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h.99c.08,.36,.12,.8,.12,1.33,0,.51-.05,.95-.14,1.32Zm-7.7-23.83c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l2.64,.02Zm5.25,2.69c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-5.28-.05c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l5.28,.05Zm-1.26,14.51c0-.53,.05-.97,.14-1.32h-.66c-.08-.38-.12-.82-.12-1.33,0-.53,.05-.97,.14-1.32l-1.98-.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-.66c.08,.35,.12,.79,.12,1.31,0,.51-.05,.95-.14,1.32l3.3,.03c-.08-.37-.12-.81-.12-1.32Zm-.31,11.88c.08,.35,.12,.79,.12,1.32,0,.51-.05,.94-.14,1.32l-2.64-.02c-.08-.38-.12-.82-.12-1.32,0-.53,.05-.97,.14-1.32l2.64,.02Zm4.23-29c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l2.64,.02Z"
                />
                <path
                  d="M301.46,577.61c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-1.32c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32l-6.6-.06c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h-1.32c-.08-.39-.12-.83-.12-1.33,0-.53,.05-.97,.14-1.32h-1.32c-.08-.39-.12-.83-.12-1.33,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32h1.32c-.08-.36-.12-.8-.12-1.31,0-.53,.05-.97,.14-1.32h1.32c-.08-.36-.12-.8-.12-1.31,0-.53,.05-.97,.14-1.32l6.6,.06c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h1.32c.08,.37,.12,.81,.12,1.33,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-3.96-.04c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-1.32c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h1.32c.08,.37,.12,.81,.12,1.33,0,.51-.05,.95-.14,1.32l3.96,.04c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l2.64,.02Z"
                />
                <path
                  d="M328.55,572.58h-1.32c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32h1.32c.08,.37,.12,.81,.12,1.33,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h-1.32c.08,.34,.12,.78,.12,1.31,0,.51-.05,.95-.14,1.32l-9.24-.09c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l9.24,.09c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32h1.32c.08,.37,.12,.81,.12,1.33,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32Zm-2.81,3.93c0-.53,.05-.97,.14-1.32l-5.28-.05c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l5.28,.05c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32Zm.05-5.28c0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-5.28-.05c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l5.28,.05c-.08-.37-.12-.81-.12-1.32Z"
                />
                <path
                  d="M340.04,580.61c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-6.6-.06c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l1.98,.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-1.98-.02c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l6.6,.06c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-1.98-.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l1.98,.02Z"
                />
                <path
                  d="M348.99,575.41c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l5.28,.05c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-7.92-.07c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l7.92,.07c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-5.28-.05c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l5.28,.05c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-5.28-.05Zm5.22-14.47c0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-1.98-.02c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l1.65,.02c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l3.96,.04c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l1.65,.02c.08,.35,.12,.79,.12,1.32Zm-2.68,25.06c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.38-.12-.82-.12-1.32,0-.53,.05-.97,.14-1.32l2.64,.02Z"
                />
                <path
                  d="M369.21,567.68l-3.96-.04c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32,.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32l-2.64-.02c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32-.08-.37-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l-3.96-.04c-.08-.38-.12-.81-.12-1.32,0-.53,.05-.97,.14-1.32l10.56,.1c.08,.35,.12,.79,.12,1.32,0,.51-.05,.95-.14,1.32Z"
                />
              </g>

              <g class="text-love" ref="textLove">
                <path
                  class="dt"
                  d="M206.88,273.42h-3.6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-3.6c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h9.6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2Z"
                />
                <path
                  class="dt"
                  d="M217.09,285.42c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-6c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h1.8c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.8c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-1.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.8Zm-5.4-19.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2Z"
                />
                <path
                  class="dt"
                  d="M231,274.62c0,.46-.04,.86-.12,1.2,.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.5c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-.9c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h3c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h.9c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h.9c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2Z"
                />
                <path
                  class="dt"
                  d="M243,274.62c0,.46-.04,.86-.12,1.2,.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-4.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h4.8c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2Z"
                />
                <path
                  class="dt"
                  d="M266.88,273.42c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2Z"
                />
                <path
                  class="dt"
                  d="M272.88,280.62c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h4.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-7.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h7.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-4.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h4.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-4.8Zm4.62-13.2c0,.46-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h1.5c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h3.6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.5c.08,.32,.12,.72,.12,1.2Z"
                />
                <path
                  class="dt"
                  d="M291,274.62c0,.46-.04,.86-.12,1.2,.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-7.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h4.8c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2Z"
                />
              </g>

              <g class="text-trust" ref="textTrust">
                <path
                  class="dt"
                  d="M411.63,273.62c0,.46-.04,.86-.12,1.2,.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.5c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-.9c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h3c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h.9c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h.9c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2Z"
                />
                <path
                  class="dt"
                  d="M420.96,284.42c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-6c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h1.8c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.8c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-1.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.8Z"
                />
                <path
                  class="dt"
                  d="M426.81,262.82h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2Zm1.2,16.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h4.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-7.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h7.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-4.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h4.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-4.8Zm-.6-14.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h3.6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.5c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h1.5Z"
                />
                <path
                  class="dt"
                  d="M445.38,273.62c0,.46-.04,.86-.12,1.2,.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-.9c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-.6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-1.8c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-.6c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-.9c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h3c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h.9c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h.45c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h.9c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h.45c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h.9c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h3c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2Z"
                />
                <path
                  class="dt"
                  d="M467.76,272.42h-3.6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-3.6c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h9.6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2Z"
                />
                <path
                  class="dt"
                  d="M477.21,284.42c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-6c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h1.8c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.8c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h6c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-1.8c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.8Z"
                />
                <path
                  class="dt"
                  d="M490.38,273.62c0,.46-.04,.86-.12,1.2,.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.5c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-.9c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h-1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h-2.4c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h3c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h.9c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h.9c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.2c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2h1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2c-.08-.34-.12-.74-.12-1.2s.04-.88,.12-1.2h2.4c.08,.32,.12,.72,.12,1.2s-.04,.86-.12,1.2c.08,.32,.12,.72,.12,1.2Z"
                />
              </g>

              <g class="text-claim-ticket" ref="textClaimTicket">
                <path
                  class="dt"
                  d="M116.19,79.49c0,.61-.04,1.15-.14,1.6l-11.2,.17c-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l3.2-.05c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l8-.12c.11,.43,.17,.96,.18,1.6Z"
                />
                <path
                  class="dt"
                  d="M140.14,75.92c0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.18-1.6,0-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6l-6.4,.1c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l1.2-.02c-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6h.8c-.11-.46-.18-1-.18-1.61-.01-.64,.03-1.17,.14-1.6l1.2-.02c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6h.8c-.11-.46-.17-1-.18-1.61,0-.64,.04-1.17,.14-1.6l4.8-.07c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6h.8c.11,.41,.17,.94,.18,1.58,0,.61-.04,1.15-.14,1.6l1.2-.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6h.8c.11,.41,.17,.95,.18,1.58,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l1.2-.02c.11,.43,.17,.96,.18,1.6Zm-11.28-20.63c-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6l2-.03c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l4.8-.07c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6l2-.03c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-2.4,.04c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05Zm6.46,14.3c0-.64,.04-1.17,.14-1.6h-.8c-.11-.44-.18-.97-.18-1.58,0-.64,.04-1.17,.14-1.6l-2.4,.04c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6h-.8c.11,.44,.17,.97,.19,1.61,0,.61-.04,1.15-.14,1.6l4-.06c-.11-.45-.17-.98-.18-1.6Zm5.79-24.09l-1.6,.02c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6l1.6-.02c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l3.2-.05c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6Z"
                />
                <path
                  class="dt"
                  d="M163.77,61.15c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6l-1.6,.02c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-1.6,.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-1.6,.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l-1.6,.02c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-1.6,.02c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l-1.6,.02c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l3.2-.05c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l1.6-.02c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6l3.2-.05c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l1.6-.02c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l3.2-.05c.11,.42,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6Z"
                />
                <path
                  class="dt"
                  d="M211.95,62.01c0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-1.2,.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-1.2,.02c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6h-.8c.11,.44,.17,.97,.18,1.61,0,.61-.04,1.15-.14,1.6l-1.6,.02c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l-1.6,.02c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6h-.8c-.11-.44-.18-.97-.18-1.58,0-.64,.04-1.17,.14-1.6l-1.2,.02c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l-1.2,.02c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l3.2-.05c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l1.2-.02c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6l1.2-.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l1.6-.02c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l1.2-.02c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l1.2-.02c-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6l3.2-.05c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6Z"
                />
                <path
                  class="dt"
                  d="M227.9,69.77c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l6.4-.1c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-9.6,.15c-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l9.6-.15c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-6.4,.1c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6l6.4-.1c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-6.4,.1Zm-.25-16c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l1.6-.02c-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6l3.2-.05c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-1.6,.02c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05Z"
                />
                <path
                  class="dt"
                  d="M283.94,60.9c0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.18-1.6,0-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6l-1.2,.02c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6h-.8c.11,.44,.17,.97,.18,1.61,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-2.4,.04c-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.14-1.6-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6h-.8c-.11-.44-.17-.97-.18-1.58,0-.64,.04-1.17,.14-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-1.2,.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l4-.06c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l1.2-.02c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6h.6c.11,.42,.17,.95,.18,1.59,0,.61-.04,1.15-.14,1.6l1.2-.02c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6h.6c-.11-.46-.18-.99-.18-1.61,0-.64,.04-1.17,.14-1.6l1.2-.02c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l4-.06c.11,.42,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.19,1.6Z"
                />
                <path
                  class="dt"
                  d="M305.61,74.97c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-8,.12c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l2.4-.04c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-2.4,.04c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l8-.12c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-2.4,.04c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l2.4-.04Z"
                />
                <path
                  class="dt"
                  d="M318.67,39.56l2.4-.04c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-2.4,.04c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6Zm5.24,28.72c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l6.4-.1c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-9.6,.15c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l9.6-.15c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-6.4,.1c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l6.4-.1c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-6.4,.1Zm5.89-17.69c0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l-2.4,.04c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6l2-.03c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l4.8-.07c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l2-.03c.11,.43,.17,.96,.19,1.6Zm-3.93-11.14l3.2-.05c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-4.8,.07c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-3.2,.05c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l4.8-.07c.11,.42,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6Zm5.6-.09l-2.4,.04c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l2.4-.04c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6Z"
                />
                <path
                  class="dt"
                  d="M355.94,59.79c0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-3.2,.05c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-2,.03c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-1.2,.02c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.13-1.6l-1.6,.02c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-1.6,.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-3.2,.05c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.03-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l4-.06c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l1.2-.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l1.2-.02c.11,.43,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6l1.6-.02c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l1.6-.02c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l3.2-.05c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6Z"
                />
                <path
                  class="dt"
                  d="M403.81,60.65c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-1.6,.02c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-8,.12c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-3.2,.05c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l11.2-.17c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l1.6-.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6Zm-3.33,1.65c0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6l-6.4,.1c.11,.42,.17,.96,.19,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l6.4-.1c-.11-.45-.17-.98-.18-1.6Z"
                />
                <path
                  class="dt"
                  d="M427.95,58.68c0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-3.2,.05c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-6.4,.1c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-3.2,.05c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.03-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l3.2-.05c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l6.4-.1c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l3.2-.05c.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6Z"
                />
                <path
                  class="dt"
                  d="M449.61,72.75c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-8,.12c-.11-.45-.18-.98-.19-1.6,0-.64,.04-1.17,.14-1.6l2.4-.04c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l-2.4,.04c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l8-.12c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-2.4,.04c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l2.4-.04Zm-5.94-22.31c-.11-.45-.18-.98-.18-1.6-.01-.64,.03-1.17,.13-1.6l1.6-.02c-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6l3.2-.05c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6l-1.6,.02c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05Z"
                />
                <path
                  class="dt"
                  d="M471.15,58.01c0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.42,.17,.96,.18,1.6,0,.61-.04,1.15-.13,1.6,.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6-.11-.45-.17-.98-.18-1.6,0-.64,.04-1.17,.14-1.6-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6l3.2-.05c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6,.11,.43,.17,.96,.18,1.6Zm.06,14.4c.11,.43,.17,.96,.18,1.6,0,.61-.04,1.15-.14,1.6l-3.2,.05c-.11-.45-.18-.98-.18-1.6,0-.64,.04-1.17,.13-1.6l3.2-.05Z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>

    <hot-spot ref="hotspotLove" @click="showPromptLove" />
    <hot-spot ref="hotspotTrust" @click="showPromptTrust" />
    <hot-spot ref="hotspotSpecialCode" @click="showPromptSpecialCode" />
    <hot-spot ref="hotspotTicket" @click="showSceneTicket" display-text />
  </div>
</template>

<script>
import { gsap } from "gsap";
import HotSpot from "@/components/HotSpot/HotSpot.vue";

export default {
  name: "TicketMachine",
  components: { HotSpot },
  data() {
    return {
      DOM: {},
    };
  },
  computed: {
    interactiveTexts() {
      return ["Love", "Trust", "SpecialCode"];
    },
  },
  mounted() {
    this.setup();
    this.$store.commit("playSound", { soundName: "tmEnter" });
  },
  methods: {
    setup() {
      this.DOM = {
        container: this.$refs.container,
        ticketMachine: this.$refs.ticketMachine,
        imgTicketMachine: this.$refs.imgTM,
        textClaimTicket: this.$refs.textClaimTicket,
        textLove: this.$refs.textLove,
        textTrust: this.$refs.textTrust,
        textSpecialCode: this.$refs.textSpecialCode,
        hpLove: this.$refs.hotspotLove.$el,
        hpTrust: this.$refs.hotspotTrust.$el,
        hpSpecialCode: this.$refs.hotspotSpecialCode.$el,
        hpTicket: this.$refs.hotspotTicket.$el,
      };

      gsap.set(this.DOM.ticketMachine, {
        transformOrigin: "50% 50%",
        scale: 1.2,
        bottom: "-32vh",
        x: "100vw",
        opacity: 0,
      });

      const { width, height } = this.DOM.ticketMachine.getBoundingClientRect();
      gsap.set(this.DOM.imgTicketMachine, {
        width: width + "px",
        height: height + "px",
        bottom: "-32vh",
        x: "100vw",
        transformOrigin: "50% 50%",
      });

      gsap
        .timeline({
          onComplete: () => {
            this.interactiveTexts.forEach((text) => {
              const { top, left, width } =
                this.DOM[`text${text}`].getBoundingClientRect();

              gsap.to(this.DOM[`hp${text}`], {
                x: left + width * 0.16 + "px",
                y: top - 4 + "px",
                opacity: 0.64,
                duration: 0.8,
                ease: "expo",
                onComplete: () =>
                  setTimeout(
                    () =>
                      this.$store.commit("showPrompt", {
                        path: "scenes-ticketMachine-instruction",
                      }),
                    1200
                  ),
              });
            });
          },
        })
        .addLabel("start", 0)
        .to(
          this.DOM.ticketMachine,
          {
            x: "18vw",
            opacity: 1,
            bottom: 0,
            duration: 3.2,
            ease: "expo.inOut",
          },
          "start"
        )
        .to(
          this.DOM.imgTicketMachine,
          {
            x: "8vw",
            y: "7vh",
            opacity: 1,
            bottom: 0,
            duration: 3.2,
            ease: "expo.inOut",
          },
          "start"
        )
        .play();
    },
    zoomIn() {
      gsap
        .timeline({
          onStart: () =>
            setTimeout(
              () => this.$store.commit("playSound", { soundName: "tmZoomIn" }),
              2400
            ),
        })
        .addLabel("start", 0)
        .to([this.DOM.hpLove, this.DOM.hpTrust, this.DOM.hpSpecialCode], {
          opacity: 0,
          visibility: "hidden",
          ease: "expo.inOut",
          duration: 1.6,
        })
        .to(
          this.DOM.imgTicketMachine,
          {
            x: "32vw",
            y: "-16vh",
            scale: 2,
            bottom: 0,
            duration: 3.6,
            ease: "expo.inOut",
          },
          "start+=0.8"
        )
        .to(
          this.DOM.ticketMachine,
          {
            scale: 2.4,
            duration: 3.6,
            x: "44vw",
            y: "-23vh",
            ease: "expo.inOut",
            onComplete: () =>
              this.$store.commit("playSound", { soundName: "tmTicket" }),
          },
          "start+=0.8"
        )
        .to(
          this.DOM.hpTicket,
          {
            opacity: 0.64,
            scale: 3.2,
            x: "45vw",
            y: "-30vh",
            bottom: 0,
            duration: 0.8,
            ease: "expo",
          },
          "start+=3.6"
        )
        .play();
    },
    showPromptLove() {
      this.$store.commit("showPrompt", {
        path: "scenes-ticketMachine-love",
      });
    },
    showPromptTrust() {
      this.$store.commit("showPrompt", {
        path: "scenes-ticketMachine-trust",
      });
    },
    showPromptSpecialCode() {
      this.$store.commit("showPrompt", {
        path: "scenes-ticketMachine-specialCode",
      });
    },
    showSceneTicket() {
      setTimeout(() => {
        this.$store.commit("showPrompt", { path: "scenes-ticketDownload" });
      }, 1200);
    },
  },
};
</script>

<style lang="scss" scoped>
.ticket-machine {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url("../../assets/images/pre-release-scenes-bg.png");
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  svg {
    position: absolute;
    width: 100%;
    height: 72%;

    .text-claim-ticket {
      animation: blink-animation 1s steps(5, start) infinite;
    }

    .text-love,
    .text-trust,
    .text-special-code {
      animation: highlight-animation 1.2s steps(5, start) infinite;
    }
  }

  .e {
    fill: #ee4887;
  }

  .img-tm {
    display: block;
    position: absolute;
  }

  .bl {
    fill: url(#ax);
  }
  .bm {
    fill: url(#aw);
  }
  .bn {
    fill: url(#ay);
  }
  .bo {
    fill: url(#av);
  }
  .bp {
    fill: url(#bd);
  }
  .bq {
    fill: url(#ba);
  }
  .br {
    fill: url(#bc);
  }
  .bs {
    fill: url(#bb);
  }
  .bt {
    fill: url(#b`);
  }
  .bu {
    fill: url(#bk);
  }
  .bv {
    fill: url(#bj);
  }
  .bw {
    fill: url(#v);
  }
  .bw,
  .bx,
  .by,
  .c,
  .ca,
  .cb,
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
  .dq {
    fill-rule: evenodd;
  }
  .bx {
    fill: url(#p);
  }
  .by {
    fill: url(#e);
  }
  .c {
    fill: url(#g);
  }
  .ca {
    fill: url(#f);
  }
  .cb {
    fill: url(#l);
  }
  .cc {
    fill: url(#m);
  }
  .cd {
    fill: url(#i);
  }
  .ce {
    fill: url(#j);
  }
  .cf {
    fill: url(#k);
  }
  .cg {
    fill: url(#o);
  }
  .ch {
    fill: url(#s);
  }
  .ci {
    fill: url(#r);
  }
  .cj {
    fill: url(#y);
  }
  .ck {
    fill: url(#x);
  }
  .cl {
    fill: url(#w);
  }
  .cm {
    fill: url(#bi);
  }
  .cn {
    fill: url(#a`);
  }
  .co {
    fill: url(#at);
  }
  .cp {
    fill: url(#ac);
  }
  .cq {
    fill: url(#an);
  }
  .cr {
    fill: url(#aq);
  }
  .cs {
    fill: url(#al);
  }
  .ct {
    fill: url(#ar);
  }
  .cu {
    fill: url(#am);
  }
  .cv {
    fill: url(#as);
  }
  .cw {
    fill: url(#ai);
  }
  .cx {
    fill: url(#ad);
  }
  .cy {
    fill: url(#ao);
  }
  .d {
    fill: url(#aj);
  }
  .da {
    fill: url(#ap);
  }
  .db {
    fill: url(#aa);
  }
  .dc {
    fill: url(#au);
  }
  .dd {
    fill: url(#ak);
  }
  .de {
    fill: url(#af);
  }
  .de,
  .df,
  .dg,
  .dh,
  .dr {
    mix-blend-mode: soft-light;
  }
  .df {
    fill: url(#ae);
  }
  .dg {
    fill: url(#ag);
  }
  .dh {
    fill: url(#ab);
  }
  .di {
    fill: url(#be);
    opacity: 0.8;
  }
  .di,
  .dj,
  .dk,
  .ds,
  .dm,
  .dn,
  .do,
  .dp {
    mix-blend-mode: multiply;
  }
  .dt {
    fill: #ee4887;
  }
  .dj,
  .dk,
  .ds,
  .dp {
    opacity: 0.99;
  }
  .dj,
  .ds {
    fill: #ecbdc4;
  }
  .dk {
    fill: #bdbdde;
  }
  .dl {
    fill: url(#ah);
    opacity: 0.71;
  }
  .dl,
  .dq,
  .du,
  .dv,
  .dw {
    mix-blend-mode: screen;
  }
  .dm {
    fill: url(#u);
  }
  .dm,
  .dq {
    opacity: 0.2;
  }
  .dn {
    fill: url(#q);
  }
  .dn,
  .do {
    opacity: 0.5;
  }
  .do {
    fill: url(#h);
  }
  .dp {
    fill: url(#n);
  }
  .dq {
    fill: url(#t);
  }
  .du {
    fill: url(#bf);
  }
  .dv {
    fill: url(#bg);
  }
  .dw {
    fill: url(#bh);
  }
  .dx {
    isolation: isolate;
  }
}
</style>

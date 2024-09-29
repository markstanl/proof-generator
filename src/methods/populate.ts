import head from '@/methods/head';
import style1populate from "@/methods/populate/style1populate";

import {Style1Props, Style2Props, Style3Props, Style4Props} from '@/types/styles';

type StylePopulate = {
    style: number,
    styleProps: Style1Props | Style2Props | Style3Props | Style4Props //the object containing all required props for an input
}

export default function populate(style1: StylePopulate, style2: StylePopulate | null): string {
    const styles_and_scripts = head();

    type StylePopulateFunction = (props: Style1Props | Style2Props) => string;

    const functionObject: { [key: number]: StylePopulateFunction } = {
        // add your function
        // NOTE THIS SHOULD DISPLAY A TYPE ERROR (unintentional) AS THE FUNCTION OBJECT IS NOT DEFINED
        1: style1populate
    }

    // another type error but it is still functional
    const structure_1 = functionObject[style1.style](style1.styleProps);
    const structure_2 = style2 ? functionObject[style2.style](style2.styleProps) : '';

    // two options, one that renders both pages if style2 is defined
    return style2 ? `<!DOCTYPE html>
<!-- saved from url=(0068)https://pages.cs.wisc.edu/~amitabha/uploads/Headline%20Schedule.html -->
<html lang="en" class="large">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Proof</title>

    <meta name="color-scheme" content="light only">
    <meta name="supported-color-schemes" content="light only">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium.ttf" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium-I.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium-B.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium-IB.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium-CB.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Roboto.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Roboto.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Roboto-M.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Roboto-C.tff" as="font">
    ${styles_and_scripts}
</head>

<body data-new-gr-c-s-check-loaded="14.1190.0" data-gr-ext-installed="">
<div class="table-container">
    <table width="100%">
        <tbody>
        <tr>
            <td align="center">
                <table class="page">
                    <tbody>
                    <tr>
                        <td class="page" id="page-1">
                            <table class="content">
                                <tbody >
                                <tr>
                                    <td>
                                        <table style="line-height: 16px; margin-top: 24px">
                                            <tbody>
                                            <tr>
                                                <td style="height: 9px">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td align="center" rowspan="2">
                                                    <img src="./Mast.png"
                                                         style="height: 72px; width: 608px; margin: 25px; margin-top: 0; margin-bottom: 0;">
                                                </td>
                                                <td style="height: 9px">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="padding-left: 40px;">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td class="mottoBox">
                                                                "News, by Students,<br>For the People."
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>

                                                <td align="right" style="padding-right: 40px;">

                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td class="weatherBox">
                                                                THE WEATHER
                                                                <div class="weatherText">Sunny today; A gentle breeze
                                                                    from the north. Highs around 80.
                                                                </div>
                                                                <div class="weatherConstant">
                                                                    <span style="font-size: 12pt; vertical-align: middle;">☞</span>
                                                                    <a href="https://www.metoffice.gov.uk/weather/forecast/dp8mrhjey">Full
                                                                        forecast by the Met Office.</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <hr class="doubleSep">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;No.&nbsp;&nbsp;1.</td>
                                                <td align="center">
                                                    <div style="word-spacing: 7px;">MADISON, WISCONSIN, WEDNESDAY, JULY
                                                        17, 2024.
                                                    </div>
                                                </td>
                                                <td align="right">FREE COPY&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <hr class="doubleSep">
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="columns" style="height: 1574px;">
                                            <tbody>
                                            <tr>
                                                ${structure_1}
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table class="page">
                    <tbody>
                    <tr>
                        <td class="page" id="page-2">
                            <table class="content">
                                <tbody>
                                <tr>
                                    <td>
                                        <table width="100%" style="margin-top: 25px;">
                                            <tbody>
                                            <tr>
                                                <td align="left" style="padding-left: .4in; width: 1in;"> 2
                                                </td>
                                                <td align="center">
                                                    <div style="word-spacing: 2pt; line-height: 16px;">THE WISCONSIN
                                                        MESSENGER, FRIDAY, JUNE 21, 2024.
                                                    </div>
                                                </td>
                                                <td align="right" style="padding-right: .4in; width: 1in;">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <hr class="doubleSep">
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="columns">
                                            <tbody>
                                            <tr>
                                                ${structure_2}
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>


</body>
</html>
`
        : `<!DOCTYPE html>
<!-- saved from url=(0068)https://pages.cs.wisc.edu/~amitabha/uploads/Headline%20Schedule.html -->
<html lang="en" class="large">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Proof</title>

    <meta name="color-scheme" content="light only">
    <meta name="supported-color-schemes" content="light only">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium.ttf" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium-I.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium-B.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium-IB.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Gentium-CB.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Roboto.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Roboto.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Roboto-M.tff" as="font">
    <link rel="preload" href="https://pages.cs.wisc.edu/~amitabha/uploads/Roboto-C.tff" as="font">
    ${styles_and_scripts}
</head>

<body data-new-gr-c-s-check-loaded="14.1190.0" data-gr-ext-installed="">
<div class="table-container">
    <table width="100%">
        <tbody>
        <tr>
            <td align="center">
                <table class="page">
                    <tbody>
                    <tr>
                        <td class="page" id="page-1">
                            <table class="content">
                                <tbody >
                                <tr>
                                    <td>
                                        <table style="line-height: 16px; margin-top: 24px">
                                            <tbody>
                                            <tr>
                                                <td style="height: 9px">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td align="center" rowspan="2">
                                                    <img src="./Mast.png"
                                                         style="height: 72px; width: 608px; margin: 25px; margin-top: 0; margin-bottom: 0;">
                                                </td>
                                                <td style="height: 9px">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="padding-left: 40px;">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td class="mottoBox">
                                                                "News, by Students,<br>For the People."
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>

                                                <td align="right" style="padding-right: 40px;">

                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td class="weatherBox">
                                                                THE WEATHER
                                                                <div class="weatherText">Sunny today; A gentle breeze
                                                                    from the north. Highs around 80.
                                                                </div>
                                                                <div class="weatherConstant">
                                                                    <span style="font-size: 12pt; vertical-align: middle;">☞</span>
                                                                    <a href="https://www.metoffice.gov.uk/weather/forecast/dp8mrhjey">Full
                                                                        forecast by the Met Office.</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <hr class="doubleSep">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="left">&nbsp;&nbsp;&nbsp;&nbsp;No.&nbsp;&nbsp;1.</td>
                                                <td align="center">
                                                    <div style="word-spacing: 7px;">MADISON, WISCONSIN, WEDNESDAY, JULY
                                                        17, 2024.
                                                    </div>
                                                </td>
                                                <td align="right">FREE COPY&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3">
                                                    <hr class="doubleSep">
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table class="columns" style="height: 1574px;">
                                            <tbody>
                                            <tr>
                                                ${structure_1}
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>


</body>
</html>
`

}
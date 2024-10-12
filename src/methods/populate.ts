import head from '@/methods/head';
import style1populate from "@/methods/populate/style1populate";
import style2populate from "@/methods/populate/style2populate";
import style3populate from "@/methods/populate/style3populate";
import style4populate from "@/methods/populate/style4populate";
import style5populate from "@/methods/populate/style5populate";
import style6populate from "@/methods/populate/style6populate";
import style7populate from "@/methods/populate/style7populate";
import style8populate from "@/methods/populate/style8populate";

import {Style1Props, Style2Props, Style3Props, Style4Props, Style5Props, Style6Props, Style7Props, Style8Props} from '@/types/styles';

type StylePopulate = {
    style: number,
    styleProps: Style1Props | Style2Props | Style3Props | Style4Props | Style5Props | Style6Props | Style7Props | Style8Props
}

// Create a union type of all possible style prop types
type AllStyleProps = Style1Props | Style2Props | Style3Props | Style4Props | Style5Props | Style6Props | Style7Props | Style8Props;

// Define a type for the function that checks if props are of a specific type
type StyleTypeGuard<T extends AllStyleProps> = (props: AllStyleProps) => props is T;

// Type guards for each style type
const isStyle1Props = (props: AllStyleProps): props is Style1Props => {
    return 'subtitle4' in props && 'subtitle5' in props;
};

const isStyle2Props = (props: AllStyleProps): props is Style2Props => {
    return 'subtitle1' in props && 'subtitle2' in props && 'subtitle3' in props;
};
const isStyle3Props = (props: AllStyleProps): props is Style3Props => {
    return true;
};

const isStyle4Props = (props: AllStyleProps): props is Style4Props => {
    return true;
};

const isStyle5Props = (props: AllStyleProps): props is Style5Props => {
    return true;
};

const isStyle6Props = (props: AllStyleProps): props is Style6Props => {
    return true;
};

const isStyle7Props = (props: AllStyleProps): props is Style7Props => {
    return true;
};

const isStyle8Props = (props: AllStyleProps): props is Style8Props => {
    return true;
};

export default function populate(style: string, styleProps: Style1Props | Style2Props | Style3Props | Style4Props | Style5Props | Style6Props | Style7Props | Style8Props): string {
    const styles_and_scripts = head();

    type StylePopulateFunction = {
        1: typeof style1populate;
        2: typeof style2populate;
        3: typeof style3populate;
        4: typeof style4populate;
        5: typeof style5populate;
        6: typeof style6populate;
        7: typeof style7populate;
        8: typeof style8populate;
    };

    const functionObject: StylePopulateFunction = {
        1: style1populate,
        2: style2populate,
        3: style3populate,
        4: style4populate,
        5: style5populate,
        6: style6populate,
        7: style7populate,
        8: style8populate
    };

    // Helper function to safely call the style populate functions
    const callStylePopulate = (styleNum: number, props: AllStyleProps): string => {
        switch (styleNum) {
            case 1:
                if (isStyle1Props(props)) return functionObject[1](props);
                throw new Error('Invalid props for style 1');
            case 2:
                if (isStyle2Props(props)) return functionObject[2](props);
                throw new Error('Invalid props for style 2');
            case 3:
                if (isStyle3Props(props)) return functionObject[3](props);
                throw new Error('Invalid props for style 3');
            case 4:
                if (isStyle4Props(props)) return functionObject[4](props);
                throw new Error('Invalid props for style 4');
            case 5:
                if (isStyle5Props(props)) return functionObject[5](props);
                throw new Error('Invalid props for style 5');
            case 6:
                if (isStyle6Props(props)) return functionObject[6](props);
                throw new Error('Invalid props for style 6');
            case 7:
                if (isStyle7Props(props)) return functionObject[7](props);
                throw new Error('Invalid props for style 7');
            case 8:
                if (isStyle8Props(props)) return functionObject[8](props);
                throw new Error('Invalid props for style 8');
            default:
                throw new Error(`Unsupported style number: ${styleNum}`);
        }
    };

    // Call the populate functions with type checking
    let styleN = Number(style) 
    const structure = callStylePopulate(styleN, styleProps);

    // Rest of your HTML template code remains the same
    return `<!DOCTYPE html>
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
                                                    ${structure}
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
    `    }
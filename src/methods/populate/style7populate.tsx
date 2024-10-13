import {Style7Props} from "@/types/styles";

//populate function for style 1
export default function style7populate(props: Style7Props): string {

    // COPY AND PASTED FROM THE POPULATE.PY FILE
    return `<td id="page-2-column-1">
<div class="news">
            <div class="dropLine" style="font-family: Gentium-CB; font-size: 42px; line-height: .9; text-transform: uppercase;">
                <div>${props.title[0]}</div>
                <div>${props.title[1]}</div>
            </div>
            <div class="sep"></div>
            <div class="pyramidDeck" style="font-family: Roboto-M; font-size: 16px; line-height: 21px;">
                <div style="letter-spacing: 2px;">${props.subtitle1[0]}</div>
                <div style="letter-spacing: 2px;">${props.subtitle1[1]}</div>
                <div>${props.subtitle1[2]}</div>
            </div>
            <div class="sep"></div>
            <div class="crossLineFlush" style="font-family: Roboto-M; font-size: 16px; line-height: 21px; text-transform: uppercase;">
                <div style="letter-spacing: 2px;">
                    ${props.subtitle2}
                </div>
            </div>
            <div class="sep"></div>
            <div class="pyramidDeck" style="font-family: Roboto-M; font-size: 15px; line-height: 21px;">
                <div style="letter-spacing: 2px;">${props.subtitle3[0]}</div>
                <div style="letter-spacing: 2px;">${props.subtitle3[1]}</div>
                <div>${props.subtitle3[2]}</div>
            </div>
            <div class="sep"></div>
            <p>${props.content}</p>
        </div>
</td>
        <td id="page-2-column-2"></td>
        <td id="page-2-column-3"></td>
        <td id="page-2-column-4"></td>
        <td id="page-2-column-5"></td>`
}
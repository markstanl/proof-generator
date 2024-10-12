import {Style5Props} from "@/types/styles";

//populate function for style 1
export default function style5populate(props: Style5Props): string {

    // COPY AND PASTED FROM THE POPULATE.PY FILE
    return `<td id="page-2-column-1">

    <div class="news FPT">
        <div class="dropLine" style="font-family: Gentium-B; font-style: oblique;  font-size: 25px; line-height: 21px; text-transform: uppercase;">
            <div>${props.title[0]}</div>
            <div>${props.title[1]}</div>
        </div>
        <div class="sep"></div>
        <div class="pyramidDeck" style="font-family: Gentium-B; font-style: oblique;  font-size: 18px; line-height: 21px;">
            <div style="letter-spacing: 2px;">${props.subtitle1[0]}</div>
            <div style="word-spacing: 10px;">${props.subtitle1[1]}</div>
            <div>${props.subtitle1[2]}</div>
            <div>${props.subtitle1[3]}</div>
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
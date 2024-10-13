import {Style8Props} from "@/types/styles";

//populate function for style 1
export default function style8populate(props: Style8Props): string {

    // COPY AND PASTED FROM THE POPULATE.PY FILE
    return `<td id="page-2-column-1">
<div class="news">
            <div class="dropLine" style="font-family: Gentium-CB; font-size: 42px; line-height: .9; text-transform: uppercase;">
                <div>${props.title[0]}</div>
                <div>${props.title[1]}</div>
            </div>
            <div class="sep"></div>
            <div class="crossLineCenter" style="font-family: Gentium-B; font-size: 10pt; line-height: 21px;">
                <div>${props.subtitle1} </div>
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
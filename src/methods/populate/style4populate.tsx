import {Style4Props} from "@/types/styles";

//populate function for style 3
export default function style3populate(props: Style4Props): string {

    // COPY AND PASTED FROM THE POPULATE.PY FILE
    return `<td id="page-2-column-1">
                <div class="news FPT">
                    <div class="dropLine" style="font-family: Gentium-IB; font-size: 19px; line-height: 21px;">
                        <div>${props.title[0]}</div>
                        <div>${props.title[1]}</div>
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
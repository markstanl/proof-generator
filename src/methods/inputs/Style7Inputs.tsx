import React from 'react'

import {Style7Props} from '@/types/styles';

interface Style7InputsProps {
    styleObject: Style7Props
    setStyleObject: (styleObject: Style7Props) => void
}

const Style7Inputs: React.FC<Style7InputsProps> = ({ styleObject, setStyleObject }) => {

    // Handlers to update values
    const updateTitle = (index: number, value: string) => {
        const newTitle = [...styleObject.title];
        newTitle[index] = value;
        setStyleObject({ ...styleObject, title: newTitle as [string, string] });
    };

    const updateSubtitle1 = (index: number, value: string) => {
        const newSubtitle1 = [...styleObject.subtitle1];
        newSubtitle1[index] = value;
        setStyleObject({ ...styleObject, subtitle1: newSubtitle1 as [string, string, string] });
    };

    const updateSubtitle2 = (value: string) => {
        setStyleObject({ ...styleObject, subtitle2: value });
    };

    const updateSubtitle3 = (index: number, value: string) => {
        const newSubtitle3 = [...styleObject.subtitle3];
        newSubtitle3[index] = value;
        setStyleObject({ ...styleObject, subtitle3: newSubtitle3 as [string, string, string] });
    };

    const updateContent = (value: string) => {
        setStyleObject({ ...styleObject, content: value });
    };

    return (
        <div>
            <div>Style 7 Inputs</div>
            <div>
                <input type="text" value={styleObject.title[0]}
                       onChange={(e) => updateTitle(0, e.target.value)} />
                <input type="text" value={styleObject.title[1]} onChange={(e) => updateTitle(1, e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.subtitle1[0]} onChange={(e) => updateSubtitle1(0, e.target.value)} />
                <input type="text" value={styleObject.subtitle1[1]} onChange={(e) => updateSubtitle1(1, e.target.value)} />
                <input type="text" value={styleObject.subtitle1[2]} onChange={(e) => updateSubtitle1(2, e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.subtitle2} onChange={(e) => updateSubtitle2(e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.subtitle3[0]} onChange={(e) => updateSubtitle3(0, e.target.value)} />
                <input type="text" value={styleObject.subtitle3[1]} onChange={(e) => updateSubtitle3(1, e.target.value)} />
                <input type="text" value={styleObject.subtitle3[2]} onChange={(e) => updateSubtitle3(2, e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.content} onChange={(e) => updateContent(e.target.value)} />
            </div>
        </div>
    );
}

export default Style7Inputs;

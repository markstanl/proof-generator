import React from 'react'

import {Style1Props} from '@/types/styles';

interface Style1InputsProps {
    styleObject: Style1Props
    setStyleObject: (styleObject: Style1Props) => void
}

const Style1Inputs: React.FC<Style1InputsProps> = ({ styleObject, setStyleObject }) => {

    // Handlers to update values
    const updateTitle = (index: number, value: string) => {
        const newTitle = [...styleObject.title];
        newTitle[index] = value;
        setStyleObject({ ...styleObject, title: newTitle as [string, string, string] });
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

    const updateSubtitle4 = (value: string) => {
        setStyleObject({ ...styleObject, subtitle4: value });
    };

    const updateSubtitle5 = (index: number, value: string) => {
        const newSubtitle5 = [...styleObject.subtitle5];
        newSubtitle5[index] = value;
        setStyleObject({ ...styleObject, subtitle5: newSubtitle5 as [string, string, string] });
    };

    const updateContent = (value: string) => {
        setStyleObject({ ...styleObject, content: value });
    };

    return (
        <div>
            <div>Style 1 Inputs</div>
            <div>
                <input type="text" value={styleObject.title[0]}
                       onChange={(e) => updateTitle(0, e.target.value)} />
                <input type="text" value={styleObject.title[1]} onChange={(e) => updateTitle(1, e.target.value)} />
                <input type="text" value={styleObject.title[2]} onChange={(e) => updateTitle(2, e.target.value)} />
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
                <input type="text" value={styleObject.subtitle4} onChange={(e) => updateSubtitle4(e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.subtitle5[0]} onChange={(e) => updateSubtitle5(0, e.target.value)} />
                <input type="text" value={styleObject.subtitle5[1]} onChange={(e) => updateSubtitle5(1, e.target.value)} />
                <input type="text" value={styleObject.subtitle5[2]} onChange={(e) => updateSubtitle5(2, e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.content} onChange={(e) => updateContent(e.target.value)} />
            </div>
        </div>
    );
}

export default Style1Inputs;

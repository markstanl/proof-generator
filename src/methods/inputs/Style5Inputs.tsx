import React from 'react'

import {Style5Props} from '@/types/styles';

interface Style5InputsProps {
    styleObject: Style5Props
    setStyleObject: (styleObject: Style5Props) => void
}

const Style5Inputs: React.FC<Style5InputsProps> = ({ styleObject, setStyleObject }) => {

    // Handlers to update values
    const updateTitle = (index: number, value: string) => {
        const newTitle = [...styleObject.title];
        newTitle[index] = value;
        setStyleObject({ ...styleObject, title: newTitle as [string, string] });
    };

    const updateSubtitle1 = (index: number, value: string) => {
        const newSubtitle1 = [...styleObject.subtitle1];
        newSubtitle1[index] = value;
        setStyleObject({ ...styleObject, subtitle1: newSubtitle1 as [string, string, string, string] });
    };

    const updateContent = (value: string) => {
        setStyleObject({ ...styleObject, content: value });
    };

    return (
        <div>
            <div>Style 5 Inputs</div>
            <div>
                <input type="text" value={styleObject.title[0]}
                       onChange={(e) => updateTitle(0, e.target.value)} />
                <input type="text" value={styleObject.title[1]} onChange={(e) => updateTitle(1, e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.subtitle1[0]} onChange={(e) => updateSubtitle1(0, e.target.value)} />
                <input type="text" value={styleObject.subtitle1[1]} onChange={(e) => updateSubtitle1(1, e.target.value)} />
                <input type="text" value={styleObject.subtitle1[2]} onChange={(e) => updateSubtitle1(2, e.target.value)} />
                <input type="text" value={styleObject.subtitle1[2]} onChange={(e) => updateSubtitle1(3, e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.content} onChange={(e) => updateContent(e.target.value)} />
            </div>
        </div>
    );
}

export default Style5Inputs;

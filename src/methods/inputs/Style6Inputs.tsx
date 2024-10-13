import React from 'react'

import {Style6Props} from '@/types/styles';

interface Style6InputsProps {
    styleObject: Style6Props
    setStyleObject: (styleObject: Style6Props) => void
}

const Style6Inputs: React.FC<Style6InputsProps> = ({ styleObject, setStyleObject }) => {

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

    const updateContent = (value: string) => {
        setStyleObject({ ...styleObject, content: value });
    };

    return (
        <div>
            <div>Style 6 Inputs</div>
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
                <input type="text" value={styleObject.content} onChange={(e) => updateContent(e.target.value)} />
            </div>
        </div>
    );
}

export default Style6Inputs;

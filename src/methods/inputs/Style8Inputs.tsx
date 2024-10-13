import React from 'react'

import {Style8Props} from '@/types/styles';

interface Style8InputsProps {
    styleObject: Style8Props
    setStyleObject: (styleObject: Style8Props) => void
}

const Style8Inputs: React.FC<Style8InputsProps> = ({ styleObject, setStyleObject }) => {

    // Handlers to update values
    const updateTitle = (index: number, value: string) => {
        const newTitle = [...styleObject.title];
        newTitle[index] = value;
        setStyleObject({ ...styleObject, title: newTitle as [string, string] });
    };

    const updateSubtitle1 = (value: string) => {
        setStyleObject({ ...styleObject, subtitle1: value });
    };

    const updateContent = (value: string) => {
        setStyleObject({ ...styleObject, content: value });
    };

    return (
        <div>
            <div>Style 8 Inputs</div>
            <div>
                <input type="text" value={styleObject.title[0]} onChange={(e) => updateTitle(0, e.target.value)} />
                <input type="text" value={styleObject.title[1]} onChange={(e) => updateTitle(1, e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.subtitle1[0]} onChange={(e) => updateSubtitle1(e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.content} onChange={(e) => updateContent(e.target.value)} />
            </div>
        </div>
    );
}

export default Style8Inputs;

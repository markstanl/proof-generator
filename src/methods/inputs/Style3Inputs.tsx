import React from 'react'

import {Style3Props} from '@/types/styles';

interface Style3InputsProps {
    styleObject: Style3Props
    setStyleObject: (styleObject: Style3Props) => void
}

const Style3Inputs: React.FC<Style3InputsProps> = ({ styleObject, setStyleObject }) => {

    // Handlers to update values
    const updateTitle = (index: number, value: string) => {
        const newTitle = [...styleObject.title];
        newTitle[index] = value;
        setStyleObject({ ...styleObject, title: newTitle as [string, string] });
    };

    const updateContent = (value: string) => {
        setStyleObject({ ...styleObject, content: value });
    };

    return (
        <div>
            <div>Style 3 Inputs</div>
            <div>
                <input type="text" value={styleObject.title[0]}
                       onChange={(e) => updateTitle(0, e.target.value)} />
                <input type="text" value={styleObject.title[1]} onChange={(e) => updateTitle(1, e.target.value)} />
            </div>
            <div>
                <input type="text" value={styleObject.content} onChange={(e) => updateContent(e.target.value)} />
            </div>
        </div>
    );
}

export default Style3Inputs;

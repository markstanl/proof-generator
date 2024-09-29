'use client'

import React, { useState } from 'react';

// types
import {Style1Props, Style2Props, Style3Props, Style4Props} from '@/types/styles';

// components
import IframeRenderer from '@/components/IframeRenderer';
import populate from "@/methods/populate";

// Inputs
import Style1Inputs from '@/methods/inputs/Style1Inputs';


export default function Home() {
    const [style, setStyle] = useState('1');

    // Initial state (populated style 1 props)
    const [styleProps, setStyleProps] = useState<Style1Props | Style2Props>({
        title: ['First Line Caps', 'Second Line Caps', 'Third Line Caps'],
        subtitle1: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
        subtitle2: 'Single Line Caps',
        subtitle3: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
        subtitle4: 'Single Line Caps',
        subtitle5: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
        content: 'Style 1: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
    });

    // Available styles list
    const styles: string[] = ['1', '2'];

    // Initialize the default values for each style type
    const getDefaultProps = (style: string): Style1Props | Style2Props => {
        switch (style) {
            case '1':
                return {
                    title: ['First Line Caps', 'Second Line Caps', 'Third Line Caps'],
                    subtitle1: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
                    subtitle2: 'Single Line Caps',
                    subtitle3: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
                    subtitle4: 'Single Line Caps',
                    subtitle5: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
                    content: 'Style 1: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
                } as Style1Props;
            case '2':
                return {
                    title: ['', '', ''],
                    subtitle1: ['', '', ''],
                    subtitle2: '',
                    subtitle3: ['', '', ''],
                    content: ''
                } as Style2Props;
            default:
                return {} as Style1Props;
        }
    };

    // Ensure props are populated correctly for selected style
    const populateText = (style: string, props: Style1Props | Style2Props | null) => {
        if (!props || !props.title) {
            console.warn("Props or title is undefined for style", style);
            return '';  // Prevent further processing
        }

        switch (style) {
            case '1':
                //the populate method returns a string of the populated html
                return populate({style: 1, styleProps: props as Style1Props }, null);
            case '2':
                return ''; // Placeholder for Style 2 population
            default:
                return '';
        }
    };


    return (
        <div className={'w-screen h-screen bg-blue-200 text-black'}>
            {/* Style Selector */}
            <select className={'text-black'} value={style} onChange={e => {
                const selectedStyle = e.target.value;
                setStyle(selectedStyle);
                setStyleProps(getDefaultProps(selectedStyle)); // Set default props for the selected style
            }}>
                {styles.map((style, index) => {
                    return <option key={index} value={style}>Style {style}</option>;
                })}
            </select>

            {/* Conditionally render the corresponding component based on selected style */}
            {style === '1' &&
                <Style1Inputs styleObject={styleProps as Style1Props} setStyleObject={setStyleProps} />
            }
            {style === '2' && <div>Style 2 Component</div>}

            {/* Render the populated text inside an iframe */}
            <IframeRenderer htmlContent={populateText(style, styleProps)} />
        </div>
    );
}

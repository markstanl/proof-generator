'use client'

import React, { useState } from 'react';

// types
import {Style1Props, Style2Props, Style3Props, Style4Props, Style5Props, Style6Props, Style7Props, Style8Props} from '@/types/styles';

// components
import IframeRenderer from '@/components/IframeRenderer';
import populate from "@/methods/populate";

// Inputs
import Style1Inputs from '@/methods/inputs/Style1Inputs';
import Style2Inputs from '@/methods/inputs/Style2Inputs';
import Style3Inputs from '@/methods/inputs/Style3Inputs';
import Style4Inputs from '@/methods/inputs/Style4Inputs';
import Style5Inputs from '@/methods/inputs/Style5Inputs';
import Style6Inputs from '@/methods/inputs/Style6Inputs';
import Style7Inputs from '@/methods/inputs/Style7Inputs';
import Style8Inputs from '@/methods/inputs/Style8Inputs';


export default function Home() {
    const [style, setStyle] = useState('1');

    // Initial state (populated style 1 props)
    const [styleProps, setStyleProps] = useState<Style1Props | Style2Props | Style3Props>({
        title: ['First Line Caps', 'Second Line Caps', 'Third Line Caps'],
        subtitle1: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
        subtitle2: 'Single Line Caps',
        subtitle3: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
        subtitle4: 'Single Line Caps',
        subtitle5: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
        content: 'Style 1: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
    });

    // Available styles list
    const styles: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

    // Initialize the default values for each style type
    const getDefaultProps = (style: string): Style1Props | Style2Props | Style3Props=> {
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
                    title: ['First Line Caps', 'Second Line Caps', 'Third Line Caps'],
                    subtitle1: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
                    subtitle2: 'Single Line Caps',
                    subtitle3: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
                    content: 'Style 2: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
                } as Style2Props;
            case '3':
                return {
                    title: ['First Line Caps', 'Second Line Caps'],
                    content: 'Style 3: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
                } as Style3Props;
            case '4':
                return {
                    title: ['First Line Caps', 'Second Line Caps'],
                    content: 'Style 4: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
                } as Style4Props;
                
            case '5':
                return {
                    title: ['First Line Caps', 'Second Line Caps'],
                    subtitle1: ['First Line Regular', 'Second Line Regular', 'Third Line Regular', 'Fourth Line Regular'],
                    content: 'Style 5: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
                } as Style5Props;
            case '6':
                return {
                    title: ['First Line Caps', 'Second Line Caps'],
                    subtitle1: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
                    content: 'Style 6: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
                } as Style6Props;
            case '7':
                return {
                    title: ['First Line Caps', 'Second Line Caps'],
                    subtitle1: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
                    subtitle2: 'Single Line Caps',
                    subtitle3: ['First Line Regular', 'Second Line Regular', 'Third Line Regular'],
                    content: 'Style 7: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
                } as Style7Props;
            case '8':
                return {
                    title: ['First Line Caps', 'Second Line Caps'],
                    subtitle1: 'Single Line Caps',
                    content: 'Style 8: Exclusively top of front page headline for articles that are over 1 column (extend to another page) and quite important.'
                } as Style8Props;

            default:
                return {} as Style1Props;
        }
    };

    // Ensure props are populated correctly for selected style
    const populateText = (style: string, props: Style1Props | Style2Props | Style3Props | Style4Props | Style5Props | Style6Props | Style7Props | Style8Props| null) => {
        if (!props || !props.title) {
            console.warn("Props or title is undefined for style", style);
            return '';  // Prevent further processing
        }

        switch (style) {
            case '1':
                //the populate method returns a string of the populated html
                return populate(style, props as Style1Props);
            case '2':
                return populate(style, props as Style2Props);
            case '3':
                return populate(style, props as Style3Props);
            case '4':
                return populate(style, props as Style4Props);
            case '5':
                return populate(style, props as Style5Props);
            case '6':
                return populate(style, props as Style6Props);
            case '7':
                return populate(style, props as Style7Props);
            case '8':
                return populate(style, props as Style8Props);
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
            {style === '2' && 
                <Style2Inputs styleObject={styleProps as Style2Props} setStyleObject={setStyleProps} />
            }
            {style === '3' && 
                <Style3Inputs styleObject={styleProps as Style3Props} setStyleObject={setStyleProps} />
            }
            {style === '4' && 
                <Style4Inputs styleObject={styleProps as Style4Props} setStyleObject={setStyleProps} />
            }
            {style === '5' && 
                <Style5Inputs styleObject={styleProps as Style5Props} setStyleObject={setStyleProps} />
            }
            {style === '6' && 
                <Style6Inputs styleObject={styleProps as Style6Props} setStyleObject={setStyleProps} />
            }
            {style === '7' && 
                <Style7Inputs styleObject={styleProps as Style7Props} setStyleObject={setStyleProps} />
            }
            {style === '8' && 
                <Style8Inputs styleObject={styleProps as Style8Props} setStyleObject={setStyleProps} />
            }

            {/* Render the populated text inside an iframe */}
            <IframeRenderer htmlContent={populateText(style, styleProps)} />
        </div>
    );
}

// src/styles.ts

// Style 1 Props
export type Style1Props = {
    title: [string, string, string],
    subtitle1: [string, string, string],
    subtitle2: string,
    subtitle3: [string, string, string],
    subtitle4: string,
    subtitle5: [string, string, string],
    content: string
    [key: string]: string | [string, string, string]; // Index signature
};

// Style 2 Props
export type Style2Props = {
    title: [string, string, string],
    subtitle1: [string, string, string],
    subtitle2: string,
    subtitle3: [string, string, string],
    content: string
};

// Style 3 Props
export type Style3Props = {
    title: [string, string],
    content: string
};

// Style 4 Props
export type Style4Props = {
    title: [string, string],
    content: string
};

// Style 5 Props
export type Style5Props = {
    title: [string, string],
    subtitle1: [string, string, string, string],
    content: string
};

// Style 6 Props
export type Style6Props = {
    title: [string, string],
    subtitle1: [string, string, string],
    content: string
};


// Style 7 Props
export type Style7Props = {
    title: [string, string],
    subtitle1: [string, string, string],
    subtitle2: string,
    subtitle3: [string, string, string],
    content: string
};


// Style 8 Props
export type Style8Props = {
    title: [string, string],
    subtitle1: string,
    content: string
};


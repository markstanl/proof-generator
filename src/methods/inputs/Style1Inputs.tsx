import React from 'react';
import { Box, Input, Textarea, Grid, GridItem } from '@chakra-ui/react';

import { Style1Props } from '@/types/styles';

interface Style1InputsProps {
    styleObject: Style1Props;
    setStyleObject: (styleObject: Style1Props) => void;
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

    const inputStyles = {
        variant: 'outline',
        borderColor: 'gray.300',
        focusBorderColor: 'teal.500',
        borderRadius: 'md',
        boxShadow: 'sm',
        _hover: { borderColor: 'gray.400' },
        _focus: { boxShadow: '0 0 0 2px teal.200' },
        _placeholder: { color: 'gray.500' },
    };

    return (
        <Box>
            {/* Title Inputs */}
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
                <GridItem>
                    <Input
                        className="title-input"
                        placeholder="Title 1"
                        value={styleObject.title[0]}
                        onChange={(e) => updateTitle(0, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        className="title-input"
                        placeholder="Title 2"
                        value={styleObject.title[1]}
                        onChange={(e) => updateTitle(1, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        className="title-input"
                        placeholder="Title 3"
                        value={styleObject.title[2]}
                        onChange={(e) => updateTitle(2, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
            </Grid>

            {/* Subtitle1 Inputs */}
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
                <GridItem>
                    <Input
                        className="subtitle1-input"
                        placeholder="Subtitle 1-1"
                        value={styleObject.subtitle1[0]}
                        onChange={(e) => updateSubtitle1(0, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        className="subtitle1-input"
                        placeholder="Subtitle 1-2"
                        value={styleObject.subtitle1[1]}
                        onChange={(e) => updateSubtitle1(1, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        className="subtitle1-input"
                        placeholder="Subtitle 1-3"
                        value={styleObject.subtitle1[2]}
                        onChange={(e) => updateSubtitle1(2, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
            </Grid>

            {/* Subtitle 2 Input */}
            <Box mb={4} maxWidth="500px">
                <Input
                    className="subtitle2-input"
                    placeholder="Subtitle 2"
                    value={styleObject.subtitle2}
                    onChange={(e) => updateSubtitle2(e.target.value)}
                    {...inputStyles}
                />
            </Box>

            {/* Subtitle 3 Inputs */}
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
                <GridItem>
                    <Input
                        className="subtitle3-input"
                        placeholder="Subtitle 3-1"
                        value={styleObject.subtitle3[0]}
                        onChange={(e) => updateSubtitle3(0, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        className="subtitle3-input"
                        placeholder="Subtitle 3-2"
                        value={styleObject.subtitle3[1]}
                        onChange={(e) => updateSubtitle3(1, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        className="subtitle3-input"
                        placeholder="Subtitle 3-3"
                        value={styleObject.subtitle3[2]}
                        onChange={(e) => updateSubtitle3(2, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
            </Grid>

            {/* Subtitle 4 Input */}
            <Box mb={4} maxWidth="500px">
                <Input
                    className="subtitle4-input"
                    placeholder="Subtitle 4"
                    value={styleObject.subtitle4}
                    onChange={(e) => updateSubtitle4(e.target.value)}
                    {...inputStyles}
                />
            </Box>

            {/* Subtitle 5 Inputs */}
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mb={4}>
                <GridItem>
                    <Input
                        className="subtitle5-input"
                        placeholder="Subtitle 5-1"
                        value={styleObject.subtitle5[0]}
                        onChange={(e) => updateSubtitle5(0, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        className="subtitle5-input"
                        placeholder="Subtitle 5-2"
                        value={styleObject.subtitle5[1]}
                        onChange={(e) => updateSubtitle5(1, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        className="subtitle5-input"
                        placeholder="Subtitle 5-3"
                        value={styleObject.subtitle5[2]}
                        onChange={(e) => updateSubtitle5(2, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
            </Grid>

            {/* Content Textarea */}
            <Box mb={4}>
                <Textarea
                    className="content-textarea"
                    placeholder="Content"
                    value={styleObject.content}
                    onChange={(e) => updateContent(e.target.value)}
                    height="200px"
                    {...inputStyles}
                />
            </Box>
        </Box>
    );
};

export default Style1Inputs;

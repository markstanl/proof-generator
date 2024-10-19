import React from 'react';
import { Box, Input, Grid, GridItem } from '@chakra-ui/react'; // Import Chakra UI components

import { Style8Props } from '@/types/styles';

interface Style8InputsProps {
    styleObject: Style8Props;
    setStyleObject: (styleObject: Style8Props) => void;
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

    // Chakra UI Input Styles
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
        <Box p={4} bg="gray.50" borderRadius="lg" boxShadow="md">
            <h2>Style 8 Inputs</h2>

            {/* Title Inputs */}
            <Grid templateColumns="repeat(2, 1fr)" gap={4} mb={4}>
                <GridItem>
                    <Input
                        placeholder="Title 1"
                        value={styleObject.title[0]}
                        onChange={(e) => updateTitle(0, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
                <GridItem>
                    <Input
                        placeholder="Title 2"
                        value={styleObject.title[1]}
                        onChange={(e) => updateTitle(1, e.target.value)}
                        {...inputStyles}
                    />
                </GridItem>
            </Grid>

            {/* Subtitle1 Input */}
            <Box mb={4}>
                <Input
                    placeholder="Subtitle 1"
                    value={styleObject.subtitle1}
                    onChange={(e) => updateSubtitle1(e.target.value)}
                    width="100%" // Ensures full width for the input
                    {...inputStyles}
                />
            </Box>

            {/* Content Input */}
            <Box mb={4}>
                <Input
                    placeholder="Content"
                    value={styleObject.content}
                    onChange={(e) => updateContent(e.target.value)}
                    width="100%" // Ensures the input is full width
                    {...inputStyles}
                />
            </Box>
        </Box>
    );
};

export default Style8Inputs;

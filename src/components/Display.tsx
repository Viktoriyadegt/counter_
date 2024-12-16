import React from 'react';
import styled from "styled-components";

type DisplayPropsType = {
    value: number;
    maxValue: number
}

export const Display = ({value, maxValue} : DisplayPropsType) => {
    return (
        <StyledDisplay color={value===maxValue? 'red' : 'wight'}>
            {value}
        </StyledDisplay>
    );
};

export const StyledDisplay = styled.div<{$color?:boolean}>`
    color: ${props => props.color};
    font-size: 70px;
`

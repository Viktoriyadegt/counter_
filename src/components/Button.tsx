import React from 'react';
import styled from "styled-components";

type ButtonProps = {
    name: string;
    callback?: () => void;
    disabled?: boolean;
}

export const Button = ({name, callback, disabled}: ButtonProps) => {

    return <StyledButton onClick={callback} disabled={disabled} >{name}</StyledButton>

};

const StyledButton = styled.button`
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #f84d86;
    border-radius: 5px;
    cursor: pointer;
`;


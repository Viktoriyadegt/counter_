import React from 'react';
import {Button} from "./Button";
import styled from "styled-components";
import {Display} from "./Display";

type CounterProps = {
    value: number
    increase: () => void
    reset: () => void
    minValue: number
    maxValue: number
    //error:boolean
}

export const Counter = ({value, increase, reset, maxValue, }: CounterProps) => {

    const increaseHandler = () => {
        increase()
    }

    const resetHandler = () => {
        reset()
    }
    return (
        <Wrapper>
            <WrapperDisplay>
                <Display value={value} maxValue={maxValue} />
            </WrapperDisplay>
            <WrapperButton>
                <Button name={'inc'} disabled={value === maxValue} callback={increaseHandler}/>
                <Button name={'reset'} callback={resetHandler}/>
            </WrapperButton>

        </Wrapper>

    );
};
export const Wrapper = styled.section`
    padding: 0.5em;
    border-radius: 5px;
    border: 2px solid palevioletred;
    margin: 5px;
`;

export const WrapperDisplay = styled(Wrapper)`
    height: 100%;
    margin: 0.5em;
`;

export const WrapperButton = styled(Wrapper)`
    margin: 0.5em;
    padding: 0 2em;
`;


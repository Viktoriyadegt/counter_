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
}

export const Counter = ({value, increase, reset, maxValue}: CounterProps) => {

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
const Wrapper = styled.section`
    padding: 0.5em;
    border-radius: 5px;
    border: 2px solid palevioletred;
    margin: 5px;
`;

const WrapperDisplay = styled(Wrapper)`
    margin: 0.5em;
    padding: 2em 4em;
`;

const WrapperButton = styled(Wrapper)`
    margin: 0.5em;
    padding: 0 2em;
`;


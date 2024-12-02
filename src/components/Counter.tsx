import React from 'react';
import Button from "./Button";

type CounterProps = {
    value: number
    increase: () => void
    reset: () => void
    minValue: number
    maxValue: number
}

const Counter = ({value, increase, reset, maxValue}: CounterProps) => {

    const increaseHandler = () => {
        increase()
    }

    const resetHandler = () => {
        reset()
    }
    return (
        <>
            <div>
                {value}
            </div>
            <div>
                <Button name={'inc'} disabled={value === maxValue} callback={increaseHandler}/>
                <Button name={'reset'} callback={resetHandler}/>
            </div>

        </>

    );
};

export default Counter;
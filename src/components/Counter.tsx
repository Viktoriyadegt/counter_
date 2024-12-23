import React from 'react';
import {Button} from "./Button";
import {Display} from "./Display";
import {StatusType} from "../App";
import s from './Counter.module.css'


type CounterProps = {
    value: number
    increase: () => void
    reset: () => void
    minValue: number
    maxValue: number
    status: StatusType
}

export const Counter = ({value, increase, reset, maxValue, minValue, status}: CounterProps) => {

    const increaseHandler = () => {
        increase()
    }

    const resetHandler = () => {
        reset()
    }
    return (
        <div className={s.container}>
            <div className={status === 'error' || value === maxValue ? s.display + ' ' + s.error : s.display}>
                {
                    status === 'display'
                        ? <Display value={value} maxValue={maxValue}/>
                        : status === 'settings'
                            ? 'enter values and press SET'
                            : 'Incorrect value'
                }
            </div>
            <div className={s.containerButtons}>
                <Button name={'inc'} disabled={value === maxValue || status === 'error'} callback={increaseHandler}/>
                <Button name={'reset'} disabled={value === minValue || status === 'error'} callback={resetHandler}/>
            </div>

        </div>

    );
};



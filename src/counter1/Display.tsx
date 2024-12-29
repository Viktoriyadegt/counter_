import React from 'react';
import {Button} from "../components/Button";
import {StatusType} from "../App";
import s from './Display.module.css'


type CounterProps = {
    value: number
    increase: () => void
    reset: () => void
    minValue: number
    maxValue: number
    status: StatusType
}

export const Display = ({value, increase, reset, maxValue, minValue, status}: CounterProps) => {

    const increaseHandler = () => {
        increase()
    }

    const resetHandler = () => {
        reset()
    }

    const stylesForCounter =
        status === 'error' ? s.display + ' ' + s.error
            : status === 'settings' ? s.display + ' ' + s.settings
                : s.display

    return (
        <div className={s.container}>
            <div className={stylesForCounter}>
                {
                    status === 'display'
                        ? <div className={value === maxValue ? s.error : ''}>{value}</div>
                        : status === 'settings'
                            ? 'enter values and press SET'
                            : 'Incorrect value'
                }
            </div>
            <div className={s.containerButtons}>
                <Button name={'inc'} disabled={value === maxValue || status !== 'display'} callback={increaseHandler}/>
                <Button name={'reset'} disabled={value=== minValue || status!=='display'} callback={resetHandler}/>
            </div>

        </div>

    );
};



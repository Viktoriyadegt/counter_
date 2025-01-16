import React from 'react';
import {Button} from "../../common/Button";

import s from './Display.module.css'
import {incrementCounterAC, resetCounterAC} from "../model/counter-reducer";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectCount, selectMaxValue, selectMinValue, selectStatus} from "../model/app-selector";


export const Display = () => {

    const count = useAppSelector(selectCount)
    const minValue = useAppSelector(selectMinValue)
    const maxValue = useAppSelector(selectMaxValue)
    const status = useAppSelector(selectStatus)

    const dispatch = useAppDispatch();

    const increase = () => {
        dispatch(incrementCounterAC())
    }

    const reset = () => {
        dispatch(resetCounterAC(minValue))
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
                        ? <div className={count === maxValue ? s.error : ''}>{count}</div>
                        : status === 'settings'
                            ? 'enter values and press SET'
                            : 'Incorrect value'
                }
            </div>
            <div className={s.containerButtons}>
                <Button name={'inc'} disabled={count === maxValue || status !== 'display'} callback={increase}/>
                <Button name={'reset'} disabled={count=== minValue || status!=='display'} callback={reset}/>
            </div>

        </div>

    );
};



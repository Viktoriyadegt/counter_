import React, {useEffect, useState} from 'react';
import s from './Counter1.module.css'
import {Counter} from "../components/Counter";
import {Settings} from "../components/Settings";

export type StatusType = 'display' | 'settings' | 'error'

function Counter1() {

    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [value, setValue] = useState<number>(0);
    const [status, setStatus] = useState<StatusType>('display');


    useEffect(() => {
        let startValue = localStorage.getItem('startValue')
        startValue && setValue(JSON.parse(startValue))

        let minValue = localStorage.getItem('minValue')
        minValue && setMinValue(JSON.parse(minValue))

        let maxValue = localStorage.getItem('maxValue')
        maxValue && setMaxValue(JSON.parse(maxValue))

        if (maxValue && minValue) {
            if (JSON.parse(maxValue) <= minValue || JSON.parse(minValue) < 0) {
                setStatus('error')
            } else {
                setStatus('settings')
            }
        }

    }, [])


    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(value));
        localStorage.setItem('minValue', JSON.stringify(minValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));

    }, [value, minValue, maxValue])


    const increase = () => {
        setValue(value + 1)
    }

    const reset = () => {
        setValue(minValue)
    }

    const changeMaxValue = (maxValue: number) => {

        setMaxValue(maxValue)
        if (maxValue <= minValue || maxValue < 0) {
            setStatus('error')
        } else {
            setStatus('settings')
        }
    }

    const changeMinValue = (minValue: number) => {

        setMinValue(minValue)
        if (maxValue <= minValue || minValue < 0) {
            setStatus('error')
        } else {
            setStatus('settings')
        }
    }

    const setSettings = () => {
        changeMaxValue(maxValue)
        changeMinValue(minValue)
        setValue(minValue)
        setStatus('display')
    }

    return (
        <div className={s.Counter1}>
            <Counter value={value}
                     increase={increase}
                     reset={reset}
                     minValue={minValue}
                     maxValue={maxValue}
                     status={status}
            />
            <Settings value={value}
                      increase={increase}
                      reset={reset}
                      minValue={minValue}
                      maxValue={maxValue}
                      changeMaxValue={changeMaxValue}
                      changeMinValue={changeMinValue}
                      setSettings={setSettings}
                      status={status}
            />
        </div>

    );
}

export default Counter1;

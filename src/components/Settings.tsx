import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import s from './Settings.module.css'
import {StatusType} from "../App";


type CounterProps = {
    value: number
    increase: () => void
    reset: () => void
    minValue: number
    maxValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    setSettings: () => void
    status: StatusType | null
}

export const Settings = ({maxValue, minValue, changeMaxValue, changeMinValue, setSettings, status}: CounterProps) => {

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => changeMaxValue(+e.currentTarget.value)
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => changeMinValue(+e.currentTarget.value)

    return (
        <div className={s.containerSettings}>
            <div className={s.settings}>
                <div className={s.spanAndInputContainer}>
                    <span className={s.span}>max value:  </span>
                    <input className={status === 'error' ? s.input + ' ' + s.error : s.input} type={'number'}
                           value={maxValue}
                           onChange={changeMaxValueHandler}/>
                </div>
                <div className={s.spanAndInputContainer}>
                    <span className={s.span}>min value:  </span>
                    <input className={status === 'error' ? s.input + ' ' + s.error : s.input} type={'number'}
                           value={minValue}
                           onChange={changeMinValueHandler}/>
                </div>
            </div>
            <div className={s.containerSettingsButtons}>
                <Button name={'set'} callback={setSettings} disabled={status === 'error'}/>
            </div>

        </div>

    );
};

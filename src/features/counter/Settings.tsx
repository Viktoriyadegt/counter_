import React, {ChangeEvent} from 'react';
import {Button} from "../../common/Button";
import s from './Settings.module.css'
import {changeMaxValueAC, changeMinValueAC, changeStatusAC, resetCounterAC} from "../model/counter-reducer";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectMaxValue, selectMinValue, selectStatus} from "../model/app-selector";


type CounterProps = {

}

export const Settings = ({ }: CounterProps) => {

    console.log('settings is called')

    const maxValue = useAppSelector(selectMaxValue)
    const minValue = useAppSelector(selectMinValue)
    const status = useAppSelector(selectStatus)

    const dispatch = useAppDispatch();

    const setSettings = () => {
        dispatch(changeStatusAC('display'))
        dispatch(resetCounterAC(minValue))
    }

    const changeStatus = (maxValue:number, minValue:number) => {
        if (maxValue <= minValue || minValue < 0) {
            dispatch(changeStatusAC('error'))
        } else {
            dispatch(changeStatusAC('settings'))
        }
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        dispatch(changeMaxValueAC(maxValue))
        changeStatus(maxValue, minValue)
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const minValue = +e.currentTarget.value
        dispatch(changeMinValueAC(minValue))
        changeStatus(maxValue, minValue)
    }

    return (
        <div className={s.containerSettings}>
            <div className={s.settings}>
                <div className={s.spanAndInputContainer}>
                    <span className={s.span}>max value:  </span>
                    <input className={status === 'error' ? s.input + ' ' + s.error : s.input} type={'number'}
                           value={maxValue}
                           onChange={changeMaxValue}/>
                </div>
                <div className={s.spanAndInputContainer}>
                    <span className={s.span}>min value:  </span>
                    <input className={status === 'error' ? s.input + ' ' + s.error : s.input} type={'number'}
                           value={minValue}
                           onChange={changeMinValue}/>
                </div>
            </div>
            <div className={s.containerSettingsButtons}>
                <Button name={'set'} callback={setSettings} disabled={status === 'error'}/>
            </div>

        </div>

    );
};

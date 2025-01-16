import React from 'react';
import s from './Counter.module.css'
import {Display} from "./Display";
import {Settings} from "./Settings";

export type StatusType = 'display' | 'settings' | 'error'

function Counter() {

    return (
        <div className={s.Counter1}>
            <Display/>
            <Settings/>
        </div>

    );
}

export default Counter;

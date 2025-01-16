import React from 'react';
import s from './Button.module.css'

type ButtonProps = {
    name: string;
    callback?: () => void;
    disabled?: boolean;
}

export const Button = ({name, callback, disabled}: ButtonProps) => {

    return <button className={s.button} onClick={callback} disabled={disabled} >{name}</button>

};


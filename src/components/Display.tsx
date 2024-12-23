import React from 'react';
import s from './Counter.module.css'

type DisplayPropsType = {
    value: number;
    maxValue: number
}

export const Display = ({value, maxValue} : DisplayPropsType) => {
    return (
        <div>
            {value}
        </div>
    );
};

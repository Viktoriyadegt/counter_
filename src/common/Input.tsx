import React, {ChangeEvent, useState} from 'react';

type Props = {
    className?: string;
    onChange: (value: string) => void
}

export const Input = ({onChange, className}: Props) => {

    const [value, setState] = useState<string>('0');
    console.log(value)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value)
        onChange(value)
    }

    return <input className={className} type={'number'}
                  value={value}
                  onChange={onChangeHandler}/>
};


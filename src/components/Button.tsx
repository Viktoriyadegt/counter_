import React from 'react';

type ButtonProps = {
    name: string;
    callback?: () => void;
    disabled?: boolean;
}

const Button = ({name, callback, disabled}: ButtonProps) => {

    return <button onClick={callback} disabled={disabled} >{name}</button>

};

export default Button;
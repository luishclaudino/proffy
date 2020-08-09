import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}
// ...rest pega todas as propriedades de um input
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" className={name} {...rest} />
        </div>
    );
}

export default Input;
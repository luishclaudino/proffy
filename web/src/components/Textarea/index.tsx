import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}
// ...rest pega todas as propriedades de um input
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea className={name} {...rest} />
        </div>
    );
}

export default Textarea;
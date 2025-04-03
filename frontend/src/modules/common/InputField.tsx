import React from 'react';
import Icon from './Icon';

interface InputFieldProps {
    svgName: string;
    svgWidth: string;
    svgHeight: string;
    placeholder: string;
    type?: string;
    name: string;
    inputValue: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}


const InputField: React.FC<InputFieldProps> = ({ svgName, svgWidth, svgHeight, placeholder, type = "text", name, inputValue, onChange }) => (
    <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
        <Icon svgName={svgName} width={svgWidth} height={svgHeight} className="custom-class" />
        <input type={type} name={name} id={name} className="bg-transparent placeholder-color3 font-sans h-10 w-full focus:outline-none" placeholder={placeholder} value={inputValue} onChange={onChange} autoComplete='off' />
    </div>
);
export default InputField;

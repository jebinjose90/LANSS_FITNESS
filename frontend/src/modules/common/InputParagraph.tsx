import React from 'react';
import Icon from './Icon';

interface InputParagraphProps {
    svgName: string;
    svgWidth: string;
    svgHeight: string;
    placeholder: string;
    name: string;
    inputValue: string
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}


const InputParagraph: React.FC<InputParagraphProps> = ({ svgName, svgWidth, svgHeight, placeholder, name, inputValue, onChange }) => (
    <div className="flex items-center space-x-6 bg-transparent border-2 border-color3 text-color3 px-4 w-full">
        <Icon svgName={svgName} width={svgWidth} height={svgHeight} className="custom-class" />
        <textarea name={name} id={name} className="bg-transparent placeholder-color3 font-sans h-10 w-full focus:outline-none overflow-y-scroll scrollbar-hidden" placeholder={placeholder} value={inputValue} onChange={onChange} autoComplete='off' ></textarea>
    </div>
);
export default InputParagraph;

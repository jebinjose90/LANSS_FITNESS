import React, { useState } from 'react';

interface DropdownProps {
    options: string[];
    onSelect: (selectedOption: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>(options[0] || 'Select');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-balance w-full">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-between items-center w-full px-4 py-2 text-sm align-baseline text-color3 border-2 border-color3 bg-color2"
                    onClick={toggleDropdown}
                >
                    {selectedOption}
                    <svg
                        className="-mr-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 shadow-lg bg-color2 border-2 border-color3 w-full max-h-60 overflow-y-scroll scrollbar-hidden">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <a
                                key={option}
                                className="block px-4 py-2 text-sm text-color3 hover:bg-color2 opacity-45 hover:text-color3 cursor-pointer"
                                role="menuitem"
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

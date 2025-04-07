import React, { useState } from 'react';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
  color : string
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange, color}) => {
  const [selectedColor, setSelectedColor] = useState(color);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setSelectedColor(color);
    onColorChange(color); // send to parent
  };

  return (
    <div>
      <input
        type="color"
        id="color-input"
        value={selectedColor}
        onChange={handleColorChange}
        className="h-10 w-14 block cursor-pointer"
        title="Choose your color"
      />
    </div>
  );
};

export default ColorPicker;

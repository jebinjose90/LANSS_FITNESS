import React, { useEffect, useState } from 'react';
import InputFieldWithoutIcon from '../../../common/InputFieldWithoutIcon';
import ColorPicker from '../../../common/ColorPicker';
import { useTheme } from '../../../common/hooks/useTheme';

interface ThemeCustomizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const ThemeCustomizationModal: React.FC<ThemeCustomizationModalProps> = ({ isOpen, onClose }) => {
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");

  const theme = useTheme();



  const handleColorChange1 = (newColor: string) => {
    setColor1(newColor);
    console.log('Color 1:', newColor);
  };

  const handleColorChange2 = (newColor: string) => {
    setColor2(newColor);
    console.log('Color 2:', newColor);
  };

  const handleColorChange3 = (newColor: string) => {
    setColor3(newColor);
    console.log('Color 3:', newColor);
  };

  const handleChange = () => {
    console.log('Form submitted');
    console.log('Company Colors:', { color1, color2, color3 });
  };

  // Load colors from localStorage once when component mounts
  useEffect(() => {
    const storedColor1 = theme?.color1;
    const storedColor2 = theme?.color2;
    const storedColor3 = theme?.color3;

    if (storedColor1) setColor1(storedColor1);
    if (storedColor2) setColor2(storedColor2);
    if (storedColor3) setColor3(storedColor3);
  }, []);

  if (!isOpen) return null;
  if (!theme) {
    return <div>Loading...</div>;
  }
  return (
    <div aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none text-color3 focus:outline-none bg-black bg-opacity-50 backdrop-blur-sm">
      <div role="dialog" aria-modal="true" className="relative my-6 mx-auto max-w-3xl w-[920px]">
        <div className="w-full h-full border-[1px] border-color3">
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-color1 outline-none focus:outline-none p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div></div>
              <button onClick={onClose}>X</button>
            </div>

            <div className="grid grid-cols-2 gap-2 space-x-2">
              <div>
                <p>Company Name:</p>
                <InputFieldWithoutIcon inputValue={""} onChange={handleChange} placeholder="Company Name" name="Company Name" />
              </div>
              <div>
                <p>Company Icon:</p>
                <div className='h-[100px] w-[150px] border-2 border-color3 border-dashed'>
                  <img src="" alt="Company Icon" />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-2'>
              <div className='flex flex-row items-center space-x-2'>
                <div className='w-[50px]'><p>Color1</p></div>
                <ColorPicker onColorChange={handleColorChange1} color={color1} />
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <div className='w-[50px]'><p>Color2</p></div>
                <ColorPicker onColorChange={handleColorChange2} color={color2} />
              </div>
              <div className='flex flex-row items-center space-x-2'>
                <div className='w-[50px]'><p>Color3</p></div>
                <ColorPicker onColorChange={handleColorChange3} color={color3} />
              </div>
              <div>
                <button className='border-2 border-color3 w-1/4' onClick={handleChange}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizationModal;

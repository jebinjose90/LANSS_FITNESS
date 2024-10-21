import React from 'react';
import icons from '../../assets/icons/icons.svg';

interface IconProps {
  name: string;
  className?: string;
  width?: string;  // Optional width prop
  height?: string; // Optional height prop
}

const Icon: React.FC<IconProps> = ({ name, className, width = '24', height = '24' }) => {
  return (
    <svg
      className={`${className ? className : ''}`}
      width={width} // Set width
      height={height} // Set height
    >
      <use href={`${icons}#${name}`} />
    </svg>
  );
};

export default Icon;



{/* <Icon name="x-icon" width="40" height="40" className="custom-class" />
<Icon name="instagram-icon" width="40" height="40" className="custom-class" />
<Icon name="facebook-icon" width="40" height="40" className="custom-class" />
<Icon name="whatsapp-icon" width="40" height="40" className="custom-class" /> 
<Icon name="logout-icon" width="30" height="34" className="custom-class" />
<Icon name="dumbell-icon" width="40" height="23" className="custom-class" />
<Icon name="food-icon" width="33" height="28" className="custom-class" />
<Icon name="progress-icon" width="35" height="28" className="custom-class" />*/}


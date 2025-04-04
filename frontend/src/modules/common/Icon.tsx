import React from 'react';
import icons from '../../assets/icons/icons.svg';

interface IconProps {
  svgName: string;
  className?: string;
  width?: string;  // Optional width prop
  height?: string; // Optional height prop
}

const Icon: React.FC<IconProps> = ({ svgName, className, width = '24', height = '24' }) => {
  return (
    <svg
      className={`${className ? className : ''}`}
      width={width} // Set width
      height={height} // Set height
    >
      <use href={`${icons}#${svgName}`} />
    </svg>
  );
};

export default Icon;



{/* 
<Icon svgName="user-icon" width="23" height="23" className="custom-class" />  
<Icon svgName="x-icon" width="40" height="40" className="custom-class" />
<Icon svgName="instagram-icon" width="40" height="40" className="custom-class" />
<Icon svgName="facebook-icon" width="40" height="40" className="custom-class" />
<Icon svgName="whatsapp-icon" width="40" height="40" className="custom-class" /> 
<Icon svgName="logout-icon" width="30" height="34" className="custom-class" />
<Icon svgName="dumbell-icon" width="40" height="23" className="custom-class" />
<Icon svgName="food-icon" width="33" height="28" className="custom-class" />
<Icon svgName="progress-icon" width="35" height="28" className="custom-class" />
<Icon svgName="google-paly-icon" width="258" height="78" className="custom-class" /> 
<Icon svgName="app-store-icon" width="258" height="78" className="custom-class" />
<Icon svgName="login-user-icon" width="23" height="23" className="custom-class" />
<Icon svgName="login-password-icon" width="28" height="24" className="custom-class"/>
<Icon svgName="google-sign-color-icon"  width="30" height="30" className="custom-class"/>
<Icon svgName="login-email-icon" width="30" height="23" className="custom-class"/>
<Icon svgName="login-phone-icon" width="30" height="30" className="custom-class"/>"
<Icon svgName="info-icon" className="flex-shrink-0 inline w-5 h-5 mr-3"/>
<Icon svgName="video-icon" width="40" height="27" className="custom-class"/>
<Icon svgName="pencil-icon" className="w-4 h-4"/>"
<Icon svgName="close-icon" className="h-4 w-4"/>
<Icon svgName="chat-icon" className="h-4 w-4"/>
<Icon svgName="time-icon" className="h-4 w-4"/>
<Icon svgName="ticket-icon" className="h-4 w-4"/>
<Icon svgName="calender-icon" width="70" height="70"/>
<Icon svgName="mail-icon" width="20" height="15" className="custom-class"/>
<Icon svgName="phone-icon" width="20" height="20" className="custom-class"/>
<Icon svgName="edit-icon" width="20" height="20 className="custom-class"/>
<Icon svgName="uncheck-icon-red" width="30" height="30" className="custom-class"/>
<Icon svgName="check-icon-green" width="40" height="30" className="custom-class"/>*/}
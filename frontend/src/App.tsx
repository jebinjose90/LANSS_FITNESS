
import React, { useEffect, useState } from 'react';
import Home from './modules/user/pages/Home';
import Landing from './modules/user/pages/Landing';
import UserLogin from './modules/user/pages/UserLogin';
import UserSignup from './modules/user/pages/UserSignup';
import TrainerSignUp from './modules/trainer/pages/TrainerSignUp';
import UserOTP from './modules/user/pages/UserOTP';




const App = () => {


  return (
    <div>
      {/* <Home/> */}
      {/* <Landing/> */}
      {/* <UserLogin /> */}
      {/* <UserSignup/> */}
      <UserOTP/>
    </div>
  );
};

export default App

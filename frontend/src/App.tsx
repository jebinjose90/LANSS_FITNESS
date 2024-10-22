import Navbar from "./modules/common/Navbar"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainView from "./modules/user/components/homePage/MainView";
import FeaturesView from "./modules/user/components/homePage/FeaturesView";
import ImageSlider from "./modules/user/components/homePage/ImageSlider";
import SubscriptionPlans from "./modules/user/components/homePage/SubscriptionPlans";

const App = () => {


  return (
    <div>
    <Navbar />
    <MainView/>
    <FeaturesView/>
    <ImageSlider/>
    <SubscriptionPlans/>
    <div className="p-4 bg-blue-500 text-white">
      <h1>API Data</h1>
      
    </div>
  </div>
  );
};

export default App

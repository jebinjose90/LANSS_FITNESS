import Navbar from "./modules/common/Navbar"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {


  return (
    <div>
    <Navbar />
    <div className="p-4 bg-blue-500 text-white">
      <h1>API Data</h1>
      
    </div>
  </div>
  );
};

export default App

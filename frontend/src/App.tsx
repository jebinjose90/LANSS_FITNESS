import Navbar from "./modules/common/Navbar"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/theme')
      .then((response) => {
        console.log(response);  // Log the entire response to check its structure
        setData(response.data); // Assuming the data you need is in response.data
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

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

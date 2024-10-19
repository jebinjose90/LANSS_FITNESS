import Navbar from "./modules/common/Navbar"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/theme')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Navbar/>
      <div className="p-4 bg-blue-500 text-white">Hello Tailwind!</div>
    </div>
  );
};

export default App

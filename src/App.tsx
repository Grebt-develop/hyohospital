import React from 'react';
import { Line } from "react-chartjs-2";
import './App.css';

const fetchData = async () => {
  const response = await fetch("https://grebt.kr/mslbpm/api_getdata")
  const data = await response.json();
  return data;
}



function App() {
  return (
    <div className="App">
      
    </div>
  );
}


export default App;

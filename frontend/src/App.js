import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async() => {
    try{
      const response = await fetch('http://127.0.0.1:5000/demo')
      const jsonData = await response.json();
      setData(jsonData)

    }catch(error){
      console.log('Error', error)
    }
  }

  return (
    <div className="App">
      <h1>Frontend</h1>
      <h3>{data.message}</h3>
    </div>
  );
}

export default App;

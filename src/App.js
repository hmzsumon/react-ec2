import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('/users');
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1> Front-End Success Auto Deploy </h1>
        <h4> This is a EC2 Test CI/CD</h4>
        <div className='product-wrapper'>
          {data.map((product) => (
            <div className='product' key={product.id}>
              <h3>{product.name}</h3>
              <h3>{product.username}</h3>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

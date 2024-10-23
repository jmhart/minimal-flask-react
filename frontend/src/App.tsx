import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/data`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newData = await response.json();
        console.log(newData);
        setData(newData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data ? JSON.stringify(data, null, 2) : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;

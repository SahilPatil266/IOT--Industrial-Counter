import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Stations.css';

function Stations() {
  const [count, setCount] = useState();

  const apiEndpoint = 'http://127.0.0.1:5000/api/sensor-data';

  useEffect(() => {
    axios.get(apiEndpoint)
      .then((response) => {
        const countValue = response.data['sensor/count'];
        setCount(countValue);
      })
      .catch((error) => {
        console.error('Failed to fetch count data:', error);
      });
  }, []);

  return (
    <div>
      <div className='title' align = 'center'><h2>You can monitor all your stations here</h2></div>
      
      <div className="station-row">
        <div className="station">
          <h1>Station 1</h1>
          <p>Count: {count}</p>
        </div>
        <div className="station" align = 'center'>
          <h1>Station 2</h1>
          <p>Count: 15</p>
        </div>
      </div>
      <div className="station-row">
        <div className="station">
          <h1>Station 3</h1>
          <p>Count: 8</p>
        </div>
        <div className="station">
          <h1>Station 4</h1>
          <p>Count: 12</p>
        </div>
      </div>
    </div>
  );
}

export default Stations;

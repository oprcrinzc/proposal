'use client'

import { useState, useEffect } from "react";

export default function a(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    // Fetch function to call API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets?limit=10'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };
  
    useEffect(() => {
      // Start fetching data every second
      const intervalId = setInterval(() => {
        fetchData();
      }, 1000); // 1000ms = 1 second
  
      // Cleanup on unmount to avoid memory leaks
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run once when the component mounts
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <div>
        <div>
        {
            Array.isArray(data)?
            data.map((element, index) => {
              return <div key={index} className={Style.c1}>
                <p>{element["id"]}</p>
                {/* <div>
                  <p>{element["temperature"]} °C</p>
                  <p>{element["humidity"]} %</p>
                </div> */}
              </div>
            }):"Loading . . ."
          }
        </div>
        
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
}
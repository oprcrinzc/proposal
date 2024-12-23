'use client'

import { useState, useEffect } from "react";
import Style from "./scoreboard.module.css"
import Image from "next/image";

export default function a(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    // Fetch function to call API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coincap.io/v2/assets?limit=6'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        result.data.forEach((e, i) => {
            result.data[i]["priceUsd"] = Math.round(e["priceUsd"]*100)/100
        });
        setData(result.data);
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
        <table>
            <thead>
                <tr>
                    <th>rank</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
        {
            Array.isArray(data)?(
            data.map((element, index) => {
              return <tr key={index} className={Style.c}>
                 {/* <td> */}
                <td>
                    <div>
                        {element["rank"]}
                    </div>
                </td>
                <td>
                    <div className={Style.spdno1}>
                        <Image 
                            src={`/icons/${element["symbol"].toLowerCase()}@2x.png`}
                            alt={`${element["symbol"].toLowerCase()}`}
                            width={32}
                            height={32}
                            priority={true}
                        />
                        <div className={Style.twoTower}>
                            <p>{element["name"]}</p>
                            <p>{element["symbol"]}</p>
                        </div>
                    </div>
                </td>
                <td className={Style.price}>${element["priceUsd"]}</td>
                {/* </td> */}
              </tr>
            })):<tr><td>"Loading . . ."</td></tr>
          }
          </tbody>
        </table>
        
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
}


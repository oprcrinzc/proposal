"use client";

import { useState, useEffect } from "react";
import Style from "../page.module.css";
import Image from "next/image";

export default function a() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10); // Number of items to show initially

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.coincap.io/v2/assets?limit=100"); // Increase the limit
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      result.data.forEach((e, i) => {
        result.data[i]["priceUsd"] = Math.round(e["priceUsd"] * 100) / 100;
      });
      setData(result.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const formatNumber = (value) => {
    if (value == null || isNaN(value)) return "N/A";
    const numericValue = Number(value);
    const absValue = Math.abs(numericValue);
    if (absValue >= 1e18) {
      return `${(numericValue / 1e18).toFixed(2)}QD`;
    } else if (absValue >= 1e15) {
      return `${(numericValue / 1e15).toFixed(2)}Q`;
    } else if (absValue >= 1e12) {
      return `${(numericValue / 1e12).toFixed(2)}T`;
    } else if (absValue >= 1e9) {
      return `${(numericValue / 1e9).toFixed(2)}B`;
    } else if (absValue >= 1e6) {
      return `${(numericValue / 1e6).toFixed(2)}M`;
    } else if (absValue >= 1e3) {
      return `${(numericValue / 1e3).toFixed(2)}K`;
    }
    return numericValue.toFixed(2);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // Show 10 more items
  };

  return (
   
    <div className={Style.table}>
      <div className={Style.maintable}>
        {loading ? (
          <div className={Style.loaderFrame}>
            <div className={Style.loaderFramecenter}>
              <span className={Style.loader}></span>
            </div>
          </div>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th className={Style.center}>rank</th>
                  <th>name</th>
                  <th>price</th>
                  <th>Market Cap</th>
                  <th>VWAP(24Hr)</th>
                  <th>Supply</th>
                  <th>Volume(24Hr)</th>
                  <th>Change(24Hr)</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, visibleCount).map((element, index) => (
                  <tr key={index}>
                    <th>
                      <div className={Style.center}>{element["rank"]}</div>
                    </th>
                    <th className={Style.threeflex}>
                      <div className={Style.img_div}>
                        <Image
                          src={`/icons/${element[
                            "symbol"
                          ].toLowerCase()}@2x.png`}
                          alt={`${element["symbol"].toLowerCase()}`}
                          width={32}
                          height={32}
                          priority={true}
                        />
                      </div>
                      <div className={Style.txt_div}>
                        <p>{element["name"]}</p>
                        <span>{element["symbol"]}</span>
                      </div>
                    </th>
                    <th className={Style.price}>
                      ${formatNumber(element["priceUsd"])}
                    </th>
                    <th className={Style.price}>
                      ${formatNumber(element["marketCapUsd"])}
                    </th>
                    <th className={Style.price}>
                      ${formatNumber(element["vwap24Hr"])}
                    </th>
                    <th className={Style.price}>
                      ${formatNumber(element["supply"])}
                    </th>
                    <th className={Style.price}>
                      ${formatNumber(element["volumeUsd24Hr"])}
                    </th>
                    <th
                      className={`${Style.price} ${
                        parseFloat(element["changePercent24Hr"]) < 0
                          ? Style.textred
                          : Style.textgreen
                      }`}
                    >
                      {parseFloat(element["changePercent24Hr"]).toFixed(2)}%
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
            {visibleCount < data.length && (
              <button className={Style.showMore} onClick={handleShowMore}>
                Show More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

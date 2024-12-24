"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Set the active tab based on the current URL
    const currentPath = window.location.pathname;
    setActiveTab(currentPath.slice(1) || "Home"); // Defaults to 'Home' if the path is '/'
  }, []);

  const handleClick = (tabName) => {
    // Update the active tab and navigate to the URL
    setActiveTab(tabName);
    window.location.href = `/${tabName.toLowerCase()}`;
  };

  return (
    <nav className="nav" data-aos="slide-down">
      <div className="center">
        <div className="logo">
          <img src="/index/btc.jpg" alt="Logo" />
          <span>NTF</span>
        </div>
        <ul>
          {["Home", "Feature", "Contact", "About", "Sign In"].map((tab) => (
            <li
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => handleClick(tab)}
            >
              <a>{tab}</a>
            </li>
          ))}
        </ul>
        <div className="btn_inp">
          <button className="btn_up">
            <a>Sign Up</a>
          </button>
        </div>
      </div>

    </nav>
  );
}

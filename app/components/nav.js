"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use Next.js hook for the current pathname
import AOS from "aos";
import "aos/dist/aos.css";
import { GetName } from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [name, setName] = useState("");
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  useEffect(() => {
    async function callName() {
      let n = await GetName();
      setName(n);
    }
    callName();
  }, []);

  // Extract the page name from the pathname
  const pageName = pathname === "/" ? "Home" : pathname.replace("/", "");

  return (
    <nav className="nav" data-aos="slide-down">
      <div className="center">
        {/* Logo Section */}
        <div className="logo">
          <img src="/index/btc.jpg" alt="Logo" />
          <span>NTF</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li className={pageName === "Home" ? "active" : ""}>
            <a href="/">Home</a>
          </li>
          <li className={pageName === "campaigns" ? "active" : ""}>
            <a href="/campaigns">Campaigns</a>
          </li>
          <li className={pageName === "contact" ? "active" : ""}>
            <a href="/contact">Contact</a>
          </li>
          <li className={pageName === "about" ? "active" : ""}>
            <a href="/about">About</a>
          </li>
          {name === "" && (
            <li className={pageName === "signin" ? "active" : ""}>
              <a href="/signin">Sign In</a>
            </li>
          )}
        </ul>

<<<<<<< HEAD
        
=======
>>>>>>> 65a70d6414f2f0ff368b3110cf618b195fd03294
      </div>
    </nav>
  );
}

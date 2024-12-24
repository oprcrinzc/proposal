'use client'
import styles from "@/app/page.module.css";
import Navbar from "@/app/components/nav";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function a(){
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
        });
      }, []);
    return <div className={styles.container}>
        <Navbar />
    </div>
    
}
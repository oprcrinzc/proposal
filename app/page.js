"use client"; // Add this directive at the top of the file

import { useEffect } from "react";
import styles from "./page.module.css";
import Navbar from "./components/nav";
import Scoreboard from "./components/scoreboard";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faSmile } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.bg}></div>
      <div className={styles.main}>
        <div className={styles.txt_contain}>
          <div className={styles.left} data-aos="fade-up">
            <p>Next To Future</p>
            <span>
            Platform ตัวกลางรับบริจาคด้วย Blockchain เพิ่มความโปร่งใส สร้างความเชื่อมั่นในยุคดิจิทัล
            </span>
            <div className={styles.line}></div>
            <div className={styles.serbox}>
            <FontAwesomeIcon icon={faSearch} className={styles.iconser}/>
            <input
              type="text"
              className={styles.inpser}
              placeholder="ค้นหา โครงการที่สนใจเลย !!"
            />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main_center}>
        <div className={styles.contain}>
          <div className={styles.left}>
            <img src="/index/p1.png" alt="Logo" />
          </div>
          <div className={styles.right}>
            <p>
              <span className={styles.txt}>BlockChain</span> (บล็อกเชน)
              คืออะไร?
            </p>
            <span>
              บล็อกเชนเป็นเหมือน สมุดบันทึกดิจิทัล ที่เก็บข้อมูลต่างๆ ไว้ในรูปแบบของ "บล็อก" แต่ละบล็อกจะมีข้อมูล เช่น รายการธุรกรรมหรือข้อมูลสำคัญอื่นๆ โดยบล็อกเหล่านี้จะถูก เชื่อมต่อกันเหมือนโซ่(chain) ข้อมูลที่ถูกบันทึกในบล็อกเชนจะปลอดภัยเพราะไม่สามารถแก้ไขข้อมูลย้อนหลังได้ กระจายตัวข้อมูลทั้งหมดจะถูกแชร์ไปยังผู้ใช้งานในเครือข่ายทำให้ไม่มีใครควบคุมข้อมูลทั้งหมดได้
            </span>
          </div>
        </div>
      </div>
      <Scoreboard />
    </div>
  );
}

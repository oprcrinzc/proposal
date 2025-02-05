"use client";
import styles from "@/app/signin/page.module.css"; // Import CSS from contact folder
import Navbar from "@/app/components/nav";
import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import { SignInAction } from "../actions";

export default function SignIn() {
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
      <section className={styles.center}>
        <div className={styles["contain-body"]}>
          <div className={styles.contain}>
            <div className={styles["head-text"]}>
              <p>NTF</p>
              <span>NEXT TO FUTURE</span>
            </div>
            <p className={styles["header-text"]}>เข้าสู่ระบบ</p>
            <form action={SignInAction} className={styles.inp}>
              <div className={styles["inp-f"]}>
                <input
                  type="text"
                  id="username"
                  placeholder="ชื่อผู้ใช้"
                  name="name"
                  className="form-control"
                />
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              <div className={styles["inp-f"]}>
                <input
                  type="password"
                  id="password"
                  placeholder="รหัสผ่าน"
                  name="pwd"
                  className="form-control"
                />
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
              <button type="submit" id="SignIn" className={styles["sign-in-button"]}>
                <FontAwesomeIcon className={styles.icon__} icon={faRightToBracket} /> เข้าสู่ระบบ
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

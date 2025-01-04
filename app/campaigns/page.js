"use client";
import styles from "@/app/contact/page.module.css"; // Import CSS from contact folder
import Navbar from "@/app/components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function a() {
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
      <div className={`${styles.body} container-fluid`}>
        <div className={styles.bg}>
          <img src="/contact/bg.jpg" alt="Background" className="img-fluid" />
        </div>
        <div className={styles.main}>
          <div className={`${styles.contactContain} text-center`}>
            <p className="display-4 fw-bold">Contact Us</p>
            <span>ติดต่อเรา</span>
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className={`${styles.formContain} col-md-6`}>
              <div className={`${styles.caonContain} p-4 border rounded`}>
                <div className={`${styles.top} mb-4`}>
                  <p className="display-5 fw-bold">
                    <i className="bi bi-lightbulb-fill text-warning"></i> Your small
                    act of kindness can be a beacon of light for many others.
                  </p>
                  <span className="text-muted fs-4">
                    น้ำใจเล็กๆ ของคุณ คือแสงสว่างสำหรับใครอีกหลายคน
                  </span>
                </div>
                <div className={styles.bottom}>
                  <div className="row mb-3">
                    <div className={`${styles.inp} col`}>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="ชื่อ"
                      />
                    </div>
                    <div className={`${styles.inp} col`}>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="E-mail ( ไม่ระบุใส่ - )"
                      />
                    </div>
                    <div className="row mb-3">
                      <div className={`${styles.inp} col`}>
                        <input
                          type="text"
                          id="address"
                          className="form-control"
                          placeholder="ที่อยู่"
                        />
                      </div>
                      <div className={`${styles.inp} col`}>
                        <input
                          type="text"
                          id="phone"
                          className="form-control"
                          placeholder="เบอร์โทรศัพท์"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      id="detail"
                      className="form-control"
                      placeholder="รายละเอียดเพิ่มเติม"
                      style={{ height: "auto", minHeight: "100px" }}></textarea>
                  </div>
                  <button id="save" className="btn btn-success w-100">
                    <i className="fa-regular fa-paper-plane"></i> ส่งแบบฟอร์ม
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.gpsContain}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import styles from "@/app/campaigns/page.module.css"; // Import CSS from contact folder
import Navbar from "@/app/components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

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
        <div className={styles.centerul}>
          <FontAwesomeIcon icon={faSearch} className={styles.iconser} />
          <input
            type="text"
            className={`${styles.inpser} form-control`}
            placeholder="ค้นหา โครงการที่สนใจเลย !!"
          />
        </div>
        {/* Cards Section */}
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 p-5">
          {[...Array(6)].map((_, index) => {
            const imageNames = [
              "p1.jpg",
              "p2.jpg",
              "p3.jpg",
              "p4.jpg",
              "p5.webp",
              "p6.jpg",
            ];
            return (
              <div className="col" key={index}>
                <div className="card" data-aos="fade-up">
                  <img
                    src={`/campaign/${imageNames[index]}`}
                    className={`${styles.imgh} card-img-top`}
                    alt={`Card Image ${index + 1}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{`Card Title ${index + 1}`}</h5>
                    <p className="card-text">
                      {`This is a description for card ${index + 1}.`}
                    </p>
                    <button className="btn btn-primary">Click Me</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Pagination Section */}
        <div className={`${styles.paginationContainer} d-flex justify-content-center mt-4`}>
          <ul className={`pagination ${styles.pagination}`}>
            <li className={`page-item ${styles.pageItem}`}>
              <a className={`page-link ${styles.pageLink}`} href="#">
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </a>
            </li>
            <li className={`page-item ${styles.pageItem}`}>
              <a className={`page-link ${styles.pageLink}`} href="#">
                <FontAwesomeIcon icon={faAngleLeft} />
              </a>
            </li>
            <li className={`page-item ${styles.pageItem}`}>
              <a className={`page-link ${styles.pageLink}`} href="#">1</a>
            </li>
            <li className={`page-item ${styles.pageItem}`}>
              <a className={`page-link ${styles.pageLink}`} href="#">2</a>
            </li>
            <li className={`page-item ${styles.pageItem}`}>
              <a className={`page-link ${styles.pageLink}`} href="#">3</a>
            </li>
            <li className={`page-item ${styles.pageItem}`}>
              <a className={`page-link ${styles.pageLink}`} href="#">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className={`page-item ${styles.pageItem}`}>
              <a className={`page-link ${styles.pageLink}`} href="#">
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

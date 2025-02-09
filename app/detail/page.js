"use client";
import styles from "@/app/detail/page.module.css"; // Import CSS from contact folder
import Navbar from "@/app/components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

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
      <div className={styles.containmain}>
      <div className={styles.containmainleft}>
        <p>Hellow World Developer</p>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        <div className={styles.line00}></div>
        <div className={styles.btnlong}>
  <span className="font-mono text-lg">0xA3b5D1C8eF2F4a6B9C7E8D3a1F0B2E6D4F9A1C2E</span>
  <button className={styles.btnlong}>
  <FontAwesomeIcon icon={faCopy} />
  </button>
</div>

      
     </div>
      <div className={styles.containmainright}>
          <img src="/campaign/p1.jpg"></img>
      </div>

      </div>



        <div className={styles._contain}>
 
        <div className={styles.right_contain}>
          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p4.jpg"></img>
        </div>
        <div className={styles.center_}>
          <p>Hello World Developer</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>เป้าหมาย</p>
              <p>34.0 K / 1.0 M</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button>รายละเอียด</button></div>
              </div>
        </div>
          </div>
          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p5.webp"></img>
        </div>
        <div className={styles.center_}>
          <p>Hello World Developer</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>เป้าหมาย</p>
              <p>34.0 K / 1.0 M</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button>รายละเอียด</button></div>
              </div>
        </div>
          </div>
          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p6.jpg"></img>
        </div>
        <div className={styles.center_}>
          <p>Hello World Developer</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>เป้าหมาย</p>
              <p>34.0 K / 1.0 M</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button>รายละเอียด</button></div>
              </div>
        </div>
          </div>
          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p3.jpg"></img>
        </div>
        <div className={styles.center_}>
          <p>Hello World Developer</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>เป้าหมาย</p>
              <p>34.0 K / 1.0 M</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button>รายละเอียด</button></div>
              </div>
        </div>
          </div>
          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p2.jpg"></img>
        </div>
        <div className={styles.center_}>
          <p>Hello World Developer</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>เป้าหมาย</p>
              <p>34.0 K / 1.0 M</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button>รายละเอียด</button></div>
              </div>
        </div>
          </div>
          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p1.jpg"></img>
        </div>
        <div className={styles.center_}>
          <p>Hello World Developer</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>เป้าหมาย</p>
              <p>34.0 K / 1.0 M</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button>รายละเอียด</button></div>
              </div>
        </div>
          </div>
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
      
        {/* Pagination Section */}
     
      </div>
    </div>
  );
}
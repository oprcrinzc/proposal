"use client";
import styles from "@/app/campaigns/page.module.css"; // Import CSS from contact folder
import Navbar from "@/app/components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";

export default function a() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const dl = [
    {
      title: "",
      body: ""
    }
  ]

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
        <div className={styles._contain}>
        <div className={styles.left_contain}>
            <ul>
              <li>
                <input type="checkbox"></input>
                <span>น้ำท่วม</span>
              </li>
              <li>
                <input type="checkbox"></input>
                <span>แผ่นดินไหว</span>
              </li>
              <li>
                <input type="checkbox"></input>
                <span>ไฟไหม้</span>
              </li>
              <li>
                <input type="checkbox"></input>
                <span>ช่วยเหลือผู้ยากไร้</span>
              </li>
              <li>
                <input type="checkbox"></input>
                <span>ช่วยน้องบนดอย</span>
              </li>
            </ul>
            <div className={styles.line00}></div>
        </div>
        <div className={styles.right_contain}>
          {/* {
            dl.map((d, i)=>{
              return <div key={i} className={styles.cardF}>
              <div className={styles.left_}>
                <img src="/campaign/p4.jpg"></img>
              </div>
              <div className={styles.center_}>
                <p>ช่วย 1000 ชีวิตจากไฟ่ป่า </p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
              <div className={styles.right_}>
                    <p>ยอดบริจาค</p>
                    <p>1.99 M</p>
                    <div className={styles.btnF}>
                  <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
                  <div className={styles.bright_}><button  onClick={()=>{window.location=`detail`}}>รายละเอียด</button></div>
                    </div>
              </div>
                </div>
            })
          } */}
          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p4.jpg"></img>
        </div>
        <div className={styles.center_}>
          <p>ช่วย 1,000 ชีวิตจากไฟป่า – ทุกการบริจาคของคุณคือความหวัง</p>
          ในทุกวินาทีที่ผ่านไป ไฟป่ากำลังเผาทำลายผืนป่า บ้านเรือน และชีวิตของผู้คนและสัตว์นับพัน พวกเขากำลังต้องการความช่วยเหลืออย่างเร่งด่วน!

เราขอเชิญคุณร่วมเป็นส่วนหนึ่งในการช่วยเหลือ 1,000 ชีวิตจากไฟป่า ด้วยการบริจาคเพื่อจัดหาอาหาร น้ำ ยารักษาโรค อุปกรณ์ช่วยชีวิต และการฟื้นฟูสิ่งแวดล้อมที่ถูกทำลายจากเปลวเพลิง

🔥 ไฟป่าไม่รอเวลา ความช่วยเหลือของคุณต้องเร็วกว่า! 🔥

บริจาควันนี้ เพื่อให้พวกเขาได้มีโอกาสรอดและสร้างชีวิตใหม่ ทุกบาทของคุณสามารถเปลี่ยนแปลงชีวิตได้
          </div>
        <div className={styles.right_}>
              <p>ยอดบริจาค</p>
              <p>1.99 M</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button  onClick={()=>{window.location=`detail`}}>รายละเอียด</button></div>
              </div>
        </div>
          </div>

          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p5.webp"></img>
        </div>
        <div className={styles.center_}>
          <p>ยื่นมือช่วย 3,000 ชีวิตให้รอดพ้นจากวิกฤตน้ำท่วม!</p>
          ในขณะนี้ มีผู้ประสบภัยนับพันที่ต้องเผชิญกับน้ำท่วมครั้งใหญ่ บ้านเรือนถูกกระแสน้ำพัดพา ขาดแคลนอาหาร น้ำดื่ม ยารักษาโรค และที่พักพิง พวกเขาต้องการความช่วยเหลือจากคุณอย่างเร่งด่วน!

🌊 น้ำมา เราต้องช่วยกันให้เร็วกว่า! 🌊

ร่วมบริจาควันนี้ เพื่อจัดหาอาหาร น้ำสะอาด อุปกรณ์ช่วยชีวิต และฟื้นฟูชุมชนที่ได้รับความเสียหาย ทุกบาทของคุณสามารถช่วยให้พวกเขาผ่านช่วงเวลานี้ไปได้        </div>
        <div className={styles.right_}>
              <p>ยอดบริจาค</p>
              <p>562 K</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button onClick={()=>{window.location=`detail`}}>รายละเอียด</button></div>
              </div>
        </div>
          </div>
          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p6.jpg"></img>
        </div>
        <div className={styles.center_}>
          <p>อาหารเพื่อชีวิต – ทุกถุงคือความหวัง</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>ยอดบริจาค</p>
              <p>32.1 M</p>
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
          <p>ปลูกต้นไม้วันนี้ เพื่อโลกที่ดีขึ้นในวันพรุ่งนี้</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>ยอดบริจาค</p>
              <p> 1.2 M</p>
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
          <p>พลังแห่งการให้: การบริจาคเพื่อสร้างสังคมที่ดีกว่า</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>ยอดบริจาค</p>
              <p>90 M</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button  onClick={()=>{window.location=`detail`}}>รายละเอียด</button></div>
              </div>
        </div>
          </div>
          <div className={styles.cardF}>
        <div className={styles.left_}>
          <img src="/campaign/p1.jpg"></img>
        </div>
        <div className={styles.center_}>
          <p>พลังแห่งการให้: การบริจาคที่เปลี่ยนแปลงโลก</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className={styles.right_}>
              <p>ยอดบริจาค</p>
              <p>3 M</p>
              <div className={styles.btnF}>
            <div className={styles.bleft_}><button>    <FontAwesomeIcon icon={faStar} /></button></div>
            <div className={styles.bright_}><button  onClick={()=>{window.location=`detail`}}>รายละเอียด</button></div>
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
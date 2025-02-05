"use client";
import { useEffect, useState } from "react";
import styles from "@/app/signup/page.module.css"; // Import CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/app/components/nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
export default function SignupPage() {
  const [text, setText] = useState("");
  const toRotate = ["Welcome"];
  const period = 5000; // Typing effect duration
  let loopNum = 0;
  let isDeleting = false;
  let txt = "";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // 1.5s delay before the typing effect starts
    setTimeout(() => {
      const typeEffect = () => {
        let i = loopNum % toRotate.length;
        let fullTxt = toRotate[i];

        if (isDeleting) {
          txt = fullTxt.substring(0, txt.length - 1);
        } else {
          txt = fullTxt.substring(0, txt.length + 1);
        }

        setText(txt);

        let delta = 200 - Math.random() * 100;
        if (isDeleting) delta /= 2;

        if (!isDeleting && txt === fullTxt) {
          delta = period;
          isDeleting = true;
        } else if (isDeleting && txt === "") {
          isDeleting = false;
          loopNum++;
          delta = 500;
        }

        setTimeout(typeEffect, delta);
      };

      typeEffect();
    }, 1500);
  }, []);

  

  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <div className={styles.register}>
        <div className={styles.contain}>
          <div className={styles.left}>
            <img src="/index/btc.jpg" alt="Logo" />
            <p className={styles.wel_text}>
              <span className="typewriter">{text}</span>
              <span className="cursor">|</span>
            </p>
            <p>
              ทุกการช่วยเหลือของคุณ
              คือการเปลี่ยนแปลงชีวิตและเติมเต็มความหวังให้กับผู้ที่ต้องการ
            </p>
            <div className={styles.linetxt}></div>
            <p>
              Every act of kindness you give is a life-changing gift, bringing
              hope to those in need.
            </p>
            <button type="button">Sign In</button>
          </div>

          {/* Right Side - Signup Form */}
          <div className={styles.right}>
            <p className={styles.texttop}>Sign Up</p>

            {/* Name Input Field */}
            <div className="container">
              <div className="row g-3">
                {/* Prefix (Text Input) */}
                <div className="col-md-2">
                  <div className={styles.waveGroup}>
                    <input
                      type="text"
                      required
                      className={`${styles.input}`}
                    />
                    <span className={styles.bar}></span>
                    <label className={styles.label}>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 0 }}>
                        P
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 1 }}>
                        r
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 2 }}>
                        e
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 3 }}>
                        f
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 4 }}>
                        i
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 5 }}>
                        x
                      </span>
                    </label>
                  </div>
                </div>

                {/* First Name */}
                <div className="col-md-5">
                  <div className={styles.waveGroup}>
                    <input
                      type="text"
                      required
                      className={`${styles.input}`}
                    />
                    <span className={styles.bar}></span>
                    <label className={styles.label}>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 0 }}>
                        F
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 1 }}>
                        i
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 2 }}>
                        r
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 3 }}>
                        s
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 4 }}>
                        t
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 5 }}>
                        &nbsp;
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 6 }}>
                        N
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 7 }}>
                        a
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 8 }}>
                        m
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 9 }}>
                        e
                      </span>
                    </label>
                  </div>
                </div>

                {/* Last Name */}
                <div className="col-md-5">
                  <div className={styles.waveGroup}>
                    <input
                      type="text"
                      required
                      className={`${styles.input}`}
                    />
                    <span className={styles.bar}></span>
                    <label className={styles.label}>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 0 }}>
                        L
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 1 }}>
                        a
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 2 }}>
                        s
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 3 }}>
                        t
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 4 }}>
                        &nbsp;
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 5 }}>
                        N
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 6 }}>
                        a
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 7 }}>
                        m
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 8 }}>
                        e
                      </span>
                    </label>
                  </div>
                </div>

                {/* Username */}
                <div className="col-md-6">
                  <div className={styles.waveGroup}>
                    <input
                      type="text"
                      required
                      className={`${styles.input}`}
                    />
                    <span className={styles.bar}></span>
                    <label className={styles.label}>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 0 }}>
                        U
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 1 }}>
                        s
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 2 }}>
                        e
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 3 }}>
                        r
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 4 }}>
                        n
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 5 }}>
                        a
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 6 }}>
                        m
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 7 }}>
                        e
                      </span>
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <div className={styles.waveGroup}>
                    <input
                      type="email"
                      required
                      className={`${styles.input}`}
                    />
                    <span className={styles.bar}></span>
                    <label className={styles.label}>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 0 }}>
                        E
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 1 }}>
                        m
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 2 }}>
                        a
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 3 }}>
                        i
                      </span>
                      <span
                        className={styles.labelChar}
                        style={{ "--index": 4 }}>
                        l
                      </span>
                    </label>
                  </div>
                </div>

              {/* Password */}
<div className="col-md-6">
  <div className={styles.waveGroup}>
    <input type="password" required className={`${styles.input}`} />
    <span className={styles.bar}></span>
    <label className={styles.label}>
      <span className={styles.labelChar} style={{ "--index": 0 }}>P</span>
      <span className={styles.labelChar} style={{ "--index": 1 }}>a</span>
      <span className={styles.labelChar} style={{ "--index": 2 }}>s</span>
      <span className={styles.labelChar} style={{ "--index": 3 }}>s</span>
      <span className={styles.labelChar} style={{ "--index": 4 }}>w</span>
      <span className={styles.labelChar} style={{ "--index": 5 }}>o</span>
      <span className={styles.labelChar} style={{ "--index": 6 }}>r</span>
      <span className={styles.labelChar} style={{ "--index": 7 }}>d</span>
    </label>
  </div>
</div>

{/* Confirm Password */}
<div className="col-md-6">
  <div className={styles.waveGroup}>
    <input type="password" required className={`${styles.input}`} />
    <span className={styles.bar}></span>
    <label className={styles.label}>
      <span className={styles.labelChar} style={{ "--index": 0 }}>C</span>
      <span className={styles.labelChar} style={{ "--index": 1 }}>o</span>
      <span className={styles.labelChar} style={{ "--index": 2 }}>n</span>
      <span className={styles.labelChar} style={{ "--index": 3 }}>f</span>
      <span className={styles.labelChar} style={{ "--index": 4 }}>i</span>
      <span className={styles.labelChar} style={{ "--index": 5 }}>r</span>
      <span className={styles.labelChar} style={{ "--index": 6 }}>m</span>
      <span className={styles.labelChar} style={{ "--index": 7 }}>&nbsp;</span>
      <span className={styles.labelChar} style={{ "--index": 8 }}>P</span>
      <span className={styles.labelChar} style={{ "--index": 9 }}>a</span>
      <span className={styles.labelChar} style={{ "--index": 10 }}>s</span>
      <span className={styles.labelChar} style={{ "--index": 11 }}>s</span>
      <span className={styles.labelChar} style={{ "--index": 12 }}>w</span>
      <span className={styles.labelChar} style={{ "--index": 13 }}>o</span>
      <span className={styles.labelChar} style={{ "--index": 14 }}>r</span>
      <span className={styles.labelChar} style={{ "--index": 15 }}>d</span>
    </label>
  </div>
</div>

                {/* Submit Button */}
                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="termsCheckbox"
                    />
                    <label className="form-check-label" htmlFor="termsCheckbox">
                      I accept the{" "}
                      <span
                        style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                      >
                        Terms & Conditions
                      </span>
                    </label>
                  </div>
                </div>
                <div className="col-12 text-center ">
                <button className={styles.buttonsign} role="button">Sign Up</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cursor Blinking Animation */}
      <style jsx>{`
        .cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

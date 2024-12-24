import styles from "./page.module.css";
import Navbar from "./components/nav"; // Renamed to PascalCase for React component
import Scoreboard from "./components/scoreboard"

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <div className={styles.bg}></div>
      <div className={styles.main}>
        <div className={styles.txt_contain}>
        <div className={styles.left}>
        <p>Some text Here lol</p>
        <span>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries
        </span>
        <div className={styles.line}></div>
        <input type="text" className={styles.inpser} placeholder="Serch Here"/>
        </div>
        </div>
        
      </div>
    <Scoreboard/>
    </div>
  );
}

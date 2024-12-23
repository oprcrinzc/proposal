import Image from "next/image";
import styles from "./page.module.css";

import ScoreBoard from "./components/scoreboard"

export default function Home() {
  return (
    <div>
      <ScoreBoard/>
    </div>
  );
}

import { Countdown } from "../components/Countdown";
import { Footer } from "../components/Footer";
import { TextPomodori } from "../components/TextPomodori";
import { VideoInfo } from "../components/Videoinfo"

import styles from '../styles/Pages/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerTtitle}>
          <h1>POMODORO</h1>
        </div>
            <Countdown />
            <TextPomodori />
          <div className={styles.containerVideo}>
            <VideoInfo />
          </div>
      </div>
        <Footer />
    </div>
  )
}

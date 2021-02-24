import { Countdown } from "../components/Countdown";
import { TextPomodori } from "../components/TextPomodori";
import { VideoInfo } from "../components/Videoinfo"

import styles from '../styles/Pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <Countdown />
        <VideoInfo />
      </section>
      <TextPomodori />
    </div>
  )
}

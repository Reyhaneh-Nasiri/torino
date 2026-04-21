import Image from "next/image"
import styles from "./Banner.module.css"
import bannerImg from "@/assets/images/torino-hero-travel-illustration.svg"

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <h1 className={styles.title}><span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی</h1>
    </div>
  )
}

export default Banner
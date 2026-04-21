import place1 from "@/assets/images/place1.png"
import place2 from "@/assets/images/place2.png"
import place3 from "@/assets/images/place3.png"
import place4 from "@/assets/images/place4.png"
import Image from "next/image"
import styles from "./WhyUs.module.css"

const WhyUs = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}><div className={styles.polygon}>؟</div> چرا <span>تورینو</span>؟</h2>
      <div className={styles.slider}>
        <div className={styles.images}>
          <Image src={place1} alt="place 1" />
          <Image src={place2} alt="place 2" />
          <Image src={place3} alt="place 3" />
          <Image src={place4} alt="place 4" />
        </div>
        <div className={styles.actions}>
          <i class="fa-solid fa-arrow-right"></i>
          <p>4 / 1</p>
          <i class="fa-solid fa-arrow-left"></i>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
import connectionErrorImg from "@/assets/images/connection-error.svg"

import styles from "./ConnectionError.module.css"
import Image from "next/image"

const ConnectionError = () => {
  return (
    <div className={styles.container}>
      <Image width={322} height={322} src={connectionErrorImg} alt="connection-error-image" />
      <h2 className={styles.title}>اتصال با سرور برقرار نیست!</h2>
      <p className={styles.text}>لطفا بعدا دوباره امتحان کنید.</p>
    </div>
  )
}

export default ConnectionError
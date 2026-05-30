import error404 from "@/assets/images/error-404.svg"
import Image from "next/image"
import styles from "./index.module.css"
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className={`${styles.container} content-boxed`}>
      <Image width={322} height={322} src={error404} alt="error 404 image" />
      <h2 className={styles.title}>صفحه مورد نظر یافت نشد!</h2>
      <Link href="/" className={styles.backToHomeBtn}>بازگشت به صفحه اصلی</Link>
    </div>
  )
}

export default NotFoundPage
import support24h from "@/assets/images/24h-support.png";
import bestPrice from "@/assets/images/best-price.png";
import userSatisfaction from "@/assets/images/user-satisfaction.png";
import Image from "next/image";
import styles from "./index.module.css";

const FEATURES = [
  {
    id: 1,
    image: bestPrice,
    title: "بصرفه ترین قیمت",
    description: "بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.",
  },
  {
    id: 2,
    image: support24h,
    title: "پشتیبانی",
    description: "پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.",
  },
  {
    id: 3,
    image: userSatisfaction,
    title: "رضایت کاربران",
    description: "رضایت بیش از 10هزار کاربر از تور های ما. ",
  },
];
const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        {FEATURES.map((feature) => (
          <div className={styles.card} key={feature.id}>
            <Image width={70} height={64} src={feature.image} alt="something" />
            <div className={styles.content}>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

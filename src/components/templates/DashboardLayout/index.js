import DashboardTabs from "@/components/modules/DashboardTabs"
import styles from "./index.module.css"
const DashboardLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <DashboardTabs />
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
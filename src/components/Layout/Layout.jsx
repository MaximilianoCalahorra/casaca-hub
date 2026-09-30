import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";

export function Layout({ cartCount = 0 }) {
  return (
    <div className={styles.container}>
      <Header cartCount={cartCount} />
      <main className={styles.main}>{<Outlet />}</main>
      <Footer />
    </div>
  );
}

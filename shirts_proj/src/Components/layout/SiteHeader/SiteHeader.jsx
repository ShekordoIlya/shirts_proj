import { Link, useLocation } from "react-router-dom";
import styles from "./SiteHeader.module.scss";

export default function SiteHeader() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo} aria-label="eShirts — главная">
          eShirts
        </Link>
        <nav className={styles.nav} aria-label="Навигация">
          <Link to="/" className={isLanding ? styles.active : undefined}>
            Главная
          </Link>
          <Link
            to="/examples"
            className={location.pathname === "/examples" ? styles.active : undefined}
          >
            Примеры
          </Link>
          <Link to="/#services">Услуги</Link>
          <Link to="/#benefits">Преимущества</Link>
          <Link to="/#process">Процесс</Link>
          <Link to="/#contacts">Контакты</Link>
        </nav>
      </div>

      <Link to="/#contacts" className={styles.cta}>
        Получить расчёт
      </Link>
    </header>
  );
}



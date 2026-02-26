import { Link } from "react-router-dom";
import styles from "./UseCasesSection.module.scss";

export default function UseCasesSection() {
  return (
    <section id="examples" className={styles.section}>
      <div className={styles.top}>
        <h2>Примеры и идеи</h2>
        <Link to="/examples" className={styles.more}>
          Открыть страницу с примерами →
        </Link>
      </div>

      <div className={styles.tags}>
        <span>Корпоративная одежда</span>
        <span>Майки для мероприятий</span>
        <span>Формы для персонала</span>
        <span>Мерч для блогеров</span>
        <span>Подарочные наборы</span>
      </div>
    </section>
  );
}


import { Link } from "react-router-dom";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Нанесём ваш логотип на майки
          <span> для команды, бизнеса и мероприятий</span>
        </h1>
        <p>
          Футболки с принтом, которые люди действительно носят: качественные ткани,
          стойкие краски и аккуратный брендинг под ваш стиль.
        </p>
        <div className={styles.actions}>
          <Link to="/#contacts" className={styles.primaryBtn}>
            Получить расчёт за 15 минут
          </Link>
          <span className={styles.secondaryText}>
            Отправьте логотип и тираж — ответим в рабочее время.
          </span>
        </div>
        <div className={styles.stats}>
          <div>
            <strong>1000+</strong>
            <span>напечатанных футболок</span>
          </div>
          <div>
            <strong>3–5 дней</strong>
            <span>средний срок производства</span>
          </div>
          <div>
            <strong>от 10 шт.</strong>
            <span>минимальный тираж</span>
          </div>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.mockupCard}>
          <div className={styles.tshirt} />
          <div className={styles.badge}>Ваш логотип здесь</div>
        </div>
      </div>
    </section>
  );
}


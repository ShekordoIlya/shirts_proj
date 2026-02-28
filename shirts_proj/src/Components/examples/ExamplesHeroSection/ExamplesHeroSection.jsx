import { Link } from "react-router-dom";
import styles from "./ExamplesHeroSection.module.scss";

export default function ExamplesHeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Примеры работ</h1>
        <p>
          Подборка популярных вариантов нанесения логотипов и надписей на майки.
          Можно повторить стиль, цвета и расположение — или собрать свой вариант.
        </p>
        <div className={styles.actions}>
          <Link to="/#contacts" className={styles.primary}>
            Хочу такой же — рассчитать
          </Link>
          <Link to="/" className={styles.secondary}>
            ← На главную
          </Link>
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.panel}>
          <div className={styles.swatchRow}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className={styles.preview} />
          <div className={styles.caption}>Варианты размещения логотипа</div>
        </div>
      </div>
    </section>
  );
}


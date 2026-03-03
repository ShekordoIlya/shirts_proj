import styles from "./ContactsSection.module.scss";

export default function ContactsSection() {
  return (
    <section id="contacts" className={styles.section}>
      <div className={styles.inner}>
        <div>
          <h2>Расскажите о своём проекте</h2>
          <p>Напишите, сколько маек вам нужно, какого цвета и прикрепите логотип — мы вернёмся с расчётом и предложениями по материалам.</p>
        </div>
        <div className={styles.list}>
          <a href="tel:+375297755669" className={styles.item}>
            <span className={styles.label}>Телефон</span>
            <span className={styles.value}>+375 (29) 775‑56‑69</span>
          </a>
          <a href="mailto:logo@eshirts.ru" className={styles.item} target="_blank" rel="noreferrer">
            <span className={styles.label}>Почта</span>
            <span className={styles.value}>logo@eshirts.ru</span>
          </a>
          <a href="https://t.me/eshirts" className={styles.item} target="_blank" rel="noreferrer">
            <span className={styles.label}>Telegram</span>
            <span className={styles.value}>@eshirts</span>
          </a>
          <a href="https://instagram.com/eshirts" className={styles.item} target="_blank" rel="noreferrer">
            <span className={styles.label}>Instagram</span>
            <span className={styles.value}>@eshirts</span>
          </a>
        </div>
      </div>
    </section>
  );
}

import styles from "./SiteFooter.module.scss";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>eShirts — логотипы на майках</div>
      <div className={styles.contacts}>
        <span>Телефон: +375 (29) 775‑56‑69</span>
        <span>Почта: logo@eshirts.ru</span>
        <span>Telegram: @eshirts</span>
        <span>Instagram: @eshirts</span>
      </div>
    </footer>
  );
}

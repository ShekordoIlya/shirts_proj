import styles from "./ProcessSection.module.scss";

export default function ProcessSection() {
  return (
    <section id="process" className={styles.section}>
      <h2>Как проходит заказ</h2>
      <ol className={styles.steps}>
        <li>
          <span className={styles.stepNumber}>1</span>
          <div>
            <h3>Оставляете заявку</h3>
            <p>
              Пишите нам в Telegram или на почту, прикладываете логотип и желаемый
              тираж.
            </p>
          </div>
        </li>
        <li>
          <span className={styles.stepNumber}>2</span>
          <div>
            <h3>Получаете макет и расчёт</h3>
            <p>
              Предлагаем варианты футболок и размещения логотипа, согласуем цвет и
              сроки.
            </p>
          </div>
        </li>
        <li>
          <span className={styles.stepNumber}>3</span>
          <div>
            <h3>Печатаем и доставляем</h3>
            <p>
              Запускаем тираж в работу и передаём готовые майки вам или в службу
              доставки.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}


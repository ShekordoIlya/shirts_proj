import styles from "./BenefitsSection.module.scss";

export default function BenefitsSection() {
  return (
    <section id="benefits" className={styles.section}>
      <h2>Почему с нами удобно работать</h2>
      <div className={styles.cards}>
        <article className={styles.card}>
          <h3>Качество, которое видно</h3>
          <p>
            Используем проверенные заготовки и стойкие краски — футболки не
            перекосит после стирки, а печать не потрескается.
          </p>
        </article>
        <article className={styles.card}>
          <h3>Подбор под ваш бренд</h3>
          <p>
            Поможем подобрать цвета, расположение и размер логотипа, чтобы майки
            выглядели как часть фирменного стиля.
          </p>
        </article>
        <article className={styles.card}>
          <h3>Прозрачные сроки и стоимость</h3>
          <p>
            Считаем стоимость заранее, без скрытых доплат. Согласуем макет перед
            печатью и держим вас в курсе по срокам.
          </p>
        </article>
      </div>
    </section>
  );
}


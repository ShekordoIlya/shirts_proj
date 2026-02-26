import { useMemo, useState } from "react";
import styles from "./ExamplesGallerySection.module.scss";
import Lightbox from "../../ui/Lightbox/Lightbox";

import imgChestMinimal from "../../../assets/examples/chest-minimal.svg";
import imgBackBig from "../../../assets/examples/back-big.svg";
import imgSleevePatch from "../../../assets/examples/sleeve-patch.svg";
import imgFrontTypography from "../../../assets/examples/front-typography.svg";
import imgTwoColors from "../../../assets/examples/two-colors.svg";
import imgEventPack from "../../../assets/examples/event-pack.svg";

const EXAMPLES = [
  {
    id: "chest-minimal",
    title: "Минимал на груди",
    technique: "DTF-печать",
    placement: "Левая грудь",
    color: "Чёрная/Белая",
    tags: ["Лого", "Корпоратив"],
    note: "Аккуратный вариант для персонала и офисных команд.",
    image: imgChestMinimal,
  },
  {
    id: "back-big",
    title: "Большой логотип на спине",
    technique: "Шелкография",
    placement: "Спина (центр)",
    color: "Белая",
    tags: ["Мероприятие", "Команда"],
    note: "Считывается издалека, идеален для промо и волонтёров.",
    image: imgBackBig,
  },
  {
    id: "sleeve",
    title: "Патч на рукаве",
    technique: "Термотрансфер",
    placement: "Рукав",
    color: "Чёрная",
    tags: ["Лого", "Премиум"],
    note: "Небольшой акцент, хорошо смотрится в паре с принтом спереди.",
    image: imgSleevePatch,
  },
  {
    id: "front-typography",
    title: "Типографика спереди",
    technique: "DTF-печать",
    placement: "Грудь (центр)",
    color: "Бежевая",
    tags: ["Надпись", "Мерч"],
    note: "Лаконично, модно и подходит под бренд-сообщение.",
    image: imgFrontTypography,
  },
  {
    id: "two-colors",
    title: "Двухцветный логотип",
    technique: "Шелкография",
    placement: "Грудь + бирка",
    color: "Белая",
    tags: ["Корпоратив", "Премиум"],
    note: "Чёткие края и правильный цвет при больших тиражах.",
    image: imgTwoColors,
  },
  {
    id: "event-pack",
    title: "Пакет для события",
    technique: "DTF-печать",
    placement: "Грудь + спина",
    color: "Разные",
    tags: ["Мероприятие", "Надпись"],
    note: "Один стиль на разные роли: организаторы, участники, партнёры.",
    image: imgEventPack,
  },
];

const ALL_TAG = "Все";
const TAGS = [ALL_TAG, "Лого", "Надпись", "Корпоратив", "Мерч", "Команда", "Мероприятие", "Премиум"];

export default function ExamplesGallerySection() {
  const [activeTag, setActiveTag] = useState(ALL_TAG);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = useMemo(() => {
    if (activeTag === ALL_TAG) return EXAMPLES;
    return EXAMPLES.filter((x) => x.tags.includes(activeTag));
  }, [activeTag]);

  const lightboxItems = useMemo(() => {
    return filtered.map((x) => ({
      src: x.image,
      alt: `${x.title} — пример нанесения`,
      title: x.title,
    }));
  }, [filtered]);

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2>Подборка вариантов</h2>
        <p>
          Нажмите на тег, чтобы отфильтровать идеи. Любой вариант можно адаптировать под
          ваш логотип, цвет футболки и тираж.
        </p>
      </div>

      <div className={styles.filters} role="tablist" aria-label="Фильтры примеров">
        {TAGS.map((t) => (
          <button
            key={t}
            type="button"
            className={t === activeTag ? styles.filterActive : styles.filterBtn}
            onClick={() => setActiveTag(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((x, idx) => (
          <article
            key={x.id}
            className={styles.card}
            onClick={() => {
              setLightboxIndex(idx);
              setLightboxOpen(true);
            }}
          >
            <button type="button" className={styles.cardBtn} aria-label={`Открыть: ${x.title}`}>
              <img className={styles.previewImg} src={x.image} alt="" loading="lazy" />
            </button>
            <div className={styles.body}>
              <h3>{x.title}</h3>
              <dl className={styles.meta}>
                <div>
                  <dt>Техника</dt>
                  <dd>{x.technique}</dd>
                </div>
                <div>
                  <dt>Размещение</dt>
                  <dd>{x.placement}</dd>
                </div>
                <div>
                  <dt>Футболка</dt>
                  <dd>{x.color}</dd>
                </div>
              </dl>
              <p className={styles.note}>{x.note}</p>
              <div className={styles.tagRow}>
                {x.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        items={lightboxItems}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}



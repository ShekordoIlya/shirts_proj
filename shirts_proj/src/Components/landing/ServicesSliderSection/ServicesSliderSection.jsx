import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./ServicesSliderSection.module.scss";

import imgDTF from "../../../assets/services/dtf.svg";
import imgScreen from "../../../assets/services/screenprint.svg";
import imgTransfer from "../../../assets/services/heattransfer.svg";
import imgEmbroidery from "../../../assets/services/embroidery.svg";

const AUTOPLAY_MS = 3000;
const SWIPE_THRESHOLD_PX = 40;

export default function ServicesSliderSection() {
  const slides = useMemo(
    () => [
      {
        key: "dtf",
        title: "DTF‑печать",
        desc: "Ярко, детально, подходит для сложных логотипов и градиентов.",
        image: imgDTF,
        points: ["Тираж от 10 шт.", "Хорошо для мелких деталей", "Быстрый запуск"],
      },
      {
        key: "screen",
        title: "Шелкография",
        desc: "Идеально для больших тиражей и стабильного фирменного цвета.",
        image: imgScreen,
        points: ["Отлично для 50+ шт.", "Чёткие края", "Максимальная стойкость"],
      },
      {
        key: "transfer",
        title: "Термотрансфер",
        desc: "Плёнка/флекс для аккуратных надписей и номеров, быстро и чисто.",
        image: imgTransfer,
        points: ["Номера/имена", "Контрастные надписи", "Короткие сроки"],
      },
      {
        key: "embroidery",
        title: "Вышивка",
        desc: "Премиальный объёмный вид, отлично для небольших логотипов и патчей.",
        image: imgEmbroidery,
        points: ["Премиум ощущение", "Долговечность", "Аккуратный патч"],
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);

  useEffect(() => {
    if (isPaused) return undefined;

    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(t);
  }, [slides.length, isPaused]);

  const active = slides[index];

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocus = () => setIsPaused(true);
  const handleBlur = () => setIsPaused(false);

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStartXRef.current = t.clientX;
    touchStartYRef.current = t.clientY;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (touchStartXRef.current == null || touchStartYRef.current == null) return;

    const t = e.touches[0];
    const dx = t.clientX - touchStartXRef.current;
    const dy = t.clientY - touchStartYRef.current;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD_PX) {
      if (dx > 0) {
        prev();
      } else {
        next();
      }

      touchStartXRef.current = t.clientX;
      touchStartYRef.current = t.clientY;
    }
  };

  const handleTouchEnd = () => {
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    setIsPaused(false);
  };

  return (
    <section id="services" className={styles.section}>
      <div className={styles.head}>
        <h2>Услуги нанесения</h2>
        <p>
          Подберём технику под ваш логотип, ткань и тираж — чтобы выглядело аккуратно и
          служило долго.
        </p>
      </div>

      <div
        className={styles.slider}
        aria-label="Слайдер услуг нанесения"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocusCapture={handleFocus}
        onBlurCapture={handleBlur}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.card}>
          <div className={styles.media}>
            <img className={styles.image} src={active.image} alt={active.title} />
          </div>
          <div className={styles.content}>
            <div className={styles.kicker}>Вариант {index + 1} из {slides.length}</div>
            <h3>{active.title}</h3>
            <p className={styles.desc}>{active.desc}</p>
            <ul className={styles.points}>
              {active.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className={styles.controls}>
              <button type="button" className={styles.ctrlBtn} onClick={prev} aria-label="Назад">
                ←
              </button>
              <div className={styles.dots} role="tablist" aria-label="Переключение слайдов">
                {slides.map((s, i) => (
                  <button
                    key={s.key}
                    type="button"
                    className={i === index ? styles.dotActive : styles.dot}
                    onClick={() => setIndex(i)}
                    aria-label={`Показать: ${s.title}`}
                  />
                ))}
              </div>
              <button type="button" className={styles.ctrlBtn} onClick={next} aria-label="Вперёд">
                →
              </button>
            </div>

            <div className={styles.autoplayNote}>Автоперелистывание каждые 3 секунды</div>
          </div>
        </div>
      </div>
    </section>
  );
}



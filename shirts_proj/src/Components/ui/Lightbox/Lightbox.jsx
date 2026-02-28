import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Lightbox.module.scss";

export default function Lightbox({ isOpen, items, initialIndex = 0, onClose }) {
  const safeItems = items ?? [];
  const maxIndex = Math.max(0, safeItems.length - 1);
  const [index, setIndex] = useState(Math.min(Math.max(initialIndex, 0), maxIndex));

  useEffect(() => {
    if (!isOpen) return;
    setIndex(Math.min(Math.max(initialIndex, 0), maxIndex));
  }, [initialIndex, isOpen, maxIndex]);

  const active = safeItems[index];

  const canNavigate = safeItems.length > 1;

  const next = () => {
    if (!canNavigate) return;
    setIndex((i) => (i + 1) % safeItems.length);
  };

  const prev = () => {
    if (!canNavigate) return;
    setIndex((i) => (i - 1 + safeItems.length) % safeItems.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]); // intentionally not depending on next/prev to keep handler stable

  const title = useMemo(() => {
    if (!active) return "Просмотр";
    return active.title ?? "Просмотр";
  }, [active]);

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-label={title}>
      <button
        type="button"
        className={styles.backdropClose}
        aria-label="Закрыть"
        onClick={() => onClose?.()}
      />

      <div className={styles.modal}>
        <div className={styles.topbar}>
          <div className={styles.title}>
            {active?.title ?? "Пример"}
            {safeItems.length > 0 ? (
              <span className={styles.counter}>
                {index + 1}/{safeItems.length}
              </span>
            ) : null}
          </div>

          <button type="button" className={styles.iconBtn} onClick={() => onClose?.()}>
            Закрыть
          </button>
        </div>

        <div className={styles.content}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={prev}
            disabled={!canNavigate}
            aria-label="Предыдущий"
          >
            ←
          </button>

          <div className={styles.imageWrap}>
            {active ? (
              <img className={styles.image} src={active.src} alt={active.alt ?? "Пример"} />
            ) : null}
          </div>

          <button
            type="button"
            className={styles.navBtn}
            onClick={next}
            disabled={!canNavigate}
            aria-label="Следующий"
          >
            →
          </button>
        </div>

        <div className={styles.hint}>
          Esc — закрыть, ←/→ — листать
        </div>
      </div>
    </div>,
    document.body,
  );
}


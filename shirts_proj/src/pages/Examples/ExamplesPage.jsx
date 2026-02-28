import SiteHeader from "../../components/layout/SiteHeader/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter/SiteFooter";
import ExamplesHeroSection from "../../components/examples/ExamplesHeroSection/ExamplesHeroSection";
import ExamplesGallerySection from "../../components/examples/ExamplesGallerySection/ExamplesGallerySection";
import styles from "./ExamplesPage.module.scss";

export default function ExamplesPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <ExamplesHeroSection />
        <ExamplesGallerySection />
      </main>
      <SiteFooter />
    </div>
  );
}


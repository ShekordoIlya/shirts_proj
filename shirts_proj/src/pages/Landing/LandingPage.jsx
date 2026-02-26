import SiteHeader from "../../components/layout/SiteHeader/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter/SiteFooter";
import HeroSection from "../../components/landing/HeroSection/HeroSection";
import ServicesSliderSection from "../../components/landing/ServicesSliderSection/ServicesSliderSection";
import BenefitsSection from "../../components/landing/BenefitsSection/BenefitsSection";
import ProcessSection from "../../components/landing/ProcessSection/ProcessSection";
import UseCasesSection from "../../components/landing/UseCasesSection/UseCasesSection";
import ContactsSection from "../../components/landing/ContactsSection/ContactsSection";
import styles from "./LandingPage.module.scss";

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <HeroSection />
        <ServicesSliderSection />
        <BenefitsSection />
        <ProcessSection />
        <UseCasesSection />
        <ContactsSection />
      </main>
      <SiteFooter />
    </div>
  );
}



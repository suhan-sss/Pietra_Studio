import Hero from "@/components/home/01_Hero";
import Intro from "@/components/home/02_Intro";
import SelectedWork from "@/components/home/03_SelectedWork";
import Approach from "@/components/home/04_Approach";
import Studio from "@/components/home/05_Studio";
import Testimonial from "@/components/home/06_Testimonial";
import Journal from "@/components/home/07_Journal";
import ContactCta from "@/components/home/08_ContactCta";
import ScrollProgress from "@/components/effects/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Intro />
      <SelectedWork />
      <Approach />
      <Studio />
      <Testimonial />
      <Journal />
      <ContactCta />
    </>
  );
}

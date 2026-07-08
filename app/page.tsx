
import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Services variant="home" title="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"/>
      <HomePage />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStream from "@/components/LiveStream";
import Thesis from "@/components/Thesis";
import HowItWorks from "@/components/HowItWorks";
import Engine from "@/components/Engine";
import Agents from "@/components/Agents";
import Delivery from "@/components/Delivery";
import Chain from "@/components/Chain";
import TokenUtility from "@/components/TokenUtility";
import Presale from "@/components/Presale";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LiveStream />
        <Thesis />
        <HowItWorks />
        <Engine />
        <Agents />
        <Delivery />
        <Chain />
        <TokenUtility />
        <Presale />
        <Roadmap />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

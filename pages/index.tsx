import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Footer from "../components/footer";
import Tenants from "../components/tenants";

const Desktop: NextPage = () => {
  return (
    <div className="w-full h-[2535px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[561.9px] box-border leading-[normal] tracking-[normal] mq750:h-auto">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
        <Navbar />
        <Hero />
      </section>
      <About />
      <section className="w-[1420px] flex flex-row items-start justify-center pt-0 px-5 pb-[43px] box-border max-w-full shrink-0 text-center text-29xl text-dark-green font-section-title">
        <h1 className="m-0 w-[360px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-10xl mq1050:text-19xl">
          <span className="text-darkgoldenrod">Our</span>
          <span>{` `}</span>
          <span>Tenants</span>
        </h1>
      </section>
      <Tenants />
      <Footer />
    </div>
  );
};

export default Desktop;

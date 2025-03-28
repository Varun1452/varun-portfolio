"use client";
import { Preahvihear } from "next/font/google";
import Header from "./Header/page";
import Hero from "./Hero/page";
import Skills from "./Skills/page";
import ConnectWithME from "./ConnectWithMe/page";
import Footer from "./Footer/page";
import Contact from "./ContactMe/page";
import Projects from "./ProjectsWorkedOn/page";

const preahvihear = Preahvihear({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${preahvihear.className}`}>
      <Header />
      <Hero />
      <Skills />
      <ConnectWithME />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

import About from "@/app/sections/About";
import Contact from "@/app/sections/Contact";
import Hero from "@/app/sections/Hero";
import Nav from "@/app/sections/Nav";
import Projects from "@/app/sections/Projects";
import Skills from "@/app/sections/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

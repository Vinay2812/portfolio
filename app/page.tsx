"use client";
import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

export default function Home() {
  const [active, setActive] = useState("about");
  return (
    <div className="relative z-0 bg-primary font-sans">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar active={active} setActive={setActive} />
        <Hero />
      </div>
      <About setActive={setActive} />
      <Experience setActive={setActive} />
      <Works setActive={setActive} />
      <Tech setActive={setActive} />
      <Feedbacks />
      <div className="relative z-0">
        <Contact setActive={setActive} />
        <StarsCanvas />
      </div>
    </div>
  );
}

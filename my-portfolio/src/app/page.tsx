"use client"
import Hero from "./components/Hero";
import Project from "./components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function Home () {
useEffect(()=>{
AOS.init({
easing:"ease-out-back",
duration: 1200,
delay: 100,
mirror: true,
anchorPlacement: "bottom-bottom",
offset:160,
});
AOS.refresh();
},[]);

return (
<main>
    <Hero />
    <About />
    <Project />
    <Skills />
    <Contact />
</main>
);
}
            
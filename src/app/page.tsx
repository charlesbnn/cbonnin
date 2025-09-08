'use client';
import Header from "@/components/header";
import Svghome from "@/components/svgHome";
import Projets from "@/components/projets";
import Experiences from "@/components/experiences";
import Presentation from "@/components/presentation";
import { useEffect, useState } from "react";
export default function Home() {
const [ready, setReady] = useState(false);
useEffect(() => {
  const t = setTimeout(() => setReady(true), 2200);
  return () => clearTimeout(t);
}, []);
  return (
    <>
      <Header className={ready ? "fadeInUp-animation" : "hidden"}/>
      <Svghome/>
      <main className=" md:max-w-[1600px] m-auto relative md:top-[23vh] mx-auto" >
        <Presentation className={ready ? "fadeInUp-animation" : "hidden"}/>
      
        <Projets className={ready ? "fadeInUp-animation" : "hidden"} />

        <Experiences className={ready ? "fadeInUp-animation" : "hidden"} />

      </main>
      
    </>
  );
}

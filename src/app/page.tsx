import Header from "@/components/header";
import Svghome from "@/components/svgHome";
import Projets from "@/components/projets";
import Experiences from "@/components/experiences";
import Presentation from "@/components/presentation";

export default function Home() {

  return (
    <>
      <Header/>
      <Svghome/>
      <main className=" md:max-w-[1600px] m-auto relative md:top-[23vh] mx-auto" >
        <Presentation />
      
        <Projets />

        <Experiences />

      </main>
      
    </>
  );
}

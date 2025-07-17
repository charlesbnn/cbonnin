import Image from "next/image";

export default function Presentation() {
    return (
    <>
        <section id="presentation" className="grid grid-cols-1 justify-items-center  md:grid-cols-3 gap-y-10 md:gap-8 mx-auto mb-8 foreground" >
            <article className="grid-cols-3 md:grid-cols-1 mx-auto border__software bg-window p-4">
            <h2 className="heading__vivid h-[38px] px-4" >Bonjour!</h2>
            <Image className="m-auto p-2 my-4" src="/images/pfp.jpg" alt="photo de moi" width={300} height={300} />
            <p className="m-auto px-2 presentation__text">Bonjour, je m&apos;appelle <span>Charles</span>. Je suis un développeur web habitant à Bordeaux.</p>
            <p className="m-auto px-2 presentation__text">J&apos;aime apprendre de nouvelles techniques pour trouver des solutions aux problèmes que je rencontre dans les produits sur lesquel je travaille</p>
            <p className="m-auto px-2 presentation__text">Chaque jour, j&apos;essaie de faire mieux que la veille.</p>
            </article>
            <article id="a_propos" className="col-span-2 flex flex-wrap pt-[38px] border__software bg-window px-2">
            <ul className="card__pres w-1/2 p-4">
                <li>
                <div  className="icon__pres mx-auto" >
                    <Image className="mt-[7px] w-[70px]" src="/images/front_icon.svg" width={70} height={70} alt="front-end icon" aria-label="front-end developer"/>
                </div>
                <h3>Front-end</h3>
                <p>Je crée des applications à l&apos;ergonomie simple en ayant à coeur l&apos;expréience utilisateur et l&apos;accessibilité.</p>
                </li>
            </ul>
            <ul className="card__pres w-1/2 p-4">
                <li>
                    <div className="icon__pres mx-auto" >
                        <Image className="mt-[20px] w-[70px]" src="/images/back_icon.svg" width={70} height={70} alt="back-end icon" aria-label="back-end developer" />
                    </div>
                    <h3>Back-end</h3>
                    <p>Je suis spécialisé en PHP/Symfony. J&apos;adore créer des applications complexes en utilisant ces langages</p>
                </li>
            </ul>
            <ul className="card__pres w-1/2 p-4">
                <li>
                <div className="icon__pres mx-auto" >
                    <Image className="mt-[9px] w-[70px]" src="/images/clean_code_icon.svg"  width={70} height={70}  alt="clean code icon" aria-label="clean code importance"/>
                </div>
                <h3>Clean code</h3>
                <p>L&apos;écriture de code maintenable est importante pour moi, je suis les règles et modèles de code des application sur lesquelles je travaille.</p>
                </li>
            </ul>
            <ul className="card__pres w-1/2 p-4">
                <li>
                <div className="icon__pres mx-auto">
                    <Image  className="mt-[5px] w-[80px]" src="/images/team_icon.svg" width={80} height={80} alt="team player icon" aria-label="team player"/>
                </div>
                    <h3>Team Player</h3>
                    <p>J&apos;utilise des outils de versionning et connais peu ou prou la CI/CD. Je suis un adepte de la méthodologie Agile.</p>
                </li>
            </ul>
            </article>
        </section>
    </>  
    );
}

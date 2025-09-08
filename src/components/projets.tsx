'use client';
import Image from "next/image";

type ProjetsProps = React.ComponentPropsWithoutRef<"section">;
export default function Projets({ className }: ProjetsProps) {
  type StackKey = 'symfony' | 'php' | 'jquery' | 'mysql' | 'doctrine' | 'bootstrap' | 'figma' | 'db2';
  const stacks : Record<StackKey, { image: string; name: string; key: string }> ={
    symfony: 
            {
              image:'/images/logo_symfony.svg',
              name: 'Symfony',
              key:'sym'
            }
          ,
    php: 
            {
              image:'/images/logo_php.svg',
              name: 'PHP',
              key:'php'
            }
          ,
    jquery: 
            {
              image:'/images/logo_jquery.svg',
              name: 'JQuery',
              key:'jqe'
            }
          ,
    mysql: 
            {
              image:'/images/logo_mysql.svg',
              name: 'Mysql',
              key:'msq'
            }
          , 
    doctrine: 
              {
                image:'/images/logo_doctrine.svg',
                name: 'Doctrine',
                key:'doc'
              }
          ,  
    bootstrap: 
              {
                image:'/images/logo_bootstrap.svg',
                name: 'Bootstrap',
                key:'bts'
              }
        , 
    figma: 
          {
            image:'/images/logo_figma.svg',
            name: 'Figma',
            key:'fig'
          }
    , 
    db2: 
          {
            image:'/images/logo_db2.svg',
            name: 'Db2',
            key:'db2'
          }
    , 
          
  };
  const cards = [
    {
      key: 'incidents',
      brand: 'Hermès Sellier',
      name: 'Suivi des incidents',
      image:"/images/h_brand.svg",
      alt:"Logo Hermes",
      details: [
        'Création de l\'application multilingue depuis zéro',
        'Implémentation de la base de données avec doctrine',
        'Application CRUD avec autorisations et parametrages multiples par utilisateurs',
        'Utilisation d\'API de récupération de données et de CRON pour traitements asynchrones',
      ],
      stack:[
       'symfony','doctrine','bootstrap','figma'
      ] as StackKey[]
    },
    {
      key: 'jours',
      brand: 'Hermès Sellier',
      name: 'Suivi des jours travaillés',
      image:"/images/h_brand.svg",
      alt:"Logo Hermes",
      details: [
        'Création de l\'application multilingue depuis zéro',
        'Implémentation de la base de données avec doctrine',
        'Application CRUD avec autorisations et parametrages multiples par utilisateurs',
        'Utilisation d\'API de récupération de données et de CRON pour traitements asynchrones',
        'Création d\'API REST pour utiliser les données dans d\'autres applications'
      ],
      stack:[
       'symfony','doctrine','bootstrap','figma'
      ] as StackKey[]
    },
    {
      key: 'immobilier',
      brand: 'Hermès Sellier',
      name: 'Suivi de projet Immobilier',
      image:"/images/h_brand.svg",
      alt:"Logo Hermes",
      details: [
        'Utilisation de PHP pour ajouter une application multilingue à une suite applicative',
        'Application CRUD avec autorisations et parametrages multiples par utilisateurs ',
      ],
      stack:[
       'php','mysql'
      ] as StackKey[]
    },
    {
      key: 'infocentre',
      brand: 'Hermès Sellier',
      name: 'Infocentre',
      image:"/images/h_brand.svg",
      alt:"Logo Hermes",
      details: [
        'Lift and shift de l\'application vers AWS',
      ],
      stack:[
       'php','db2'
      ] as StackKey[]
    },
    {
      key: 'inedee',
      brand: 'Inedee',
      name: 'Inedee - ERP spécialisé',
      image:"/images/logo_inedee.svg",
      alt:"Logo Inedee",
      details: [
        'Conception du modèle de données',
        'Création d\'un module d\'import des clients (issus d\'une société rachetée par Inedee)',
        'Écriture de requêtes SQL pour les dashboards par utilisateur',
        'Développement de fonctionnalités de gestion spécifiques aux besoins des agences',
        'Correction de bugs et revue de code',
      ],
      stack:[
       'php','db2'
      ] as StackKey[]
    },
  ];

  return (
    <section
      id="projets"
      className={`border__software mb-8 bg-window flex flex-wrap p-2 justify-center items-center md:align-center lg:justify-between flex-col md:flex-row ${className ?? ""}`}
    >
      <h2 className="p-4 heading__vivid w-full">Projets</h2>

      {cards.map((card) => (
        <article
          key={card.key}
          className="card__container pjtBorder cursor-pointer flex flex-row flex-wrap items-center w-[80%] md:w-[750px] mb-2 bg-white"
        >
          <div className="card__heading  w-full grid grid-cols-4 grid-rows-2 md:h-[60px]">
            <div className="md:row-span-2 col-span-1">
              <Image className="card__image mr-[10px]" src={card.image} width={50} height={50} alt= {card.alt}/>
            </div>
            <div className="md:col-span-2 col-span-3">
              <div className="card__brandName p-1">{card.brand}</div>
              <div className="card__brandName p-1">{card.name}</div>
            </div>
              <div className="card__techStack p-1 col-span-4 md:col-span-1 md:col-start-4 text-center">
               {card.stack?.map((tech) => {
                  const techData = stacks[tech];
                  if (!techData) return null;
                  return (
                    <Image
                      key={techData.key}
                      src={techData.image}
                      alt={techData.name}
                      width={40}
                      height={40}
                      title={techData.name}
                      className="inline-block p-2 h-full"
                    />
                  );
                })}
              </div>
          </div>
          <div className="card__listContainer w-full flex nowrap flex-col md:flex-row p-4">            
            <ul className="card__list flex flex-col justify-center min-h-[150px]">
                  {card.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
            </ul>
          </div>
          
        </article>
      ))}
    </section>
  );
}
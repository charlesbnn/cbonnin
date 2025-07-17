'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';

export default function Projets() {

  const [displayed, setDisplayed] = useState<string | null>(null);
  const containerRef = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.card__project')) {
        setDisplayed(null);
    }   
  };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

  const toggleCard = (key: string) => {
    setDisplayed((prev) => (prev === key ? null : key));
  };
  

  const cards = [
    {
      key: 'incidents',
      brand: 'Hermès Sellier',
      name: 'Suivi des incidents',
      image:"/images/h_brand.svg",
      details: [
        'Created application from scratch in Symfony 6.4',
        'Implemented the database with doctrine',
        'CRUD application with authorization groups and multiple entities impacted',
        'API to fetch data and CRON to send mails to employees',
      ],
    },
    {
      key: 'jours',
      brand: 'Hermès Sellier',
      name: 'Suivi des jours travaillés',
      image:"/images/h_brand.svg",
      details: [
        'Created multilingual application from scratch in Symfony 6.4',
        'Implemented the database with doctrine',
        'CRUD application with authorization groups and multiple entities impacted',
        'CRON to send mails to employees',
      ],
    },
    {
      key: 'immobilier',
      brand: 'Hermès Sellier',
      name: 'Suivi de projet Immobilier',
      image:"/images/h_brand.svg",
      details: [
        'Created multilingual application from scratch in Symfony 6.4',
        'Implemented the database with doctrine',
        'CRUD application with authorization groups and multiple entities impacted',
      ],
    },
    {
      key: 'infocentre',
      brand: 'Hermès Sellier',
      name: 'Infocentre',
      image:"/images/h_brand.svg",
      details: [
        'Lift and shift of the application from AS400 to AWS',
        'Changed the database of the app from DB2 to Snowflake',
        'CRUD application with authorization groups and multiple entities impacted',
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      id="projets"
      className="border__software mb-8 bg-window flex flex-wrap p-2 items-center md:justify-between flex-col md:flex-row"
    >
      <h2 className="p-4 heading__vivid w-full">Projets</h2>

      {cards.map((card) => (
        <article
          key={card.key}
          className="card__project p-2 cursor-pointer"
          onClick={() => toggleCard(card.key)}
        >
          <div className="card__heading text-center">
            <span className="card__brandName">{card.brand}</span>
            <span className="card__projectName">{card.name}</span>
          </div>
          <div className="card__img  mx-auto">
            <Image
              className="icon__card"
              src={card.image}
              width={90}
              height={90}
              alt="H de Hermès"
              aria-label="H de Hermès"
            />
          </div>
          <div className={`card__content ${displayed === card.key ? 'active' : 'hidden'}`}>
            <ul className="card__list">
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
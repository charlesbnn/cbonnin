import Image from "next/image";


export default function Experiences() {

  const experiences = [
    { periode : '2023-2025',
      titre : 'Développeur full-stack',
      nom: 'Free-lance - Hermès Sellier',
      image:"/images/h_brand.svg",
      details: [
        'En tant que freelance, j\'ai rejoint l\'équipe des Applications départementales d\'Hermes Sellier.',
        'Dans le cadre d\'une mission longue durée, j\'ai été amené à developper plusieurs applications en Symfony et à maintenir celles-ci.',
      ],
      key : 'flc'
    },
    { periode : '2022',
      titre : 'Consultant développeur',
      nom: 'Wevii - Agence de services et de paiements',
      image:"/images/wevii.svg",
      details: [
        'J\'ai travaillé sur l\'application du chomage partiel en tant que consultant.',
      ],
      key : 'cns'
    },
    { periode : '2019-2022',
      titre : 'Développeur back-end',
      nom: 'Inedee',
      image:"/images/logo_inedee.svg",
      details: [
        'Implemented the database with doctrine',
        'CRUD application with authorization groups and multiple entities impacted',
        'API to fetch data and CRON to send mails to employees',
      ],
      key : 'bck'

    },
  ];

  return (
    <>
    <section id="experiences" className="border__software  mb-8 bg-window px-2 flex items-center flex-col nowrap ">
        <h2 className="heading__vivid p-4 w-full">Éxperiences</h2>
        {experiences.map((exp,idx) => (
          <article key={exp.key} className="art__experience w-full px-4 py-8 flex flex-row max-height-[10rem]">
               {idx % 2 === 0 ? (
            <>
              <div className="exp__infos w-1/2 text-right px-6 tiret">
                <div className="exp__periode">{exp.periode}</div>
                <div className="exp__titre">{exp.titre}</div>
              </div>
              <div className="exp__details w-1/2 px-6">
                <ul className="exp__detailsList">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="exp__icon">

              </div>
            </>
          ) : (
            <>
              <div className="exp__details  w-1/2 text-right px-6 tiret">
                <ul className="exp__detailsList">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="exp__infos w-1/2 px-6">
                <div className="exp__periode">{exp.periode}</div>
                <div className="exp__titre">{exp.titre}</div>
              </div>
              <div className="exp__icon">

              </div>
            </>
          )}
          </article>
        ))}
    </section>
    </>
  )
}
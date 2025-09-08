type HeaderProps = React.ComponentPropsWithoutRef<"header">;

export default function Header({className} : HeaderProps){
    return (
    <header className={`flex w-full justify-around order-3 flex-row absolute top-[7rem] md:top-[16rem] ${className ?? ""}`}>
        <ul className="flex w-full justify-around flex-row">
          <li><p>Développeur free-lance</p></li>
          <li><p>Bordeaux</p><p>FRANCE</p></li>
          <li><p>CONTACT</p><p>info@cbonnin.dev</p></li>
          <li><p>LinkedIn</p><p>github</p></li>
        </ul>
      </header>
    )
}


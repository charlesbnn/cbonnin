'use client';

 interface ActionButtonsProps {
  expand: () => void;
  minimise: () => void;
}


export default function ActionButtons({expand,minimise} : ActionButtonsProps){


    return(
    <div className="actionsButtons__container flex no-wrap absolute justify-end w-full top-[-30px]">    
        <div onClick={minimise} className="action__button minus">_</div>
        <div onClick={expand} className="action__button expand"></div>
    </div>
    );
    
}
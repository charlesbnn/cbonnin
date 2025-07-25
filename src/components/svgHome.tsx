'use client';
import { useEffect,useRef,useState } from "react";

export default function Svghome(){
    const svgColor = '#000764';
    const svgContainer =  useRef<SVGSVGElement | null>(null);
    const sourceRef = useRef<HTMLDivElement | null>(null);
    const targetRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(()=>{
        const webDiv = document.querySelector('h1');
        const hider = document.querySelector('#hider');
        let resizeObserver: ResizeObserver | null = null; // Declare with proper scope
        if (sourceRef.current) {
            resizeObserver = new ResizeObserver(() => {
                const newWidth = sourceRef.current?.offsetWidth ?? 0;
                const newHeight = (sourceRef.current?.offsetHeight ?? 0) + 3;
                setWidth(newWidth);
                setHeight(newHeight);
            });

            resizeObserver.observe(sourceRef.current);
        }
        const paths = svgContainer.current?.querySelectorAll("path");
        let time = 0;
        paths?.forEach((path:Element,index:number) => {
            time = index === 0 ? 1: 100*(index/2);
            if(index >6){
                time = 300*(index/2)
            }
            setTimeout(()=>{
                path.classList.add('show');
                path.classList.add('animateHeightUp');
            },time);
        });
        setTimeout(()=>{
            webDiv?.classList.remove('hidden');
            webDiv?.classList.add('animateHeightDown');
            hider?.parentElement?.removeChild(hider);
        },time+200 )
        
    return () => {
        resizeObserver?.disconnect();
    };

    },[]);
    return (
    <section id="svg__wrapper" className="flex flex-col sm:mt-20 md:mt-25 justify-center">
        <article className="flex justify-center">
            <svg id="svg__container" width="1600" height="52" viewBox="0 0 1600 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: svgColor }} ref={svgContainer} >
                {/* C*/}<path d="M41.3376 0.669678C54.1817 0.669678 67.8751 2.36428 78.6912 4.62378L79.1931 4.72827L79.0759 5.22729L76.282 17.1287L76.1736 17.5906L75.7078 17.5066C66.6331 15.8878 54.0185 13.9236 41.8806 13.9236C31.9107 13.9236 25.8593 14.9145 22.3064 16.905C20.5491 17.8896 19.4115 19.1155 18.7048 20.5916C17.9935 22.0775 17.7019 23.8526 17.7019 25.9587C17.7019 28.0829 17.993 29.8719 18.7048 31.3679C19.4119 32.8538 20.5504 34.0854 22.3074 35.074C25.8598 37.0728 31.9105 38.0642 41.8806 38.0642C54.0185 38.0642 66.6331 36.099 75.7078 34.4802L76.1736 34.3972L76.282 34.8582L79.0759 46.7595L79.1931 47.2585L78.6912 47.363C67.8751 49.6225 54.1818 51.3171 41.3376 51.3171C26.795 51.3171 16.7008 49.1335 10.2322 44.8523C3.71935 40.5417 0.948073 34.1516 0.947998 25.9587C0.947998 17.7655 3.71961 11.3924 10.2332 7.09937C16.7018 2.83613 26.7956 0.669696 41.3376 0.669678Z"  />
                {/* H*/}<path d="M321.364 49.9021L315 40.6063H275.886L269.445 49.9021H250.509L285.044 1.8739H305.998L340.455 49.9021H321.364ZM282.716 30.6767H308.093L295.443 12.226L282.716 30.6767Z" />
                {/* A*/}<path d="M143.561 1.3739V18.6981H188.349V1.3739H205.103V50.4022H188.349V31.8807H143.561V50.4022H126.807V1.3739H143.561Z"  stroke="black"/>
                {/* R*/}<path d="M402.21 49.9021H386.456V1.8739H439.461C452.499 1.8739 461.579 6.02883 461.579 18.6345C461.579 29.1978 454.672 34.2683 442.954 35.1133L439.539 35.1838L443.73 37.5077L461.114 49.9021H441.324L422.31 35.9584H402.21V49.9021ZM402.21 14.1274V25.2542H437.909C443.109 25.2542 445.282 23.7049 445.282 19.7612C445.282 15.4655 443.109 14.1274 437.909 14.1274H402.21Z" />
                {/* L*/}<path d="M526.896 37.6485H579.436V49.9021H511.142V1.8739H526.896V37.6485Z" />
                {/* E*/}<path d="M698.492 49.9021H627.87V1.8739H698.492V13.0711H643.625V21.0288H697.018V30.2542H643.625V38.7049H698.492V49.9021Z" />
                {/* S*/}<path d="M820.165 36.2401C820.165 46.3809 812.56 50.8175 786.406 50.8175C773.213 50.8175 757.925 49.1274 748.379 47.0147L750.63 35.5358C761.495 37.7189 774.688 39.6204 790.597 39.6204C803.014 39.6204 805.265 38.7049 805.265 35.8175C805.265 32.8598 803.324 32.5077 799.211 32.1556L769.954 30.6063C753.501 29.902 747.525 25.1133 747.525 16.1696C747.525 5.395 757.925 1.02881 782.448 1.02881C791.839 1.02881 807.127 2.36684 817.604 4.40909L815.043 15.1837C806.041 13.564 792.072 12.226 778.801 12.226C764.521 12.226 762.426 12.9302 762.426 15.8175C762.426 18.4936 764.444 18.9161 769.255 19.1978L798.125 20.7471C813.336 21.5218 820.165 26.3105 820.165 36.2401Z"/>
                {/* B*/}<path d="M992.397 49.9021H933.416V1.8739H992.32C1002.95 1.8739 1008.69 5.39503 1008.69 13.6345C1008.69 19.6204 1005.67 23.2119 999.77 24.6204C1006.91 26.0993 1010.64 29.8316 1010.64 37.0852C1010.64 46.2401 1004.5 49.9021 992.397 49.9021ZM987.896 12.6485H948.938V21.0993H988.284C991.777 21.0993 994.105 19.8316 994.105 16.8739C994.105 13.9162 992.242 12.6485 987.896 12.6485ZM989.604 31.1697H948.938V39.9725H989.216C993.95 39.9725 996.045 38.9866 996.045 35.5359C996.045 32.1556 993.562 31.1697 989.604 31.1697Z" />
                {/* O*/}<path d="M1101.83 50.8879C1071.48 50.8879 1058.37 43.071 1058.37 25.8879C1058.37 8.70484 1071.48 0.887939 1101.83 0.887939C1132.17 0.887939 1145.29 8.70484 1145.29 25.8879C1145.29 43.071 1132.17 50.8879 1101.83 50.8879ZM1101.83 38.6344C1123.02 38.6344 1129.22 35.1837 1129.22 25.8879C1129.22 16.5922 1123.02 13.1415 1101.83 13.1415C1080.56 13.1415 1074.12 16.5922 1074.12 25.8879C1074.12 35.1837 1080.56 38.6344 1101.83 38.6344Z" />
                {/* N*/}<path d="M1210.59 49.9021H1194.84V1.8739H1212.84L1258.32 34.3387V1.8739H1274.08V49.9021H1256.46L1210.59 16.8739V49.9021Z" />
                {/* N*/}<path d="M1340.89 49.9021H1325.13V1.8739H1343.14L1388.62 34.3387V1.8739H1404.37V49.9021H1386.75L1340.89 16.8739V49.9021Z" />
                {/* I*/}<path d="M1471.18 49.9021H1455.43V1.8739H1471.18V49.9021Z" />
                {/*N*/}<path d="M1537.97 49.9021H1522.21V1.8739H1540.22L1585.69 34.3387V1.8739H1601.45V49.9021H1583.83L1537.97 16.8739V49.9021Z" />
            </svg>
        </article>
        <article className=" w-full flex justify-center h-[60px]" id="hero">
            <h1 ref={sourceRef} className="title hidden">WEB DEVELOPER</h1>
            <div ref={targetRef} style={{ width: `${width}px`,height: `${height}px`, background: '#fff' }} id="hider" className="absolute"></div>
        </article>
    </section>
          );
}
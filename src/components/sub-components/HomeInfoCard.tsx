import { useRef } from "react";
import useInViewport from "../../useInViewport";
import { Link } from "react-router-dom";

type HomeInfoCardProps = {
   bgColor: string,
   fgColor: string,
   info: [string, string],
   logoCode: string
}

const HomeInfoCard = ({bgColor, fgColor, info, logoCode}: HomeInfoCardProps): React.ReactElement => {
   const ref:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

   const isInViewport:boolean = useInViewport(ref)

   return(
      <div ref={ref} className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 slide-in-from-left-20' : 'invisible'} relative flex flex-col items-center justify-center gap-y-5 p-5 min-h-[300px] md:w-[250px] lg:w-[300px] xl:w-[350px] rounded-md ${bgColor} ${fgColor} transition-colors hover:bg-indigo-700`}>
            <span className="font-lineaBasic text-[48px] lg:text-[60px] text-center">{logoCode}</span>
         <span className={`text-sm lg:text-base`}>{info[0]}</span>
         <span className={`text-base lg:text-lg text-center`}>{info[1]}</span>
         <Link to='/' reloadDocument={true} className="absolute right-2 bottom-2 p-2 rounded-sm text-sm lg:text-base transition-colors hover:bg-slate-300 hover:text-indigo-900">{String.fromCharCode(8594)} Read More</Link>
      </div>
   )
}

export default HomeInfoCard;
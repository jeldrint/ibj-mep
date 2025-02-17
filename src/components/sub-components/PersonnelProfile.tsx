import { useRef } from "react";
import useInViewport from "../../useInViewport";
import { PersonnelProps } from "../../types";

const PersonnelProfile = ({name, title, img, desc1, desc2} : PersonnelProps) : React.ReactElement => {
   const ref:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport: boolean = useInViewport(ref)

   return(
      <div ref={ref} className='my-[50px] xl:my-[100px]'>
         <div className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 slide-in-from-top-20' : 'invisible'}`}>
            <img className={`float-left mr-5 h-[20vh] sm:h-[30vh] rounded-md opacity-80`} src={img} alt='ibrahim-bin-jibreen' />
            <span className='text-lg font-bold'>{name} &mdash;</span>
            <span className='text-base font-bold'>{title}</span>
         </div>
         <div className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 slide-in-from-right-10' : 'invisible'} text-base lg:text-lg`}>
            {desc1}
            <br /><br />
            {desc2}
         </div>
      </div>
   )
}

export default PersonnelProfile;
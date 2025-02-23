import { useRef } from 'react';
import personnelpic1 from '../images/Ibrahim.png'
import personnelpic2 from '../images/emerson.png'
import personnelpic3 from '../images/hani.png'
import personnelpic4 from '../images/waleed.png'
import personnelpic5 from '../images/abdelhadi.png'
import personnelpic6 from '../images/sisay1.png'
import useInViewport from '../useInViewport';
import PersonnelProfile from './sub-components/PersonnelProfile';
import { personnel1desc1, personnel1desc2, personnel2desc1, personnel2desc2, personnel3desc1, personnel4desc1, personnel5desc1, personnel6desc1 } from '../texts';


const Personnel = () : React.ReactElement => {
   const ref:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport: boolean = useInViewport(ref)

   return(
      <section className='p-[50px] md:p-[100px] lg:p-[150px] text-justify bg-indigo-100'>
         <header ref={ref} className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 slide-in-from-right-10' : 'invisible'} inline-block mb-5 p-2 text-slate-100 bg-indigo-800 duration-15 text-2xl md:text-4xl font-bold rounded-md`}>
            Key Personnel Profile
         </header>
         <PersonnelProfile name='Mr. Ibrahim Bin Jibreen' title='CEO and President' img={personnelpic1} desc1={personnel1desc1} desc2={personnel1desc2} />
         <PersonnelProfile name='Mr. Emerson Tolentino' title='Project Director' img={personnelpic2} desc1={personnel2desc1} desc2={personnel2desc2} />
         <PersonnelProfile name='Mr. Hani Abd- Elraouf ' title='Finance Manager' img={personnelpic3} desc1={personnel3desc1} />
         <PersonnelProfile name='Mr.  Waleed Al-Sayed Ali Ibrahim' title='Human Resource Manager' img={personnelpic4} desc1={personnel4desc1} />
         <PersonnelProfile name='Mr. Abdelhadi Mohamed Hassan' title='Procurement Manager' img={personnelpic5} desc1={personnel5desc1} />
         <PersonnelProfile name='Mr. Sisay G. Teshale' title='Project Coordinator' img={personnelpic6} desc1={personnel6desc1} />
      </section>
   )
}

export default Personnel;
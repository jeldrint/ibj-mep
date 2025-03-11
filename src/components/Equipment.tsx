import { useRef } from 'react';
import pic from '../images/equipment1.jpg'
import useInViewport from '../useInViewport';

const Equipment = () : React.ReactElement => {
   const ref:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport: boolean = useInViewport(ref)

   return(
      <section className='p-[50px] md:p-[100px] lg:p-[150px] text-justify bg-indigo-100'>
         <div ref={ref} className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 slide-in-from-right-10' : 'invisible'} mb-[50px]`}>
            <header className={`inline-block mb-5 p-2 text-slate-100 bg-indigo-800 duration-15 text-2xl md:text-4xl font-bold rounded-md`}>
               Company Equipment List
            </header>
            <br />
            {/* TWO COLUMNS: */}
            <div className='flex flex-col gap-y-5 items-center md:flex-row md:gap-x-5 md:justify-evenly'>
               {/* TEXT */}
               <div className='self-start text-sm md:text-base lg:text-xl'>
                  <ul className='leading-loose'>
                     <li>Forklift (2.0 tons) - 2 units</li>
                     <li>Pressing Machines - 6 units</li>
                     <li>Plainer Machines - 6 units</li>
                     <li>Sanding Machines - 3 units</li>
                     <li>Complete set of Saw and Boring Machines - 5 units</li>
                     <li>Electrical Drill Machines - 1 unit per technician</li>
                     <li>Dyna Trucks (2500 kg. capacity) - 1 unit</li>
                     <li>Dyna Trucks (3000 kg. capacity) - 1 unit</li>
                     <li>Pick-up services - 5 units</li>
                     <li>Service Buses (30 seaters) - 2 units</li>
                     <li>Service Buses (15 seaters) - 5 units</li>
                  </ul>
               </div>
               {/* IMAGES */}
               <div>
                  <img className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 slide-in-from-top-20' : 'invisible'} my-2 md:mx-2 max-h-[28vh] sm:max-h-[30vh] md:max-h-[50vh] lg:max-h-[60vh] rounded-md`} src={pic} alt='equipment-pic-1' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Equipment;
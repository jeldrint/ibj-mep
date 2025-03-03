import { useRef } from 'react';
import pic from '../images/manpower1.jpg'
import pic2 from '../images/manpower2.jpg'
import useInViewport from '../useInViewport';

const Manpower = () : React.ReactElement => {
   const ref:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport: boolean = useInViewport(ref)

   return(
      <section className='p-[50px] md:p-[100px] lg:p-[150px] text-justify'>
         <div ref={ref} className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 slide-in-from-right-10' : 'invisible'} mb-[50px]`}>
            <header className={`inline-block mb-5 p-2 bg-slate-300 text-indigo-800 duration-15 text-2xl md:text-4xl font-bold rounded-md`}>
               Manpower Status
            </header>
            <br />
            {/* TWO COLUMNS: */}
            <div className='flex flex-col gap-y-5 items-center md:flex-row md:gap-x-5 md:justify-evenly'>
               {/* IMAGES */}
               <div>
                  <img className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 slide-in-from-top-20' : 'invisible'} my-2 md:mx-2 max-h-[28vh] sm:max-h-[30vh] md:max-h-[50vh] lg:max-h-[60vh] rounded-md`} src={pic} alt='manpower-pic-1' />
                  <img className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 slide-in-from-top-20' : 'invisible'} my-2 md:mx-2 max-h-[28vh] sm:max-h-[30vh] md:max-h-[50vh] lg:max-h-[60vh] rounded-md`} src={pic2} alt='manpower-pic-2' />
               </div>

               {/* TEXT */}
               <div className='text-sm md:text-base lg:text-xl'>
                  <div className='mb-10'>
                     <p className='font-bold'>Electrical/Mechanical Department</p>
                     <ul>
                        <li>Supervisor -1</li>
                        <li>Engineer -2</li>
                        <li>Foreman -2</li>
                        <li>Technicians -20</li>
                        <li>Skilled Laborers -25</li>
                     </ul>
                  </div>
                  <div className='mb-10'>
                     <p className='font-bold'>Firefighting</p>
                     <ul>
                        <li>Supervisor -1</li>
                        <li>Foreman -2</li>
                        <li>Technicians -5</li>
                        <li>Skilled Laborers -20</li>
                     </ul>
                  </div>
                  <div className='mb-10'>
                     <p className='font-bold'>HVAC - Ducting</p>
                     <ul>
                        <li>Supervisor -2</li>
                        <li>Foreman -2</li>
                        <li>Installer -20</li>
                        <li>Fabricator -10</li>
                        <li>Insulator -5</li>                  
                     </ul>
                  </div>
                  <div className='mb-10'>
                     <p className='font-bold'>HVAC - Chilled Water</p>
                     <ul>
                        <li>Skilled Technicians -5</li>
                        <li>Fabricator -5</li>
                     </ul>
                  </div>
                  <div className='mb-10'>
                     <p className='font-bold'>Plumbing</p>
                     <ul>
                        <li>Foreman -1</li>
                        <li>Plumber -10</li>
                        <li>Skilled Laborers -33</li>
                     </ul>
                  </div>
                  <div className='mb-10'>
                     <p className='font-bold'>Total Number of Manpower: 193</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Manpower;
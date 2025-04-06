import { useRef } from 'react';
import pic2 from '../images/2.jpg'
import useInViewport from '../useInViewport';
import WhoWeAre from './WhoWeAre';
import Personnel from './Personnel';
import Manpower from './Manpower';
import Equipment from './Equipment';

const About = () : React.ReactElement => {
   const ref1:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport1:boolean = useInViewport(ref1)
   const ref4:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport4:boolean = useInViewport(ref4)

   return(
      <div className="w-full h-full">
         {/* ABOUT Nav  */}
         <section ref={ref1} className={`${isInViewport1 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-bottom-20' : 'invisible'} relative h-[50vh] bg-cover bg-top lg:bg-[0%_20%] xl:bg-center w-full bg-blue-800 bg-blend-hard-light`} style={{backgroundImage: `url(${pic2})`}}>
            <div className={`${isInViewport1 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-left-10' : 'invisible'} absolute p-9 backdrop-blur-sm h-full w-full flex flex-col gap-y-2 items-center justify-center`}>
               <span className='text-4xl sm:text-6xl text-indigo-800 bg-slate-100 p-2 rounded-md'>ABOUT IBJ</span>
               <span className='text-base lg:text-lg text-black text-center max-w-[900px] bg-slate-100 p-1 rounded-md'>Our main goal is to exceed the client’s satisfaction by giving them the final accepted project at a 
                  very reasonable price, including all supporting consultations and needed services.
               </span>
            </div>
         </section>
         
         {/* ABOUT Body  */}
         <WhoWeAre />
         <Personnel />
         <Manpower />
         <Equipment />
         {/* ABOUT Footer  */}
         <section ref={ref4} className={`${isInViewport4 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-bottom-20' : 'invisible'} relative h-[40vh] bg-cover bg-bottom lg:bg-[0%_85%] w-full bg-blue-800 bg-blend-hard-light`} style={{backgroundImage: `url(${pic2})`}}>
            <div className='opacity-85 absolute p-3 md:p-9 h-full w-full flex flex-col gap-y-2 items-center justify-center backdrop-blur-sm'>
               <span className='text-xl sm:text-4xl md:text-5xl text-nowrap text-center text-indigo-800 bg-slate-100 p-2 rounded-md'>Subscribe to our Newsletter</span>
               <span className='text-sm md:text-base lg:text-lg text-center text-black max-w-[900px] bg-slate-100 p-[1px] rounded-md'>By subscribing to the IBJ newsletter, you'll receive regular updates, news, and job openings delivered straight to your inbox.</span>
               <form className=''>
                  <input className='text-sm md:text-base min-w-[150px] md:min-w-[350px] p-3 rounded-md' name='email' id='email' placeholder='Enter your E-mail Address' type='email' required />
                  <button type='submit' className='p-3 rounded-md text-sm md:text-base  bg-indigo-700 active:bg-indigo-900'>SUBMIT</button>
               </form>
            </div>
         </section>   

      </div>
   )
}

export default About;
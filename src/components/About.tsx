import { useRef } from 'react';
import pic2 from '../images/2.jpg'
import useInViewport from '../useInViewport';
import WhoWeAre from './sub-components/WhoWeAre';

const About = () : React.ReactElement => {
   const ref1:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport1:boolean = useInViewport(ref1)
   const ref4:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport4:boolean = useInViewport(ref4)

   return(
      <div className="w-full h-full">
         {/* ABOUT Nav  */}
         <section ref={ref1} className={`${isInViewport1 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-bottom-20' : 'invisible'} relative h-[50vh] mb-10 md:mb-20 lg:mb-[150px] bg-cover bg-top lg:bg-[0%_20%] xl:bg-center w-full bg-blue-800 bg-blend-hard-light`} style={{backgroundImage: `url(${pic2})`}}>
            <div className={`${isInViewport1 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-left-10' : 'invisible'} absolute p-9 backdrop-blur-sm h-full w-full flex flex-col gap-y-2 items-center justify-center`}>
               <span className='text-4xl sm:text-6xl text-indigo-800 bg-slate-100 p-2 rounded-md'>ABOUT IBJ</span>
               <span className='text-base lg:text-lg text-black text-center max-w-[900px] bg-slate-100 p-1 rounded-md'>Our main goal is to exceed the client’s satisfaction by giving them the final accepted project at a 
               very reasonable price, including all supporting consultations and needed services.</span>
            </div>
         </section>
         
         {/* ABOUT Body  */}
         <WhoWeAre />
         
         {/* ABOUT Footer  */}
         <section id='about-footer' ref={ref4} className={`${isInViewport4 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-bottom-20' : 'invisible'} mt-10 md:mt-20 lg:mt-[150px] relative h-[40vh] bg-cover bg-bottom lg:bg-[0%_85%] w-full bg-blue-800 bg-blend-hard-light`} style={{backgroundImage: `url(${pic2})`}}>
            <div className='opacity-85 absolute p-9 h-full w-full flex flex-col gap-y-2 items-center justify-center backdrop-blur-sm'>
               <span className='text-xl sm:text-4xl md:text-6xl  text-indigo-800 bg-slate-100 p-2 rounded-md'>Footer Area</span>
               <span className='text-sm md:text-base lg:text-lg text-black text-center max-w-[900px] bg-slate-100 p-1 rounded-md'>Lorem ipsum odor amet, 
                  consectetuer adipiscing elit. Magna praesent porta venenatis turpis aenean congue velit quis facilisis. Velit luctus laoreet mus 
                  taciti justo. Est bibendum lectus ad eleifend purus vivamus sem euismod. Inceptos posuere per facilisis nascetur;
                  velit nisl imperdiet. Fringilla fusce rutrum felis sed cras ante molestie.</span>
            </div>
         </section>   

      </div>
   )
}

export default About;
import { useRef } from 'react';
import pic2 from '../images/2.jpg'
import pic4 from '../images/4.jpeg'
import pic5 from '../images/5.jpg'
import useInViewport from '../useInViewport';
const About = () : React.ReactElement => {
   const ref1 = useRef<HTMLDivElement | null>(null);
   const isInViewport1 = useInViewport(ref1)
   const ref2 = useRef<HTMLDivElement | null>(null);
   const isInViewport2 = useInViewport(ref2)
   const ref3 = useRef<HTMLDivElement | null>(null);
   const isInViewport3 = useInViewport(ref3)
   const ref4 = useRef<HTMLDivElement | null>(null);
   const isInViewport4 = useInViewport(ref4)

   return(
      <div className="w-full h-full">
         {/* ABOUT Header  */}
         <section ref={ref1} className={`${isInViewport1 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-bottom-20' : 'invisible'} relative h-[50vh] mb-10 md:mb-20 lg:mb-[150px] bg-cover bg-top lg:bg-[0%_20%] xl:bg-center w-full bg-blue-800 bg-blend-hard-light`} style={{backgroundImage: `url(${pic2})`}}>
            <div className={`${isInViewport1 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-left-10' : 'invisible'} absolute p-9 backdrop-blur-sm h-full w-full flex flex-col gap-y-2 items-center justify-center`}>
               <span className='text-4xl sm:text-6xl text-indigo-800 bg-slate-100 p-2 rounded-md'>ABOUT IBJ</span>
               <span className='text-base lg:text-lg text-black text-center max-w-[900px] bg-slate-100 p-1 rounded-md'>Our main goal is to exceed the client’s satisfaction by giving them the final accepted project at a 
               very reasonable price, including all supporting consultations and needed services.</span>
            </div>
         </section>

         {/* ABOUT Body  */}
         <section className='px-[50px] md:px-[100px] lg:px-[150px] text-justify'>
            <div ref={ref2}>
               <header className={`${isInViewport2 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-right-10' : 'invisible'} inline-block mb-5 p-2 bg-slate-300 text-indigo-800 duration-15 text-4xl font-bold rounded-md`}>
                  WHO WE ARE
               </header>
               <br />
               <img className={`${isInViewport2 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-top-20' : 'invisible'} float-left mr-5 h-[28vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] rounded-md opacity-80`} src={pic4} alt='about-us-pic-1' />
               <div className={`${isInViewport2 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-right-10' : 'invisible'} text-base lg:text-lg`}>
                  In 2013, <strong>IBRAHIM BIN JIBREEN CONTRACTING COMPANY</strong> agreed with a joint venture and 
                  sub-contractor of Al Esnad House Group and took control of the Electro-Mechanical work for KAFD 
                  under the supervision of Saudi Bin Laden as the main contractor. And in 2014, Ibrahim Bin Jibreen 
                  took control the partnership and competing among top contracting companies in 
                  the kingdom with a very minimal workforce. The General Manager opened and 
                  institutionalized <strong>IBRAHIM BIN JIBREEN CONTRACTING COMPANY</strong>.
               </div>
               <br />
               <div className={`${isInViewport2 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-right-10' : 'invisible'} text-base lg:text-lg`}>
                  Widening the company’s construction network in the kingdom, additional manpower was 
                  immediately mobilized to sustain the fast-growing project demand from the Government and 
                  Private sector. i.e. The King Saud University, King Abdullah Financial District, National Guard, 
                  Alinma Bank, Olaya Twin Tower, KFAH Car parking Project, Kindergarten School Building, and 
                  many more, and other top companies, especially in the industrial field, wherein we have most of 
                  our clients.
               </div>
            </div>
            <br /><br /><br /><br /><br /><br />
            <div ref={ref3}>
               <img className={`${isInViewport3 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-bottom-20' : 'invisible'} float-right ml-5 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[50vh] rounded-md opacity-80`} src={pic5} alt='about-us-pic-1' />
               <div className={`${isInViewport3 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-left-10' : 'invisible'} text-base lg:text-lg`}>
                  <strong>IBRAHIM BIN JIBREEN COMPANY</strong>, as we are today has completed numerous Projects in just 
                  a short period of operation. All this became possible because of our professional staff's 
                  constant supervision and thorough management of our projects, whose expertise contributed a lot 
                  to Construction and Engineering.
               </div>
               <br /><br />
               <div className={`${isInViewport3 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-left-10' : 'invisible'} text-base lg:text-lg`}>
                  <strong>IBRAHIM BIN JIBREEN COMPANY</strong>, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </div>
            </div>
         </section>

         {/* ABOUT Footer  */}
         <section ref={ref4} className={`${isInViewport4 ? 'animate-in duration-1.5s fade-in-5 slide-in-from-bottom-20' : 'invisible'} mt-10 md:mt-20 lg:mt-[150px] relative h-[40vh] bg-cover bg-bottom lg:bg-[0%_85%] w-full bg-blue-800 bg-blend-hard-light`} style={{backgroundImage: `url(${pic2})`}}>
            <div className='opacity-85 absolute p-9 h-full w-full flex flex-col gap-y-2 items-center justify-center backdrop-blur-sm'>
               <span className='text-4xl sm:text-6xl text-indigo-800 bg-slate-100 p-2 rounded-md'>Footer Area</span>
               <span className='text-base lg:text-lg text-black text-center max-w-[900px] bg-slate-100 p-1 rounded-md'>Lorem ipsum odor amet, 
                  consectetuer adipiscing elit. Magna praesent porta venenatis turpis aenean congue velit quis facilisis. Velit luctus laoreet mus 
                  taciti justo. Est bibendum lectus ad eleifend purus vivamus sem euismod. Inceptos posuere per facilisis nascetur;
                  velit nisl imperdiet. Fringilla fusce rutrum felis sed cras ante molestie.</span>
            </div>
         </section>
      </div>
   )
}

export default About;
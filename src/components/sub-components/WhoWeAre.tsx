import { useRef } from 'react';
import pic4 from '../../images/4.jpeg'
import pic5 from '../../images/5.jpg'
import useInViewport from '../../useInViewport';

const WhoWeAre = () : React.ReactElement => {
   const ref2:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport2: boolean = useInViewport(ref2)
   const ref3:React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
   const isInViewport3: boolean = useInViewport(ref3)

   return(
      <section className='px-[50px] md:px-[100px] lg:px-[150px] text-justify'>
         <div ref={ref2} className='mb-[50px]'>
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
               <strong>IBRAHIM BIN-JIBREEN</strong>, now has 2 main divisions, which are as follows: <br />&emsp;1. Electro-mechanical Division, and <br />&emsp;2. Pre-engineered Division.
               <br /><br />
               These divisions work together or individually in various projects under close and proper supervision.
            </div>
         </div>
      </section>
   )
}

export default WhoWeAre;
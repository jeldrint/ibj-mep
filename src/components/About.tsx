import pic2 from '../images/2.jpg'
import pic4 from '../images/4.jpeg'
import pic5 from '../images/5.jpg'

const About = () : React.ReactElement => {
  return(
   <div className="w-full h-full">
      {/* ABOUT Header  */}
      <section className='relative h-[50vh] bg-cover bg-[center] w-full clip-center-1' style={{backgroundImage: `url(${pic2})`}}>
         <div className='opacity-85 absolute p-9 h-full w-full flex flex-col gap-y-2 items-center justify-center bg-gradient-to-br from-indigo-300 to-indigo-500'>
            <span className='text-4xl sm:text-6xl text-indigo-800 bg-slate-100 p-2 rounded-md'>ABOUT IBJ</span>
            <span className='text-base lg:text-lg text-black text-center max-w-[900px] bg-slate-100 p-1 rounded-md'>Our main goal is to exceed the client’s satisfaction by giving them the final accepted project at a 
            very reasonable price, including all supporting consultations and needed services.</span>
         </div>
      </section>

      {/* ABOUT Body  */}
      <section className='mt-10 px-[50px] md:px-[100px] lg:px-[150px] text-justify'>
         <header className='inline-block mb-5 p-2 bg-slate-300 text-indigo-800 duration-150 hover:animate-[ping_0.75s_ease-out_1_0s] text-4xl font-bold rounded-md'>
            WHO WE ARE
         </header>
         <br />
         <img className='float-left mr-5 h-[28vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh] rounded-md opacity-80' src={pic4} alt='about-us-pic-1' />
         <span className='text-base lg:text-lg'>
            In 2013, <strong>IBRAHIM BIN JIBREEN CONTRACTING COMPANY</strong> agreed with a joint venture and 
            sub-contractor of Al Esnad House Group and took control of the Electro-Mechanical work for KAFD 
            under the supervision of Saudi Bin Laden as the main contractor. And in 2014, Ibrahim Bin Jibreen 
            took control the partnership and competing among top contracting companies in 
            the kingdom with a very minimal workforce. The General Manager opened and 
            institutionalized <strong>IBRAHIM BIN JIBREEN CONTRACTING COMPANY</strong>.
         </span>
         <br /><br />
         <span className='text-base lg:text-lg'>
            Widening the company’s construction network in the kingdom, additional manpower was 
            immediately mobilized to sustain the fast-growing project demand from the Government and 
            Private sector. i.e. The King Saud University, King Abdullah Financial District, National Guard, 
            Alinma Bank, Olaya Twin Tower, KFAH Car parking Project, Kindergarten School Building, and 
            many more, and other top companies, especially in the industrial field, wherein we have most of 
            our clients.
         </span>
         <br /><br /><br /><br /><br /><br /><br /><br />
         <img className='float-right ml-5 h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[50vh] rounded-md opacity-80' src={pic5} alt='about-us-pic-1' />
         <span className='text-base lg:text-lg'>
            <strong>IBRAHIM BIN JIBREEN COMPANY</strong>, as we are today has completed numerous Projects in just 
            a short period of operation. All this became possible because of our professional staff's 
            constant supervision and thorough management of our projects, whose expertise contributed a lot 
            to Construction and Engineering.
         </span>
      </section>
   </div>
  )
}

export default About;

const Footer = () : React.ReactElement => {
  return(
   <div className='w-full flex flex-col items-center justify-center bg-indigo-900 bg-opacity-90 text-[#F7F7F7] text-[12px]'>
      <div className='py-[40px] w-[350px] md:w-[750px] lg:w-[900px] xl:w-[1000px] flex flex-col items-center gap-y-10'>
         <div className='w-full flex flex-col gap-y-10 md:flex-row md:gap-x-10'>
            <ul className='border-solid border-t-[0.8px] border-gray-400 p-3 w-full flex justify-center flex-wrap text-nowrap gap-x-3'>
               <li><a href='/'>COMPANY</a></li>
               <li><a href='/'>CONTACT US</a></li>
               <li><a href='/'>CAREERS</a></li>
               <li><a href='/'>PRIVACY POLICY</a></li>
               <li><a href='/'>TERMS</a></li>
               <li><span>ICONS BY <a rel="noopener" href='https://icons8.com/' target="_blank">ICONS8</a></span></li>
            </ul>
         </div>
      </div>
   </div>
  )
}

export default Footer;
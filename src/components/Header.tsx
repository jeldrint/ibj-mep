
const Header = () : React.ReactElement => {
  return(
    <div className="min-h-[15%] flex items-center justify-between p-5">
      <span className="font-serif text-indigo-800 text-4xl lg:text-6xl">I B J</span>
      <ul className="list-none flex gap-x-5 tracking-wide ">
        <li className="rounded-sm cursor-pointer border-b-2 border-transparent duration-200 hover:border-indigo-700 hover:opacity-80">HOME</li>
        <li className="rounded-sm cursor-pointer border-b-2 border-transparent duration-200 hover:border-indigo-700 hover:opacity-80">ABOUT US</li>
        <li className="rounded-sm cursor-pointer border-b-2 border-transparent duration-200 hover:border-indigo-700 hover:opacity-80">OUR SERVICES</li>
        <li className="rounded-sm cursor-pointer border-b-2 border-transparent duration-200 hover:border-indigo-700 hover:opacity-80">OUR PROJECTS</li>
        <li className="rounded-sm cursor-pointer border-b-2 border-transparent duration-200 hover:border-indigo-700 hover:opacity-80">CONTACT US</li>
      </ul>
    </div>
  )
}

export default Header;
import homeImg1 from '../images/home-1.jpg'

const HomePage = () : React.ReactElement => {
  return(
    <div className="h-full bg-blue-500">
      <div className='relative min-w-[352px] md:w-[800px] lg:w-[950px] xl:w-[1100px] min-h-[500px] bg-cover bg-center rounded-sm shadow-xl' style={{backgroundImage: `url(${homeImg1})`}}>
         a
      </div>

    </div>
  )
}

export default HomePage;
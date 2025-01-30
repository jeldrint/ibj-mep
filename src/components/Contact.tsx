
import handleViewport, {type InjectedViewportProps} from 'react-in-viewport'

const Block = ({inViewport, forwardedRef}: InjectedViewportProps<HTMLDivElement>) => {

   const color = inViewport ? '#217ac0' : '#ff9800';
   const text = inViewport ? 'In viewport' : 'Not in viewport'

   return (
      <div ref={forwardedRef}>
         <h3> {text} </h3>
         <div className={`w-[400px] h-[300px] bg-[${color}]`}></div>
      </div>
   )

}

const ViewportBlock = handleViewport(Block);



const Contact = () : React.ReactElement => {
  return(
   <div>
      <div className="h-[100vh] bg-green-500">
         <span className='text-xl'>Scroll down to make component in viewport</span>
      </div>
      <ViewportBlock onEnterViewport={() => console.log('enter viewport')} onLeaveViewport={()=> console.log('leave viewport')} />
   </div>
  )
}

export default Contact;
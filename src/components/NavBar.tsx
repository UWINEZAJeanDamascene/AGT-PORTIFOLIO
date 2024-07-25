import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lgcover from '../images/lgcover.jpg';
const NavBar = () => {
  return (
    <div className='bg-[#123] box-border top-0 z-50 sticky '>
    <div className=" w-full  flex justify-between items-center" >
      <div className='pl-3 flex  mt-3 '>
        <img src={lgcover} alt="Company-logo" className='w-10 h-10 rounded-full max-sm:hidden' />
        <div className='text-gray-300 max-sm:hidden'>
        <h1 >EDGE_REACH TECH</h1>
        <p className=' pb-3 lowercase'>EXTEND YOUR BOUNDARIES AND CRAFT EXCELLENCE</p>
        </div>
      </div>
     
      <div >
        <nav className="flex justify-end items-end mr-3 p-3 text-white text-clip font-serif max-sm:hidden"  >
          <ul className=" flex gap-4 " >
             <li>
              <a href="http://" className="hover:text-sky-300 focus:text-amber-400 translate-x-8">Home</a>
             </li>
             <li>
              <a href="http://"  className="hover:text-sky-300 focus:text-amber-400">Services</a>
             </li>
             <li>
              <a href="http://" className="hover:text-sky-300 focus:text-amber-400">About-us</a>
             </li>
             <li>
              <a href="http://" className="hover:text-sky-300 focus:text-amber-400">Portifolio</a>
             </li>
             <li>
              <a href="http://" className="hover:text-sky-300 focus:text-amber-400">Contact</a>
             </li>
             <li>
              <a href="http://" className="hover:text-sky-300 focus:text-amber-400">Skills</a>
             </li>
          </ul>
        </nav>
      </div>
      </div>
      <div className='md:hidden'>
  <div className='pl-2 flex justify-between items-center'>
    <span className='pb-3 text-gray-300'>
      <img src={lgcover} alt="Company-logo" className='w-10 h-10 rounded-full' />
      EDGE_REACH TECH
    </span>
    <div className='text-gray-300'>
      <p className='pb-3 lowercase max-sm:hidden'>
        EXTEND YOUR BOUNDARIES AND CRAFT EXCELLENCE
      </p>
    </div>
    <div>
      <button className='text-2xl'>
        <FontAwesomeIcon icon={faBars} className='text-white' />
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default NavBar

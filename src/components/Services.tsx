import { faExternalLinkAlt, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import databasee from '../images/databasee.jpg';
import design from '../images/design.jpg';
import webdev from '../images/webdev.jpg';
const Services = () => {
  return (
    <div className="w-full h-screen bg-[#162b40] shadow-lg max-sm:shadow-none md:w-full max-sm:h-auto    ">
      <div >
        <div className='ml-16 pt-2 text-white font-serif'>
        <h2 className='uppercase text-2xl'>Services</h2>
        <p>Here are some services we offer:</p>
        </div>
        <div className='flex justify-center gap-5  mb-3 items-center pt-2 column   widthh flex-wrap '>
          <div className='w-80 column shadow ml-4 p-2 rounded-md bg-[#123] '>
            <img src={webdev} alt="web-logo" />
           <span className='text-[#c94cb4]'> Web Development</span>
           <h1 className='text-gray-300'>Key Features: <span> User authentication, data management, API integration, and real-time functionalities.</span></h1>
           <div className='text-[#c94cb4] cursor-pointer pl-3 pb-2'>
     <span><FontAwesomeIcon icon={faExternalLinkAlt}  /> View</span> 
    </div>
    <div className='flex gap-4 text-red-600 '>
      <button className='hover:text-blue-700  focus:text-blue-900 checked:text-amber-600'>
        <FontAwesomeIcon icon={faThumbsUp} /> Like
      </button>
      <button className='hover:text-blue-700  focus:text-blue-900 checked:text-amber-600'>
        <FontAwesomeIcon icon={faThumbsDown} /> Dislike
      </button>
    </div>
            </div> 

            <div className='w-80 shadow ml-4 p-2 column rounded-md bg-[#123]'>
            <img src={design} alt="design-logo" />
           <span className='text-[#c94cb4]'> UI/UX Design</span>
           <h1 className='text-gray-300'>Key Features: <span>User Research and Analysis, Information Architecture,Interaction Design,Usability Testing and Iteration,User-Centered Design.</span></h1>
           <div className='text-[#c94cb4] cursor-pointer pl-3 pb-2'>
     <span><FontAwesomeIcon icon={faExternalLinkAlt}  /> View</span> 
    </div>
    <div className='flex gap-4 text-red-600 '>
      <button className='hover:text-blue-700  focus:text-blue-900 checked:text-amber-600'>
        <FontAwesomeIcon icon={faThumbsUp} /> Like
      </button>
      <button className='hover:text-blue-700  focus:text-blue-900 checked:text-amber-600'>
        <FontAwesomeIcon icon={faThumbsDown} /> Dislike
      </button>
    </div>
            </div> 
            <div className='w-80 shadow ml-4 p-2 column rounded-md bg-[#123]'>
            <img src={databasee} alt="database-logo" />
           <span className='text-[#c94cb4]'> Database Management</span>
           <h1 className='text-gray-300'>Key Features: <span>Data Abstraction, Data Security and Integrity, Data Backup and Recovery,Data Modeling and Normalization,etc.</span></h1>
           <div className='text-[#c94cb4] cursor-pointer pl-3 pb-2'>
     <span><FontAwesomeIcon icon={faExternalLinkAlt}  /> View</span> 
    </div>
    <div className='flex gap-4 text-red-600 '>
      <button className='hover:text-blue-700 focus:text-blue-900 checked:text-amber-600'>
        <FontAwesomeIcon icon={faThumbsUp} /> Like
      </button>
      <button className='hover:text-blue-700  focus:text-blue-900 checked:text-amber-600' >
        <FontAwesomeIcon icon={faThumbsDown} /> Dislike
      </button>
    </div>
            </div> 
        </div>
      </div> 
    </div>
  )
}

export default Services

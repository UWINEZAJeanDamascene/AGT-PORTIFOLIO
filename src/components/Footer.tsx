import { faDiscord, faFacebook, faGithub, faInstagram, faSlack, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, IconLookup } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div >
      <div className="w-full  bg-[#123] pb-5  h-full ">
        <div className='flex justify-center items-center  max-sm:flex-col gap-28'>
        <form className="bg-[#C0C0C0] p-5 rounded-lg shadow-md mt-5 max-sm:w-full max-sm:mx-0 ml-5 w-1/2 ">
        <h2 className="text-2xl font-semibold  ">Contact Us</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder='Fill in your FullName'
              className="w-full bg-gray-500 px-2 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder='Fill in your email'
              className="w-full px-3 py-2 border text-white rounded-lg bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder='Message us for more infos'
              rows={4}
              className="w-full px-3 py-2 text-white border rounded-lg bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </form>
        <div className='w-1/2'>
        <h1 className='text-slate-50 my-3'>Follow&Contact Us</h1>
        <div className="flex max-sm:justify-center max-sm:items-center space-x-4 text-red-400 max-sm:w-full">
        <a href=""><span><FontAwesomeIcon icon={faXTwitter as IconLookup} size="2x" /></span>Twitter</a>
        <a href=""><span><FontAwesomeIcon icon={faInstagram as IconLookup} size="2x" /></span>Instagram</a>
        <a href=""><span><FontAwesomeIcon icon={faFacebook as IconLookup} size="2x" /></span>Facebook</a>
        <a href=""><span><FontAwesomeIcon icon={faGithub as IconLookup} size="2x" /></span>Github</a>
        <a href=""><span> <FontAwesomeIcon icon={faSlack as IconLookup} size="2x" /></span>Slack</a>
        <a href=""><span>   <FontAwesomeIcon icon={faDiscord as IconLookup} size="2x" /></span>Discord</a>
      </div>
        </div>
        </div>
        <footer>
        <p className='text-center pt-5 text-white font-bold'>Copyright &copy; 2024 Edge_reach tech. All rights reserved.</p>
      </footer>
      </div>
      
      </div>
  
  )
}

export default Footer
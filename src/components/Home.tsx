
import win from '../images/win.png';
const Home= () => {
  return (
    <div className="">
     <div className="w-full h-auto pb-5 flex justify-center  items-center max-sm:flex-col  bg-[#162b40]">
         <div className='w-1/2 py-10 ml-16 animationn  '>
          <p className='text-teal-500'>Hello!</p>
          <h1 className='text-6xl font-bold'>I'm Jay-winn</h1>
          <p className='text-yellow-600 text-3xl'>A web Front-end developer</p>
          <p className='text-2xl py-2'>From a thousand hills</p>
          <button className='border bg-yellow-600 p-2 text-lg text-white rounded-md hover:bg-orange-300 hover:text-black font-serif font-bold'>Hire me</button>
         </div>
         <div className='w-1/2 mt-4 mr-4 max-sm:w-full  rounded-lg'>
          <img src={win} alt="jay photo" className='rounded-xl shadow-2xl bg-[#162b40]' />
         </div>
     </div>
    </div>
  );
};

export default Home;


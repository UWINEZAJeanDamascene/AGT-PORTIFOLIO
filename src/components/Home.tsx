
import winnn from '../images/winnn.png';
const Home= () => {
  return (
    <div >
  <div className="w-full h-auto pb-5 flex justify-center items-center max-sm:flex-col bg-[#0C252BDE]">
    <div className="w-[88%] py-10 ml-24 animationn">
      <p className="text-teal-500">Hello!</p>
      <h1 className="text-5xl font-bold">I'm Jay-winn</h1>
      <p className="text-yellow-600 text-3xl">A web Front-end developer</p>
      <p className="text-2xl py-2">From a thousand hills</p>
      <button className="border bg-yellow-600 p-2 text-lg text-white rounded-md hover:bg-orange-300 hover:text-black font-serif font-bold">
        Hire me
      </button>
    </div>
    <div className="w-2/3  mr-32 max-sm:w-full relative rounded-lg overflow-hidden">
      <img src={winnn} alt="jay photo" className=" w-full " />
    </div>
  </div>
</div>

  );
};

export default Home;


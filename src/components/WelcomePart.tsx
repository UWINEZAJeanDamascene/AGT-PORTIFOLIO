import video from '../images/video.mp4';

const WelcomePart = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
      />
      <div className="relative z-20 flex items-center justify-center flex-col 
       text-white h-full bg-black bg-opacity-50  font-serif text-lg 
        ">
        <h1  className="animate-wiggle text-white font-bold ">Welcome to Edge_reach Tech.</h1>
        <h2>We provide excelent quality services for your business.</h2>
      </div>
    </div>
  );
};

export default WelcomePart;


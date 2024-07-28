 import winnn from '../images/winnn.png'
const AboutMe = () => {
  return (
    <div className='h-auto w-full align-baseline  '>
      <div className="  w-full  flex justify-center max-sm:flex-col column items-center gap-4 h-auto overflow-hidden pb-4 bg-[#0C252BDE]">
        <div className='w-1/3 p-4 mt-3  max-sm:w-full max-sm:pl-14 pb-4'>
        <h1 className='text-[#c94cb4] text-xl p-2 font-serif '>About_Me</h1>
        <p className='text-white'>Am web developer</p>
        <h2 className='text-[#c94cb4] text-lg p-2 font-serif'>MISSION</h2>
        <p className='text-white'>To deliver innovative, high-quality web solutions that empower businesses to succeed in the digital world. Am committed to providing exceptional user experiences, reliable performance, and cutting-edge technologies to meet the unique needs of each client.</p>
        <h3 className='text-[#c94cb4] text-lg p-2 font-serif'>PURPOSE</h3>
        <p className='text-white'>My purpose is to harness the power of the web to connect people, ideas, and opportunities. I aim to create web applications that are not only functional and visually appealing but also accessible to all users, helping businesses grow and thrive in an ever-evolving digital landscape.</p>
          <h4 className='text-[#c94cb4] text-lg p-2 font-serif'>VISION</h4>
          <p className='text-white'>To be recognized as a leader in web development, known for pushing the boundaries of what's possible online. We envision a future where every business, regardless of size, can access top-tier web technologies and create meaningful, impactful digital experiences for their users.</p>
        </div>
        <div className='w-1/2 h-1/2 max-sm:w-full max-sm:pl-14 max-sm:pr-6 '>
          <img src={winnn} alt="" className=' rounded-sm' />
        </div>
      </div>
    </div>
  )
}

export default AboutMe

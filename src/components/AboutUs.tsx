 import edge from '../images/edge.jpg'
const AboutUs = () => {
  return (
    <div className='h-auto w-full align-baseline  '>
      <div className="  w-full  flex justify-center max-sm:flex-col column items-center gap-4 h-auto overflow-hidden pb-4 bg-[#C0C0C0]">
        <div className='w-1/3 shadow-md p-4 mt-3  max-sm:w-full max-sm:pl-14 pb-4'>
        <h1 className='text-[#c94cb4] text-xl p-2 font-serif '>About_us</h1>
        <p>We are Edge_reach Tech</p>
        <h2 className='text-[#c94cb4] text-lg p-2 font-serif'>MISSION</h2>
        <p>At EdgeReach Tech, our mission is to tackle real-life tech and IT challenges head-on,leveraging our full capabilities to craft optimal solutions.</p>
        <h3 className='text-[#c94cb4] text-lg p-2 font-serif'>PURPOSE</h3>
        <p>Our purpose at EdgeReach Tech is to empower each member to maximize their IT
        skills and capabilities, enabling them to excel in the digital realm and stand out in
          today's competitive landscape.</p>
          <h4 className='text-[#c94cb4] text-lg p-2 font-serif'>VISION</h4>
          <p>Our vision at EdgeReach Tech is to become the premier destination for solving real-life
          challenges and providing top-tier talent in the IT and digital sphere.</p>
        </div>
        <div className='w-1/2 h-1/2 max-sm:w-full max-sm:pl-14 max-sm:pr-6 shadow '>
          <img src={edge} alt="" className=' rounded-sm' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs

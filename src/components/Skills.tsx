
const Skills = () => {
 
  return (
    <div>
      <div  className="w-full h-auto flex items-center max-sm:flex-col   bg-[#C0C0C0] pb-14">
        <div className="w-1/2 max-sm:w-full pl-28 max-sm:p-10 pt-16 pb-7 ">
          <h1 className="font-bold text-2xl  ">My Skills</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesci quis molestiae, voluptatibus fuga tenetur accusamus quos ea aut veritatis aspernatur magni suscipit a consequuntur?</p>
        </div>
        <div className="p-10 w-1/2 max-sm:w-full ">
        <p>HTML/CSS/TAILWIND</p>
        <div className="relative w-96 max-sm:w-80  bg-[#555658] ">  
          <div className="absolute inset-0 " style={{ width: '80%', backgroundColor: 'rgba(255, 0, 0, 0.5)' }}></div>
          <p className="relative z-10">80%</p>
         </div>

         <p>javascript</p>
        <div className="relative w-96 max-sm:w-80 bg-[#555658]">  
          <div className="absolute inset-0 " style={{ width: '60%', backgroundColor: 'rgba(255, 0, 0, 0.5)' }}></div>
          <p className="relative z-10">60%</p>
         </div>

         <p>React.js</p>
        <div className="relative w-96 max-sm:w-80 bg-[#555658]">  
          <div className="absolute inset-0 " style={{ width: '70%', backgroundColor: 'rgba(255, 0, 0, 0.5)' }}></div>
          <p className="relative z-10">70%</p>
         </div>

         <p>Node.js</p>
        <div className="relative w-96 max-sm:w-80 bg-[#555658]">  
          <div className="absolute inset-0 " style={{ width: '65%', backgroundColor: 'rgba(255, 0, 0, 0.5)' }}></div>
          <p className="relative z-10">65%</p>
         </div>

         <p>MongoDB</p>
        <div className="relative w-96 max-sm:w-80 bg-[#555658]">  
          <div className="absolute inset-0 " style={{ width: '75%', backgroundColor: 'rgba(255, 0, 0, 0.5)' }}></div>
          <p className="relative z-10">75%</p>
         </div>

         <p>Database</p>
        <div className="relative w-96 max-sm:w-80 bg-[#555658]">  
          <div className="absolute inset-0 " style={{ width: '80%', backgroundColor: 'rgba(255, 0, 0, 0.5)' }}></div>
          <p className="relative z-10">80%</p>
         </div>
      </div>
        </div>
       
    </div>
  )
}

export default Skills

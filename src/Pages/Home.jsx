import React from 'react'
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from 'react-router'
import SkillsCard from '../Components/SkillsCard';

export default function Home() {
  const data=useLoaderData();
  console.log(data);
  
  return (
    <section className='w-11/12 mx-auto '>
 <div className="text-section text-center my-15" >
  <h1 className='text-4xl text-blue-700 font-semibold '>Welcome to SkillSwap!</h1>
  <p className='mt-2  '>Learn, teach, and trade skills with people in your local community.</p>
 
 <h2 className='text-2xl mt-20 '>Discover New Skills</h2>
 <Marquee direction={"right"} pauseOnHover={true} autoFill={true}  className=' my-20'><div className="img flex flex-row items-center  gap-5 ">
<img src="https://img.icons8.com/?size=100&id=3ZVHr47ogpJp&format=png&color=000000" alt="" />
 <img src="https://img.icons8.com/?size=100&id=XTifRbax1gjK&format=png&color=000000" alt="" />
 <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="" />
 <img src="https://img.icons8.com/?size=100&id=9QHudN9uBhDv&format=png&color=000000" alt="" />
 <img src="https://img.icons8.com/?size=100&id=dSnah6CSCxRG&format=png&color=000000" alt="" />
 </div></Marquee>
 
 
  <Link to={'/login'}><button class="btn btn-soft btn-info px-20 py-5 mt-3">Join Now</button></Link>
 </div>



 <div className="data flex flex-wrap gap-5 ">

{
  data.map((skill)=><SkillsCard skill={skill}></SkillsCard> )
}
 </div>
    </section>
  )
}

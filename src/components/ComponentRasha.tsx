import React from 'react'
import { BiPen } from "react-icons/bi";
import { RiUserVoiceLine } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { FiPrinter } from "react-icons/fi";
import { BiTimer } from "react-icons/bi";

const ComponentRasha = (text: any) => {
  return (
    <div className=''>
      <div className='w-70 h-19 bg-white rounded-xl items-center flex justify-center hover:bg-gradient-to-r from-[#FFFFFF] to-[#FFEAC3] '>
        <div className='flex justify-center items-center space-x-1'>
          <img className='w-7' src={text.img} alt="" />
          <h1>{text.text}</h1>
        </div>

      </div>


    </div>

  
  )
}

export default ComponentRasha

import React from 'react'
import Swiper from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';


const Coment = (index: any) => {
  return (
    <div className='bg-white w-[300px] h-[140px] rounded-xl p-2 shadow m-auto '>
      <div className='flex '>
        <div> <img src={index.img} className='w-14 h-14 bg-white rounded-[50%] ' alt="" /> </div>
        <div className='text-[15px] pt-1 pr-1 '>
          {index.title}
          <div className='flex pr-45 pt-[2px]'>
            <img src={index.stars} className='w-2 h-2' alt="" />
            <img src={index.stars} className='w-2 h-2' alt="" />
            <img src={index.stars} className='w-2 h-2' alt="" />
            <img src={index.stars} className='w-2 h-2' alt="" />
            <img src={index.stars} className='w-2 h-2' alt="" />
          </div>
          <p className=''> {index.name}</p>

        </div>
        
      </div>
      <div>
          <p className='text-[12px] pt-2 px-3'> {index.paraghraf}</p>
        </div>



    </div>
  )
}

export default Coment

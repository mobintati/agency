import React from 'react'
import { Link } from 'react-router-dom'
const SeviceComponent = (list:any) => {
    return (
        <Link to={'/pages/Graphic'}>
        <div className=' '>
            <div className='text-xs w-80
             h-[190px]  bg-white mx-auto rounded-xl space-y-1 p-5 hover:bg-[#ECDAFF] mt-3  '>
                <img className='bg-[#ECDAFF] w-[48px] h-[47px] p-1 rounded-lg'  src={list.image} alt="" />
                <h3 className='text-[#151515] text-sm'>{list.title}</h3>
                <p className='text-[#404040]'>{list.disceription}</p>
            </div>


        </div>
        </Link>
    )
}

export default SeviceComponent



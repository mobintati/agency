import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go"
import { PiPenNib } from "react-icons/pi";




const ImageProject = (props: any) => {
    return (
        <div className='relative pt-5'>
            <div className="w-93 max-lg:w-[300px] h-45 rounded-xl bg-cover relative">
                <img src={props.imge} alt="" className='absolute z-1 ' />
                <div className='w-full h-full hover:opacity-100 opacity-0 absolute z-1 '>
                    <div className='flex flex-col backdrop-blur-[5px] rounded-xl bg-black/30 absolute -bottom-25 w-[100%] h-20 p-3 justify-between group'>
                        <div className='flex justify-between'>
                            <h1 className='text-white'>{props.title}</h1>
                            <div className='flex space-x-2'>
                                <PiPenNib className='w-7 h-7 text-[#EFBE31]' />
                                <p className='text-white'>{props.word}</p>
                            </div>
                        </div>
                        <p className='text-xs pt-[2px] text-white -mt-6'>{props.paraghraf}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ImageProject

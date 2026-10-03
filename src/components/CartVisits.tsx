import React from 'react'
import { RiPlayReverseFill } from "react-icons/ri";

const CartVisits = (img: any) => {
    return (
        <div className=''>
            <div className='relative  '>
                <div className='bg-white absolute lg:w-full max-lg:w-70 h-full opacity-0 hover:opacity-100 p-3'>
                    <div className='flex'>
                        <img className='w-10 h-10 rounded-[50%]' src={img.image} alt="" />
                        <h1 className='pt-2 pr-1 text-xl'>{img.title}</h1>
                    </div>
                    <div className='text-[#8751BF] space-y-5 pt-8'>
                        <div className='flex'>
                            <div className='mt-1'><RiPlayReverseFill /></div>

                            <p className='text-[#555555] pr-2'>{img.text1} </p>
                        </div>
                        <div className='flex'>
                            <div className='mt-1'> < RiPlayReverseFill /></div>
                            <p className='text-[#555555] pr-2'>{img.text2} </p>
                        </div>
                        <div className='flex'>
                            <div className='mt-1'><  RiPlayReverseFill /></div>
                            <p className='text-[#555555] pr-2'>{img.text3} </p>
                        </div>
                        <div className='flex'>
                            <div className='mt-1'>< RiPlayReverseFill /></div>
                            <p className='text-[#555555] pr-2'>{img.text4} </p>
                        </div>


                    </div>
                </div>
                <img src={img.img} alt="" />
            </div>

        </div>
    )
}

export default CartVisits

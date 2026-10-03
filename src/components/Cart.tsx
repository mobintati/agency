import React from 'react'
import { Link } from 'react-router-dom'
const Cart = (item: any) => {
    return (
        
 
             <Link to={'/pages/Blog'}>
            <div className='w-[300px] pt-2   flex-col justify-center items-center max-lg:m-auto max-sm:m-auto max-sm:flex max-sm:justify-center max-sm:items-center max-lg:flex max-lg:justify-center max-lg:items-center  lg:mr-7 '>
                <div className=''>
                    <img className='w-[250px]' src={item.img} alt="" />
                </div>

                <div className='bg-white w-[250px] h-[150px] rounded-b-xs mb-1  '>
                    <div className='flex justify-between pt-2'>
                       <p className='pr-1'> {item.title}</p>
                       <p className='bg-[#FFD16F] p-[2px] px-[5px] rounded-sm text-xs ml-[5px]'> {item.berand}</p>
                    </div>
                    <div className='text-xs p-1'>{item.paraghraf}</div>



                </div>
            </div>
            </Link>
            

    
    )
}

export default Cart

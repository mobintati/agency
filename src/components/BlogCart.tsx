import React from 'react'


function BlogCart(item: any) {
    return (

        <div className='w-[235
        px] pt-2  flex-col justify-center items-center gap-x-4 mx-2 '>
            <div className=''>
                <img className='w-[250px]' src={item.img} alt="" />
            </div>

            <div className='bg-white w-[250
            px] h-[150px] rounded-b-xs mb-1  '>
                <div className='flex justify-between pt-2'>
                    <p className='pr-1'> {item.title}</p>
                    <p className='bg-[#FFD16F] p-[2px] px-[5px] rounded-sm text-xs ml-[5px]'> {item.berand}</p>
                </div>
                <div className='text-xs p-1'>{item.paraghraf}</div>



            </div>
        </div>


    )
}



export default BlogCart


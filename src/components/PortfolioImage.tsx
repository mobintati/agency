import React from 'react'



const PortfolioImage = (img: any) => {
    return (
        <div className='mt-3 space-y-5 relative  '>
            <div className=" w-70 h-50  rounded-xl bg-cover  relative">
                <img src={img.imge} alt="" className='absolute z-1 ' />
                <div className='w-full h-full hover:opacity-100  opacity-0 absolute z-1 '>
                    <div className='flex flex-col backdrop-blur-[5px] rounded-xl bg-black/30 absolute -bottom-31 w-[100%] h-20 p-2  justify-between group' >
                        <div className='flex justify-between'>
                            <h1 className='text-white '>{img.title} </h1>
                            <div className='flex space-x-2'>
                                <img src={img.logo} alt="" />

                                <p className='text-white'>{img.word}</p>
                            </div>
                        </div>
                        <p className='text-xs pt-[2px] text-white -mt-6'>{img.paraghraf}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PortfolioImage

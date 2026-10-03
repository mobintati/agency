import React from 'react'

const StatisticsComponent = (props:any) => {
    return (
        <div className='' >
            <div className='flex max-lg:flex-col max-lg:justify-center max-lg:items-center  pt-3 '>
                <img className='w-[56px] h-[57px]' src={props.image} alt="" />
                <div className='pt-1 pr-2 '>
                    <p className='text-center'>{props.title}</p>
                    <p className='text-[#555555] text-right'>{props.name}</p>
                </div>
            </div>


        </div>
    )
}

export default StatisticsComponent

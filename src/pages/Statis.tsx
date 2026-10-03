import React from 'react'
import AdminNavbar from '@/components/AdminNavbar'
import AdminHeader from '@/components/AdminHeader'
import { Input } from '@/components/ui/input'
import AdminSelectDemo from '@/components/AdminSelectDemo'
import StatisChart from '@/components/StatisChart'
import AdminSheet from '@/components/AdminSheet'

const Statis = () => {
    return (
        <div className='pt-10 pb-40 flex max-lg:justify-center max-lg:items-center  '>
            <div className='w-50 h-135  mr-10 bg-white rounded-xl max-lg:hidden '>
                <AdminNavbar />
            </div>


            <div className='flex flex-col lg:mr-21 max-lg:justify-center max-lg:items-center '>

                <div className=''>
                    <AdminHeader />

                </div>
                <div className='bg-white w-[100%] max-lg:w-[75%] h-100 max-lg:h-200 mt-10 rounded-xl max-lg:p-2 lg:p-5 '>
                    <p className='text-lg'>فیلتر ها</p>
                    <div className='space-x-2 flex'>
                        <Input placeholder='از تاریخ' className='w-30 h-10 border-[#0000001A] border' />
                        <Input placeholder=' تا تاریخ' className='w-30 h-10 border-[#0000001A] border' />
                        <div className=''>
                            <  AdminSelectDemo />
                        </div>
                    </div>
                    <div className='flex max-lg:flex-col'>
                        <div className='max-lg:flex-col max-lg:justify-center max-lg:items-center'>
                            <img src="/picture/Frame 14788.png" className='pt-5 max-lg:m-auto' alt="" />
                            <img src="/picture/Frame 15260.png" className='pt-5 lg:pr-5 max-lg:m-auto' alt="" />
                        </div>
                        <div className='w-[100%]  '>
                            <StatisChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statis

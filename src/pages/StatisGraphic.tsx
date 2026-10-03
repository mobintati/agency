import React from 'react'
import AdminNavbar from '@/components/AdminNavbar'
import AdminHeader from '@/components/AdminHeader'
import { Input } from '@/components/ui/input'
import AdminSelectDemo from '@/components/AdminSelectDemo'
import StatisChart from '@/components/StatisChart'
import { Button } from '@/components/ui/button'

const StatisGraphic = () => {
    return (
        <div className='pt-10 pb-40 flex '>
            <div className='w-50 h-120 mr-10 bg-white rounded-xl'>
                <AdminNavbar />
            </div>

            <div className='flex flex-col mr-21'>

                <div className=''>
                    <AdminHeader />

                </div>
                <div className='bg-white w-[100%] h-100 mt-10 rounded-xl p-5'>
                    <p className='text-lg'>فیلتر ها</p>
                    <div className='space-x-2 flex'>
                        <Input placeholder='از تاریخ' className='w-30 h-10 border-[#0000001A] border' />
                        <Input placeholder=' تا تاریخ' className='w-30 h-10 border-[#0000001A] border' />
                        <div className=''>
                            <  AdminSelectDemo />
                        </div>
                    </div>
                    <div className='flex'>
                        <div>

                            <div className='bg-gradient-to-b from-[#8751BF] pt-5 to-[#3F2659] text-white w-45 pr-4 space-y-4 rounded-xl h-58 mt-7  text-xs'>
                                <div className='flex  items-center space-x-1 '>
                                    <img src="/public/picture/Component-516.png" className='' alt="" />
                                    <p className='text-lg pt-[2px]'>خدمات چاپ</p>
                                </div>
                                <p>تعداد کل درخواست ها: <span className='text-sm'>15</span> </p>
                                <p>بیشترین درخواست در ماه:   <span className='text-sm'>ابان</span> </p>
                                <p>میانگین درخواست ماهانه: <span className='text-sm'>4</span> </p>
                                <Button className='bg-[#EB9714]'>مشاهده درخواست ها</Button>

                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <StatisChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisGraphic

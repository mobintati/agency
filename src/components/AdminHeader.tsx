import React from 'react'
import AdminSheet from './AdminSheet'

const AdminHeader = () => {
    return (
        <div className='bg-white h-13 w-185 flex justify-between items-center px-3 rounded-lg max-lg:w-150 max-md:w-110 max-sm:w-65'>
            <div className='max-lg:flex min-lg:hidden'>
             <AdminSheet />
             </div>
            <div>
                <img src="/picture/Frame 15367 (2).png" alt="" />
            </div>
            <div className='flex'>
                <p className='mt-4 text-[#555555] text-xs'>سه شنبه 22 دی</p>
                <img src="/picture/Frame 15221.png" alt="" />
            </div>
        </div>

    )
}

export default AdminHeader

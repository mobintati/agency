import React from 'react'
import AdminNavbar from '@/components/AdminNavbar'
import AdminHeader from '@/components/AdminHeader'
import { Input } from '@/components/ui/input'
import { CiSearch } from "react-icons/ci";
import DemoRequest from '@/components/DemoRequest';
import AdminSheet from '@/components/AdminSheet';


const Request = () => {
    return (

        <div className='pt-10 pb-40 flex max-lg:justify-center max-lg:items-center  '>

            <div className='w-50 h-135 mr-10 bg-white rounded-xl max-lg:hidden '>
                <AdminNavbar />
            </div>

            <div className='flex flex-col max-lg:justify-center max-lg:items-center  lg:mr-20 '>

                <div className='mr-4'>
                    <AdminHeader />

                </div>
                <div className='w-80 pt-7 mr-4  max-sm:w-60 '>
                    < Input className='bg-white p-5' placeholder='جستجو کنید.. ' />

                </div>
                <div className='mt-5 ml-10 pl-10     '>
                    < DemoRequest  />
                </div>
            </div>
            <div>

            </div>

        </div>




    )
}

export default Request
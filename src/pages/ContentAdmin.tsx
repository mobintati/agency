import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminNavbar from '@/components/AdminNavbar'
import { TabsDemo } from '@/components/TabsDemo'
import AdminSheet from '@/components/AdminSheet'


const ContentAdmin = () => {
    return (

        <div className='pt-10 pb-40 flex h-280  '>

            <div className='w-50 h-135 mr-10 bg-white rounded-xl max-lg:hidden '>
                <AdminNavbar />
            </div>
            <div className='max-lg:flex min-lg:hidden mr-5'>
                <AdminSheet />
            </div>
            <div className='bg-white w-15 h-135 mr-5 rounded-lg flex flex-col pt-20 pl-5 mb-50 '>
                

                <TabsDemo />

            </div>
            <div className='flex flex-col lg:mr-21 max-lg:mr-5'>


                <div className=''>
                    <AdminHeader />

                </div>
            </div>

        </div>
    )
}

export default ContentAdmin

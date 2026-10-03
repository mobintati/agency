import React from 'react'
import AdminHeader from '@/components/AdminHeader'
import AdminNavbar from '@/components/AdminNavbar'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import DemoBlog from '@/components/DemoBlog'
import AlertBlog from '@/components/AlertBlog'
import AdminSheet from '@/components/AdminSheet'

const BlogAdmin = () => {
    return (
        <div className='flex max-lg:justify-center max-lg:items-center h-[100%] w-[100%] '>
            <div className='pt-10 pb-40 flex  '>

                <div className='w-50 h-134 mr-10 bg-white rounded-xl max-lg:hidden '>
                    <AdminNavbar />
                </div>
                <div className='flex flex-col lg:mr-21 max-lg:justify-center max-lg:items-center '>


                    <div className=''>
                        <AdminHeader />

                    </div>
                    <div className='flex lg:justify-between max-lg:space-x-5    pt-7 '>
                        <div className='lg:w-80 max-sm:w-40 max-lg:w-60 '>
                            < Input className='bg-white p-5' placeholder='جستجو کنید.. ' />
                        </div>
                        <div>
                            <AlertBlog />
                        </div>
                    </div>
                    <div className='mt-5 '>
                        <DemoBlog />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BlogAdmin

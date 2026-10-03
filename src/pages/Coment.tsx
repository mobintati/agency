import React from 'react'
import AdminNavbar from '@/components/AdminNavbar'
import AdminHeader from '@/components/AdminHeader'
import { Button } from '@/components/ui/button'
import AlertAvatarDialog from '@/components/AlertAvatarDialog'
import AlertCanselDialog from '@/components/AlertCanselDialog'
import AdminSheet from '@/components/AdminSheet'

const Coment = () => {
    return (
        <div className='pt-10 pb-40 flex  '>

           <div className='w-50 h-135 mr-10 bg-white rounded-xl max-lg:hidden '>
        <AdminNavbar />
      </div>
      
            <div className='bg-white w-12 h-135 mr-5 rounded-lg flex flex-col pt-10 space-y-4 max-lg:w-12' >
                <img src="/picture/Component 568.png" alt="" />
                <img src="/picture/Component 569.png" alt="" />

            </div>
            <div className='flex flex-col mr-21 max-lg:mr-5'>


                <div className=''>
                    <AdminHeader />

                </div>
                <div className='m-auto mx-7 space-y-3'>
                    <div className=' bg-white w-[80%] h-65 mt-5 rounded-xl  '>

                        <div className='flex justify-between px-5 pt-3'>
                            <div className='flex'>
                                <img src="/picture/Objects.png" className='max-sm:w-12 max-sm:h-12' alt="" />
                                <div className='space-y-1 pt-[5px] pr-1'>
                                    <h1 className='text-xl max-sm:text-xs'>سارا بیاتی</h1>
                                    <p className='text-[#6A6A6A] max-sm:text-xs'>09115554586</p>
                                </div>
                            </div>
                            <div className='sm:pt-3'>
                                <p className='max-sm:text-xs'>21:30</p>
                                <img className='pr-3' src="/picture/Frame 14574.png" alt="" />
                            </div>
                        </div>
                        <div className='px-5 lg:pt-10 max-sm:pt-3'>
                            <p className='text-[#6A6A6A] max-lg:text-xs'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون است.</p>
                        </div>
                        <div className='flex justify-between'>
                            <div className='pr-5 lg:pt-5 space-y-[10px]'>
                                <p className='max-sm:text-xs'>شرکت هدف</p>
                                <div className='flex space-x-[3px]'>
                                   <img className='max-sm:w-3 max-sm:h-3' src="/picture/Star 1(1).png" alt="" />
                                    <img className='max-sm:w-3 max-sm:h-3'  src="/picture/Star 1.png" alt="" />
                                    <img className='max-sm:w-3 max-sm:h-3' src="/picture/Star 1.png" alt="" />
                                    <img className='max-sm:w-3 max-sm:h-3' src="/picture/Star 1.png" alt="" />
                                    <img className='max-sm:w-3 max-sm:h-3' src="/picture/Star 1.png" alt="" />
                                </div>
                            </div>
                            <div className='lg:pt-8 space-x-1 lg:pl-5 flex  '>

                                 <Button className=' bg-white border border-[#EB9714] text-[#EB9714] max-sm:w-15 max-sm:text-xs'> عدم انتشار </Button>
                                <AlertAvatarDialog />
                            </div>
                        </div>
                    </div>
                    <div className='  bg-white w-[80%] h-65 rounded-xl '>

                        <div className='flex justify-between px-5 pt-3'>
                            <div className='flex'>
                                <img src="/picture/Objects.png" className='max-sm:w-12 max-sm:h-12' alt="" />
                                <div className='space-y-1 pt-[5px] pr-1'>
                                    <h1 className='text-xl max-sm:text-xs'>علی راد</h1>
                                    <p className='text-[#6A6A6A] max-sm:text-xs'>09115554586</p>
                                </div>
                            </div>
                            <div className='pt-10'>
                                <p className='max-sm:text-xs '>1404/12/12</p>

                            </div>
                        </div>
                        <div className='px-5 lg:pt-10 max-xs:pt-3'>
                            <p className='text-[#6A6A6A] max-lg:text-xs'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون است.</p>
                        </div>
                        <div className='flex justify-between'>
                            <div className=' pr-5 lg:pt-5 space-y-[10px]'>
                                <p className='max-sm:text-xs'>شرکت صاب</p>
                                <div className='flex space-x-[3px]'>
                                    <img className='max-sm:w-3 max-sm:h-3' src="/picture/Star 1(1).png" alt="" />
                                    <img className='max-sm:w-3 max-sm:h-3'  src="/picture/Star 1.png" alt="" />
                                    <img className='max-sm:w-3 max-sm:h-3' src="/picture/Star 1.png" alt="" />
                                    <img className='max-sm:w-3 max-sm:h-3' src="/picture/Star 1.png" alt="" />
                                    <img className='max-sm:w-3 max-sm:h-3' src="/picture/Star 1.png" alt="" />
                                </div>
                            </div>
                            <div className='lg:pt-8 space-x-1 lg:pl-5 flex max-sm:flex-col max-sm:space-y-1 '>
                                <  AlertCanselDialog />
                                <Button className='bg-[#808080] text-[#151515] max-sm:w-10'>انتشار</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Coment

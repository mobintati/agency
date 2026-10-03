import React from 'react'
import AdminNavbar from '@/components/AdminNavbar'
import AdminHeader from '@/components/AdminHeader'
import { MdArrowBackIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import TableDemo from '@/components/TableDemo';
import Request from './Request';
import AdminSheet from '@/components/AdminSheet';



const Dashbord = () => {
  return (
    <div className='pt-10 pb-40 flex max-lg:justify-center max-lg:items-center    '>
      <div className='w-50 h-138 mr-10 bg-white rounded-xl max-lg:hidden '>
        <AdminNavbar />
      </div>

      <div className='max-lg:flex min-lg:hidden mr-10'>
        
      </div>

      <div className='flex flex-col lg:mr-21 '>
        <div className='max-lg:flex-col max-lg:justify-center max-lg:items-center'>
          <div className='max-lg:flex max-lg:justify-center  max-lg:items-center  max-lg:mt-20 max-lg:w-140 max-sm:w-60  '>
            <AdminHeader />
           

          </div>
          <div className='max-lg:flex-col max-lg:justify-center max-lg:items-center '>

            
            <div className='flex lg:space-x-[16px] max-lg:flex-col max-lg:justify-center max-lg:items-center  '>
              <div className='bg-white w-59 h-48 rounded-lg mt-5 text-center '>
                <img className='m-auto' src="/picture/Frame 15230.png" alt="" />
                <h1 className='pt-6'>تعداد درخواست های ماه</h1>
                <p className='text-xs text-[#6A6A6A] pt-2' ><span className='text-[#439647]'>15+</span>درصد تغییرات نسبت به ماه گذشته </p>
              </div>
              <div className='bg-white w-59 h-48 rounded-lg mt-5 text-center'>
                <img className='m-auto' src="/picture/seo 2.png" alt="" />
                <p className='text-xs'>چاپ</p>
                <h1 className='pt-1'>پر درخواست ترین خدمت ماه</h1>
                <p className='text-xs text-[#6A6A6A] pt-2' ><span className='text-[#439647]'>5+</span>درصد تغییرات نسبت به ماه گذشته </p>
              </div>
              <div className='bg-white w-59 h-48 rounded-lg mt-5 text-center'>
                <img className='m-auto' src="/picture/seo 2.png" alt="" />
                <p className='text-xs'>سایت و سئو</p>
                <h1 className='pt-1'>کم درخواست ‌ترین خدمت ماه</h1>
                <p className='text-xs text-[#6A6A6A] pt-2' ><span className='text-[#F44336]'>5-</span>درصد تغییرات نسبت به ماه گذشته </p>
              </div>




            </div>
            <div className='flex justify-between pt-10 max-xl:items-center  max-md:flex-col max-md:space-y-3 '>
              <h1>جدیدترین درخواست ها</h1>
              <div className='flex'>
                <p className='text-[#4D277C]'>مشاهده همه</p>
                <Link to={"#"}> < MdArrowBackIos className='pt-1 size-5' /> </Link>
              </div>
              <h1>جدیدترین درخواست ها</h1>
              <div className='flex'>
                <p className='text-[#4D277C]'>مشاهده همه</p>


                <Link to={"#"}> < MdArrowBackIos className='pt-1 size-5' /> </Link>
              </div>

            </div>
            <div className='flex justify-between pt-5 max-lg:flex-col max-lg:space-y-5 max-lg:items-center max-xl:space-x-1  max-md:items-center max-sm:w-55 '>

              <TableDemo />
              <TableDemo />

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashbord

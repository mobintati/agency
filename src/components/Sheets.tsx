import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { Button } from './ui/button';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom';
import { MdExpandMore } from 'react-icons/md';
import { FaPhoneFlip } from 'react-icons/fa6';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Sheets = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger > <IoMdMenu />  </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className='flex-col justify-baseline'>
              <SheetTitle> <div className="pt-10 flex justify-end items-end">
                <img src="./public/picture/Group 16.png" className="" alt="" />
              </div></SheetTitle>
              <SheetDescription className='flex-col'>
                <div className=''>
                  <div className=" text-xl ">
                    <div className=' pt-5 grid grid-cols-1 gap-y-3 pr-3    '>
                      <Link className="" to={'/'}>صفحه اصلی</Link>
                      <div className='flex'>
                        <Link to={'./pages/service'} className='flex'> خدمات</Link>

                      </div>
                      <Link to={'./pages/portfolio'}>نمونه کار</Link>
                      <Link to={'./pages/contact'}>تماس با ما</Link>
                      <Link to={'./pages/about'}>درباره ما</Link>


                    </div>

                  </div>

                </div>


              </SheetDescription>
            </div>
          </SheetHeader>
          <div className=''>
            <div className='pr-3 space-y-0'>
              <h1 className='text-xl pr-5 pt-[7px]'>پیوندها</h1>
              <div className='flex-col flex'>
                <Link className='hover:bg-[#ECDAFF] px-2 py-[5px] rounded-xl pr-4 ' to={'/'}>صفحه اصلی</Link>
                <Link className='hover:bg-[#ECDAFF] px-2 py-[5px] rounded-xl  pr-4 ' to={'./pages/portfolio'}>نمونه کار</Link>
                <Link className='hover:bg-[#ECDAFF] px-2 py-[5px] rounded-xl  pr-4 ' to={'./pages/about'}>درباره ما</Link>
              </div>
            </div>
          </div>

          <div className="p-2 mr-3">
            <div className="bg-[#4D277C] w-29 h-8 rounded-lg text-white text-center px-1 py-1  mt-1.5   flex justify-center items-center  ">
              <FaPhoneFlip className="mt-[2px] m-1  " />   09382546001
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}



export default Sheets


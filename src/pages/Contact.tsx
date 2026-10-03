import React from 'react'
import { Input } from "@/components/ui/input"
import CardDemo from '@/components/CardDemo'
import { Button } from '@/components/ui/button'
import AlertDialogDemo from '@/components/AlertDialogDemo'
import AlertDialogDemoBottom from '@/components/AlertDialogDemoBottom'

const Contact = () => {
  return (
    <div className='pt-15'>
      <img src="/picture/Frame 14928.png" className='w-[90%] m-auto pt-8' alt="" />
      <div>
        <div className='lg:pt-15 max-lg:pt-7 flex max-lg:grid max-lg:grid-cols-1 max-lg:m-auto '>
          <div className='flex-col '>
            <div className='flex max-lg:gap-x-2 max-lg:px-2   lg:pr-13 justify-between max-lg:m-auto max-sm:flex-col gap-y-3 max-sm:m-auto max-sm:flex-col
             max-sm:justify-center max-sm:items-center' >
              <div className='w-[250px] h-[170px] bg-white  flex flex-col justify-center items-center rounded-xl space-y-2    '>
                <img src="/picture/call.png" alt="" />
                <p className='text-[#6A6A6A]'>شماره تلفن</p>
                <p className=''>09382546001</p>
              </div>
              <div className='w-[250px] h-[170px] bg-white  flex flex-col justify-center items-center rounded-xl space-y-2  '>
                <img src="/picture/Message_light.png" alt="" />
                <p className='text-[#6A6A6A]'>ایمیل</p>
                <p className=''>fa@gmail.com</p>
              </div>
              <div className='w-[250px] h-[170px] bg-white  flex flex-col justify-center items-center rounded-xl space-y-2  '>
                <img src="/picture/whats.png" alt="" />
                <p className='text-[#6A6A6A]'>شماره تلفن</p>
                <p className=''>09382546001</p>
              </div>
            </div>

            <div className='lg:pr-13 pt-8 max-lg:flex max-lg:justify-center max-lg:items-center max-lg:m-auto max-lg:px-2 '>
              <img src="/picture/Frame 15051.png" alt="" />
            </div>
          </div>
          <div className='mr-5 max-lg:m-auto max-lg:mt-5'>
            <CardDemo />
          </div>
        </div>
      </div>
      <div className='flex w-full justify-center items-center' >
        <div className=''>
          <h1 className='text-2xl pt-10 max-sm:text-center max-sm:text-xl'>از نظرات و پیشنهادات شما استقبال میکنیم</h1>
          <div className='lg:w-[600px] grid grid-cols-2 max-sm:flex-col max-sm:flex gap-5 mt-5 max-sm:w-70 max-sm:m-auto max-sm:pt-5'>
            <Input className='bg-white' placeholder='نام خود را وارد کنید'></Input>
            <Input className='bg-white' placeholder='نام خود را وارد کنید'></Input>
            <Input className='bg-white' placeholder='نام خود را وارد کنید'></Input>
            <Input className='bg-white' placeholder='نام خود را وارد کنید'></Input>

          </div>
          <div className='max-sm:flex max-sm:justify-center max-sm:items-center'>
          <textarea className='w-[600px] h-[150px] bg-white mt-4 p-2 resize-none rounded-lg max-sm:w-[280px]  ' name="" placeholder='نظر خود را وارد کنید' id=""></textarea>
          </div>
          <div className='flex justify-between max-sm:flex-col max-sm:m-auto w-[600px] pt-5 px-3'>
            <p className='xl pt-1 max-sm:m-auto'>تجربه‌تان را با یک امتیاز ثبت کنید</p>
            <div className='flex max-sm:m-auto max-sm:pt-3'>
              <img src="/picture/star (1).png" className='w-9 h-9' alt="" />
              <img src="/picture/star (5).png" className='w-9 h-9' alt="" />
              <img src="/picture/star (3).png" className='w-9 h-9' alt="" />
              <img src="/picture/star (4).png" className='w-9 h-9' alt="" />
              <img src="/picture/star (2).png" className='w-9 h-9' alt="" />
            </div>


          </div>
          <div className='max-sm:flex max-sm:justify-center max-sm:items-center max-sm:pt-3 pb-5 pt-3 '>
            <AlertDialogDemoBottom />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact

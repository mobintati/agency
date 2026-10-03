import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='  bg-white lg:flex  lg:justify-around pt-5 pb-26 max-lg:flex-col max-lg:flex max-lg:justify-center max-lg:items-center max-lg:gap-y-3 '>
            <div className='flex max-lg:flex-col  lg:pr-15 '>
                <div className='w-[165px] lg:pr-5 pt-2 max-lg:flex-col max-lg:justify-center max-lg:items-center text-center' >
                    <h1 className='text-xl text-center'>خلاصه پیشینه</h1>
                    <p className='text-xs text-[#6A6A6A] lg:pr-3 pt-3 '>شرکت تبلیغاتی رهام با هدف بهبود و توسعه کسب و کارها از سال 1390 آغاز بکار کرده و تا به این لحظه با بیش از 8900 مشتری و بیش از 23000 نمونه...</p>
                </div>
                <div className='lg:pr-25 max-lg:hidden '>
                    <div className='pr-3 space-y-0 '>
                        <h1 className='text-xl lg:pr-5 pt-[7px]'>پیوندها</h1>
                        <div className='flex-col flex'> 
                            <Link className='hover:bg-[#ECDAFF] px-2 py-[5px] rounded-xl pr-3  text-center' to={'/'}>صفحه اصلی</Link>
                            <Link className='hover:bg-[#ECDAFF] px-2 py-[5px] rounded-xl text-center' to={'./pages/portfolio'}>نمونه کار</Link>
                            <Link className='hover:bg-[#ECDAFF] px-2 py-[5px] rounded-xl text-center' to={'./pages/about'}>درباره ما</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex lg:pl-25 lg:pt-2 max-lg:flex-col max-lg:justify-center lg:items-center max-lg:gap-y-3  '>
                <div className=' 
                
                
                space-y-2 lg:pr-9 lg:pl-35 '>
                    <h1 className='text-center'>راه های ارتباطی</h1>
                    <p className='text-xs text-[#6A6A6A] lg:pt-2'>شماره تماس:09382546001</p>
                    <p className='text-xs text-[#6A6A6A] lg:pt-2'>آدرس دفتر: تهران- لویزان- خیابان<br /> شعبانلو- پلاک 24- واحد 1- شرکت رهام<br /> روز های غیر تعطیل از ساعت 9 تا 16 </p>




                </div>
                <div className='pb-3'>
                    <div className=''>
                        <h1 className='text-xl lg:pr-5'>نمادهای الکترونیک</h1>
                    </div>
                    <div className='flex'>
                        <img className='w-20' src="/picture/footerimg.png" alt="" />
                        <img className='w-20' src="/picture/footerimg2.png" alt="" />
                    </div>
                    <div className='flex pr-15 space-x-2'>
                        <FaInstagram className='' />
                        <FaWhatsapp />
                        <MdEmail />
                    </div>

                </div>


            </div>
        </div >
    )
}

export default Footer

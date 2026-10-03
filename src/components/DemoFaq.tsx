import React from 'react'
import { MdCheckCircleOutline } from "react-icons/md";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const DemoFaq = () => {
     const invoices = [
        {
            invoice: "رسانه",
            paymentStatus: "بازدهی کمپین را چگونه ارزیابی می‌کنید؟",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "چاپ",
            paymentStatus: "حداقل و حداکثر تیراژ چاپ چقدر است؟",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"


        },
        {
            invoice: "سمینار",
            paymentStatus: "ظرفیت رویدادهایی که برگزار می‌کنید؟",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "برندینگ",
            paymentStatus: "مدت‌زمان انجام پروژه برندینگ چقدر است؟",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",
            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "نمایشی",
            paymentStatus: "برای شروع پروژه چه اطلاعاتی نیاز دارید؟",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",
            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"

        }
    ]
  return (
    <div>
          <Table className='w-[100%] rounded-lg overflow-hidden    '>
        
                        <TableHeader className='bg-[#ECDAFF] pt-5    rounded-lg '>
                            <TableRow className='flex   rounded-lg pr-6 space-x-15 '>
                                <TableHead className="h-14">
                                    <div className="flex items-center justify-center h-full text-lg">
                                        نوع خدمت
                                    </div>
                                </TableHead>
                                <TableHead className="h-14">
                                    <div className="flex items-center justify-center h-full  text-lg">
                                        سوال
                                    </div>
                                </TableHead>
                                <TableHead className="h-14">
                                    <div className="flex items-center justify-center h-full pr-30 text-lg">
                                      پاسخ
                                    </div>
                                </TableHead>
                                <TableHead className="h-14">
                                    <div className="flex items-center justify-center h-full pr-28 text-lg">
                                     عملیات
                                    </div>
                                </TableHead>
        
        
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <div className='bg-white'>
                                {invoices.map((invoice) => (
                                    <TableRow className='text-center text-xs ' key={invoice.invoice}>
                                        <TableCell className="font-medium pr-11    ">{invoice.invoice}</TableCell>
                                        <TableCell className=' text-[#6A6A6A] pr-5'>{invoice.paymentStatus}</TableCell>
                                        <TableCell className=' text-[#6A6A6A]  '>{invoice.number}</TableCell>
                                        
                                        <div className=''>
                                            <TableCell className=" pt-5 pr-5  text-[#6A6A6A] flex "> <img src={invoice.img} className='pl-1' alt="" /> <img src={invoice.call} alt="" />  </TableCell>
                                        </div>
                                    </TableRow>
                                ))}
                            </div>
        
                        </TableBody>
                        <TableFooter>
        
                        </TableFooter>
                    </Table>
      
    </div>
  )
}

export default DemoFaq

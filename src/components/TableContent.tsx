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

const TableContent = () => {
     const invoices = [
    {
      invoice: "/public/picture/PAS2 (3).png",
      
      paymentStatus: "سمینار",
      number: "پیدار",
      totalAmount: "لورم ایپسوم متن ساختگی برای چاپ است...",
  
      call: "/picture/Frame 15090.png",
      img: "/picture/Edit_light.png"
    },
    {
      invoice: "/public/picture/PAS2 (1).png",
      paymentStatus: "چاپ",
      number: "تاپکو",
      totalAmount: "لورم ایپسوم متن ساختگی برای چاپ است...",
   
      call: "/picture/Frame 15090.png",
      img: "/picture/Edit_light.png"


    },
    {
      invoice: "/public/picture/PAS2 (5).png",
      paymentStatus: "برندینگ",
      number: "برنا",
      totalAmount: "لورم ایپسوم متن ساختگی برای چاپ است...",
     
      call: "/picture/Frame 15090.png",
      img: "/picture/Edit_light.png"
    },
    {
      invoice: "/public/picture/PAS2 (4).png",
      paymentStatus: "رسانه",
      number: "خیبر",
      totalAmount: "لورم ایپسوم متن ساختگی برای چاپ است...",
    
      call: "/picture/Frame 15090.png",
      img: "/picture/Edit_light.png"
    },
    {
      invoice: "/public/picture/PAS2 (2).png",
      paymentStatus: "نمایشی",
      number: "فکور",
      totalAmount: "لورم ایپسوم متن ساختگی برای چاپ است...",
     
      call: "/picture/Frame 15090.png",
      img: "/picture/Edit_light.png"

    }
]
  return (
    <div className='max-lg:w-[76%] max-md:w-[56%] max-sm:w-[34%]'>
        <Table className='lg:w-[100%] rounded-lg overflow-hidden     '>

        <TableHeader className='bg-[#ECDAFF] pt-5    rounded-lg '>
          <TableRow className='flex   rounded-lg pr-6 space-x-8 '>
            <TableHead className="h-14">
              <div className="flex items-center justify-center h-full text-lg">
                تصویر
              </div>
            </TableHead>
            <TableHead className="h-14">
              <div className="flex items-center justify-center h-full pr-5 text-lg">
                نوع خدمت
              </div>
            </TableHead>
            <TableHead className="h-14">
              <div className="flex items-center justify-center h-full pr-5 text-lg">
                تصویر
              </div>
            </TableHead>
            <TableHead className="h-14">
              <div className="flex items-center justify-center h-full pr-20 text-lg">
                 توضیحات
              </div>
            </TableHead>
            <TableHead className="h-14 ">
              <div className="flex items-center justify-center h-full pr-18 text-lg">
                عملیات
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <div className='bg-white'>
            {invoices.map((invoice) => (
              <TableRow className='text-center ' key={invoice.invoice}>
                <TableCell className="font-medium pr-5   "><img src={invoice.invoice} alt="" /></TableCell>
                <TableCell className='pr-18 text-[#6A6A6A]'>{invoice.paymentStatus}</TableCell>
                <TableCell className='pr-20 text-[#6A6A6A]  '>{invoice.number}</TableCell>
                <TableCell className="pr-10 text-[#6A6A6A]">{invoice.totalAmount}</TableCell>
                <div className=''>
                  <TableCell className="   text-[#6A6A6A] flex "> <img src={invoice.img} className='pl-1' alt="" /> <img src={invoice.call} alt="" />  </TableCell>
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

export default TableContent

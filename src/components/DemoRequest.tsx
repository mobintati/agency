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

const invoices = [
  {
    invoice: "1",
    paymentStatus: "علی شادمان",
     number:"09123975604",
    totalAmount: "1404/09/09",
    paymentMethod: "سایت و سئو",
    call:"تماس گرفته شده" ,
    img:"/picture/Check_ring.png" 
  },
  {
    invoice: "2",
    paymentStatus: "بیتا دهقان",
     number:"09123975604",
    totalAmount: "1404/09/09",
    paymentMethod: "رسانه",
     call:"تماس گرفته نشده" ,
    img:"/picture/Remove.png" 
    
    
  },
  {
    invoice: "3",
    paymentStatus: "یکتا ناصر",
     number:"09123975604",
    totalAmount: "1404/09/09",
    paymentMethod: "سایت و سئو",
     call:"تماس گرفته شده" ,
    img:"/picture/Check_ring.png" 
  },
  {
    invoice: "4",
    paymentStatus: "علی دیبا",
     number:"09123975604",
    totalAmount: "1404/09/09",
    paymentMethod: "برندینگ",
     call:"تماس گرفته نشده" ,
    img:"/picture/Remove.png" 
  },
   {
    invoice: "5",
    paymentStatus: "علی دیبا",
    number:"09123975604",
    totalAmount: "1404/09/09",
    paymentMethod: "برندینگ",
     call:"تماس گرفته شده" ,
    img:"/picture/Check_ring.png" 
    
  }

 
 
]

const DemoRequest = () => {
  return (
    <div className='w-full max-w-6xl mx-auto px-4 overflow-x-auto   max-sm:w-80   '>
            
          <Table className='w-full rounded-lg overflow-hidden  '>
     
      <TableHeader className='bg-[#ECDAFF] pt-5   rounded-lg '>
        <TableRow className='flex   rounded-lg '>
        <TableHead className="h-14">
  <div className="flex items-center justify-center h-full text-lg">
   ردیف
  </div>
</TableHead>
          <TableHead className="h-14">
  <div className="flex items-center justify-center h-full pr-5 text-lg">
    نام و نام خانوادگی
  </div>
</TableHead>
          <TableHead className="h-14">
  <div className="flex items-center justify-center h-full pr-5 text-lg">
   شماره تماس
  </div>
</TableHead>
          <TableHead className="h-14">
  <div className="flex items-center justify-center h-full pr-5 text-lg">
   نوع خدمت
  </div>
</TableHead>
       <TableHead className="h-14">
  <div className="flex items-center justify-center h-full pr-5 text-lg">
   تاریخ درخواست
  </div>
</TableHead>
       <TableHead className="h-14 ">
  <div className="flex items-center justify-center h-full pr-5 text-lg">
   وضعیت
  </div>
</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <div className='bg-white'>
        {invoices.map((invoice) => (
          <TableRow className='text-center ' key={invoice.invoice}>
            <TableCell className="font-medium pr-5  ">{invoice.invoice}</TableCell>
            <TableCell className='pr-17 text-[#6A6A6A]'>{invoice.paymentStatus}</TableCell>
             <TableCell className='pr-19 text-[#6A6A6A]'>{invoice.number}</TableCell>
            <TableCell  className="pr-10 text-[#6A6A6A]">{invoice.paymentMethod}</TableCell>
            <TableCell className="pr-15 text-[#6A6A6A]">{invoice.totalAmount}</TableCell>
            <div className=''>
             <TableCell className=" pr-7  text-[#6A6A6A] flex "> <img src={invoice.img} className='pl-1' alt="" />{invoice.call}  </TableCell>
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

export default DemoRequest
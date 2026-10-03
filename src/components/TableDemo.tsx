import React from 'react'
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
    totalAmount: "1404/09/09",
    paymentMethod: "سایت و سئو"
  },
  {
    invoice: "2",
    paymentStatus: "بیتا دهقان",
    totalAmount: "1404/09/09",
    paymentMethod: "رسانه",
  },
  {
    invoice: "3",
    paymentStatus: "یکتا ناصر",
    totalAmount: "1404/09/09",
    paymentMethod: "سایت و سئو",
  },
  {
    invoice: "4",
    paymentStatus: "علی دیبا",
    totalAmount: "1404/09/09",
    paymentMethod: "برندینگ",
  },
 
]

const TableDemo = () => {
  return (
    <div className=''>
          <Table className='w-[45%] rounded-lg overflow-hidden  '>
     
      <TableHeader className='bg-[#ECDAFF] pt-5   rounded-lg '>
        <TableRow className='flex   rounded-lg '>
        <TableHead className="h-14">
  <div className="flex items-center justify-center h-full">
   #
  </div>
</TableHead>
          <TableHead className="h-14">
  <div className="flex items-center justify-center h-full">
    نام و نام خانوادگی
  </div>
</TableHead>
          <TableHead className="h-14">
  <div className="flex items-center justify-center h-full">
   نوع خدمت
  </div>
</TableHead>
          <TableHead className="h-14">
  <div className="flex items-center justify-center h-full">
   تاریخ درخواست
  </div>
</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <div className='bg-white'>
        {invoices.map((invoice) => (
          <TableRow className='text-center' key={invoice.invoice}>
            <TableCell className="font-medium  ">{invoice.invoice}</TableCell>
            <TableCell className='pr-5 text-[#6A6A6A]'>{invoice.paymentStatus}</TableCell>
            <TableCell  className="pr-7 text-[#6A6A6A]">{invoice.paymentMethod}</TableCell>
            <TableCell className="pr-5 text-[#6A6A6A]">{invoice.totalAmount}</TableCell>
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

export default TableDemo

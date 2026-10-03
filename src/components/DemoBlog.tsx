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

const DemoBlog = () => {
  const invoices = [
    {
      invoice: "/public/picture/PAS2 (3).png",
      paymentStatus: "تاثیر سایت",
      number: "انتشار",
      totalAmount: "1404/10/01",
      paymentMethod: "2400",
      call: "/picture/Frame 15090.png",
      img: "/picture/Frame 15089(1).png"
    },
    {
      invoice: "/public/picture/PAS2 (1).png",
      paymentStatus: "تبیغات پنهان",
      number: "بایگانی",
      totalAmount: "1404/02/12",
      paymentMethod: "5600",
      call: "/picture/Frame 15090.png",
      img: "/picture/Frame 15089(2).png"


    },
    {
      invoice: "/public/picture/PAS2 (5).png",
      paymentStatus: "تاثیر سایت",
      number: "انتشار",
      totalAmount: "1404/10/01",
      paymentMethod: "4222",
      call: "/picture/Frame 15090.png",
      img: "/picture/Frame 15089(1).png"
    },
    {
      invoice: "/public/picture/PAS2 (4).png",
      paymentStatus: "تبیغات پنهان",
      number: "بایگانی",
      totalAmount: "1404/02/12",
      paymentMethod: "4444",
      call: "/picture/Frame 15090.png",
      img: "/picture/Frame 15089(2).png"
    },
    {
      invoice: "/public/picture/PAS2 (2).png",
      paymentStatus: "تاثیر سایت",
      number: "انتشار",
      totalAmount: "1404/10/01",
      paymentMethod: "1789",
      call: "/picture/Frame 15090.png",
      img: "/picture/Frame 15089(1).png"

    }



  ]
  return (
   <div className="w-full max-w-6xl mx-auto px-4 overflow-x-auto   max-sm:w-80    ">
  <Table className="w-full rounded-lg overflow-hidden">

    <TableHeader className="bg-[#ECDAFF]">
      <TableRow className="pr-6">
        <TableHead className="h-14 text-center text-lg">تصویر</TableHead>
        <TableHead className="h-14 text-center text-lg">عنوان</TableHead>
        <TableHead className="h-14 text-center text-lg">وضعیت</TableHead>
        <TableHead className="h-14 text-center text-lg">مشاهده</TableHead>
        <TableHead className="h-14 text-center text-lg">تاریخ انتشار</TableHead>
        <TableHead className="h-14 text-center text-lg">عملیات</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody className="bg-white">
      {invoices.map((invoice) => (
        <TableRow key={invoice.invoice} className="text-center">
          <TableCell>
            <img src={invoice.invoice} alt="" />
          </TableCell>

          <TableCell className="text-[#6A6A6A]">
            {invoice.paymentStatus}
          </TableCell>
          <TableCell className="text-[#6A6A6A] underline">
            {invoice.number}
          </TableCell>
          <TableCell className="text-[#6A6A6A]">
            {invoice.paymentMethod}
          </TableCell>
          <TableCell className="text-[#6A6A6A]">
            {invoice.totalAmount}
          </TableCell>
          <TableCell className="text-[#6A6A6A]">
            <div className="flex justify-center gap-2">
              <img src={invoice.img} alt="" />
              <img src={invoice.call} alt="" />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>

  </Table>
</div>

  )
}

export default DemoBlog

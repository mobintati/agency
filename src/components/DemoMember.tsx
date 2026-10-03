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

const DemoMember = () => {
     const invoices = [
        {
            invoice: "/picture/Frame 115279 (1).png",
            paymentStatus: "علی ضیا",
            number: "مدیر عامل",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "/picture/Frame 115279 (2).png",
            paymentStatus: "محمد جوادی",
            number: "منابع انسانی",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"


        },
        {
            invoice: "/picture/Frame 115279 (3).png",
            paymentStatus: "ماهان دهقان",
            number: "طراح محصول",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "/picture/Frame 115279 (4).png",
            paymentStatus: "پویا احمدی",
            number: "مدیر فنی",
            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "/picture/Frame 115279 (5).png",
            paymentStatus: "فرشاد مجیدی",
            number: "توسعه دهنده",
            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"

        }
    ]
  return (
    <div>
        <Table className='w-[100%] rounded-lg overflow-hidden    '>
                
                                <TableHeader className='bg-[#ECDAFF] pt-5    rounded-lg '>
                                    <TableRow className='flex   rounded-lg  justify-between '>
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
                                            <div className="flex items-center justify-center h-full  text-lg">
                                              پاسخ
                                            </div>
                                        </TableHead>
                                        <TableHead className="h-14">
                                            <div className="flex items-center justify-center pl-5 h-full text-lg">
                                             عملیات
                                            </div>
                                        </TableHead>
                
                
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <div className='bg-white '>
                                        {invoices.map((invoice) => (
                                            <TableRow className='text-center text-xs flex justify-between items-center ' key={invoice.invoice}>
                                                <TableCell className="font-medium pr-4    "> <img src={invoice.invoice} alt="" />   </TableCell>
                                                <TableCell className=' text-[#6A6A6A] pr-10 '>{invoice.paymentStatus}</TableCell>
                                                <TableCell className=' text-[#6A6A6A] pr-5  '>{invoice.number}</TableCell>
                                                
                                                <div className=''>
                                                    <TableCell className=" pt-5    text-[#6A6A6A] flex "> <img src={invoice.img} className='pl-1' alt="" /> <img src={invoice.call} alt="" />  </TableCell>
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

export default DemoMember

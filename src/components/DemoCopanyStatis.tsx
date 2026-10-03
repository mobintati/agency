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


const DemoCopanyStatis = () => {
       const invoices = [
        {
            invoice: "/public/picture/Frame 115290 (1).png",
            paymentStatus: "100",
            number: "تعداد شرکت ها",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "/public/picture/Frame 115290 (2).png",
            paymentStatus: "200",
            number: "تعداد پروژه خارجی",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"


        },
        {
            invoice: "/public/picture/Frame 115290 (3).png",
            paymentStatus: "400",
            number: "درصد رضایت",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "/public/picture/Frame 115290 (1).png",
            paymentStatus: "520",
            number: "تعداد پروژه",
            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        }
      
    ]
  return (
          <div className=''>
                <Table className='w-[100%] rounded-lg overflow-hidden    '>
    
                    <TableHeader className='bg-[#ECDAFF] pt-5    rounded-lg '>
                        <TableRow className='flex   rounded-lg  justify-between '>
                            <TableHead className="h-14">
                                <div className="flex items-center justify-center h-full pr-5 text-lg">
                                    آیکون
                                </div>
                            </TableHead>
                            <TableHead className="h-14">
                                <div className="flex items-center justify-center h-full  text-lg">
                                    عدد
                                </div>
                            </TableHead>
                            <TableHead className="h-14">
                                <div className="flex items-center justify-center h-full  text-lg">
                                    عنوان
                                </div>
                            </TableHead>
                            <TableHead className="h-14">
                                <div className="flex items-center justify-center h-full pl-5  text-lg">
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
                                    <TableCell className='pr-40 text-[#6A6A6A]'>{invoice.paymentStatus}</TableCell>
                                    <TableCell className='pr-36 text-[#6A6A6A]  '>{invoice.number}</TableCell>
                                    
                                    <div className=''>
                                        <TableCell className=" pr-28 pt-5   text-[#6A6A6A] flex "> <img src={invoice.img} className='pl-1' alt="" /> <img src={invoice.call} alt="" />  </TableCell>
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

export default DemoCopanyStatis

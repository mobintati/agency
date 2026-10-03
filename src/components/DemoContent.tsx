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

const DemoContent = () => {
    const invoices = [
        {
            invoice: "/public/picture/Frame 151048 (1).png",
            paymentStatus: "تاثیر سایت",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "/public/picture/Frame 151048 (2).png",
            paymentStatus: "سایت و سئو",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"


        },
        {
            invoice: "/public/picture/Frame 151048 (3).png",
            paymentStatus: "چاپ و گرافیک",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",

            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "/public/picture/Frame 151048 (4).png",
            paymentStatus: "برندینگ",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",
            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"
        },
        {
            invoice: "/public/picture/Frame 151048 (5).png",
            paymentStatus: "خدمات نمایشی",
            number: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است...",
            call: "/picture/Frame 15090.png",
            img: "/picture/Edit_light.png"

        }
    ]
    return (
        <div className='max-lg:w-[76%]  '>
            <Table className='w-[100%] rounded-lg overflow-hidden max-sm:w[30%]    '>

                <TableHeader className='bg-[#ECDAFF] pt-5    rounded-lg '>
                    <TableRow className='flex   rounded-lg pr-6 space-x-15 '>
                        <TableHead className="h-14">
                            <div className="flex items-center justify-center h-full text-lg">
                                آیکون
                            </div>
                        </TableHead>
                        <TableHead className="h-14">
                            <div className="flex items-center justify-center h-full  text-lg">
                                عنوان
                            </div>
                        </TableHead>
                        <TableHead className="h-14">
                            <div className="flex items-center justify-center h-full pr-25 text-lg">
                                زیر عنوان
                            </div>
                        </TableHead>
                        <TableHead className="h-14">
                            <div className="flex items-center justify-center h-full pr-32 text-lg">
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
                                <TableCell className='pr-10 text-[#6A6A6A]'>{invoice.paymentStatus}</TableCell>
                                <TableCell className='pr-7 text-[#6A6A6A]  '>{invoice.number}</TableCell>
                                
                                <div className=''>
                                    <TableCell className="pr-10 pt-5   text-[#6A6A6A] flex "> <img src={invoice.img} className='pl-1' alt="" /> <img src={invoice.call} alt="" />  </TableCell>
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

export default DemoContent

import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-select";
import { FaRegCheckCircle } from "react-icons/fa";
import AlertComentDialog from "./AlertComentDialog"
import AlertNazarDialog from './AlertNazarDialog';
import { Input } from './ui/input';
import AlertBlogDialog from './AlertBlogDialog';

const AlertBlog = () => {
    return (
        <div >
            <   AlertDialog   >
                <div>
                    <AlertDialogTrigger className='' asChild>
                        <Button className=' bg-white border border-[#EB9714] text-[#EB9714]'>+ مقاله جدید</Button>

                    </AlertDialogTrigger>
                </div>
                <AlertDialogContent className="h-[550px] !w-[800px] !max-w-none    mt-5 pb-30
                " >
                    <AlertDialogHeader className=''>
                        <div className="flex justify-between">
                            <p className="text-xl">مقاله جدید</p>
                            <AlertDialogCancel className='border-0 bg-white border-none'>
                                <button className="border-0"> <img className="" src="/picture/cancel.png" alt="" /></button>
                            </AlertDialogCancel>
                        </div>
                        <div className="w-50 border">
                            <Separator />
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-right'>عنوان مقاله</p>
                                <Input className='w-60 h-12' placeholder='عنوان مقاله را وارد کنید'></Input>
                            </div>
                            <div>
                                <p className='text-right'>نویسنده</p>
                                <Input className='w-60 h-12' placeholder='نام نویسنده را وارد کنید'></Input>
                            </div>
                            <div>
                                <p className='text-right'>دسته بندی</p>
                                <Input className='w-60 h-12' placeholder='دسته بندی را انتخاب کنید'></Input>
                            </div>
                        </div>
                        <div className='flex space-x-4 pt-5'>
                            <div>
                                <p className='text-right'>مدت زمان مطالعه</p>
                                <Input className='w-60 h-12' placeholder='مدت زمان را وارد کنید'></Input>
                            </div>
                            <div>
                                <p className='text-right'>تاریخ انتشار</p>
                                <Input className='w-60 h-12' placeholder='تاریخ را وارد کنید'></Input>
                            </div>
                        </div>
                        <div className='text-right'>
                            <p >متن مقاله</p>
                            <p className='text-xs pt-3'>با کلیک روی آیکون تصویر پایین ابتدا یک کاور برای مقاله جدید انتخاب کنید.</p>
                        </div>
                        <div>
                            <img src="/picture/Frame 15359.png" alt="" />
                        </div>
                        <textarea name="" placeholder='متن مقاله را وارد کنید ' className=' border border-[#0000001A] rounded-xl h-35 pr-2' id=""></textarea>
                        <div className='space-x-1 flex'>
                            <AlertDialogCancel className='border-0'><Button className='bg-white border  border-black text-[#151515]'>انصراف</Button></AlertDialogCancel>
                            <AlertBlogDialog/>
                        </div>

                    </AlertDialogHeader>

                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default AlertBlog

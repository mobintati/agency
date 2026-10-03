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

const AlertCanselDialog = () => {
    return (

        <AlertDialog>
            <div>
                <AlertDialogTrigger asChild>
                    <Button className=' bg-white border border-[#EB9714] text-[#EB9714] max-sm:w-15 max-sm:text-xs'> عدم انتشار </Button>

                </AlertDialogTrigger>
            </div>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-between">
                        <p className="text-xl">غیر فعال کردن نظر</p>
                        <AlertDialogCancel className='border-0 bg-white border-none'>
                            <button className="border-0"> <img className="" src="/picture/cancel.png" alt="" /></button>
                        </AlertDialogCancel>
                    </div>
                    <div className="w-50 border">
                        <Separator />
                    </div>
                    <div>
                        <p className='text-right pt-4 #404040'>آیا مایل به غیر فعال کردن نظر هستید؟</p>
                    </div>
                    <div className='space-x-1 flex'>
                      <AlertDialogCancel className='border-0'><Button className='bg-white border  border-black text-[#151515]'>انصراف</Button></AlertDialogCancel>  
                       <AlertNazarDialog/>
                    </div>

                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AlertCanselDialog

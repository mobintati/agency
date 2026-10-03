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
import AlertContentDialog from './AlertContentDialog';
AlertContentDialog
const BanerDialog = () => {
  return (
    <div>
        
        <AlertDialog>
            <div>
                <AlertDialogTrigger asChild>
                     <Button className="bg-[#FFEEED] text-[#D4190C] mt-5 w-45 md:mr-12 max-sm:w-25 max-sm:mr-2 ">حذف بنر</Button>

                </AlertDialogTrigger>
            </div>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-between">
                        <p className="text-xl">حذف بنر</p>
                        <AlertDialogCancel className='border-0 bg-white border-none'>
                            <button className="border-0"> <img className="" src="/picture/cancel.png" alt="" /></button>
                        </AlertDialogCancel>
                    </div>
                    <div className="w-50 border">
                        <Separator />
                    </div>
                    <div>
                        <p className='text-right pt-4 #404040'>آیا مایل به حذف بنر هستید؟</p>
                    </div>
                    <div className='space-x-1 flex'>
                      <AlertDialogCancel className='border-0'><Button className='bg-white border  border-black text-[#151515]'>انصراف</Button></AlertDialogCancel>  
                       <AlertContentDialog/>
                    </div>

                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>
      
    </div>
  )
}

export default BanerDialog

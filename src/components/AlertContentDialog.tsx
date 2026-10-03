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
import { FaRegCheckCircle } from "react-icons/fa";

const AlertContentDialog = () => {
  return (
    <div>
         <AlertDialog>
            <div>
            <AlertDialogTrigger asChild>
               <Button className='bg-[#FFEEED] text-[#D4190C] text-black border-[#EB9714] '>حذف بنر</Button>
            
            </AlertDialogTrigger>
            </div>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-center">
                        <FaRegCheckCircle className="text-[#66BB6A]  ml-1 w-7 h-7" />
                        <AlertDialogTitle>«بنر با موفقیت حذف شد.»</AlertDialogTitle>

                    </div>
                   
                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>
      
      
    </div>
  )
}

export default AlertContentDialog

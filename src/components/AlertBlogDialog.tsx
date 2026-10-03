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

const AlertBlogDialog = () => {
  return (
    <div>
         <AlertDialog>
            <div>
            <AlertDialogTrigger asChild>
               <Button className='bg-white bg-[#EB9714] text-black border-[#EB9714] '>افزودن مقاله جدید</Button>
            
            </AlertDialogTrigger>
            </div>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-center">
                        <FaRegCheckCircle className="text-[#66BB6A]  ml-1 w-7 h-7" />
                        <AlertDialogTitle>«مقاله جدید با موفقیت منتشر شد.»</AlertDialogTitle>

                    </div>
                   
                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>
      
    </div>
  )
}

export default AlertBlogDialog

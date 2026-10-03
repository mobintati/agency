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

const AlertComentDialog = () => {
    return (
        <AlertDialog>
            <div>
            <AlertDialogTrigger asChild>
               <Button className="bg-[#EB9714] text-black w-45 text-lg ">افزودن نظر جدید</Button>
            
            </AlertDialogTrigger>
            </div>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-center">
                        <FaRegCheckCircle className="text-[#66BB6A]  ml-1 w-7 h-7" />
                        <AlertDialogTitle>«نظر با موفقیت منتشر شد.»</AlertDialogTitle>

                    </div>
                   
                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>
    )
}
export default AlertComentDialog
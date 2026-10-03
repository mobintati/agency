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

const PasswordDialog = () => {
    return (
        <AlertDialog>
            <div>
            <AlertDialogTrigger asChild>
                <Button className="bg-[#4D277C] w-85 max-sm:w-[280px]  h-[40px] text-white " variant="outline">تغییر رمز عبور</Button>
            
            </AlertDialogTrigger>
            </div>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-center">
                        <FaRegCheckCircle className="text-[#66BB6A]  ml-1 w-7 h-7" />
                        <AlertDialogTitle>«رمز عبور با موفقیت تغییر کرد.»</AlertDialogTitle>

                    </div>
                   
                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>
    )
}


export default PasswordDialog

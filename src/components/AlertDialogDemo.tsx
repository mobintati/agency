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

const AlertDialogDemo = () => {
    return (
        <AlertDialog>
            <div>
            <AlertDialogTrigger asChild>
                <Button className="bg-[#4D277C] w-[252px] h-[45px] text-white " variant="outline">ارسال فرم</Button>
            
            </AlertDialogTrigger>
            </div>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-center">
                        <FaRegCheckCircle className="text-[#66BB6A]  ml-1 w-7 h-7" />
                        <AlertDialogTitle>درخواست شما با موفقیت ارسال شد.</AlertDialogTitle>

                    </div>
                    <AlertDialogDescription className="m-auto">
                        بزودی با شما تماس گرفته خواهد شد
                    </AlertDialogDescription>
                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>
    )
}
export default AlertDialogDemo

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
import AlertComentDialog from "./AlertComentDialog";

const AlertAvatarDialog = () => {
    return (
        <AlertDialog>
            <div>
                <AlertDialogTrigger asChild>
                    <Button className='bg-[#EB9714] text-black max-sm:w-10'>انتشار </Button>

                </AlertDialogTrigger>
            </div>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="h-87">
                        <div >
                            <div className="flex justify-between">
                                <p className="text-xl">انتخاب اواتار کاربر</p>
                               <AlertDialogCancel>
                               <button className="border-0"> <img className="" src="/picture/cancel.png" alt="" /></button>
                               </AlertDialogCancel>
                            </div>
                            <div className="w-50 border">
                                <Separator />
                            </div>



                        </div>
                        <div>
                            <p className="text-shadow-gray-600 text-right text-xl pt-5">برای نمایش کامنت یک اواتار انتخاب کنید</p>
                        </div>
                        <div className="relative">
                            <img className="m-auto mt-5 px-5 py-5 border rounded-xl" src="/picture/Frame 15011.png" alt="" />

                            <Button className=" absolute w-35 z-10 top-25 h-11 bg-[#F3F3F3] border right-[35%] border-[#EB9714] text-[#EB9714] border-[#EB9714]">بارگذاری تصویر</Button>
                        </div>
                        <div className="m-auto flex justify-center items-center pt-3">
                            <AlertComentDialog/>
                        </div>

                    </div>

                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>
    )
}
export default AlertAvatarDialog
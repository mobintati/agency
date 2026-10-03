import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import CustomeTabs from "./CustomeTabs"
import { Button } from "./ui/button"
import BanerDialog from "./BanerDialog"
import TableContent from "./TableContent"
import DemoFaq from "./DemoFaq"
import DemoMember from "./DemoMember"
import { CiHome } from "react-icons/ci";
import { IoBagSharp } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";


export function TabsDemo() {
    return (
        <Tabs defaultValue="overview" className=" flex w-[600px] gap-6 inline relative ">

            <TabsList className="flex flex-col space-y-7 mt-15   items-center justify-center absolute left-135 bg-0 ">
                <TabsTrigger  className="px-3 py-5" value="overview"><CiHome className="size-7" /></TabsTrigger>
                <TabsTrigger className="px-3 py-5" value="analytics"><IoBagOutline     className="size-7"  /></TabsTrigger>
                <TabsTrigger className="px-3 py-5" value="reports"><MdOutlineQuestionMark className="size-7"  /></TabsTrigger>
                <TabsTrigger className="px-3 py-5" value="settings"><MdOutlineAccountCircle className="size-7"  /></TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="">
/
                <div className="pr-25 max-lg:pr-10    ">
                    <CustomeTabs />
                </div>

            </TabsContent>
            <TabsContent value="analytics">
                <div className="pr-28 mr-2 w-224">


                    <CardHeader>
                        <CardTitle>

                            <div className="flex justify-end ">
                                <Button className="bg-[#EB9714] text-black">+ نمونه کار جدید</Button>
                            </div>
                        </CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                        <div>

                            <TableContent />
                        </div>
                    </CardContent>
                </div>
            </TabsContent>

            <TabsContent value="reports" className="mr-32 w-192">

                <CardContent className="text-muted-foreground text-sm">
                    <div className="flex justify-end">
                        <Button className="bg-[#EB9714] text-black mr-50 ">+ سوال جدید</Button>
                    </div>
                    <div className="pt-5">
                        <DemoFaq />
                    </div>
                </CardContent>

            </TabsContent>

            <TabsContent value="settings" className="mr-37 w-184 ">
                <div>
                    <div className="flex justify-between">
                        <p className="text-xl">اعضای تیم</p>
                        <Button className="bg-[#EB9714] text-black mr-40 z-100 ">+  عضو جدید </Button>
                    </div>
                    <div className="pt-5">
                        <DemoMember/>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    )
}

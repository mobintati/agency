import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import BanerDialog from "./BanerDialog"
import { Button } from "./ui/button"
import DemoContent from "./DemoContent"
import DemoCopanyStatis from "./DemoCopanyStatis"




export default function CustomeTabs() {
  return (
    <div className="w-full flex justify-center">
      <Tabs defaultValue="banners" className=" max-w-5xl">

        {/* Tabs Header */}
        <div className=" flex justify-center max-lg:items-center lg:mr-5    max-lg:mr-20 max-sm:ml-87 ">
          <TabsList
            className="
              flex 
            gap-8 
              max-lg:gap-2
              max-sm:gap-0.5
              max-sm:text-sm
              bg-purple-100/60 
              p-2 
              
              rounded-xl 
              w-fit 
              mx-auto
            "
          >
            <TabsTrigger
              value="banners"
              className="
                px-6 py-2 
                max-sm:px-2
                rounded-lg 
                data-[state=active]:bg-purple-600 
                data-[state=active]:text-white
              "
            >
              بنرها
            </TabsTrigger>

            <TabsTrigger
              value="logos"
              className="
                px-6 py-2 
                 max-sm:px-2
                rounded-lg 
                data-[state=active]:bg-purple-600 
                data-[state=active]:text-white
              "
            >
              لوگوها
            </TabsTrigger>

            <TabsTrigger
              value="services"
              className="
                px-6 py-2 
                 max-sm:px-2
                rounded-lg 
                data-[state=active]:bg-purple-600 
                data-[state=active]:text-white
              "
            >
              خدمات
            </TabsTrigger>

            <TabsTrigger
              value="stats"
              className="
                px-6 py-2 
                 max-sm:px-2
                rounded-lg 
                data-[state=active]:bg-purple-600 
                data-[state=active]:text-white
              "
            >
              آمار
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tabs Content */}



        <TabsContent value="banners" className="max-lg:h-200 ">
          <div className="lg:h-160 lg:mr-76 rounded-xl p-5 lg:w-185  max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:w-100 max-sm:w-40  max-lg:mr-40 max-sm:ml-120  max-md:items-center   bg-white">

            <div className="text-muted-foreground text-sm  ">
              <p className="text-xl text-black max-sm:text-lg ">بنر اصلی صفحه</p>
              <div className="flex max-lg:flex-col
               ">
                <div className="">
                  <p className="pt-3">بنر موجود</p>
                  <img className="w-80 h-43 pt-3 max-sm:w-40 max-sm:h-20" src="/picture/Frame 15054(1).png" alt="" />
                  <div>
                    <BanerDialog />
                  </div>
                </div>

                <div className="">
                  <p className="pt-3 pr-10 text-right">بنر موجود</p>
                  <div className="relative">
                    <img className="md:mr-10 mt-3 w-80 h-40 px-10 py-5 border rounded-xl max-sm:w-40 " src="/picture/Frame 15011.png" alt="" />

                    <Button className=" absolute w-35 z-10 top-18 h-11  bg-[#F3F3F3] border right-[35%] max-sm:w-23 max-sm:right-[12%] border-[#EB9714] text-[#EB9714] border-[#EB9714]">بارگذاری تصویر</Button>
                  </div>
                  <Button className="bg-[#EB9714] text-black md:mr-28 mt-4 w-45 max-sm:w-26 max-sm:text-xs max-sm:mr-2  ">افزودن بنر هیرو جدید</Button>

                </div>
              </div>
              <div >
                <p className="text-xl pt-5 text-black max-sm:text-lg">بنر همکاری</p>
                <div className="">
                  <p className="pt-3">بنر موجود</p>
                  <img className="w-80 h-43 pt-3 max-sm:w-40" src="/picture/Frame 15207(2).png" alt="" />
                  <BanerDialog />
                </div>
              </div>
            </div>

          </div>
        </TabsContent>


        <TabsContent value="logos">
          <div className="h-90 lg:mr-76 rounded-xl md:p-5 w-185 max-lg:h-110 max-lg:w-150 max-lg:mr-32 max-md:w-100 max-md:h-135 max-md:ml-40 max-sm:w-50 bg-white">
            <div className="flex justify-between max-lg:flex-col items-center">
              <p className="text-xl">لوگو های موجود</p>
              <button className="w-25 h-10 bg-[#EB9714] rounded-xl">+ لوگو جدید</button>
            </div>
            <div className="flex max-lg:grid max-lg:grid-cols-3 space-x-2 pt-2 max-md:grid-cols-2 max-sm:gap-x-1    ">
              <div>
                <img src="/picture/Frame 157026 (1).png" alt="" />

                <Button className="bg-[#FFEEED] text-[#D4190C] mr-[8px] mt-1">حذف لوگو</Button>
              </div>
              <div>
                <img src="/picture/Frame 157026 (2).png" alt="" />

                <Button className="bg-[#FFEEED] text-[#D4190C] mr-[8px] mt-1">حذف لوگو</Button>
              </div>
              <div>
                <img src="/picture/Frame 157026 (3).png" alt="" />

                <Button className="bg-[#FFEEED] text-[#D4190C] mr-[8px] mt-1">حذف لوگو</Button>
              </div>
              <div>
                <img src="/picture/Frame 157026 (4).png" alt="" />

                <Button className="bg-[#FFEEED] text-[#D4190C] mr-[8px] mt-1">حذف لوگو</Button>
              </div>
              <div>
                <img className="mt-2" src="/picture/Frame 157026 (5).png" alt="" />

                <Button className="bg-[#FFEEED] text-[#D4190C] mr-[8px] mt-1">حذف لوگو</Button>
              </div>
              <div>
                <img src="/picture/Frame 157026 (6).png" alt="" />

                <Button className="bg-[#FFEEED] text-[#D4190C] mr-[8px] mt-1">حذف لوگو</Button>
              </div>


            </div>

          </div>
        </TabsContent>

        <TabsContent value="services">
          <div className="mr-76 w-185">
            <div className="flex justify-end max-lg:justify-start md:mr-18 max-sm:ml-50 ">
              <Button className="bg-[#EB9714] text-black ">+ خدمت جدید</Button>
            </div>
            <div className="pt-5">
              <DemoContent />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="stats">
          <div className="mr-76
           w-185">
            <div className="flex justify-end ">
              <Button className="bg-[#EB9714] text-black">+ آمار جدید</Button>
            </div>
            <div className="pt-5">
              <DemoCopanyStatis />
            </div>
          </div>

        </TabsContent>


      </Tabs >
    </div >
  )
}
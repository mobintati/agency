import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"


const AppSidebar = () => {
  return (
    <div className="">
      {/* محتوا */}
      <main>
        {/* متن بلاگ */}
      </main>

      {/* سایدبار بنفش */}
      <Card
        className="
        w-[300px]
        h-[380px]
        mr-10
          

          bg-purple-100
          border-none
        "
      >
        <CardContent className="p-4 space-y-3">
          <p className=" text-xl">مقدمه</p>
             <Separator className='w-4  bg-[#959595] ' />
          <p className=" text-xl">منظور از تبلیغات پنهان چیست؟</p>
           <Separator className='w-4  bg-[#959595] ' />
          <p className=" text-xl">انواع روش‌های تبلیغات پنهان</p>
           <Separator className='w-4  bg-[#959595] ' />
          <p className=" text-xl">چگونگی انجام تبلیغات پنهان</p>
           <Separator className='w-4  bg-[#959595] ' />
          <p className=" text-xl">جمع‌بندی</p>
        </CardContent>
      </Card>
    </div>

  )
}

export default AppSidebar

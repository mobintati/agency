import React from 'react'
import { Separator } from "@/components/ui/separator"
import SeviceComponent from '@/components/SeviceComponent';

const Service = () => {
  interface services {
    image: string;
    title: string;
    disceription: string;
  }
  const services: services[] = [
    { image: '/picture/seo ic(1).png', title: "سایت و سئو", disceription: "«سایت و سئو تنها ابزارهای تبلیغاتی نیستند؛ بلکه استراتژی‌ هایی کلیدی برای افزایش اعتماد، در دیده‌شدن مستمر و هدفمند هستند.» " },
    { image: '/picture/penic.png', title: "چاپ و گرافیک", disceription: "«چاپ و گرافیک، پایه‌گذار هویت بصری هر برند است. از طراحی کارت و بروشور تا چاپ باکیفیت، ما با ترکیب زیبایی‌شناسی و...»" },
    { image: '/picture/Frame 15048.png', title: "برندینگ", disceription: "«همیشه ساخت برند، آن طوری که باید و شاید از کار در نمی آید و به همین دلیل زمانی هم از راه میرسد که باید از کمک دیگران استفاده کنید.»" },
    { image: '/picture/sem ic.png', title: "سمینار و همایش", disceription: "«برگزاری سمینارها و همایش‌ها فرصتی ارزشمند برای تعامل مستقیم با مخاطبان است. ما با برنامه‌ریزی دقیق شما را به خواسته هایتان نزدیکتر می کنیم.»" },
    { image: '/picture/MEDIA.png', title: "رسانه", disceription: "«رسانه ابزاری استراتژیک برای انتقال پیام برند است. ما با انتخاب کانال‌های ارتباطی مؤثر و تولید محتوای هدفمند، کمک می‌کنیم.»" },
    { image: '/picture/pictu ic.png', title: "خدمات نمایشی", disceription: "«خدمات نمایشی شامل تولید و اجرای محتوای بصری است که به شکل مستقیم بر ذهن مخاطب اثر می‌گذارد.»" }

  ]
  return (
    <div className='pt-15'>
      <h1 className='text-2xl pr-13 pt-7 '>خدمات</h1>
      <div className='w-160 pt-2 pr-13 max-sm:w-60 max-lg:w-100  '>
        <Separator />
      </div>
      <div className=' pr-13'>
        <div className=' pt-13 '>
          <h1 className='text-2xl'>خدمات آژانس تبلیغاتی</h1>
          <p className='text-[#404040] pl-5 pt-4'>قصه‌ای که ما برای مشتریانمان روایت می‌کنیم همه‌جانبه است همانی که به آن Full Service می‌گویند در واقع این قصه بیانگر خدمات تبلیغاتی ماست که راوی این داستان ما هستیم. اگر می‌خواهید بدانید که ما برای روایت قصه شما در تبلیغات و ارتباطات چه ابزار‌هایی داریم، خیلی راحت کافی است که به این صفحه خدمات تبلیغاتی نیم نگاهی بیاندارید. ما همه آن‌چه در چنته داریم و ارائه می‌دهیم را با نظم و ترتیب یک جا نشانده‌ایم تا شما از میانشان دست‌چین کنید و هر کدام را که دوست دارید بردارید.</p>
        </div>

      </div>
      <div className='flex justify-center items-center pb-5 '>
        <div className="lg:grid  lg:grid-cols-3 lg:gap-x-3  ">

          {services.map(item => {
            return (
              <SeviceComponent

                image={item.image}
                title={item.title}
                disceription={item.disceription}
              />
            )
          })}

        </div>
      </div>


    </div>
  )
}

export default Service

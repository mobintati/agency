import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { Separator } from "@/components/ui/separator"
import AppSidebar from '@/components/AppSidebar';
import { SwiperSlide } from 'swiper/react';
import Cart from '@/components/Cart';
import BlogCart from '@/components/BlogCart';


const Blog = () => {
  interface Carts {
    img: string;
    title: string;
    berand: string;
    paraghraf: string;
  }
  const Carts: Carts[] = [
    { img: '/picture/imgcart.png', title: 'تبلیغات پنهان', berand: 'برندینگ', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و ...' },
    { img: '/picture/imgcart2.png', title: 'فواید برندینگ', berand: 'برندینگ', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و ...' },
    { img: '/picture/imgcart3.png', title: 'تاثیر سوشال در رشد برند 2', berand: 'برندینگ', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و ...' },

  ]
  return (
    <div className='pt-15'>
      <div className='flex space-x-0.5 pr-13 pt-5 '>
        <p className='text-[#6A6A6A] pt-2'>خانه</p>
        <MdArrowBackIos className='w-3 mt-3 text-[#6A6A6A]' />
        <h1 className='text-3xl'>تبلیغات پنهان را بشناسیم</h1>
      </div>
      <div className='w-160 pt-2 pr-13 max-lg:pr-13
       max-sm:w-60 max-lg:w-100 '>
        <Separator />
      </div>
      <div className='flex pt-5'>
        <div className='mr-4 lg:fixed max-lg:hidden'>
          <AppSidebar />
        </div>
        <div className=' m-auto'>
          <img className='w-195 mt-3 lg:mr-110
           max-md:px-2 ' src="/picture/front-view-young-male-reading-green-file-yellow-wall (1).png" alt="" />
        </div>



      </div>
      <div className='lg:pr-[37%] pl-6  max-lg:pr-13'>
        <div >
          <h1 className='text-xl'>مقدمه</h1>
          <p className='text-[#404040] pt-2'> <u className='text-[#8751BF] '>تبلیغات پنهان</u> چیست؟ تبلیغات پنهان را می توان روشی نوین از تبلیغات خطاب کرد. این تبلیغات به صورت آشکار روی مشتری و ذهن او کار نمی کند؛ بلکه به روشی کاملا پنهان این کار را انجام می دهد. به طوری که یک دفعه به خود می آیید و می بینید به فلان محصول یا فلان برند علاقمند شده اید. علاقه ای که خودتان هم نمی دانید چطور شکل گرفت   .</p>
        </div>
        <div>
          <h1 className='text-xl pt-10'>منظور از تبلیغات پنهان چیست؟</h1>
          <p className='text-[#404040] pt-2 '>داستان تبلیغات پنهان با داستان سایر تبلیغات فرق می کند. این روش که در قالب های مختلف مانند رپورتاژ آگهی، خود را نشان می دهد؛ اصلا اصراری به راضی کردن خریدار ندارد. این روش حرفه ای با زوم کردن روی اطلاعات کاربردی و مثبت درباره محصول، خود به خود حس رضایت و خوش بینی را در خریدار ایجاد کرده و او را برای خرید مجاب می سازد.</p>

          <p className='text-[#404040] pt-5'> در واقع این روش به صورت پنهان، پیام مورد نظر خود را به شما انتقال داده و در ضمیر ناخودآگاهتان تاثیر می گذارد. این پیام علاوه بر ضمیر درونی، بر رفتار فرد نیز اثر نهاده و رفتار مثبتی را در او ایجاد می کند. رفتاری که در نهایت به نفع فروشنده خواهد بود </p>
        </div>
        <div>
          <img src="/picture/izaco_productplacement-7-1536x768.png" className='mt-8' alt="" />
        </div>
        <div>
          <h1 className='text-xl pt-7'>انواع روش های تبلیغات پنهان</h1>
        </div>
        <div>
          <p className='text-[#404040] pt-3'>
            نمایش تصویر لوگو یا نمادی از برند در فیلم های سینمایی، برنامه های تلویزیونی و سایر رسانه ها<br />
            نام بردن از یک برند در یک فیلم سینمایی، شبکه های خبری و.... <br />
            استفاده از آهنگ های معروف یک برند در فیلم و برنامه های تلویزیونی <br />
            استفاده از یک کالای خاص در صحنه هایی از یک فیلم سینمایی یا برنامه های تلویزیونی<br />
          </p>

          <p className='text-[#404040] pt-6'> تبلیغات پنهان مزایای فراوانی دارد که مهمترین آنها شامل افزایش مشتریان بالقوه، افرایش فروش برندهای نمایش داده شده، ایجاد رابطه سودمند دوجانبه، افزایش ماندگاری تبلیغات و ایجاد ارتباط بین برند و قهرمان فیلم، داستان یا بازهای رایانه ای می باشد.</p>
        </div>
        <div className='flex gap-x-5 px-1 max-lg:justify-center max-lg:items-center mt-5 max-lg:flex-col gap-y-2  '>
          <img src="/picture/izaco (1).png" className='w-[245px]' alt="" />
          <img src="/picture/izaco (2).png" className='w-[245px]' alt="" />
          <img src="/picture/izaco (3).png" className='w-[245px]' alt="" />
        </div>
        <div>
          <h1 className='text-xl pt-10 '>چگونگی انجام  تبلیغات همسان یا پنهان</h1>
          <p className='text-[#404040]'>تبلیغات پنهان یا  <u>تبلیغات حمایت شده</u><br />
            در پلتفرم های مختلف انجام می گیرد. یکی از این پلتفرم ها گوگل است. تبلیغات پنهان در گوگل به شکل نتایج جستجو ظاهر می شود. با سرچ یک عبارت، چند نتیجه ظاهر می شوند که به نوعی با تبلیغات پنهان در ارتباط می باشند. پلتفرم دیگری که تبلیغات همسان در آن انجام می شود؛ اینستاگرام<u>(Instagram)</u> است. <br /></p>

          <p className='pt-5 text-[#404040]'> وقتی در اینستاگرام راجع به یک محصول توضیحاتی ارائه می شود؛ بی آنکه در آن از واژه های خرید و فروش استفاده شده باشد، یعنی تبلیغات پنهان صورت گرفته است. حالت دیگری که می توان برای تبلیغات پنهان در نظر گرفت؛ وقتی است که یک یا چند مقاله مرتبط با مقاله ای که در حال خواندن آن در سایت های مختلف هستید؛ پیشنهاد می شود. با کلیک روی لینک های مربوط به آن مقالات، ناخودآگاه به تبلیغات پنهان دعوت خواهید شد.</p>
        </div>
        <img src="/picture/بازاریابی-پنهان-کمیک (1).png" className='w-[500px] m-auto mt-10' alt="" />
        <div>
          <h1 className='text-xl pt-7'>نقطه طلایی تبلیغات پنهان؛ یک جمع‌بندی و قدم بعدی!</h1>
          <p className='pt-3'>با رپورتاژ آگهی (تبلیغات پنهان) درصد موفقیت پروژه های شما بالا خواهد بود. ما مشاوره رایگان را به شما عزیزان ارائه می دهیم تا تصمیمات بهتری را اخذ فرمایید. با توجه به آپدیت شدن بخش رپورتاژ آگهی در رایا مارکتینگ، بازدهی ناشی از آن چند برابر شده است. لذا پیشنهاد می کنیم یک بار ثبت<u>سفارش تولید محتوا</u> رپورتاژ آگهی با رایا را انجام دهید تا نتایج خوش حاصل از آن را ببینید. ما رپورتاژهای حرفه ای و تخصصی را برای شما آماده خواهیم کرد. رپورتاژهایی که کیفیت و قیمت مناسب، تماما در آن لحاظ شده است. در آخر توصیه می کنیم برای برای <u> خرید رپورتاژ آگهی </u> و کسب اطلاع از <u> هزینه رپورتاژ آگهی</u> به بخش مشاوره رجوع فرمایید.</p>
        </div>
        <div className='flex  pt-7 justify-between  '>
          <div>
            <h1 className='text-xl'>مطالب مرتبط</h1>
          </div>
          <div className='flex text-[#EB9714]'>
            <p className=''>مشاهده همه</p>
            <MdArrowBackIos className='w-3 mt-1' />
          </div>

        </div>
        <div className='flex gap-x-5 pb-10 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-y-3 pt-5'>

          {Carts.map(i => {
            return (
              <BlogCart
                img={i.img}
                title={i.title}
                berand={i.berand}
                paraghraf={i.paraghraf}

              />
            )
          })}


        </div>
      </div>








    </div>
  )
}

export default Blog

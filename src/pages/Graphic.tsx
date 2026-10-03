import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { Separator } from "@/components/ui/separator"
import CartVisits from '@/components/CartVisits';
import Consulting from '@/components/Consulting';
import ComponentRasha from '@/components/ComponentRasha';
import ImageProject from "@/components/ImageProject";
import Home from './home';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { GoArrowLeft } from "react-icons/go";
import StatisticsComponent from '@/components/StatisticsComponent';
import AccordionDemo from '@/components/AccordionDemo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import LogoCarts from '@/components/LogoCarts';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Graphic = () => {
  interface CartVisit {
    img: String;
    image: String;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    title: string;

  }
  const CartVisit: CartVisit[] = [
    { img: '/picture/logo-graphic (1).png', image: '/picture/logo-graphic (1).png', title: 'کارت ویزیت', text1: 'طراحی خوانا و مینیمال', text2: 'طراحی Layout حرفه‌ای', text3: 'ارائه Mockup کارت ویزیت', text4: 'طراحی دو رو یا یک رو' },
    { img: '/picture/logo-graphic (1).png', image: '/picture/logo-graphic (1).png', title: 'کارت ویزیت', text1: 'طراحی خوانا و مینیمال', text2: 'طراحی Layout حرفه‌ای', text3: 'ارائه Mockup کارت ویزیت', text4: 'طراحی دو رو یا یک رو' },
    { img: '/picture/logo-graphic (3).png', image: '/picture/logo-graphic (3).png', title: 'کارت ویزیت', text1: 'طراحی خوانا و مینیمال', text2: 'طراحی Layout حرفه‌ای', text3: 'ارائه Mockup کارت ویزیت', text4: 'طراحی دو رو یا یک رو' },
    { img: '/picture/logo-graphic (4).png', image: '/picture/logo-graphic (4).png', title: 'کارت ویزیت', text1: 'طراحی خوانا و مینیمال', text2: 'طراحی Layout حرفه‌ای', text3: 'ارائه Mockup کارت ویزیت', text4: 'طراحی دو رو یا یک رو' }
  ]
  interface Rasha {

    text: string;
    img: string;
  }
  const Rasha: Rasha[] = [
    { text: 'طراحی خلاقانه و اختصاصی', img: '/picture/fasts (1).png' },
    { text: 'مشاوره تخصصی', img: '/picture/fasts (2).png' },
    { text: 'قیمت منصفانه و شفاف', img: '/picture/fasts (3).png' },
    { text: 'پشتیبانی و مشاوره رایگان', img: '/picture/fasts (4).png' },
    { text: 'چاپ با کیفیت', img: '/picture/fasts (5).png' },

    { text: 'تحویل سریع و به‌موقع', img: '/picture/fasts (6).png' }
  ]
  interface ImageProjects {
    imge: string;
    title: string;
    paraghraf: string;
    logo: string;
    word: string;

  }
  const ImageProjects: ImageProjects[] = [

    { imge: '/picture/Component-1.png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/penic.png', word: 'لوگو' },
    { imge: '/picture/Ronak-1.png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/penic.png', word: 'لوگو' },
    { imge: '/picture/Ronak-2.png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/penic.png', word: 'لوگو' },
    { imge: '/picture/Ronak-3.png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/penic.png', word: 'لوگو' },
    { imge: '/picture/Ronak-4.png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/penic.png', word: 'لوگو' },
    { imge: '/picture/Ronak-5.png', title: 'شرکت روناک', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ', logo: '/picture/penic.png', word: 'لوگو' }

  ]
  interface Statistics {
    image
    : string;
    title: string;
    name: string;
  }

  const Statistics: Statistics[] = [
    { image: "/picture/Frame 14965.png", title: "1200", name: "تعداد پروژه " },
    { image: "/picture/Frame 14964(1).png", title: "100", name: "تعداد شرکت ها " },
    { image: "/picture/Frame 14967.png", title: "98", name: "درصد رضایت" },
    { image: "/picture/Frame 14964.png", title: "200", name: "تعداد پروژه خارجی " }

  ]
    interface Logocart {
        img: string;
    }
    const Logocart: Logocart[] = [
        { img: '/picture/bank (1).png' },
        { img: '/picture/bank (2).png' },
        { img: '/picture/bank (3).png' },
        { img: '/picture/bank (4).png' },
        { img: '/picture/bank (5).png' },
        { img: '/picture/bank (6).png' },
        { img: '/picture/bank (7).png' },
        { img: '/picture/bank (8).png' },
        { img: '/picture/bank (9).png' },
        { img: '/picture/bank (10).png' },
        { img: '/picture/bank (11).png' },
        { img: '/picture/bank (12).png' },
        { img: '/picture/bank (13).png' },
        { img: '/picture/bank (14).png' },
        { img: '/picture/bank (15).png' },
        { img: '/picture/bank (16).png' },
        { img: '/picture/bank (17).png' },
        { img: '/picture/bank (18).png' },
        { img: '/picture/bank (19).png' },
        
    ]
  return (

    <div className='pt-20'>

      <div className='flex space-x-0.5 pr-13 '>
        <p className='text-[#6A6A6A] pt-2'>خانه</p>
        <MdArrowBackIos className='w-3 mt-3 text-[#6A6A6A]' />
        <h5 className='text-xl pt-1'>خدمات</h5>
        <MdArrowBackIos className=' mt-[10px] text-[#6A6A6A]' />
        <h1 className='text-3xl'>چاپ و گرافیک</h1>
      </div>
      <div className='w-160 pt-2 pr-13 max-sm:w-60 max-lg:w-100 '>
        <Separator />
      </div>
      <div className=' pr-12 max-lg:text-center'>
        <div className='pr-1 pt-13'>
          <h1 className='text-3xl'>طراحی خوب،</h1>
         < h1 className='text-3xl pt-1'>ملودی بی‌کلام برند است.</h1>
          <p className='text-[#404040] pl-3 pt-5'>آیا برای کسب‌وکار خود به دنبال یک طراحی خلاقانه و باکیفیت هستید که بتواند هویت برند شما را به بهترین شکل ممکن به تصویر بکشد؟ خدمات طراحی گرافیک و چاپ راشا به شما کمک می‌کند علاوه بر طرح خلاقانه، در مسیر طراحی تا چاپ با پیوستگی و یکدستی همه جانبه و حرفه‌ای در اجرای جزییات، پیامی تاثیرگذار از اعتماد برای مخاطبی هدف خود ارسال کنید تا از اعتبار برند خود مراقبت کنید.  <br /> این <u> <span className='text-[#4D277C]'>خدمات </span></u>  شامل موارد زیر است :</p>

        </div>

      </div>
      <div className='max-lg:flex max-lg:justify-center max-lg:items-center max-lg:pt-5 pb-10 pt-5'>
        <div className='flex lg:justify-around max-lg:grid md:grid-cols-2 max-lg:gap-4  '>
          {CartVisit.map(index => {
            return (
              <CartVisits
                img={index.img}
                image={index.image}
                title={index.title}
                text1={index.text1}
                text2={index.text2}
                text3={index.text3}
                text4={index.text4}
              />
            )
          }

          )}
        </div>
      </div>

        <div className="absolute right-20 left-15">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView="auto"
                    centeredSlides
                    loop
                    navigation={{
                        prevEl: ".prev-btn3",
                        nextEl: ".next-btn3",
                    }}

                    breakpoints={{
                        0: { slidesPerView: 2 },
                        640: {
                            slidesPerView: 4

                        },
                        1024: { slidesPerView: 11 },
                    }}
                >
                    {Logocart.map((item, index) => (
                        <SwiperSlide key={index}
                            className="!w-[120px] flex justify-cente "
                        >
                            <LogoCarts
                                img={item.img}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
                </div>
                <div className="flex justify-center gap-4 mt-4 relative mt-9">
                    <button className="prev-btn3   bg-gray-200 w-7 h-15 rounded-lg flex justify-center items-center absolute right-5    ">< IoIosArrowForward /></button>
                    <button className="next-btn3 bg-gray-200 w-7 h-15 rounded-lg  flex justify-center items-center absolute left-5  ">< IoIosArrowBack /></button>
                </div>  
      <div className='pt-15'>
        <Consulting />
      </div>
      <div className='text-center pt-13 '>
        <h1 className='text-xl'>چرا <u><span className='text-[#6A399D]'>راشا</span></u> را انتخاب کنیم؟ </h1>
      </div>
      <div className='w-full flex justify-center items-center pt-5'>
        <div className='grid grid-cols-3 gap-5 gap-x-10 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          {Rasha.map(index => {
            return (
              <ComponentRasha

                text={index.text}
                img={index.img}

              />
            )
          }

          )}
        </div>
      </div>
      <div>
        <h1 className='text-center text-xl pt-15'>نمونه کار</h1>
      </div>
      <div className='w-full flex justify-center items-center '>
        <div className="grid  lg:grid-cols-3   gap-x-10 gap-y-25 ">
          {ImageProjects.map(index => {
            return (

              <ImageProject
                imge={index.imge}
                title={index.title}
                paraghraf={index.paraghraf}
                logo={index.logo}
                word={index.word}
              />
            )
          })}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <Link to={'./pages/portfolio'}>   <Button className="text-[#4D277C] bg-white border border-[#4D277C] w-40 mt-25"> مشاهده موارد بیشتر <GoArrowLeft /></Button> </Link>
      </div>
      <div>
        <p className="text-center pt-5 text-2xl" >آمار</p>

      </div>
      <div className='w-full flex items-center justify-center '>
        <div className="lg:flex lg:bg-white lg:justify-around w-[82%] lg:items-center  lg:py-1 lg:mt-3 lg:rounded-lg">
          {Statistics.map(i => {
            return (
              < StatisticsComponent
                image={i.image}
                title={i.title}
                name={i.name}
              />)

          })}
        </div>
      </div>
      <div>
        <h1 className='text-xl pt-5 max-lg:pt-10 lg:pr-15 max-lg:text-center'>مطالب مرتبط</h1>
      </div>
      <div className='max-lg:text-center '>
        <div className='flex max-lg:flex-col'>
          <div className='lg:pr-23 lg:pt-12 max-lg:pt-10'>
            <h2 className='text-lg '>تاثیر لوگو در رشد برند </h2>
            <p className='text-[#404040] text-[16px] max-lg:pt-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و <br />متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای <br />متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد...</p>
          </div>
          <div>
            <img src="/picture/mataleb (1).png" className='lg:mr-13 w-80 max-lg:m-auto max-lg:pt-5' alt="" />
          </div>
        </div>

        <div className='flex lg:pr-10 lg:pt-17 max-lg:flex-col max-lg:pt-5'>
          <div>
            <img src="/picture/mataleb (2).png" className='lg:mr-13 w-80 max-lg:m-auto' alt="" />
          </div>
          <div className='lg:pr-20 lg:pt-12 '>
            <h2 className='text-lg max-lg:pt-5 '>چرایی چاپ دیجیتال </h2>
            <p className='text-[#404040] text-[16px] max-lg:pt-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای<br /> متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد...</p>
          </div>
        </div>


        <div className='flex lg:pt-20 max-lg:flex-col'>
          <div className='lg:pr-23 lg:pt-12 max-lg:pt-10'>
            <h2 className='text-lg '>انواع کاتالوگ</h2>
            <p className='text-[#404040] text-[16px] max-lg:pt-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای<br /> متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد...</p>
          </div>
          <div>
            <img src="/picture/mataleb (3).png" className='lg:mr-13 w-80 max-lg:m-auto max-lg:pt-5' alt="" />
          </div>
        </div>

        <div className='flex lg:pr-10 lg:pt-17 max-lg:flex-col max-lg:pt-5'>
          <div>
            <img src="/picture/mataleb (4).png" className='lg:mr-13 w-80 max-lg:m-auto' alt="" />
          </div>
          <div className='lg:pr-20 lg:pt-12 max-lg:pt-5'>
            <h2 className='text-lg '>لزوم داشتن کارت ویزیت</h2>
            <p className='text-[#404040] text-[16px] max-lg:pt-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها <br />و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای<br /> متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد...</p>
          </div>
        </div>
      </div>
      <div className='max-lg:flex max-lg:justify-center max-lg:items-center'>
        <div className='mt-30 grid grid-cols-2 lg:w-full pr-10 h-full pb-20 max-lg:grid-cols-1 max-lg:w-[50%] '>
          <div className='pt-8'>
            < AccordionDemo />
          </div>
          <div className='max-lg:m-auto'>
            <img src="/picture/5225417 1.png" className='h-full  lg:mr-20 max-lg:m-auto  ' alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}
export default Graphic

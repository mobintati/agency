import { Button } from "@/components/ui/button"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SeviceComponent from "@/components/SeviceComponent";
import StatisticsComponent from "@/components/StatisticsComponent";
import Consulting from "@/components/Consulting";
import ImageProject from "@/components/ImageProject";
import Coment from "@/components/Coment";
import Cart from "@/components/Cart";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import LogoCarts from "@/components/LogoCarts";
import { RiArrowUpDoubleLine } from "react-icons/ri";




const Home = () => {

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
    interface Coments {
        img: string;
        title: string;
        stars: string;
        name: string;
        paraghraf: string;
        stars2?: string;
    }
    const Coments: Coments[] = [
        { img: '/picture/logo_1.png', title: 'شرکت پارس', stars: '/picture/Star 1.png', name: 'نادر مجیدی', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگر ها و متون بلکه روزنامه و مجله در ستون و  ....' },
        { img: '/picture/logo2.png', title: 'شرکت آینده', stars: '/picture/Star 1.png', name: 'جواد عباسی', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگر ها و متون بلکه روزنامه و مجله در ستون و  ....' },
        { img: '/picture/logo3.png', title: 'شرکت هدف', stars: '/picture/Star 1.png', stars2: 'Star 1(1).png', name: 'سمیه تورانی', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگر ها و متون بلکه روزنامه و مجله در ستون و  ....', },
        { img: '/picture/logo4.png', title: 'شرکت یاور', stars: '/picture/Star 1.png', stars2: 'Star 1(1).png', name: 'ندا عباسی', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگر ها و متون بلکه روزنامه و مجله در ستون و  ....', },
        { img: '/picture/logo_1.png', title: 'شرکت پارس', stars: '/picture/Star 1.png', name: 'نادر مجیدی', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگر ها و متون بلکه روزنامه و مجله در ستون و  ....' }

    ]
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
        { img: '/picture/imgcart4.png', title: 'استار باکس', berand: 'برندینگ', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و ...' },
        { img: '/picture/imgcart4.png', title: 'تاثیر سوشال در رشد برند 2', berand: 'برندینگ', paraghraf: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و ...' }
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
        <div>
            <div className="bg-[#FAF9F7] ">

                <div className="pt-15">
                    <Hero />
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

                <div className="px-5">
                    <h1 className="text-2xl pt-30 text-center">خدمات</h1>
                    <p className="text-[10px] pr-3 pt-3 lg:text-[20px] lg:text-center">آژانس راشا به عنوان اولین و تنها آژانس مدیکال برندینگ در ایران، با هدف ارائه خدمات تخصصی و منحصر به فرد در حوزه‌ی برندینگ و مارکتینگ فعالیت می‌کند. ما با بهره‌گیری از تیمی متخصص و حرفه‌ای و تلفیق دانش طراحی با هنر و اصول بازاریابی، به شما کمک می‌کنیم تا برندی قوی و متمایز برای کسب‌وکار خود ایجاد کنید.</p>
                </div>
                <div className="flex justify-center items-center">
                    <div className="lg:grid  lg:grid-cols-3 lg:gap-x-3">

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
                <div>
                    <p className="text-center pt-10 text-2xl" >آمار</p>

                </div>
                <div className='w-full flex items-center justify-center mt-3'>
                    <div className="lg:flex lg:bg-white lg:justify-around w-[82%] lg:items-center  lg:py-1 lg:mt-3 lg:rounded-lg lg:gap-x-2 ">
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
                    <Consulting />
                </div>
                <div>
                    <p className="text-center pt-10 text-2xl">آخرین پروژه ها</p>
                </div>
                <div className="  flex justify-center items-center max-lg:flex-col max-lg:gap-x-30  ">
                    <div className="grid  lg:grid-cols-3 gap-x-10 gap-y-25      ">
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
                    <Link to={'./pages/portfolio'}>   <Button className="text-[#4D277C] bg-white border border-[#4D277C] w-40 mt-26"> مشاهده موارد بیشتر <GoArrowLeft /></Button> </Link>
                </div>

                <div className=" relative">
                    <p className="text-center pt-20 text-2xl">نقشه راه مشتریان</p>
                    <div className="relative">
                        <div className=" absolute left-0">
                            <img className=" absolute" src="/picture/Ellipse 390.png" alt="" />
                            <img className="absolute" src="/picture/Ellipse 389.png" alt="" />
                            <img className="absolute" src="/picture/Ellipse 388.png" alt="" />
                            <img className="absolute" src="/picture/Ellipse 387.png" alt="" />
                        </div>
                    </div>
                    <img src="/picture/Group 20.png" className=" mt-4 m-auto mb-5 " alt="" />
                </div>

                <div>
                    <h1 className="text-2xl text-center pb-10 pt-15">نظرات شما</h1>
                </div>
                <div className="flex px-5">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={1}
                        navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn",
                        }}
                        dir="rtl"
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: {
                                slidesPerView: 2

                            },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {Coments.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Coment
                                    img={item.img}
                                    title={item.title}
                                    stars={item.stars}
                                    name={item.name}
                                    paraghraf={item.paraghraf}
                                    stars2={item.stars2}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="prev-btn  bg-gray-200 w-10 h-10 rounded-lg  flex justify-center items-center">< IoIosArrowForward /></button>
                    <button className="next-btn bg-gray-200 w-10 h-10 rounded-lg  flex justify-center items-center">< IoIosArrowBack /></button>
                </div>

                <h1 className="text-center pt-15 pb-5">مقالات</h1>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={15

                    }

                    navigation={{
                        prevEl: ".prev-btn2",
                        nextEl: ".next-btn2",
                    }}
                    dir="rtl"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: {

                            slidesPerView: 2

                        },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {Carts.map((i, index) => (
                        <SwiperSlide key={index}>
                            <Cart
                                img={i.img}
                                title={i.title}
                                berand={i.berand}
                                paraghraf={i.paraghraf}

                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center gap-4 mt-4 mb-5 ">
                    <button className="prev-btn2  bg-gray-200 w-10 h-10 rounded-lg flex justify-center items-center">< IoIosArrowForward /></button>
                    <button className="next-btn2 bg-gray-200 w-10 h-10 rounded-lg flex justify-center items-center">< IoIosArrowBack /></button>
                </div>
                <div className="fixed z-[7] bottom-1">
                    <Button onClick={() =>
                        window.scrollTo({
                            top: 0,
                            left: 100,
                            behavior: "smooth"
                        })
                    } className="rounded-[50%] h-15 w-15 mr-7 bg-[#555555] mb-10"> <div className=""> <RiArrowUpDoubleLine className="size-10" /> </div>  </Button>
                </div>
            </div>
        </div >)
}
export default Home

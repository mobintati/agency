import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionDemo = () => {
    return (
        <div className=''>

            <Accordion
                type="single"
                collapsible
                className=" space-y-2"
                defaultValue="item-1"

            >
                <p className='bg-black text-white rounded-lg p-2 text-center text-xl '>سوالات متداول</p>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='bg-[#ECDAFF] pr-6 text-lg'>1.  حداقل و حداکثر تیراژ چاپ چقدر است؟ </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='pr-6'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است

                        </p>

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='bg-[#ECDAFF] pr-6 text-lg'>2.  زمان تحویل سفارش‌های چاپی چقدر است؟</AccordionTrigger>

                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='pr-6'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                        </p>

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='bg-[#ECDAFF] pr-6 text-lg'>3.  آیا قبل از چاپ، پیش‌نمایش یا ماکت طراحی ارائه می‌دهید؟</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='pr-6'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                        </p>

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className='bg-[#ECDAFF] pr-6 text-lg'>4. برای شروع طراحی، چه فایل‌ها یا اطلاعاتی از مشتری نیاز دارید؟</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='pr-6'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                        </p>

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className='bg-[#ECDAFF] pr-6 text-lg'>5.  آیا امکان طراحی اختصاصی بر اساس هویت بصری برند وجود دارد؟</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='pr-6'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                        </p>

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className='bg-[#ECDAFF] pr-6 text-lg'>6.  فرآیند طراحی گرافیک از زمان ثبت سفارش تا تحویل نهایی چگونه است؟</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p className='pr-6'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                        </p>

                    </AccordionContent>
                </AccordionItem>


            </Accordion>
            

        </div>
    )
}

export default AccordionDemo

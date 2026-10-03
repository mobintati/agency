import React from 'react'
import { Separator } from "@/components/ui/separator"
import EgoLogos from '@/components/EgoLogos';

interface EgoLogo {
  img: string;
}
const EgoLogo: EgoLogo[] = [
  { img: '/picture/Frame (1).png' },
  { img: '/picture/Frame (2).png' },
  { img: '/picture/Frame (3).png' },
  { img: '/picture/Frame (4).png' },
  { img: '/picture/Frame (5).png' },
  { img: '/picture/Frame (6).png' },
  { img: '/picture/Frame (7).png' },
  { img: '/picture/Frame (8).png' },
]
const About = () => {
  return (
    <div className='pt-15'>
      <h1 className='text-2xl lg:pr-13 pt-5 max-lg:pr-5 '>درباره ما</h1>
      <div className='w-160 pt-2 lg:pr-13 max-lg:pr-5 max-sm:w-60 max-lg:w-100 '>
        <Separator />
      </div>

      <div className='grid grid-cols-2 max-lg:flex max-lg:flex-col'>
        <div className='lg:pr-13 pt-13 max-lg:text-center max-sm:px-2'>
          <h1 className='text-2xl'>معرفی</h1>
          <p className='pt-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و <br />متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای<br /> متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد...</p>
        </div>
        <div className=''>
          <img className='mt-6 lg:mr-42 m-auto' src="/picture/Mask group.png" alt="" />
        </div>

      </div>

      <div className='flex justify-evenly lg:space-x-5 pt-10 max-lg:flex-col max-lg:justify-center max-lg:gap-y-4 max-lg:items-center '>
        <div className='flex'>
          <div>
            <img src="/picture/target (1).png" className='h-[80px]' alt="" />
          </div>
          <div className='pt-5 pr-2'>
            <h1 className='text-xl'>ارزش ها</h1>
            <p className='text-[#404040]'>لورم ایپسوم متن ساختگی با تولید سادگی..</p>
          </div>
        </div>
        <div className='flex'>
          <div className=''>
            <img src="/picture/target (1).png" className='h-[80px]' alt="" />
          </div>
          <div className='pt-5 pr-2'>
            <h1 className='text-xl'>ارزش ها</h1>
            <p className='text-[#404040]'>لورم ایپسوم متن ساختگی با تولید سادگی..</p>
          </div>
        </div>
        <div className='flex'>
          <div>
            <img src="/picture/target (1).png" className='h-[80px]' alt="" />
          </div>
          <div className='pt-5 pr-2'>
            <h1 className='text-xl'>ارزش ها</h1>
            <p className='text-[#404040]'>لورم ایپسوم متن ساختگی با تولید سادگی..</p>
          </div>
        </div>

      </div>

      <div className='lg:pr-13 pt-5 text-center'>
        <h1 className='text-xl pt-12'>اعضای تیم ما</h1>
        <p className='pl-4 pt-3 max-sm:px-2' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را به دست آورند</p>
      </div>
      <div className='flex w-full justify-center items-center pb-5'>
        <div className='grid grid-cols-4 pt-5 lg:gap-20 max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-x-20 '>
          {EgoLogo.map(index => {
            return (
              <EgoLogos
                img={index.img}
              />
            )
          }
          )}
        </div>
      </div>


    </div>

  )

}

export default About

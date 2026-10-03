import React from 'react'
import { Button } from "@/components/ui/button"
interface BottomsProps {
  setShowLastEight: (value: boolean) => void;
}

const Bottoms = ({ setShowLastEight }: BottomsProps) => {
  return (
    <div className='mt-5 space-x-2 max-lg:space-y-2 rounded-[50%] text-[#6A6A6A] bg-[#F7F7F7] mr-13'>
        <Button onClick={() => setShowLastEight(false)}  className='focus:bg-[#ECDAFF] rounded-2xl  bg-[#E4E4E4] border-[#E4E4E4] text-[#6A6A6A]'>همه</Button>
        <Button onClick={() => setShowLastEight(true)} className='rounded-2xl bg-[#E4E4E4] focus:bg-[#ECDAFF] border-[#E4E4E4] text-[#6A6A6A]'>چاپ و گرافیک</Button>
        <Button className='rounded-2xl bg-[#E4E4E4] border-[#E4E4E4] text-[#6A6A6A]'>سایت و سئو</Button>
        <Button className='rounded-2xl bg-[#E4E4E4] border-[#E4E4E4] text-[#6A6A6A]'>برندینگ</Button>
        <Button className='rounded-2xl bg-[#E4E4E4] border-[#E4E4E4] text-[#6A6A6A]'>سمینار و همایش</Button>
        <Button className='rounded-2xl bg-[#E4E4E4] border-[#E4E4E4] text-[#6A6A6A]'>رسانه</Button>
        <Button className='rounded-2xl bg-none border-[#E4E4E4] text-[#6A6A6A] bg-[#E4E4E4] '>خدمات نمایشی</Button>

      
    </div>
  )
}

export default Bottoms

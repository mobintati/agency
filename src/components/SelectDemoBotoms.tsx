import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SelectDemoBotoms=() => {
  return (
    
        <Select >
      <SelectTrigger className="w-[250px] h-[150px]">
        <SelectValue placeholder="نوع خدمت خود را انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>نوع خدمت خود را انتخاب کنید</SelectLabel>
          <SelectItem value="apple">سایت و سئو</SelectItem>
          <SelectItem value="banana">چاپ</SelectItem>
          <SelectItem value="blueberry">برندینگ</SelectItem>
          <SelectItem value="grapes">رسانه</SelectItem>
          <SelectItem value="pineapple"> نمایشی</SelectItem>
           <SelectItem value="pineapple">سمینار</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

      
  )
}

export default SelectDemoBotoms

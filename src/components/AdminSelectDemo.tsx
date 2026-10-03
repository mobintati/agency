import React from "react"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { useNavigate } from 'react-router-dom'



const AdminSelectDemo = () => {
  const navigate=useNavigate()
 const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const value = e.target.value
  if (value.startsWith("/")) {
    navigate(value)
  }
}
  return (

    <NativeSelect onChange={handleChange} className='' >
      <NativeSelectOption value="">همه</NativeSelectOption>
      <NativeSelectOption value="todo">سایت و سیو</NativeSelectOption>
      <NativeSelectOption value="/pages/statisgraphic">چاپ</NativeSelectOption>
      <NativeSelectOption value="done">برندینگ</NativeSelectOption>
      <NativeSelectOption value="cancelled">رسانه</NativeSelectOption>
      <NativeSelectOption value="cancelled">نمایشی</NativeSelectOption>
      <NativeSelectOption value="cancelled">سمینار</NativeSelectOption>
    </NativeSelect>

  )
}


export default AdminSelectDemo

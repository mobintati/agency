import { Button } from "@/components/ui/button"
import * as React from "react"
import SelectDemoBotoms from "./SelectDemoBotoms"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AlertDialogDemo from "./AlertDialogDemo"
import { useState } from 'react'
import { useEffect } from "react"


const CartTask = () => {
  const [name, setName] = useState(0)
  const [name2, setName2] = useState(0)

  const [number, setNumber] = useState(0)
  const [number2, setNumber2] = useState(0)
  function HandlerClick() {
    setNumber(number + 1)
  }
  function HandlerClick2() {
    setNumber2(number2 + 1)
  }
  useEffect(() => {
    const sum = number + number2;
    const praperty = (number / sum) * 100;
    const praperty2 = (number2 / sum) * 100;
    if (number || number2 !== 0) {
      setName(Math.trunc(praperty))
      setName2(Math.trunc(praperty2))
    }

  })



  return (
    <div className="">
      <Card className="
     color-black w-80 h-100 m-auto bg-linear-to-t from-blue-400 to-blue-100 hover:bg-gray-100  text-center">
        <CardHeader>

          <CardTitle className="pt-1">ورزشی</CardTitle>
          <CardDescription className="pt-2">

          </CardDescription>

          <CardAction>

          </CardAction>
        </CardHeader>
        <CardContent>
          <form className="">
            <h1 className="text-xl">کدام تیر برنده میشود</h1>
            <div className="flex justify-center space-x-7 pt-3">
              <img src="/public/picture/tarafdari1.png" className="w-16 rounded h-16" alt="" />
              <img src="/public/picture/tarafdari (3).jpg" className="w-16 transition-normal rounded h-16" alt="" />
            </div>


          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="space-x-11">
            <div className="flex space-x-3 justify-center items-center m-auto">
              <h1 className="text-xl"> درصد:%{name}</h1>
              <h1 className="text-xl"> درصد:%{name2}</h1>
            </div>
            <div className="flex justify-center items-center pt-4 m-auto space-x-10">
              <h1 className=" text-xl pl-3 m-auto">تعداد رای:<br /> {number}</h1>
              <h1 className="text-xl m-auto">تعداد رای: <br /> {number2}</h1>
            </div>
            <div className="space-x-8 m-auto">
              <Button onClick={HandlerClick} className="bg-green-800 text-white  h-10 w-15  ">yes</Button>
              <Button onClick={HandlerClick2} className="bg-red-700 text-white h-10 w-15">no</Button>
            </div>
          </div>

        </CardFooter>
      </Card>
    </div>
  )
}
export default CartTask

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



const CartTaskk = () => {
  const [name, setName] = useState(0)
const [name2, setName2] = useState(0)
  
const [number, setNumber] = useState(0)
const [number2, setNumber2] = useState(0)
function HandlerClick() {
  setNumber(number +1)
  }
  function HandlerClick2() {
  setNumber2(number2 +1)
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
     color-black w-80 h-100 m-auto bg-linear-to-r  bg-white   text-center">
        <CardHeader>
          
          <CardTitle className="pt-1">ورزشی </CardTitle>
          <CardDescription className="pt-2">

          </CardDescription>

          <CardAction>

          </CardAction>
        </CardHeader>
        <CardContent>
          <form className="">
            <h1 className="text-xl">ایا این توپ گل میشود؟</h1>
            <div className="flex justify-center space-x-7 pt-3">
            <img src="/public/picture/ahmadi.webp" className="w-40 rounded h-25" alt="" />
           
            </div>


          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="space-x-11">
            <div className="flex m-auto space-x-6">
             <h1 className="pr-2">تعداد رای:<br/> {number}</h1>
              <h1 className="">تعداد رای: <br/> {number2}</h1>
              </div>
              <div className="space-x-8 m-auto">
            <Button onClick={HandlerClick} className="bg-green-800 text-white h-10 w-15  ">yes</Button>
            <Button onClick={HandlerClick2} className="bg-red-700 text-white h-10 w-15">no</Button>
         </div>
          </div>

        </CardFooter>
      </Card>
    </div>
  )
}
export default CartTaskk

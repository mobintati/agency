import React from 'react'

import { Button } from "@/components/ui/button"
import { Separator } from '@radix-ui/react-select'
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
import { Link } from 'react-router-dom'
import PasswordDialog from '@/components/PasswordDialog'

const NewPass=()=> {
  return (
    <div className='bg-[#2B2B2B] h-full pb-10 pr-10'>
        <div className='pt-20 flex justify-around'>
    <Card className="w-full max-w-sm bg-[#2B2B2B] text-white border-none">
      <CardHeader>
        <CardTitle className='text-center  pt-20'>ایجاد رمز جدید</CardTitle>
        <hr className='w-50 m-auto mt-2' />
         <div className='w-50 h-5 text-white '>
        <Separator />
      </div>
        
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label >رمز عبور جدید</Label>
              <Input
                
                type="password"
                placeholder="رمز جدید خود را وارد کنید"
        
                className='bg-white text-[#BFBFBF] mt-2'
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">تکرار رمز عبور جدید</Label>
                
              </div>
              <Input id="password" type="password" className='bg-white text-[#BFBFBF] mt-2' placeholder='رمز جدید خود را تکرار کنید' />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <PasswordDialog/>
        
        
      </CardFooter>
    </Card>
    <img src="/picture/Frame 15073.png" className='w-130 ' alt="" />
    </div>
    </div>
  )
}


export default NewPass

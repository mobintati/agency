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

const LoginComponent=()=> {
  return (
    <Card className="w-full max-w-sm bg-[#2B2B2B] text-white border-none">
      <CardHeader>
        <CardTitle className='text-center  pt-20'>ورود به حساب کاربری</CardTitle>
        <hr className='w-50 m-auto mt-2' />
         <div className='w-50 h-5 text-white '>
        <Separator />
      </div>
        
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label >نام کاربری</Label>
              <Input
                
                type="text"
                placeholder="نام کاربری خود را وارد کنید"
        
                className='bg-white text-[#BFBFBF] mt-2'
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">رمز عبور</Label>
                
              </div>
              <Input id="password" type="password" className='bg-white text-[#BFBFBF] mt-2' placeholder='رمز جدید خود را وارد کنید' />
            </div>
            <Link to={'/pages/RecPass'}>
            <a
                  href="#"
                  className=" inline-block text-sm underline-offset-4 hover:underline text-center"
                >
                  فراموشی رمز عبور
                </a>
                </Link>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full bg-[#4D277C]">
          ورود به حساب
        </Button>
        
      </CardFooter>
    </Card>
  )
}


export default LoginComponent

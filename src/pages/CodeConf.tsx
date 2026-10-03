import React from 'react'

import { Button } from "@/components/ui/button"
import { Separator } from '@radix-ui/react-select'
import { Link } from 'react-router-dom'
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

const CodeConf = () => {
    return (
        <div className='bg-[#2B2B2B] h-full pb-10 pr-10 ' >
            <div className='pt-20 flex justify-around'>
                <Card className="w-full max-w-sm bg-[#2B2B2B] text-white border-none">
                    <CardHeader>
                        <CardTitle className='text-center  pt-20'>تأیید کد</CardTitle>
                        <hr className='w-50 m-auto mt-2' />
                        <div className='w-50 h-5 text-white '>
                            <Separator />
                        </div>


                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="">
                                    <Label className='flrx justify-center items-center' >اصلاح شماره موبایل</Label>
                                    <div className='flex gap-x-2 justify-center items-center pt-2'>
                                        <Input type="text" className='bg-white text-black mt-2 w-8 h-8' />
                                        <Input type="text" className='bg-white text-black mt-2 w-8 h-8' />
                                        <Input type="text" className='bg-white text-black mt-2 w-8 h-8' />
                                        <Input type="text" className='bg-white text-black mt-2 w-8 h-8' />
                                        <Input type="text" className='bg-white text-black mt-2 w-8 h-8' />

                                    </div>
                                </div>


                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                        <Link to={'/pages/NewPass'} >
                        <Button type="submit" className="w-85 bg-[#4D277C]">
                            تایید
                        </Button>
                        </Link>
                      <Link to={'/pages/RecPass'} ><a href="">ارسال مجدد کد</a> </Link> 

                    </CardFooter>
                </Card>
                <img src="/picture/Frame 15073.png" className='w-130 ' alt="" />
            </div>
        </div>
    )
}


export default CodeConf

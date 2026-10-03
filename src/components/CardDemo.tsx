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

const CardDemo=() => {
  return (
    <Card className="
     h-[100%] max-lg:w-[300px] max-lg:h-[500px]  text-center">
      <CardHeader>
        <img src="/picture/unsplash_j3lf-Jn6deo(1).png" className="rounded-[50%] text m-auto " alt="" />
        <CardTitle className="pt-1">درخواست پروژه یا مشاوره رایگان</CardTitle>
        <CardDescription className="pt-2">
         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ با استفاده از طراحان گرافیک است.
        </CardDescription>

        <CardAction>
          
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
              <div className="">
                <SelectDemoBotoms />
                
              </div>
            <div className="grid gap-2">
            
              
              <Input
                id="email"
                type="email"
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                className="h-[45px]"
              

                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
               
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                </a>
              </div>
              <Input id="password" className="h-[45px]" type="" placeholder="شماره تماس خود را وارد کنید" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
       <div>
       <AlertDialogDemo />
       
       </div>
        
      </CardFooter>
    </Card>
  )
}
export default CardDemo

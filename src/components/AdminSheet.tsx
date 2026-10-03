import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MdFormatListBulleted } from "react-icons/md";
import { NavLink } from 'react-router-dom'

const AdminSheet = () => {
    interface Item {
        title: string
        url: string
        id: number
        logo: string
    }

    const items: Item[] = [

        {
            title: "داشبورد",
            url: "/pages/dashbord",
            logo: "/picture/navadmin (1).png",
            id: 1

        },
        {
            title: "درخواست ها",
            url: "/pages/request",
            logo: "/picture/navadmin (6).png",
            id: 2
        },
        {
            title: "نظرات",
            url: "/pages/coment",
            logo: "/picture/navadmin (4).png",
            id: 3
        },
        {
            title: "محتوا",
            url: "/pages/content",
            logo: "/picture/navadmin (3).png",
            id: 4
        },

        {
            title: "آمار",
            url: "/pages/statis",
            logo: "/picture/navadmin (2).png",
            id: 5

        },
        {
            title: "بلاگ",
            url: "/pages/blogadmin",
            logo: "/picture/navadmin (6).png",
            id: 6

        }
    ]
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline"><MdFormatListBulleted /></Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>

                        <SheetDescription>
                            <div className='pt-5'>
                                <div className="flex space-x-1 pb-10 pt-5">
                                    <div>
                                        <img className="rounded-[50%] w-13 h-13" src="/picture/unsplash_pAtA8xe_iVM (1).png" alt="" />
                                    </div>
                                    <div className='pt-2'>
                                        <h1 className=" ">دایان ناطق</h1>
                                        <p className="text-[#404040] text-xs">ادمین</p>
                                    </div>
                                </div>
                            </div>  <div className="flex-col flex space-y-5  ">
                                {items.map((i) => {
                                    return (
                                        <div className="flex space-x-6  ">



                                            <NavLink
                                                to={i.url}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "bg-[#ECDAFF] w-37 h-12 border-r-3 border-[#4D277C] pt-3 pr-2 rounded-xs"
                                                        : ""
                                                }
                                            >
                                                <div className="flex"> <img className='pl-2' src={i.logo} alt="" />    {i.title}   </div>
                                            </NavLink>



                                        </div>

                                    )

                                })}
                            </div>
                            <SheetClose asChild>
                             <div className="flex pt-30">
                                <img src="/picture/Sign_out_circle_light.png" alt="" />
                                <p>خروج</p>

                            </div>
                        </SheetClose>
                           
                        </SheetDescription>
                    </SheetHeader>



                    <SheetFooter>
                      
                        
                    </SheetFooter>
                </SheetContent>
            </Sheet>


        </div>
    )
}

export default AdminSheet

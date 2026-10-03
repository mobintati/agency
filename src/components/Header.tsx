import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPhoneFlip } from "react-icons/fa6";
import Sheets from "./Sheets";
import { NavLink } from "react-router-dom";
import { Separator } from "@radix-ui/react-select";
import ServiceMenu from "./ServiseMenu";


const Header = () => {
    return (
        <div className="h-15 bg-white fixed w-full z-100">
            <div className='flex lg:justify-between  max-lg:hidden'>

                <div className="">
                    <img src="./public/picture/Group 16.png" className="mr-9" alt="" />
                </div>
                <div className="flex justify-center items-center">
                    <div className='flex justify-between gap-x-2 pb-6 w-120 items-center text-[#EB9714] '>




                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "text-black hover:border-b-3 hover:border-[#EB9714]"
                            }
                        >
                            صفحه اصلی

                        </NavLink>
                        
                            <NavLink
                                to="/pages/service"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? " active" : "text-black hover:border-b-3 hover:border-[#EB9714]"

                                }
                            >
                                <div className=" flex justify-center items-center">
                               <ServiceMenu/> 
                               </div>
                            </NavLink> 
                        <NavLink
                            to="/pages/portfolio"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " active" : "text-black hover:border-b-3   hover:border-[#EB9714] "

                            }

                        >
                            <div className="pr-2">
                            نمونه کار
                            </div>
                        </NavLink>

                        <NavLink
                        
                            to="/pages/contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " active" : "text-black hover:border-b-3 hover:border-[#EB9714]"

                            }

                        >
                            تماس با ما
                        </NavLink>



                        <NavLink
                            to="/pages/about"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " active" : "text-black hover:border-b-3 hover:border-[#EB9714]"

                            }

                        >
                            درباره ما
                        </NavLink>

                    </div>

                </div>
                <div className="p-2 ml-10 mb-6 ">
                    <div className="bg-[#4D277C] w-29 h-8 rounded-lg text-white text-center px-2 py-5  mt-1.5 gap-x-[3px]    flex justify-center items-center  ">
                        <FaPhoneFlip className=" w-16 h-16 " />   09382546001
                    </div>
                </div>

            </div>
            <div className="lg:opacity-0 max-lg:opacity-100 pr-10 pt-3 ">
                <Sheets />
            </div>





        </div>
    )
}

export default Header

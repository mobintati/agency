import { Key } from "lucide-react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"



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

const AdminNavbar = () => {
  return (

    <div className="pr-4 pt-5 space-y-10 ">
      <div className="flex space-x-1">
        <div>
          <img className="rounded-[50%] w-13 h-13" src="/picture/unsplash_pAtA8xe_iVM (1).png" alt="" />
        </div>
        <div className="pt-2 pr-1">
          <h1 className=" ">دایان ناطق</h1>
          <p className="text-[#404040] text-xs">ادمین</p>
        </div>
      </div>
      <div className="flex-col flex space-y-7  ">
        {items.map((i) => {
          return (
            <div className="flex space-x-2">



              <NavLink
                to={i.url}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#ECDAFF] w-37 h-12 border-r-3 border-[#4D277C] pt-3 pr-2 rounded-xs"
                    : ""
                }
              >
                <div className="flex  "> <img className="pl-2" src={i.logo} alt="" />    {i.title}   </div>
              </NavLink>



            </div>

          )

        })}
      </div>
      <div className="flex pt-10">
        <img src="/picture/Sign_out_circle_light.png" alt="" />
        <p>خروج</p>

      </div>

    </div>

  )
}
export default AdminNavbar


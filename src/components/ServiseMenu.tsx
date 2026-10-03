import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

const ServiceMenu = () => {
  return (
    <div className="">
      <NavigationMenu dir="rtl" className="hover:bg-white"  >
        <NavigationMenuList className="hover:bg-white">
          <NavigationMenuItem className="hover:bg-white" >
            <NavigationMenuTrigger className="text-base hover:bg-white">
              خدمات
            </NavigationMenuTrigger>

            <NavigationMenuContent className="hover:bg-white ">
              <ul className="space-y-2 text-sm  ">
                <li className="whitespace-nowrap">سایت و سئو</li>
                <li>چاپ</li>

                <li>برندینگ</li>
                <li>رسانه</li>
                <li>نمایشی</li>
                <li>سمینار</li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
export default ServiceMenu

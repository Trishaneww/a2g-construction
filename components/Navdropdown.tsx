"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { services } from "@/data"
 

 
export function NavDropDown() {
  return (
    <NavigationMenu className="mt-[1.3rem] hidden lg:flex bg-slate-900">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base font-normal bg-slate-900 text-slate-50">Services</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-red-900 border-none">
            <ul className="flex flex-wrap w-[200px] md:w-[250px] gap-1 p-2 md:p-4 bg-slate-900">
              {services.map((service:any) => (
                <a href={service.link} key={service.id} className="w-full lg:w-4/5 p-2 text-slate-50">{service.title}</a>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-slate-900">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
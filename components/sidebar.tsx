"use client";
import { Montserrat } from 'next/font/google'
import routes from "../modules/sidebarRoutes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


const montserrat = Montserrat ({ weight: '600', subsets: ['latin'] });

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div  className="space-y-4 space-x-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <Link href="/dashboard" className="flex items-center pl-3 mb-14">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold", montserrat.className)}>HandyTechHub</h1>
      </Link>

      <div className="space-y-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm group relative flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white   transition",
              pathname === route.href
                ? "hover:text-black dashboard-before-corner-style dashboard-after-corner-style"
                : "text-zinc-400"
            )}
          >
                         
            <div className="flex items-center flex-1">
              <route.icon className={`h-5 w-5 mr-3`} />              
              {route.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

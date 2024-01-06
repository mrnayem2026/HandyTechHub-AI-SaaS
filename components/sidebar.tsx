"use client";
import { Montserrat } from "next/font/google";
import routes from "../modules/sidebarRoutes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import '../components/sidebar.css'
import { ModeToggle } from "@/app/utils/modeToggle";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const Sidebar = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(true);



  return (
    <div className="space-y-4 space-x-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <Link href="/dashboard" className="flex items-center pl-3 mb-14">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold", montserrat.className)}>
          HandyChat
        </h1>
      </Link>

      <div className="space-y-1">
        <ModeToggle></ModeToggle>
        {routes.map((route) => (
          <motion.a
            onClick={() => setIsActive(!isActive)}
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm group relative flex p-3 w-full justify-start items-center font-medium cursor-pointer hover:text-white   transition",
              pathname === route.href
                ? "hover:text-black dashboard-before-corner-style dashboard-after-corner-style"
                : "text-zinc-400  after:transition-all after:duration-300 after:ease-linear after:absolute  after:content-['']  after:h-full after:w-0 after:z-[1] hover:after:hover:w-[260px] after:bg-[#6259CA] after:opacity-60 after:rounded-l-full "
            )}
          > 
            <div className="flex items-center flex-1 text-base z-10 ">
              <route.icon
                className={cn(
                  `h-8 w-8 mr-2 ml-5` ,
                  pathname === route.href
                    ? "bg-[#6259CA] text-white p-1 rounded-xl"
                    : ""
                )}
              />
              {route.label}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

"use client"

import { useState } from 'react';
import Image from 'next/image'
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/Items",
    name: "Items",
  },
  {
    path: "/Equipments",
    name: "Equipments",
  },
  {
    path: "/Abilities",
    name: "Abilities",
  },
  {
  	path: "/Walkthrough",
  	name: "Walkthrough",
  },
];

export function Navbar(){

	let pathname = usePathname() || "/";
	const [hoveredItem, setHoveredItem] = useState(null);

	return(
		<nav className="font-pixel flex flex-col sticky top-8 ml-14 w-auto h-fit bg-[#505251] rounded-md border-4 border-gray-300 text-white text-sm">

			{navItems.map((item, index) => {
        const isActive = item.path === pathname;
        
        return (
          <Link
            key={item.name}
            className={`relative pl-16 pr-8 py-4 ${
              isActive ? "bg-[#5e605f]" : ""
            }`}
            data-active={isActive}
            href={item.path}
            onMouseOver={() => setHoveredItem(true)}
            onMouseLeave={() => setHoveredItem(false)}
          >
            {hoveredItem === item.name && (
              <Image
              	className="absolute top-2 left-2"
              	src="/hereIcon.png"
              	width={50}
              	height={60}
              	alt="Here Icon"
              />
            )}
            <span>{item.name}</span>
          </Link>
        );
      })}
		</nav>
	)
}
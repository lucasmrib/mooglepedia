"use client"

import React, { useState } from 'react';
import { Press_Start_2P } from 'next/font/google'
import Image from 'next/image'

const pixelFont = Press_Start_2P({ 
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap'
})

export function Navbar(props){
	const [isHoveringHome, setIsHoveredHome] = useState(false);
	const [isHoveringWalkthrough, setIsHoveredWalkthrough] = useState(false);
	const [isHoveringItems, setIsHoveredItems] = useState(false);
	const [isHoveringEquipments, setIsHoveredEquipments] = useState(false);
	const [isHoveringAbilities, setIsHoveredAbilities] = useState(false);

	return(
		<nav className={`${pixelFont.className} ml-14 mt-16 w-auto h-fit bg-[#505251] rounded-md border-4 border-gray-300 text-white text-sm`}>
			<ul className="space-y-8">
				<a href="/" onMouseEnter={() => setIsHoveredHome(true)} onMouseLeave={() => setIsHoveredHome(false)}>
					{isHoveringHome && <Image className="absolute pt-3 pl-2" src="/hereIcon.png" width={50} height={60} alt="Here Icon"/>}
					<li className={`pl-16 pr-8 p-4 ${props.menu == "home" && "bg-[#5e605f]"}`}>Home</li>
				</a>
				<a href="/Walkthrough" onMouseEnter={() => setIsHoveredWalkthrough(true)} onMouseLeave={() => setIsHoveredWalkthrough(false)}>
					{isHoveringWalkthrough && <Image className="absolute pt-3 pl-2" src="/hereIcon.png" width={50} height={60} alt="Here Icon"/>}
					<li className={`pl-16 pr-8 p-4 ${props.menu == "walkthrough" && "bg-[#5e605f]"}`}>Walkthrough</li>
				</a>
				<a href="/Items" onMouseEnter={() => setIsHoveredItems(true)} onMouseLeave={() => setIsHoveredItems(false)}>
					{isHoveringItems && <Image className="absolute pt-3 pl-2" src="/hereIcon.png" width={50} height={60} alt="Here Icon"/>}
					<li className={`pl-16 pr-8 p-4 ${props.menu == "items" && "bg-[#5e605f]"}`}>Items</li>
				</a>
				<a href="/Equipments" onMouseEnter={() => setIsHoveredEquipments(true)} onMouseLeave={() => setIsHoveredEquipments(false)}>
					{isHoveringEquipments && <Image className="absolute pt-3 pl-2" src="/hereIcon.png" width={50} height={60} alt="Here Icon"/>}
					<li className={`pl-16 pr-8 p-4 ${props.menu == "equipments" && "bg-[#5e605f]"}`}>Equipments</li>
				</a>
				<a href="/Abilities" onMouseEnter={() => setIsHoveredAbilities(true)} onMouseLeave={() => setIsHoveredAbilities(false)}>
					{isHoveringAbilities && <Image className="absolute pt-3 pl-2" src="/hereIcon.png" width={50} height={60} alt="Here Icon"/>}
					<li className={`pl-16 pr-8 p-4 ${props.menu == "abilities" && "bg-[#5e605f]"}`}>Abilities</li>
				</a>
			</ul>
		</nav>
	)
}
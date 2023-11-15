"use client"

import Image from 'next/image'
import { Press_Start_2P } from 'next/font/google'

const pixelFont = Press_Start_2P({ 
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap'
})

export function ItemCard(props){
	return (
        <div className="rounded-md border-4 border-gray-300 space-y-4 bg-[#5e605f]">
            <header className={`${pixelFont.className} inline-flex items-center gap-4 w-full pl-8 pr-8 p-4 bg-[#505251] text-sm`}>
                <Image src={`/Items/${props.name}.png`} width={30} height={30} alt={`${props.name} Icon`} />
                {props.name}
            </header>
            <p className="pl-8 pr-8">
                <b>Description: &emsp;</b>
                {props.description} <br/>
            </p>
            <p className="pl-8 pr-8 pb-4">
                <b>Effect: &emsp;</b>
                {props.effect}
            </p>
        </div>
	)
}
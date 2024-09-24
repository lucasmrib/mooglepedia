"use client"

import useSWR from 'swr'
import Image from 'next/image'

const fetcher: Fetcher<any> = (...args) => fetch([...args]).then((res) => res.json())

export default function Equipments() {

  const { data, error } = useSWR('/data/equipments.json', fetcher)

  if (error) return <div className="font-inter m-auto text-white">Failed to load</div>
  if (!data) return <div className="font-inter m-auto text-white">Loading...</div>

  return (
    <div className="mx-14 mb-16 w-full h-fit text-white space-y-8">
      {data.equipments.map((equipment) => (
        <div key={equipment.id} className="rounded-md border-4 border-gray-300 space-y-4 bg-[#5e605f]">
          <header className="font-pixel inline-flex items-center gap-4 w-full pl-8 pr-8 p-4 bg-[#505251] text-sm">
            <Image
              src={`/img/equipments/${equipment.name}.png`}
              width={30}
              height={30}
              alt={`${equipment.name} Icon`}
              className="object-contain w-auto h-auto"
            />
            {equipment.name}
          </header>
          <p className="pl-8 pr-8">
            <b>Description: &emsp;</b>
            {equipment.description} <br/>
          </p>
          <p className="pl-8 pr-8 pb-4">
            <b>Effect: &emsp;</b>
            {equipment.effect}
          </p>
        </div>
      ))}
    </div>
    )
}

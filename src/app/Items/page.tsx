"use client"

import useSWR, { Fetcher } from 'swr'
import Image from 'next/image'

const fetcher: Fetcher<any> = (...args) => fetch([...args]).then((res) => res.json())

export default function Items() {

  const { data, error } = useSWR('/data/items.json', fetcher)

  if (error) return <div className="font-inter m-auto text-white">Failed to load</div>
  if (!data) return <div className="font-inter m-auto text-white">Loading...</div>

  return (
    <div className="mx-14 mb-16 w-full h-fit text-white space-y-8">
      {data.items.map((item) => (
        <div key={item.id} className="rounded-md border-4 border-gray-300 space-y-4 bg-[#5e605f]">
          <header className="font-pixel inline-flex items-center gap-4 w-full pl-8 pr-8 p-4 bg-[#505251] text-sm">
            <Image
              src={`/img/items/${item.name}.png`}
              width={30}
              height={30}
              alt={`${item.name} Icon`}
              className="object-contain w-auto h-auto"
            />
            {item.name}
          </header>
          <p className="pl-8 pr-8">
            <b>Description: &emsp;</b>
            {item.description} <br/>
          </p>
          <p className="pl-8 pr-8 pb-4">
            <b>Effect: &emsp;</b>
            {item.effect}
          </p>
        </div>
      ))}
    </div>
	)
}

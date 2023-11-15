import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export function Header(){
	return(
		<header className={`${inter.className} flex items-center justify-between px-56 py-12 bg-gray-100 text-black`}>
			<a href="/" className="flex row items-center gap-4">
				<Image src="/logo.png" width={50} height={60} alt="Logo" />
				<div>
					<span className="text-3xl font-bold cursor-pointer select-none">MooglePedia</span>
					<p>A wikipedia for Final Fantasy IX players</p>
				</div>
			</a>
			<div className="flex justify-between gap-8 font-bold">
				<a href="/about">About</a>
				<a href="/support">Support</a>
				<a href="/contact">Contact</a>
			</div>
		</header>
	)
}
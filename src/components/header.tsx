import Image from 'next/image'
import Link from "next/link";

export function Header(){
	return(
		<header className="font-inter flex items-center justify-between px-32 py-12 bg-gray-100 text-black">
			<Link href="/" className="flex row items-center gap-4">
				<Image src="/logo.png" width={48} height={75} alt="Logo" priority />
				<div>
					<span className="text-3xl font-bold cursor-pointer select-none">MooglePedia</span>
					<p>A wikipedia for Final Fantasy IX players</p>
				</div>
			</Link>
			<div className="flex justify-between gap-8 font-bold">
				<Link href="/about">About</Link>
				<Link href="/support">Support</Link>
				<Link href="/contact">Contact</Link>
			</div>
		</header>
	)
}
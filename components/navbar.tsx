"use client";

import { Search, User, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
	const [isMounted, setIsMounted] = useState(false);

	const handleEnter = () => {
		setIsMounted(true);
	};

	const handleExit = () => {
		setIsMounted(false);
	};

	return (
		<div className='navbar bg-transparent fixed top-0 left-0 w-full z-10'>
			<div
				className={`flex justify-between items-center px-4 py-2 ${
					isMounted
						? "bg-white text-black"
						: "text-white hover:bg-white hover:text-black"
				}`}
			>
				<div className='flex items-center space-x-4 text-sm ml-8 mt-4'>
					<div
						className='text-sm leading-tight'
						onMouseEnter={handleEnter}
					>
						SHOP
					</div>
					<div className='text-sm leading-tight'>COLLECTIONS</div>
					<div className='text-sm leading-tight'>BRAND</div>
				</div>
				<div className='font-bold leading-tight text-3xl mt-4'>
					SAMPLES
				</div>
				<div className='flex items-center space-x-4 mr-8 mt-4'>
					<Search size={20} />
					<User size={20} />
					<ShoppingBag size={20} />
				</div>
			</div>
			<div
				className={`${
					isMounted ? "block" : "hidden"
				} bg-white sm:flex sm:justify-between sm:px-4 sm:py-2 sm:mb-0`}
				onMouseEnter={handleEnter}
				onMouseLeave={handleExit}
			>
				<div className='sm:w-3/4'>
					<div className='ml-8 mt-4'>
						<div className='font-bold text-md mb-4'>Categories</div>
						<ul className='list-none text-sm'>
							<li>Hoodies & Crewnecks</li>
							<li>Jackets</li>
							<li>Pants</li>
							<li>Tees</li>
							<li>Accessories</li>
							<li>Shirts</li>
							<li>Shorts</li>
							<li>Sets</li>
						</ul>
					</div>
				</div>
				<div className='hidden sm:block sm:w-1/4'>
					<div className='box-cover'>
						<Image
							src='https://acdn.mitiendanube.com/stores/001/759/686/products/0n7a91281-a0a96fdf1f78af4c4616881494937969-1024-1024.webp'
							alt='Imagen'
							className='object-cover w-full h-full'
							width={200}
							height={200}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

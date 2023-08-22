"use client";

import { Search, User, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isShopHovered, setIsShopHovered] = useState(false);

	const handleEnter = () => {
		setIsMounted(true);
	};

	const handleExit = () => {
		setIsMounted(false);
	};

	const handleScroll = () => {
		setIsScrolled(window.scrollY > window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<div
				className={`navbar fixed top-0 left-0 w-full z-10 ${
					isScrolled || isMounted ? "bg-white" : ""
				}`}
				onMouseEnter={handleEnter}
				onMouseLeave={handleExit}
			>
				<div
					className={`flex justify-between items-center px-4 py-2 ${
						isMounted
							? "bg-white text-black"
							: "text-white hover:bg-white hover:text-black"
					}`}
				>
					<div className='flex items-center space-x-4 text-sm'>
						<div
							className={`text-sm leading-tight ${
								((isMounted || isScrolled) && !isShopHovered) ||
								isShopHovered // Agregar esta condición
									? "text-black"
									: ""
							}`}
							onMouseEnter={() => setIsShopHovered(true)}
						>
							SHOP
						</div>
						<div
							className={`text-sm leading-tight ${
								isMounted || isScrolled ? "text-black" : ""
							}`}
						>
							COLLECTIONS
						</div>
						<div
							className={`text-sm leading-tight ${
								isMounted || isScrolled ? "text-black" : ""
							}`}
						>
							BRAND
						</div>
					</div>
					<div
						className={`font-bold leading-tight text-xl md:text-3xl ${
							isMounted || isScrolled ? "text-black" : ""
						}`}
					>
						<div className='flex items-center justify-center'>
							SAMPLES
						</div>
					</div>
					<div
						className={`flex items-center space-x-2 ${
							isMounted || isScrolled
								? "text-black"
								: "hover:text-black"
						}`}
					>
						<Search size={20} />
						<User size={20} />
						<ShoppingBag size={20} />
					</div>
				</div>
				{isShopHovered && (
					<div
						onMouseEnter={() => setIsShopHovered(true)}
						onMouseLeave={() => setIsShopHovered(false)}
					>
						<div
							className={`box-cover h-1/3 ${
								isScrolled ? "bg-white" : ""
							}`}
						>
							<div className='flex flex-col md:flex-row justify-between px-4 py-2 mb-0'>
								<div className='w-full md:w-3/4'>
									<div className='ml-8 mt-4'>
										<div className='font-bold text-md mb-4'>
											Categories
										</div>
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
								<div className='w-full md:w-1/4 mt-4 md:mt-0'>
									<div className='box-cover'>
										<img
											src='https://acdn.mitiendanube.com/stores/001/759/686/products/two083411-8b8c0a707b739785d016908970583013-1024-1024.webp'
											alt='Imagen'
											className='object-cover w-full h-full'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

"use client";

import Navbar from "@/components/navbar";

import { ShoppingCart } from "lucide-react";

const UpBanner = () => {
	return (
		<div className='relative h-screen'>
			<Navbar />
			<div
				className='absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-5 sm:blur-0'
				style={{
					backgroundImage:
						'url("https://res.cloudinary.com/dnmnd5dmf/image/upload/f_auto,q_auto/v1/demo-samples/gscuo9nh3llqkwwwlxgn")',
				}}
			></div>
			<div className='absolute bottom-0 left-0 w-full p-4 sm:p-8 text-white text-center'>
				<p className='text-lg sm:text-xl'>DESCUBRI</p>
				<h1 className='text-2xl sm:text-3xl font-bold mb-4'>
					WINTER COLLECTION 23
				</h1>
				<p className='text-lg sm:text-xl underline flex items-center justify-center'>
					<ShoppingCart size={24} className='ml-2 mr-4' /> SHOP NOW
				</p>
			</div>
		</div>
	);
};

export default UpBanner;

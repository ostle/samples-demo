"use client";

import { ShoppingCart } from "lucide-react";

const MdBanner = () => {
	return (
		<div className='relative h-screen'>
			<div
				className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
				style={{
					backgroundImage:
						'url("https://res.cloudinary.com/dnmnd5dmf/image/upload/f_auto,q_auto/v1/demo-samples/zsv8naas9hgia13pyngn")',
				}}
			></div>
			<div className='absolute bottom-0 left-0 w-full p-4 sm:p-8 text-white text-center'>
				<p className='text-lg sm:text-xl'>DESCUBRI</p>
				<h1 className='text-2xl sm:text-3xl font-bold mb-4'>
					SUMMER COLLECTION 23
				</h1>
				<p className='text-lg sm:text-xl underline flex items-center justify-center'>
					<ShoppingCart size={24} className='ml-2 mr-4' /> SHOP NOW
				</p>
			</div>
		</div>
	);
};

export default MdBanner;

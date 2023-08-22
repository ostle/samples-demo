"use client";

import { ShoppingCart } from "lucide-react";

const Gif = () => {
	return (
		<div className='relative h-screen'>
			<div
				className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
				style={{
					backgroundImage:
						'url("https://thumbs.gfycat.com/IncredibleFluffyAsiaticlesserfreshwaterclam-size_restricted.gif")',
				}}
			></div>
			<div className='absolute inset-x-0 bottom-0 p-4 sm:p-8 text-white text-center'>
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

export default Gif;

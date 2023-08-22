import Image from "next/image";

interface ProdCardProps {
	imageSrc: string;
}

const ProdCard: React.FC<ProdCardProps> = ({ imageSrc }) => {
	return (
		<div className='group cursor-pointer rounded-xl p-3 space-y-4'>
			{/* Image & actions */}
			<div className='aspect-square rounded-xl bg-gray-100 relative'>
				<Image
					src={imageSrc}
					alt=''
					fill
					className='aspect-square object-cover rounded-md'
				/>
			</div>
			{/* Description */}
			<div className='text-center'>
				<div>
					<p className='font-semibold text-lg'>
						Sweatpants Basic Iron
					</p>
					<p className='text-sm text-gray-500'>Sets</p>
				</div>
				{/* Price */}
				<div>
					<p className='font-semibold'>$16.990,00</p>
				</div>
			</div>
		</div>
	);
};

export default ProdCard;

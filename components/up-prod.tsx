import ProdCard from "./prod-card";

const UpProd: React.FC = () => {
	const image =
		"https://acdn.mitiendanube.com/stores/001/759/686/products/two083411-8b8c0a707b739785d016908970583013-1024-1024.webp";
	const image2 =
		"https://acdn.mitiendanube.com/stores/001/759/686/products/0n7a2679-21-450939de2b3127c7a416812346198823-1024-1024.webp";
	const image3 =
		"https://acdn.mitiendanube.com/stores/001/759/686/products/0n7a2623-21-c4b5bfda409b7cbecc16812344149839-1024-1024.webp";
	const image4 =
		"https://acdn.mitiendanube.com/stores/001/759/686/products/0n7a2504-21-8a6865a95c879b9ae016812338730487-1024-1024.webp";
	const image5 =
		"https://acdn.mitiendanube.com/stores/001/759/686/products/0n7a2442-21-47ffb7907bba16c9dc16812335388548-1024-1024.webp";
	const image6 =
		"https://acdn.mitiendanube.com/stores/001/759/686/products/0n7a2394-21-bf69f1cae01924902916812333649091-1024-1024.webp";

	return (
		<div className='grid grid-cols-6 gap-2'>
			<ProdCard imageSrc={image} />
			<ProdCard imageSrc={image2} />
			<ProdCard imageSrc={image3} />
			<ProdCard imageSrc={image4} />
			<ProdCard imageSrc={image5} />
			<ProdCard imageSrc={image6} />
		</div>
	);
};

export default UpProd;

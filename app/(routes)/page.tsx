import UpBanner from "@/components/up-banner";
import UpProd from "@/components/up-prod";
import Gif from "@/components/gif";
import MdBanner from "@/components/md-banner";

const HomePage = () => {
	return (
		<div>
			<UpBanner />
			<UpProd />
			<Gif />
			<UpProd />
			<MdBanner />
			<UpProd />
			<div className='text-center mt-12 text-white'>
				<h2 className='text-4xl font-bold'>a</h2>
				<p className='mt-2'>a</p>
			</div>
			<div className='text-center mt-12'>
				<h2 className='text-4xl font-bold'>SHOP INSTAGRAM</h2>
				<p className='mt-2 text-gray-600'>
					TAG YOUR POST WITH @SAMPLES_ARG TO BE FEATURED
				</p>
			</div>
		</div>
	);
};

export default HomePage;

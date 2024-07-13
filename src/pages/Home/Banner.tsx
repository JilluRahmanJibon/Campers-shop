const Banner = () => {
	return (
		<section className="py-12">
			<section className="  overflow-hidden">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex items-center justify-center   mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-full">
						<img
							src="https://contents.mediadecathlon.com/s1045801/k$f565435ab9f757520f7ff22b34494a77?format=auto&f=969x0"
							alt=""
							className=" w-full"
						/>
					</div>
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leading-none sm:text-6xl">
							Camping
						</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12">
							Create your dream campsite with our camping essentials. Under the
							stars, every night is an adventure waiting to unfold.
						</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Banner;

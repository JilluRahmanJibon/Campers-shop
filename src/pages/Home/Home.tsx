/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import FAQSection from "./HomeComponents/FAQSection";
import TestimonialsSection from "./HomeComponents/TestimonialsSection";
import FeaturedProducts from "./HomeComponents/FeaturedProducts";
import CategorySection from "./HomeComponents/CategorySection";
import Banner from "./Banner";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";

const Home = () => {
	const { data: products, isLoading } = useGetAllProductsQuery([]);

	if (isLoading) {
		return (
			<div className="text-2xl font-bold flex justify-center items-center h-[80vh]">
				Loading...
			</div>
		);
	}

	return (
		<main>
			{/* banner section  */}
			<Banner />
			{/* best selling section  */}
			<section className="mb-12">
				{products?.data?.length ? (
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Best Selling Products
						</h2>
						<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
							{products?.data?.slice(0, 8).map((product:any) => (
								<ProductCard key={product.product_id} product={product} />
							))}
						</div>
						<div className="flex justify-center">
							<Link to={"/products"}>
								{" "}
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
									View More
								</button>
							</Link>
						</div>
					</div>
				) : (
					""
				)}
			</section>

			{/* category section  */}
			<CategorySection />

			{/* featured products section  */}
			<FeaturedProducts />
			{/* testimonial section  */}
			<TestimonialsSection />
			{/* faq section */}
			<FAQSection />
		</main>
	);
};

export default Home;

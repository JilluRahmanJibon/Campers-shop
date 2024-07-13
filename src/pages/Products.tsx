/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "../components/ProductCard";
import { useGetAllProductsQuery } from "../redux/features/products/productsApi";

const Products = () => {
	const { data: products, isLoading } = useGetAllProductsQuery([]);

	if (isLoading) {
		return (
			<div className="text-2xl font-bold flex justify-center items-center h-[80vh]">
				Loading...
			</div>
		);
	}

	return (
		<div>
			<section className="my-12">
				{products?.data?.length ? (
					<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
						<>
							{products?.data?.map((product:any) => (
								<ProductCard key={product?._id} product={product} />
							))}
						</>
					</div>
				) : (
					<div className="h-[65vh] flex w-full justify-center items-center font-bold text-2xl text-gray-600">
						<p>No Data Found!</p>
					</div>
				)}
			</section>
		</div>
	);
};

export default Products;

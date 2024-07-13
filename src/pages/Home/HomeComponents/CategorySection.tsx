import CategoryCard from "./CategoryCard";

const categories = [
	{
		category: "Electronics",
		imageUrl: "https://example.com/images/electronics.jpg",
	},
	{
		category: "Fashion",
		imageUrl: "https://example.com/images/fashion.jpg",
	},
	{
		category: "Home & Kitchen",
		imageUrl: "https://example.com/images/home_kitchen.jpg",
	},
	{
		category: "Beauty & Personal Care",
		imageUrl: "https://example.com/images/beauty_personal_care.jpg",
	},
	{
		category: "Sports & Outdoors",
		imageUrl: "https://example.com/images/sports_outdoors.jpg",
	},
	{
		category: "Toys & Games",
		imageUrl: "https://example.com/images/toys_games.jpg",
	},
];

const CategorySection = () => {
	return (
		<div className="max-w-7xl mx-auto p-6">
			<h2 className="text-3xl font-bold text-gray-900 mb-6">Categories</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{categories.map(category => (
					<CategoryCard
						key={category.category}
						category={category.category}
						imageUrl={category.imageUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default CategorySection;

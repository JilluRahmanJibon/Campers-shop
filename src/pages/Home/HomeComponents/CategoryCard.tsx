 

const CategoryCard = ({
	category,
	imageUrl,
}: {
	category: string;
	imageUrl: string;
}) => {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<img className="w-full h-32 object-cover" src={imageUrl} alt={category} />
			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-900">{category}</h3>
			</div>
		</div>
	);
};

export default CategoryCard;

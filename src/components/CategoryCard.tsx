import { Link } from "react-router-dom";

const CategoryCard = ({
	category,
	imageUrl,
}: {
	category: string;
	imageUrl: string;
}) => {
	return (
		<Link to={`/category/${category}`}>
			<div className="bg-white rounded-lg shadow-md overflow-hidden">
				<img
					className="w-full h-32 object-cover"
					src={imageUrl}
					alt={category}
				/>
				<div className="p-4">
					<h3 className="text-lg font-semibold text-gray-900">{category}</h3>
				</div>
			</div>
		</Link>
	);
};

export default CategoryCard;

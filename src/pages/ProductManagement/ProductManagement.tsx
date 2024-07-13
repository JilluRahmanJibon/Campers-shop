/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	useDeleteProductMutation,
	useGetAllProductsQuery,
} from "../../redux/features/products/productsApi";
import { toast } from "sonner";

// const initialProducts = [
// 	{
// 		product_id: "101",
// 		product_name: "Wireless Bluetooth Headphones",
// 		category: "Electronics",
// 		price: 89.99,
// 		units_sold: 1500,
// 		rating: 4.5,
// 		image_url:
// 			"https://i5.walmartimages.com/asr/375d2852-d985-4aa9-b69c-b686da6e513f_1.eef652ba8620bde5c2b792e0ce74f113.jpeg",
// 		description:
// 			"High-quality wireless Bluetooth headphones with excellent sound quality and long battery life.",
// 	},
// 	// Add other initial products here
// ];

const ProductManagement = () => {
	const { data: products } = useGetAllProductsQuery([]);
	const [deleteProduct] = useDeleteProductMutation();
	console.log("🚀 ~ ProductManagement ~ deleteProduct:", deleteProduct);

	// const [products, setProducts] = useState(initialProducts);
	// const [isAddUpdateModalOpen, setIsAddUpdateModalOpen] = useState(false);
	// const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	// const [currentProduct, setCurrentProduct] = useState(null);
	// const [isEditMode, setIsEditMode] = useState(false);

	// const handleAddProduct = () => {
	// 	setCurrentProduct(null);
	// 	setIsEditMode(false);
	// 	setIsAddUpdateModalOpen(true);
	// };

	// const handleEditProduct = product => {
	// 	setCurrentProduct(product);
	// 	setIsEditMode(true);
	// 	setIsAddUpdateModalOpen(true);
	// };

	const handleDeleteProduct = (id: string) => {
		if (confirm("Are your sure? you want delete this product?") === true) {
			deleteProduct(id);
			toast.success(`Product is deleted successfully! `, {
				duration: 2000,
			});
		}
	};

	// const confirmDeleteProduct = () => {
	// 	const updatedProducts = products.filter(
	// 		product => product?.product_id !== currentProduct?.product_id
	// 	);
	// 	setProducts(updatedProducts);
	// 	setIsDeleteModalOpen(false);
	// };

	// const handleSaveProduct = product => {
	// 	if (isEditMode) {
	// 		const updatedProducts = products.map(p =>
	// 			p.product_id === product?.product_id ? product : p
	// 		);
	// 		setProducts(updatedProducts);
	// 	} else {
	// 		setProducts([
	// 			...products,
	// 			{ ...product, product_id: new Date().toISOString() },
	// 		]);
	// 	}
	// 	setIsAddUpdateModalOpen(false);
	// };

	return (
		<div className="container mx-auto p-4 min-h-[70vh]">
			<div className="flex justify-between mb-4">
				<h1 className="text-2xl font-bold">Product Management</h1>
				<button
					className="bg-blue-500 text-white px-4 py-2 rounded"
					// onClick={handleAddProduct}
				>
					Add Product
				</button>
			</div>
			<section>
				<table className="min-w-full bg-white">
					<thead>
						<tr>
							<th className="py-2">Image</th>
							<th className="py-2">Name</th>
							<th className="py-2">Category</th>
							<th className="py-2">Price</th>
							<th className="py-2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{products?.data?.map((product: any) => (
							<tr key={product?.product_id}>
								<td className="py-2">
									<img
										src={product?.image_url}
										alt={product?.product_name}
										className="w-16 h-16 object-cover"
									/>
								</td>
								<td className="py-2 ">{product?.product_name}</td>
								<td className="py-2 ">{product?.category}</td>
								<td className="py-2 ">${product?.price.toFixed(2)}</td>
								<td className="py-2 flex justify-center">
									<button
										className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
										// onClick={() => onEdit(product)}
									>
										Update
									</button>
									<button
										className="bg-red-500 text-white px-2 py-1 rounded"
										onClick={() => handleDeleteProduct(product?._id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			{/* <ProductModal
				isOpen={isAddUpdateModalOpen}
				product={currentProduct}
				onSave={handleSaveProduct}
				onClose={() => setIsAddUpdateModalOpen(false)}
			/>
			<DeleteModal
				isOpen={isDeleteModalOpen}
				onDelete={confirmDeleteProduct}
				onClose={() => setIsDeleteModalOpen(false)}
			/> */}
		</div>
	);
};

// const ProductModal = ({ isOpen, product, onSave, onClose }) => {
// 	const [formData, setFormData] = useState(
// 		product || {
// 			product_name: "",
// 			category: "",
// 			price: "",
// 			description: "",
// 			image_url: "",
// 		}
// 	);

// 	const handleChange = e => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	};

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		onSave(formData);
// 	};

// 	return (
// 		<Dialog
// 			open={isOpen}
// 			onClose={onClose}
// 			className="fixed inset-0 flex items-center justify-center p-4">
// 			<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
// 			<div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
// 				<Dialog.Title className="text-xl font-bold">
// 					{product ? "Update Product" : "Add Product"}
// 				</Dialog.Title>
// 				<form onSubmit={handleSubmit} className="space-y-4 mt-4">
// 					<div>
// 						<label className="block text-sm font-medium">Product Name</label>
// 						<input
// 							type="text"
// 							name="product_name"
// 							value={formData.product_name}
// 							onChange={handleChange}
// 							className="w-full border px-3 py-2 rounded"
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<label className="block text-sm font-medium">Category</label>
// 						<input
// 							type="text"
// 							name="category"
// 							value={formData.category}
// 							onChange={handleChange}
// 							className="w-full border px-3 py-2 rounded"
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<label className="block text-sm font-medium">Price</label>
// 						<input
// 							type="number"
// 							name="price"
// 							value={formData.price}
// 							onChange={handleChange}
// 							className="w-full border px-3 py-2 rounded"
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<label className="block text-sm font-medium">Description</label>
// 						<textarea
// 							name="description"
// 							value={formData.description}
// 							onChange={handleChange}
// 							className="w-full border px-3 py-2 rounded"
// 							required
// 						/>
// 					</div>
// 					<div>
// 						<label className="block text-sm font-medium">Image URL</label>
// 						<input
// 							type="text"
// 							name="image_url"
// 							value={formData.image_url}
// 							onChange={handleChange}
// 							className="w-full border px-3 py-2 rounded"
// 							required
// 						/>
// 					</div>
// 					<div className="flex justify-end space-x-2">
// 						<button
// 							type="button"
// 							onClick={onClose}
// 							className="bg-gray-300 text-black px-4 py-2 rounded">
// 							Cancel
// 						</button>
// 						<button
// 							type="submit"
// 							className="bg-blue-500 text-white px-4 py-2 rounded">
// 							Save
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</Dialog>
// 	);
// };

// const DeleteModal = ({ isOpen, onDelete, onClose }) => {
// 	return (
// 		<Dialog
// 			open={isOpen}
// 			onClose={onClose}
// 			className="fixed inset-0 flex items-center justify-center p-4">
// 			<Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
// 			<div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
// 				<Dialog.Title className="text-xl font-bold">
// 					Delete Product
// 				</Dialog.Title>
// 				<p className="mt-4">Are you sure you want to delete this product?</p>
// 				<div className="flex justify-end space-x-2 mt-4">
// 					<button
// 						type="button"
// 						onClick={onClose}
// 						className="bg-gray-300 text-black px-4 py-2 rounded">
// 						Cancel
// 					</button>
// 					<button
// 						type="button"
// 						onClick={onDelete}
// 						className="bg-red-500 text-white px-4 py-2 rounded">
// 						Delete
// 					</button>
// 				</div>
// 			</div>
// 		</Dialog>
// 	);
// };

export default ProductManagement;

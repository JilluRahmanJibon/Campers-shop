import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Products from "../pages/Products";
import ProductManagement from "../pages/ProductManagement";
import Cart from "../pages/Cart";
import About from "../pages/About";
import ProductsDetails from "../pages/ProductsDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/products",
				element: <Products />,
			},
			{
				path: "/product/:id",
				element: <ProductsDetails />,
			},
			{
				path: "/products-management",
				element: <ProductManagement />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/about-us",
				element: <About />,
			},
		],
	},
]);

export default router;

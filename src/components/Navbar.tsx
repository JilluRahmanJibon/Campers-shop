import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="flex justify-between py-2">
			<div>
				<NavLink className="text-3xl font-semibold" to="/">
					Campers Shop
				</NavLink>
			</div>
			<div className=" flex gap-3 font-semibold ">
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-red-500 py-1 px-3 rounded-md text-white "
							: "py-1 px-3"
					}
					to={"/home"}>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-red-500 py-1 px-3 rounded-md text-white "
							: "py-1 px-3"
					}
					to={"/products"}>
					Products
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-red-500 py-1 px-3 rounded-md text-white "
							: "py-1 px-3"
					}
					to={"/products-management"}>
					Product Management
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-red-500 py-1 px-3 rounded-md text-white "
							: "py-1 px-3"
					}
					to={"/cart"}>
					Cart
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "bg-red-500 py-1 px-3 rounded-md text-white "
							: "py-1 px-3"
					}
					to={"/about-us"}>
					About Us
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;

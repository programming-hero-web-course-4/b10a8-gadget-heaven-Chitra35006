import { IoCartSharp } from "react-icons/io5";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getCartCount, getWishlistCount } from '../CartFunction/Utilities'
const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    useEffect(() => {
        // Update initial counts
        setCartCount(getCartCount());
        setWishlistCount(getWishlistCount());

        // Add event listeners for updates
        const handleStorageChange = () => {
            setCartCount(getCartCount());
            setWishlistCount(getWishlistCount());
        };

        const handleWishlistChange = () => {
            setWishlistCount(getWishlistCount());
        };

        window.addEventListener('storage', handleStorageChange);
        document.addEventListener('cartUpdated', handleStorageChange);
        document.addEventListener('wishlistUpdated', handleWishlistChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            document.removeEventListener('cartUpdated', handleStorageChange);
            document.removeEventListener('wishlistUpdated', handleWishlistChange);
        };
    }, []);
    const links = (
        <>
            <li className={isHomePage ? "text-white" : "text-black"}>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "md:text-indigo-900 py-2 px-4 rounded-xl bg-pink-200 font-bold" : " font-medium text-violet-900"}
                >
                    Home
                </NavLink>
            </li>
            <li className={isHomePage ? "text-white" : "text-black"}>
                <NavLink 
                    to="/statistics" 
                    className={({ isActive }) => isActive ? "md:text-indigo-900 py-2 px-4 rounded-xl bg-pink-200 font-bold" : " font-medium text-violet-900"}
                >
                    Statistics
                </NavLink>
            </li>
            <li className={isHomePage ? "text-white" : "text-black"}>
                <NavLink 
                    to="/dashboard" 
                    className={({ isActive }) => isActive ? "md:text-indigo-900 py-2 px-4 rounded-xl bg-pink-200 font-bold" : " font-medium text-violet-900"}
                >
                    Dashboard
                </NavLink>
            </li>
            <li className={isHomePage ? "text-white" : "text-black"}>
                <NavLink 
                    to="/contactUs" 
                    className={({ isActive }) => isActive ? "md:text-indigo-900 py-2 px-4 rounded-xl bg-pink-200 font-bold" : " font-medium text-violet-900"}
                >
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    
    return (
        <div className={`w-[97%] mx-auto mt-5 rounded-t-xl  ${isHomePage ? "bg-[#9538E2]" : "bg-white"}`}>
            {/* nav */}
            <div className="navbar md:w-4/5 md:mx-auto pt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#9538E2]/2 backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className={`md:text-2xl font-bold ${isHomePage ? "text-white" : "text-black"}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                <NavLink to="dashboard/cart" className="relative">
                    <button className="btn text-xl rounded-full">
                    <IoCartSharp />
                    </button>
                    <div className="badge  bg-pink-500 badge-md text-white absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-2xl">
    {cartCount}
</div>

                </NavLink>

                <NavLink to="dashboard/wishlist" className="relative">
                    <button className="btn text-xl rounded-full">
                    <FaHeartCirclePlus />
                    </button>
                    <div className="badge bg-violet-600 badge-md text-white absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full">
                        {wishlistCount}
                    </div>
                </NavLink>

                </div>
            </div>
        </div>
    );
};

export default NavBar;
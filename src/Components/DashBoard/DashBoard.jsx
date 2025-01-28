import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    document.title = "Dashboard | Gadget Heaven";
    return (
        <div>
       
        <div className="bg-[#9538E2]">
            <div className="text-center py-10 md:w-3/5 w-4/5 mx-auto space-y-4">
                <h3 className="font-bold text-white md:text-2xl text-xl">Dashboard</h3>
                <p className="text-white">Discover the cutting-edge gadgets that redefine innovation and convenience. From advanced smart devices to must-have tech accessories, find everything you need to elevate your lifestyle</p>
                <div className="space-x-4 pt-4">
                    <NavLink to="cart" className={({ isActive }) => ` font-medium text-xl rounded-full px-8 py-2 border-2 ${isActive ?  'border-violet-500 bg-white text-violet-500' :'bg-[#9538E2] text-white'}`}>
                        Cart
                    </NavLink>
                    <NavLink to="wishlist" className={({ isActive }) => ` font-medium text-xl rounded-full px-4 py-2 border-2 ${isActive ?  'border-violet-500 bg-white text-violet-500' :'bg-[#9538E2] text-white'}`}>
                        Wishlist
                    </NavLink>
                </div>
            </div>
        </div>
        {/* outlet */}
        <div className="w-4/5 mx-auto">
            <Outlet />
        </div>

    </div>
    );
};

export default DashBoard;
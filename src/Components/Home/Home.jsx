import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Categories from "../Category/Categories";


const Home = () => {
    document.title = "Home | Gadget Heaven";
    return (
        <div>
            <Banner></Banner>
            <div className="text-center mt-10">
                <h3 className="text-black text-2xl md:text-3xl font-bold">Explore Cutting-Edge Gadgets</h3>
            </div>
            <div className="w-[90%] mx-auto flex md:flex-row flex-col gap-4 mt-10">
                {/* cats */}
                <div className="md:w-1/4 mx-auto ">
                    <Categories/>
                </div>
                    {/* cards */}
                <div className="md:w-3/4 mx-auto">
                    {/* <Products /> */}
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Home;
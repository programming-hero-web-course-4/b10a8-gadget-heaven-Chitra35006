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
            <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-6 mt-10">
  {/* Categories Sidebar */}
  <div className="md:w-1/4 md:sticky top-4 h-fit">
    <Categories></Categories>
  </div>

  {/* Cards/Content Section */}
  <div className="md:w-3/4 w-full mx-auto overflow-y-auto">
    <Outlet />
  </div>
</div>

        </div>
    );
};

export default Home;
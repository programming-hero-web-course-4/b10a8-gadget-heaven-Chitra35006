

const Banner = () => {
    return (
        <div>
        <div className="bg-[#9538E2] w-[97%] mx-auto rounded-b-xl">
       {/* <<<Banner>>>> */}
            <div className="text-center md:w-[70%] mx-auto space-y-4 md:space-y-8 pt-8 pb-12 md:pt-16 md:pb-64">
                <h3 className="text-xl md:text-[48px] font-bold md:leading-[60px] text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h3>
                <p className="text-white">Discover the cutting-edge gadgets that redefine innovation and convenience. From advanced smart devices to must-have tech accessories, find everything you need to elevate your lifestyle</p>
                <div className="mt-4">
                    <a href="#shopSection" className=" font-bold text-violet-700 bg-white rounded-4xl py-4 px-6">Shop Now</a>
                </div>
            </div>
        </div>
            <div className="border-2 border-white p-2 md:p-4 rounded-xl  w-4/5 mx-auto md:-mt-52 -mt-8">
                <img src="/banner.jpg" className="rounded-xl "/>
            </div>
    </div>
    );
};

export default Banner;
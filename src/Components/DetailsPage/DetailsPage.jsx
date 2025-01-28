import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { addToCart, addToWishlist, getAllWishlist } from "../../CartFunction/Utilities";
const DetailsPage = () => {
    document.title = "Details | Gadget Heaven";
    const { id } = useParams();
    const p_id = parseInt(id);
    const data = useLoaderData();
    const product = data.find(product => product.id === p_id);
    const { img, title, price, stock, desc, spec, rating } = product;

    const [isInWishlist, setIsInWishlist] = useState(false);

    const fullStars = Math.floor(rating); // Integer part (e.g., 4 for 4.9)
    const hasHalfStar = rating % 1 !== 0; // Check if there's a fractional part (e.g., 0.9)
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    useEffect(() => {
        // product is already in the wishlist
        const wishlist = getAllWishlist();
        const existsInWishlist = wishlist.some(item => item.id === product.id);
        setIsInWishlist(existsInWishlist);
    }, [product.id]);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const handleAddToWishlist = (product) => {
        addToWishlist(product);
        setIsInWishlist(true);
    };

    return (
        <div className="">
        {/* Heading */}
        <div className="bg-[#9538E2] pb-56 md:pb-32">
            <div className="text-center py-10 md:w-3/5 w-4/5 mx-auto space-y-4">
                <h3 className="font-bold text-white md:text-2xl text-xl">Product Details</h3>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
        </div>
        {/* Main */}
        <div className="md:-mt-32 -mt-56 bg-[#fdf6f6] w-4/5 mx-auto rounded-xl md:flex-row flex-col gap-4 flex p-8 items-center justify-evenly">
            {/* Image */}
            <div className="border-l-4 border-r-5 border-violet-500 rounded-2xl">
                <img src={img} alt={title} className="rounded-xl w-96" />
            </div>
            {/* Details */}
            <div className="">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-xl mt-2 font-semibold">Price <span className="text-pink-600">$</span> {price}</p>
                <p className={`py-1 text-center mt-2 px-2 w-[150px] rounded-2xl ${stock ? 'bg-[#4cf85538] text-green-800 font-semibold border-green-700 border-1' : 'bg-[#fa000054] text-red-800 font-semibold border-red-500 border-1'}`}>
                    {stock ? "In Stock" : "Not In Stock"}
                </p>
                <p className="mt-4 text-gray-500 font-semibold">{desc}</p>
                <h3 className="mt-4 font-bold text-xl mb-2">Specifications:</h3>
                <ul className="list-none">
  {spec.map((item, index) => (
    <li className="text-gray-500 font-medium" key={index}>
      {index + 1}. {item}
    </li>
  ))}
</ul>
<p className="mt-4 text-black font-bold">Rating</p>
<p className="mt-4 flex gap-1 text-xl text-yellow-500  items-center">
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={`full-${index}`} />
        ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <FaStarHalfAlt key="half-star" />}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} />
        ))} <span className="text-black py-2 px-4 rounded-4xl text-xs font-bold ml-2 bg-gray-300">{rating}</span>
    </p>
                <div className="flex gap-4 items-center mt-4 ">
                <button
  onClick={() => handleAddToCart(product)}
  disabled={!stock} // Disable the button if stock is false
  className={`btn rounded-2xl transform transition-transform duration-300 hover:scale-105 ${
    stock
      ? "bg-violet-600 text-white" // Show color if stock is true
      : "bg-gray-400 text-gray-700 cursor-not-allowed" // Show gray color and disable if stock is false
  }`}
>
  Add To Cart <IoCartSharp className="text-xl" />
</button>

<button
  onClick={() => handleAddToWishlist(product)}
  disabled={stock === true} // Disable if stock is true
  className={`btn btn-outline text-xl ${
    stock === false
      ? "border-violet-500 border-2 rounded-full text-pink-700" // Show color if stock is false
      : "opacity-90 border-2 border-gray-300 rounded-full cursor-not-allowed" // Disable button if stock is true
  }`}
>
  <FaHeartCirclePlus />
</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DetailsPage;
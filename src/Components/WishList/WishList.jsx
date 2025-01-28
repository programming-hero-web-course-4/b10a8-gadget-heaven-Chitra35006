import { useEffect, useState } from "react";
import { IoCartSharp } from "react-icons/io5";

import {
  addToCart,
  getAllWishlist,
  removeFromWishlist,
  isInCart,
} from "../../CartFunction/Utilities";

import { TiDelete } from "react-icons/ti";

import toast from "react-hot-toast";

const WishList = () => {
  document.title = "Wishlist | Gadget Heaven";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = getAllWishlist();
    setProducts(items);
  }, []);

  const handleAddToCart = (product) => {
    if (isInCart(product.id)) {
      toast.error("Product is already in the cart!");
    } else {
      addToCart(product);
      removeFromWishlist(product.id);
      setProducts(products.filter((item) => item.id !== product.id));
      // toast.success("Product added to cart!");
    }
  };

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);

    toast.error("Product removed from wishlist");
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== productId)
    );
  };
  return (
    <div className="mt-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#aa0ae9]">Wishlist</h3>
      </div>
      {/* WishList Item */}
      <div className="mt-5 flex-col gap-6 flex">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-xl shadow-lg py-4 px-8 border-1 border-violet-200 my-6"
          >
            <div className="flex  flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
              <div className="text-center">
                <img
                  src={product.img}
                  className="w-40 mx-auto border-l-4 border-r-4 border-violet-600 rounded-xl"
                  alt={product.title}
                />
              </div>
              <div className='"w-full md:w-auto"'>
                <h3 className="md:text-2xl w-full font-medium text-center md:text-left">
                  {product.title}
                </h3>
                <p className="mt-4 text-gray-500 font-semibold">
                  {product.desc}
                </p>
                <p className="mt-1">
                  Price: <strong>{product.price}</strong>{" "}
                  <span className="text-pink-600">$</span>
                </p>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn rounded-2xl  bg-violet-600 text-white"
                >
                  Add To Cart <IoCartSharp className="text-xl" />
                </button>
              </div>
            </div>
            {/* delete button */}
            <div className="md:mt-0 mt-20">
              <button
                onClick={() => handleRemoveFromWishlist(product.id)}
                className="btn text-4xl text-red-600 rounded-full border-1 border-red-600"
              >
                <TiDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;

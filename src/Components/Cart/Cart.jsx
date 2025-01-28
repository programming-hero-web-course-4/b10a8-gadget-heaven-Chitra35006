import { useEffect, useState } from 'react';
import { FaSortNumericDownAlt } from "react-icons/fa";
import { getAllCarts, clearCart, removeFromCart } from '../../CartFunction/Utilities';

import { TiDelete } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import toast from 'react-hot-toast';

const Cart = () => {
    document.title = "Cart | Gadget Heaven";
    const [products, setProducts] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [showModal, setShowModal] = useState(false);  
    const [purchaseCost, setPurchaseCost] = useState(0); 

    useEffect(() => {
        const carts = getAllCarts();
        setProducts(carts);
    }, []);

    useEffect(() => {
        const cost = products.reduce((acc, product) => acc + product.price, 0);
        setTotalCost(cost.toFixed(2));
    }, [products]);

    const sortByPrice = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    };

    const handlePurchase = () => {
        setPurchaseCost(totalCost);  
        setShowModal(true);         
        clearCart();                
        setProducts([]);              
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        toast.error('Product removed from cart')
        
        setProducts(prevProducts => prevProducts.filter(item => item.id !== productId));
    };
    return (
        <div className='mt-10'>
        {/* headings */}
        <div className='flex flex-col md:flex-row md:justify-between items-center'>
            <div>
                <h3 className='font-medium text-2xl'>Cart</h3>
            </div>
            <div className='flex-col md:flex-row flex items-center gap-2 space-x-4'>
                <h3 className='font-medium md:text-2xl'>Total Cost: <strong>{totalCost}</strong><span className='text-pink-600'>$</span></h3>
                <div className='gap-2 flex '>
                <button onClick={sortByPrice} className='text-xl btn text-violet-600  border-violet-600 rounded-4xl'>
                    Sort By Price <FaSortNumericDownAlt />
                </button>
                <button 
                    onClick={handlePurchase}  // Trigger purchase action
                    className='text-xl md:ml-4 px-4 py-2 text-white bg-gradient-to-r from-pink-300 via-violet-700 to-violet-900 rounded-4xl' 
                    disabled={products.length === 0}
                >
                    Purchase
                </button>
                </div>
            </div>
        </div>

        {/* Cart Items */}
        <div className='mt-5 flex-col gap-2 flex'>
            {products.map(product => (
                <div key={product.id} className='flex items-center justify-between rounded-xl shadow-lg py-4 px-8 border-1 border-violet-200 my-6'>
                    <div className="flex  flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
  {/* Image Section */}
  <div className="text-center">
    <img
      src={product.img}
      className="w-40 mx-auto border-l-4 border-r-4 border-violet-600 rounded-xl"
      alt={product.title}
    />
  </div>

  {/* Product Details Section */}
  <div className="w-full md:w-auto">
    <h3 className="md:text-2xl w-full font-medium text-center md:text-left">
      {product.title}
    </h3>
    <p className="mt-4 text-gray-500 font-semibold">{product.desc}</p>
    <p className="mt-1">
      Price: <strong>{product.price}</strong>{" "}
      <span className="text-pink-600">$</span>
    </p>
  </div>
</div>

                    {/* dlt button */}
                    <div className='md:mt-0 mt-20'>
                        <button onClick={() => handleRemoveFromCart(product.id)} className='btn text-4xl text-red-600 rounded-full border-1 border-red-600'>
                        <TiDelete />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Modal */}
        {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg p-6 w-80 text-center flex flex-col items-center">
                    <img src="/Group.png" alt="" />
                    <h3 className="text-2xl font-bold mb-4">Purchase Successful!</h3>
                    <div className="divider divider-primary"></div>
                    <p className="text-xl">Total Purchase Cost: <strong>${purchaseCost}</strong></p>
                    <NavLink to="/" className="mt-6 btn bg-[#792fb6b2] text-white" onClick={() => setShowModal(false)}>
                        Close
                    </NavLink>
                </div>
            </div>
        )}
    </div>
    );
};

export default Cart;
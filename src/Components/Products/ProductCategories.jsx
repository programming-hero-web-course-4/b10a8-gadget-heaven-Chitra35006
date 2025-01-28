import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ProductCategories = ({product}) => {
    // eslint-disable-next-line react/prop-types
    const {img,title,price,id} = product;
    return (
        <div id="shopSection">
        <div className="card h-[440px] shadow-xl border-2 border-gray-100">
              <figure className="pt-4 border-l-2 border-r-2 border-violet-500 m-4 rounded-2xl">
                   <img src={img} className="rounded-xl w-56 " />
               </figure>
               <div className="card-body text-left">
  <h2 className="card-title text-violet-700 text-xl">{title}</h2>
  <p className="text-black font-semibold text-xl">
    Price: {price} <span className="text-pink-500 text-xl">$</span>
  </p>
  <div className="card-actions">
  <Link
    to={`/product/${id}`}
    className="btn text-[#9538E2] border-[#9538E2] btn-outline rounded-3xl hover:bg-violet-600 hover:text-white 
      transform transition-transform duration-300 hover:scale-105"
  >
    View Details
  </Link>
</div>

</div>

      </div>
    </div>
    );
};

export default ProductCategories;
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const Category = ({category}) => {
    const { category: categoryName } = category; 
    return (
        <div>
             <Link to={`/products/${categoryName}`} className="px-4  py-2 rounded-xl text-[#9538E2] border-l-[#9538E2] border-l-4 border-r-4 border-b-1 font-semibold">
                {categoryName}
            </Link>
        </div>
    );
};
Category.propTypes = {
    category: PropTypes.shape({
      category: PropTypes.string.isRequired, // Ensure `category` is a required string
    }).isRequired, // Ensure the `category` object itself is required
  };
  // Default props
Category.defaultProps = {
    category: {
      category: "default-category",
    },
  };
export default Category;
import ItemCard from "./ItemCard";
import "../CSS/Specials.css";
import products from "../../Products/products.json";
import { NavLink } from "react-router-dom";

const Specials = () => {
  return (
    <section id="specials-section">
      <div id="special">
        <h1>This Week's Special</h1>
        <NavLink to="menu">
          <button>Online Menu</button>
        </NavLink>
      </div>
      <div id="product-cards">
        {products.map((currentProduct, index) => {
          return (
            <ItemCard
              key={index}
              title={currentProduct.title}
              description={currentProduct.description}
              thumbnail={currentProduct.thumbnail}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Specials;

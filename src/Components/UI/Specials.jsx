import ItemCard from "./ItemCard";
import products from "../../Products/products.json";

const Specials = () => {
  return (
    <section id="specials-section">
      <div id="special">
        <h1>This Week's Special</h1>
        <button>Online Menu</button>

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

import ItemCard from "../Components/UI/ItemCard";
import products from "../Products/products.json";

const Menu = () => {
  return (
    <section id="specials-section">
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

export default Menu;

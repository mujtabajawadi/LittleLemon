const ItemCard = ({title, description, thumbnail}) => {

  return (
    <div id="card">
      <div id="card-image">
        <picture>
          <source srcSet={`/images${thumbnail}`} type="image/webp" />
          <source srcSet={`/images${thumbnail}`} type="image/svg" />
          <source srcSet={`/images${thumbnail}`} type="image/jpg" />
          <img src={`/images${thumbnail}`} alt={`${title}`} loading="lazy"/>
        </picture>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ItemCard;

const ItemCard = ({title, description, thumbnail}) => {

  return (
    <div id="card">
      <div id="card-image">
        <img src={`/images${thumbnail}`} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ItemCard;

import "./MenuCard.css";
const MenuCard = ({ item }) => {
  const toppings = item.toppings.length ? (
    item.toppings.map((topping, i) => <p key={i}>{topping}</p>)
  ) : (
    <p>No toppings available</p>
  );

  return (
    <div className="item">
      <img src={item.image} alt="a dish from the menu" width="500" height="600" />
      <h2>{item.name}</h2>
      <h6>{item.shortDescription}</h6>
      <h5>Toppings</h5>
      <div>{toppings}</div>
      <p className="price">Price: ${item.price}</p>
    </div>
  );
};

export default MenuCard;

import MenuCard from "../MenuCard/MenuCard";
import "./MenuList.css";

const MenuList = ({ items }) => {
  const menuItems = items.map((item) => <MenuCard key={item.id} item={item} />);

  return (
    <div className="MenuList">
      <h1 className="header">Our Menu</h1>
      <div className="items">{menuItems}</div>
    </div>
  );
};

export default MenuList;

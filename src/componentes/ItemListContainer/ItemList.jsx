import { Item } from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <div className="cards">
      {productos.map((prod) => (
        <Item prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

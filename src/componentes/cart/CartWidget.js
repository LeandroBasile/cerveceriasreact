import { BsFillCartPlusFill } from "react-icons/bs";
import { useCartContext } from "../context/CartContext";

function CartWidget() {
  const { totalProd, cartList } = useCartContext();

  const cantidadItems = () => {
    const itemsCantidad = totalProd();

    return itemsCantidad;
  };


  return (
    <div className="cartWid">
      {cartList.length === 0 ? (
        ""
      ) : (
        <div className="countWidget">
          <h1>{cantidadItems()}</h1>
        </div>
      )}

      <BsFillCartPlusFill style={{ height: "40px", width: "40px" }} />
    </div>
  );
}

export default CartWidget;

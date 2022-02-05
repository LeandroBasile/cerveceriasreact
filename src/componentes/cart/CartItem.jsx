import { Table } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

export const CartItem = () => {
  const { total, vaciarCarrito, cartList, eliminarProducto } = useCartContext();

  return (
    <Table className="table" striped bordered hover size="sm">
      <thead>
        <tr>
          <th>PRODUCTO</th>
          <th>FOTO</th>
          <th>CANTIDAD</th>
          <th>PRECIO</th>
          <th></th>
          <th></th>

        </tr>
      </thead>
      <tbody>
        {cartList.map((prodc) => (
          <tr key={prodc.id}>
            <td>{prodc.title}</td>
            <td>
              <img className="imagenCarrito" src={prodc.imagenUrl} />
            </td>
            <td>{prodc.cantidad}</td>
            <td>{prodc.price}</td>
            <td>{prodc.price * prodc.cantidad}</td>
            <td>
              <button onClick={() => eliminarProducto(prodc.id)}>X</button>{" "}
            </td>
          </tr>
        ))}

        <tr>
          <th>TOTAL</th>
          <th></th>
          <th>
            <button
              type="button"
              className="btn btn-danger"
              onClick={vaciarCarrito}
            >
              Vaciar Carrito
            </button>
          </th>
          <th></th>
          <th>{total()}</th>
          <th></th>

        </tr>
      </tbody>
    </Table>
  );
};

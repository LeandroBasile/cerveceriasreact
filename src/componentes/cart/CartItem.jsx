import { Table } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";

export const CartItem = () => {
  const { total,vaciarCarrito ,cartList, eliminarProducto } = useCartContext();

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>PRODUCTO</th>
          <th>DESCRIPCION</th>
          <th>CANTIDAD</th>
          <th>PRECIO</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartList.map((prodc) => (
          <tr>
            <td>{prodc.title}</td>
            <td>{prodc.cantidad}</td>
            <td>{prodc.prise}</td>
            <td>{prodc.prise * prodc.cantidad}</td>
            <td>
              <button onClick={() => eliminarProducto(prodc.id)}>X</button>{" "}
            </td>
          </tr>
        ))}

        <tr>
          <th>TOTAL</th>
          <th></th>
          <th></th>
          <th>{total()}</th>
          <th></th>
        </tr>
      </tbody>

      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </Table>
  );
};

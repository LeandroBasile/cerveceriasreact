import { Table } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
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
              <img
                className="imagenCarrito"
                alt={prodc.title}
                src={prodc.imagenUrl}
              />
            </td>
            <td>{prodc.cantidad}</td>
            <td>{prodc.price}</td>
            <td>{prodc.price * prodc.cantidad}</td>
            <td>
              <BsFillTrashFill onClick={() => eliminarProducto(prodc.id)} />
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
          <th>$ {total()}</th>
          <th></th>
        </tr>
      </tbody>
    </Table>
  );
};

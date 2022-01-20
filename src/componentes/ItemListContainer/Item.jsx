import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ prod }) => {
  return (
    <div className="contenedor">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img className="imagenes" variant="top" src={prod.foto} />
          <Card.Body className="cajaInfoCard">
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>{prod.description}</Card.Text>
            <Link to={`/detalle/${prod.id}`}>
              <Button variant="primary">VER MAS</Button>
            </Link>
          </Card.Body>
      </Card>
    </div>
  );
};

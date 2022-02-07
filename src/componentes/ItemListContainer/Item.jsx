import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ prod }) => {
  return (
    <div>
      <Card className="card">
        <Card.Img
          className="imagenes"
          variant="top"
          alt={prod.title}
          src={prod.imagenUrl}
        />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="listGroupItem">{prod.alc}</ListGroupItem>
          <ListGroupItem className="listGroupItem">{prod.litros}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Link to={`/detalle/${prod.id}`}>
            <Button variant="primary" className="botonVerMas">
              VER MAS
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

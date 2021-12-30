import React from 'react'
import {Card, Button} from "react-bootstrap"

export const Item = ({prod}) => {
    return (
        <div>
                      <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.foto} />
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>
                {prod.description}
              </Card.Text>
              <Button variant="primary">VER MAS</Button>
            </Card.Body>
          </Card>

        </div>
    )
}

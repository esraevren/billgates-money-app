import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function ProductCard({ item, id }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.productName}</Card.Title>
          <Card.Text> {item.productPrice}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;

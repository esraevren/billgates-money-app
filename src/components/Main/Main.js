import React from 'react'
import { useSelector } from "react-redux";
import {Container, Row,Col,Card,Button } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

function Main() {
 const items=useSelector((state)=>state.products.items)
 const budget= useSelector((state)=>state.products.budget)
 const editBudget=Number(budget).toLocaleString();

  return (
    <Container>
  <div>${editBudget}</div>
  <Row>
    {items.map((item)=>(
      <Col xl={4}  key={item.id}>
      <ProductCard item={item} id={item.id} />
     </Col>
    ))}

  </Row>

    </Container>
  )
}

export default Main
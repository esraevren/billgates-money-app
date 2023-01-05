import React,{useState,useEffect} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../../redux/products/productsSlice";

function ProductCard({ item, id }) {
 const [count, setCount]=useState(0);
 const [sellable,setSellable]=useState("disabled");
 const [buyable, setBuyable]=useState("");


 const budget=useSelector((state)=>state.products.budget)
 const dispatch= useDispatch()

 useEffect(()=>{
   dispatch(updateCount({count:count, id:item.id}))
 },[count])
 
 const buy=()=>{
  setCount(Number(count)+1);
 }

 const sell=()=>{
  setCount(Number(count)-1)
 }

 useEffect(()=>{
  if(item.productPrice >budget){
    setBuyable("disabled")
  }else {
    setBuyable("")
  }
 },[budget])


 useEffect(()=>{
 if(count>0){
  setSellable("")
 }else{
  setSellable("disabled")
 }
 },[count])

const handleChange=(value)=>{
  const maxCount = Math.floor(budget / item.productPrice) + count;

  if(value && value>0){
       if(value>maxCount && budget>=0){
        setCount(maxCount)
       }
  }else{
    setCount(0)
  }
}




  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.productName}</Card.Title>
          <Card.Text> {item.productPrice}$ </Card.Text>
          <button disabled={sellable} onClick={sell}>sell</button>
          <input value={count} onChange={(e)=>handleChange(parseInt(e.target.value))} />
          <button disabled={buyable} onClick={buy}>buy</button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;

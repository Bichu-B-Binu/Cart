import {  Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button ,Form} from "react-bootstrap";
import { Rating } from "../Rating";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { useGetProductsDetailsQuery } from "../../slice/productApiSlice";
import Loder from "../Loder";
import Message from "../Message";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slice/cartSlice";

export const ProductScreen = () => {
  // const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const addToCartHandler=()=>{
    dispatch(addToCart({...product,qty }))
    navigate("/cart")
  }

  const { id: productId } = useParams();
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const response = await axios.get(`/api/products/${productId}`);
  //     setProduct(response.data);
  //   };
  //   fetchProduct();
  // }, [productId]);
  const {data:product,isLoading,error}=useGetProductsDetailsQuery(productId)
  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
    {/* <Message variant="success">{"helooooooo"}</Message> */}
      
    {isLoading?(
    <Loder/>
  ):error?(
    <Message variant="danger">{error?.data.message||error.error}</Message>
  ):(
        <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>


              {product.countInStock>0&&(<ListGroup.Item>
                <Row>
                  <Col>
                  <Form.Control
                  as="select"
                  value={qty}
                  onChange={(e)=>setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x)=>{
                      return (
                        <option
                        key={x+1}
                        value={x+1}
                        >{x+1}</option>
                      )
                    })}
                  </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>)}


              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    )}
    </>
  );
};

import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import { addToCart, removeFromCart } from "../../slice/cartSlice";

const CartScreen = () => {
// eslint-disable-next-line no-unused-vars
const navigate=useNavigate()
const dispatch=useDispatch()
const {cartItems,totalPrice}=useSelector((state)=>state.cart)

const addToCartHandler=(product,qty)=>{

    dispatch(addToCart({...product,qty}))
}

const removeFromCartHandler=(id)=>{

dispatch(removeFromCart(id))

}

// console.log(cartItems.length);
// const name="bichu"
  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
        {cartItems.length===0?(
        // <Message>
        //     Your Cart Is Empty <Link to="/">Go Back</Link>
        // </Message>
        // console.log("dkkjf")
        <Message>{name}</Message>
        ):(
    <ListGroup variant="flush">
  {cartItems.map(item=>{
     return( <>
     <ListGroup.Item key={item._id}>
      <Row>
        <Col md={2}>
          <Image
            src={item.image}
            alt={item.name}
            fluid
            rounded
          />
        </Col>
        <Col md={3}>
          <Link to={`/product/${item._id}`}>{item.name}</Link>
        </Col>
        <Col md={2}>${item.price}</Col>
        <Col md={2}>
          <Form.Control as="select" value={item.qty}
          onChange={(e)=>addToCartHandler(item,Number(e.target.value))}
          >
            {[...Array(item.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </Form.Control>
        </Col>
        <Col md={2}>
          <Button type="button" variant="light" onClick={()=>removeFromCartHandler(item._id)}>
            <FaTrash />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
    </>
    )
})}
  </ListGroup>  )  
    }
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Subtotal ({cartItems.reduce((acc,item)=>{
                let qty=Number(item.qty)
                return acc+qty
              },0)}) items</h2>${totalPrice}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type="button" className="btn-block">
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;

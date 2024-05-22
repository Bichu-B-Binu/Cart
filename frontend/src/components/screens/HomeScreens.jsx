/* eslint-disable react/jsx-key */
import { Col, Row } from "react-bootstrap";
import Product from "../Product";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const HomeScreens = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {products &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

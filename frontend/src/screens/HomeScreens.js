import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import Product from '../Components/Product';
import Message from '../Components/Message';
import Loader from '../Components/Loader';

import { listProducts } from '../actions/productActions';
import { useParams } from 'react-router-dom';

const HomeScreens = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(params.keyword));
  }, [dispatch, params]);

  return (
    <>
      <h1>Latest Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreens;

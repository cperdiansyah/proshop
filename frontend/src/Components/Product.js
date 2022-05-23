import React from 'react';
import { Card } from 'react-bootstrap';

const Product = (props) => {
  const { product } = props;
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img variant='top' src={product.image} />
      </a>
      <Card.Body>
        <Card.Title as='div'>
          <a href={`/product/${product.id}`}>
            <strong>{product.name}</strong>
          </a>
        </Card.Title>
        <Card.Text as='div'>
          <div className='my-4'>
            {product.rating} fron {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

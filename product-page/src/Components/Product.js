import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/Counter';
import { Flex } from './Style/Flex.styled';
import {
  AddToCart,
  Button,
  Counter,
  ProductImage,
  ProductInfo,
  ProductPreview,
  ProductStyled,
} from './Style/Product.styled';

const Product = () => {
  const [mainImage, setMainImage] = useState('./images/image-product-1.jpg');
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <ProductStyled>
      <ProductPreview direction='column' gap='34px'>
        <ProductImage src={mainImage} width='100%' />
        <Flex>
          <ProductImage
            src='./images/image-product-1-thumbnail.jpg'
            width='20%'
            onClick={() => setMainImage('./images/image-product-1.jpg')}
          />
          <ProductImage
            src='./images/image-product-2-thumbnail.jpg'
            width='20%'
            onClick={() => setMainImage('./images/image-product-2.jpg')}
          />
          <ProductImage
            src='./images/image-product-3-thumbnail.jpg'
            width='20%'
            onClick={() => setMainImage('./images/image-product-3.jpg')}
          />
          <ProductImage
            src='./images/image-product-4-thumbnail.jpg'
            width='20%'
            onClick={() => setMainImage('./images/image-product-4.jpg')}
          />
        </Flex>
      </ProductPreview>
      <ProductInfo>
        <p className='company'>Sneaker company</p>
        <h1 className='title'>fall limited edition sneakers</h1>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea numquam
          facilis suscipit officiis at, veniam voluptates excepturi dicta
          ratione quia!
        </p>
        <Flex className='price-section' width='48%'>
          <span className='price'>$125.00</span>
          <div>
            <p>50%</p>
          </div>
        </Flex>
        <p className='old-price'>$250.00</p>
        <AddToCart>
          <Counter>
            <span className='decrement' onClick={() => dispatch(decrement())}>
              -
            </span>
            <span>{count}</span>
            <span className='increment' onClick={() => dispatch(increment())}>
              +
            </span>
          </Counter>
          <Button>
            <BsCart3 className='button-cart-icon' />
            Add to cart
          </Button>
        </AddToCart>
      </ProductInfo>
    </ProductStyled>
  );
};

export default Product;

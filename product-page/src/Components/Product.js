import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../Redux/Counter';
import { closeCart } from '../Redux/Modal';
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
  const [purchaseNumber, setPurchaseNumber] = useState(0);

  return (
    <ProductStyled onClick={() => dispatch(closeCart())}>
      <ProductPreview direction='column' gap='34px'>
        <ProductImage
          src={mainImage}
          width='100%'
          style={{ cursor: 'default' }}
        />
        <Flex className='product-images'>
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
          <div className='discount-percentage'>
            <p>50%</p>
          </div>
        </Flex>
        <p className='old-price'>$250.00</p>
        <AddToCart>
          <Counter>
            <span
              className='decrement'
              onClick={() =>
                setPurchaseNumber(purchaseNumber <= 0 ? 0 : purchaseNumber - 1)
              }
            >
              -
            </span>
            <span>{purchaseNumber >= 0 ? purchaseNumber : 0}</span>
            <span
              className='increment'
              onClick={() => setPurchaseNumber(purchaseNumber + 1)}
            >
              +
            </span>
          </Counter>
          <Button
            onClick={() => {
              dispatch(incrementByAmount(purchaseNumber));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <BsCart3 className='button-cart-icon' />
            Add to cart
          </Button>
        </AddToCart>
      </ProductInfo>
    </ProductStyled>
  );
};

export default Product;

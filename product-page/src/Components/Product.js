import React from 'react';
import { Flex } from './Style/Flex.styled';
import {
  ProductImage,
  ProductInfo,
  ProductPreview,
  ProductStyled,
} from './Style/Product.styled';

const Product = () => {
  return (
    <ProductStyled>
      <ProductPreview direction='column' gap='34px'>
        <ProductImage src='./images/image-product-1.jpg' width='100%' />
        <Flex>
          <ProductImage
            src='./images/image-product-1-thumbnail.jpg'
            width='20%'
          />
          <ProductImage
            src='./images/image-product-2-thumbnail.jpg'
            width='20%'
          />
          <ProductImage
            src='./images/image-product-3-thumbnail.jpg'
            width='20%'
          />
          <ProductImage
            src='./images/image-product-4-thumbnail.jpg'
            width='20%'
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
      </ProductInfo>
    </ProductStyled>
  );
};

export default Product;

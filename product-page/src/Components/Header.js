import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from './Style/Flex.styled';
import {
  HeaderStyled,
  Logo,
  Nav,
  NavList,
  NavListItem,
  Image,
  CartCount,
  Cart,
} from './Style/Header.style';
import { BsCart3 } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { Button } from './Style/Product.styled';

const Header = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <HeaderStyled>
      <Nav>
        <Logo src='./images/logo.svg' />
        <NavList>
          <NavListItem>
            <a href='#'>Collections</a>
          </NavListItem>
          <NavListItem>
            <a href='#'>Men</a>
          </NavListItem>
          <NavListItem>
            <a href='#'>Women</a>
          </NavListItem>
          <NavListItem>
            <a href='#'>About</a>
          </NavListItem>
          <NavListItem>
            <a href='#'>Contact</a>
          </NavListItem>
        </NavList>
      </Nav>
      <Flex>
        <Flex className='cartComponent'>
          <BsCart3 className='header-cart-icon' />
          {count > 0 ? (
            <CartCount>
              <span>{count}</span>
            </CartCount>
          ) : null}
          <Cart className='cart'>
            <div className='cart-header'>
              <span>Cart</span>
            </div>
            <div className='cart-product'>
              <img src='./images/image-product-1.jpg' alt='' />
              <div className='cart-product-info'>
                <div className='name-section'>
                  <span className='product-name'>
                    Fall Limited Edition Sneakers
                  </span>
                </div>
                <div className='product-price'>
                  <span className='price'>$125.00 x {count}</span>
                  <span className='total'>${125.0 * count}.00</span>
                </div>
              </div>
              <FaTrashAlt className='remove-icon' />
            </div>
            <Button>Checkout</Button>
          </Cart>
        </Flex>
        <Image
          src='./images/image-avatar.png'
          imgWidth='52px'
          className='avatar'
        />
      </Flex>
    </HeaderStyled>
  );
};

export default Header;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from './Style/Flex.styled';
import { closeCart, openCart } from '../Redux/Modal';
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
import { BackgroundStyled } from './Style/Background.styled';
import { decrement } from '../Redux/Counter';

const Header = () => {
  const [showBackground, setShowBackground] = useState('none');
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const open = useSelector((state) => state.opener.open);
  return (
    <HeaderStyled>
      <BackgroundStyled
        onClick={() => {
          dispatch(closeCart());
          setShowBackground('none');
        }}
        style={{ display: showBackground }}
      />
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
          {/* <BsCart3
            className='header-cart-icon'
            onClick={() => {
              dispatch(openCart());
              setShowBackground('block');
            }}
          /> */}
          {count > 0 ? (
            <CartCount>
              <span>{count}</span>
            </CartCount>
          ) : null}
          <Cart className='cart' style={{ display: open }}>
            <div className='cart-header'>
              <span>Cart</span>
            </div>
            {count <= 0 ? (
              <div className='cart-empty'>
                <span>Your cart is empty.</span>
              </div>
            ) : (
              <div className='cart-filled'>
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
                <FaTrashAlt
                  className='remove-icon'
                  onClick={() => dispatch(decrement())}
                />
              </div>
            )}
            {count > 0 ? <Button>Checkout</Button> : null}
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

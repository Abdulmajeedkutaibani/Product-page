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
} from './Style/Header.style';
import { BsCart3 } from 'react-icons/bs';

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

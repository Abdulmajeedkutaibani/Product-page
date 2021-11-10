import React from 'react';
import { Flex } from './Style/Flex.styled';
import {
  HeaderStyled,
  Logo,
  Nav,
  NavList,
  NavListItem,
  Image,
} from './Style/Header.style';

const Header = () => {
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
        <Image src='./images/icon-cart.svg' imgWidth='25px' />
        <Image src='./images/image-avatar.png' imgWidth='52px' />
      </Flex>
    </HeaderStyled>
  );
};

export default Header;

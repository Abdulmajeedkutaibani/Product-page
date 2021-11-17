import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavList, NavListItem } from './Style/Header.style';
import { MenuStyled } from './Style/Menu.styled';
import { IoCloseSharp } from 'react-icons/io5';
import { closeMenu } from '../Redux/Menu';
import { hideBackground } from '../Redux/Background';

const Menu = () => {
  const menuToggle = useSelector((state) => state.menu.open);
  const dispatch = useDispatch();
  return (
    <MenuStyled style={{ left: menuToggle }}>
      <IoCloseSharp
        onClick={() => {
          dispatch(closeMenu());
          dispatch(hideBackground());
        }}
      />
      <img src='./images/icon-close' alt='' />
      <ul>
        <li>
          <a href='#'>Collections</a>
        </li>
        <li>
          <a href='#'>Men</a>
        </li>
        <li>
          <a href='#'>Women</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </MenuStyled>
  );
};

export default Menu;

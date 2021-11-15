import styled from 'styled-components';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    border-bottom: none;
    padding: 0 5%;
  }
  .cartComponent {
    position: relative;

    svg {
      cursor: pointer;
    }
  }

  .header-cart-icon {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.subColor};
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 24px;
    }
    &:hover {
      color: black;
    }
  }
  .avatar {
    border-radius: 100%;
    cursor: pointer;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.mainColor};
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 138px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 68px;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 33px;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
export const NavListItem = styled.li`
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.subColor};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;

export const Image = styled.img`
  width: ${({ imgWidth }) => imgWidth};
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24px;
    margin-left: 15px;
  }
`;

export const CartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 17px;
  padding-left: 1px;
  font-weight: 700;
  margin-top: -25px;
  margin-left: -15px;
  border-radius: 40%;
  font-size: 14px;
  color: white;
  background: ${({ theme }) => theme.colors.mainColor};
`;

export const Cart = styled.div`
  background: white;
  z-index: 30;
  position: absolute;
  width: 360px;
  height: 280px;
  border-radius: 8px;
  top: 60px;
  right: -150px;
  box-shadow: -0px 50px 50px lightgray;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    top: 60px;
    right: -50px;
  }

  .cart-header {
    border-bottom: 1.5px solid lightgrey;
    height: 72px;
    background: white;
    display: flex;
    align-items: center;
    padding-left: 25px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    span {
      font-weight: 600;
    }
  }
  .cart-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.subColor};
  }
  .cart-filled {
    user-select: none;
    padding: 25px;
    display: flex;
    align-items: center;
    gap: 16px;

    img {
      width: 50px;
      border-radius: 6px;
    }
    .cart-product-info {
      .name-section {
        width: 110%;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.subColor};
      }
    }
    .remove-icon {
      color: lightgray;
      cursor: pointer;
      font-size: 19px;
      transition: all 0.3s;
      &:active {
        transform: scale(0.5);
      }
      &:hover {
        color: red;
      }
    }

    .product-price {
      .price {
        color: ${({ theme }) => theme.colors.subColor};
        margin-right: 10px;
      }
      .total {
        font-weight: 700;
      }
    }
  }
  button {
    box-shadow: none;
    margin-left: 25px;
    width: 312px;
    user-select: none;
  }
`;

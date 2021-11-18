import styled from 'styled-components';

export const Cart = styled.div`
  background: white;
  z-index: 30;
  position: absolute;
  width: 360px;
  height: 280px;
  border-radius: 8px;
  top: 60px;
  right: -150px;
  box-shadow: 0px 20px 100px lightblue;
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

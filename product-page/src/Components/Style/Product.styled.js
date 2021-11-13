import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  gap: 5rem;
  width: 90%;
  margin: 100px auto;
  align-items: center;
`;

export const ProductPreview = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  width: 50%;
  align-items: center;
  gap: ${({ gap }) => gap};
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  .company {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.secondaryColor};
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .title {
    margin-bottom: 50px;
    text-transform: capitalize;
  }
  .description {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.subColor};
    margin-bottom: 40px;
  }
  .price-section {
    margin-bottom: 18px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      width: 48px;
      height: 26px;
      font-weight: 700;
      background: ${({ theme }) => theme.colors.PaleOrange};
      color: ${({ theme }) => theme.colors.mainColor};
      letter-spacing: 1px;
    }
  }
  .price {
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.5px;
  }

  .old-price {
    color: ${({ theme }) => theme.colors.subColor};
    text-decoration: line-through;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 42px;
  }
`;

export const ProductImage = styled.img`
  width: ${({ width }) => width};
  border-radius: 12px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

export const AddToCart = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  gap: 16px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  background: hsl(223, 64%, 98%);
  border-radius: 8px;
  font-size: 18px;
  text-align: center;

  span {
    width: 33%;
    text-align: center;
  }

  .increment,
  .decrement {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.mainColor};
    cursor: pointer;
    height: 100%;

    &:hover {
      background: hsl(220, 14%, 75%);
      transition: all 0.3s;
    }
    &:active {
      transform: scale(0.75);
    }
  }
  .decrement {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .increment {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  width: 60%;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.mainColor};
  box-shadow: 0 12px 54px -10px #ffa05a;

  &:hover {
    transition: all 0.3s;
    background: ${({ theme }) => theme.colors.secondaryColor};
  }

  &:active {
    transform: scale(0.75);
  }

  .button-cart-icon {
    margin-right: 12px;
    margin-bottom: 5px;
    font-size: 20px;
    color: white;
  }
`;

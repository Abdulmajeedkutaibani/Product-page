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
  }
`;

export const ProductImage = styled.img`
  width: ${({ width }) => width};
  border-radius: 12px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

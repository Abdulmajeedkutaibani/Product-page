import styled from 'styled-components';

export const MenuStyled = styled.div`
  width: 70%;
  height: 100%;
  background: white;
  z-index: 50;
  position: fixed;
  left: -100%;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  padding: 30px;
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }

  svg {
    font-size: 30px;
    margin-left: -5px;
    margin-bottom: 52px;
    &:active {
      transform: scale(0.9);
      color: red;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 0;
    li {
      &:active {
        transform: scale(0.9);
      }
    }
    a {
      text-decoration: none;
      font-weight: 700;
      color: black;
      letter-spacing: 0.5px;
      font-size: 20px;
      &:active {
        color: ${({ theme }) => theme.colors.mainColor};
      }
    }
  }
`;

export const MenuButton = styled.img`
  margin-right: 15px;
  margin-top: 5px;
  cursor: pointer;
  display: none;

  &:active {
    transform: scale(0.9);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
  }
`;

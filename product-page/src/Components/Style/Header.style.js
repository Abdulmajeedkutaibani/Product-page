import styled from 'styled-components';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;

  .cartComponent {
    cursor: pointer;
  }
  .header-cart-icon {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.subColor};
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
  height: 4cm;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 33px;
  height: 100%;
  justify-content: center;
  align-items: center;
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
    margin: 40px 0 30px;
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

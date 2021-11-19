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

export const Logo = styled.img``;

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

  &:active {
    transform: scale(0.9);
  }
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

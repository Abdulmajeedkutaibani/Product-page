import styled from 'styled-components';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
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
`;
export const NavListItem = styled.li`
  list-style: none;

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

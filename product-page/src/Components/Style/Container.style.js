import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  max-width: 100%;
  padding: 0 0;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

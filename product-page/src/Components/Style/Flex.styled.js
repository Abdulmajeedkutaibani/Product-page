import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  width: ${({ width }) => width};
  align-items: center;
  gap: ${({ gap }) => gap};
  justify-content: space-between;

  /* & > div,
  & > ul {
    flex: 1;
  } */
`;

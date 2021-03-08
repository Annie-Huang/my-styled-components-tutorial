import styled from 'styled-components/macro';

export const Comp = styled.div`
  color: ${(props) => props.$draggable || 'black'};
`;

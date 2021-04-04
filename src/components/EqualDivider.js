import styled from 'styled-components/macro';

export const EqualDivider = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  background: papayawhip;
  ${(props) => props.vertical && 'flex-direction: column;'}

  > * {
    flex: 1;

    &:not(:first-child) {
      ${(props) => (props.vertical ? 'margin-top' : 'margin-left')}: 1rem;
    }
  }
`;

export const Child = styled.div`
  padding: 0.25rem 0.5rem;
  background: palevioletred;
`;

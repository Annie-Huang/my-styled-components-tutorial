import styled from 'styled-components/macro';

/*
 * The styled method works perfectly on all of your own or any third-party component,
 * as long as they attach the passed className prop to a DOM element.
 */

// This could be react-router-dom's Link for example
export const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);
export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

// Referring to other components example:
export const Link2 = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

export const Icon2 = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  /* can remove sc-selector below if you are not using stylelint 
    ${Link2}:hover & {
  */
  ${/* sc-selector */ Link2}:hover & {
    fill: rebeccapurple;
  }
`;

export const Label2 = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: '◀';
    margin: 0 10px;
  }
`;

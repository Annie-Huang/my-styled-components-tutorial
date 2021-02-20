import styled from 'styled-components';

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

import styled from 'styled-components';

export const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  // This is for the <Thing>Don't you think?</Thing>
  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  // This is for the <Thing>How ya doing?</Thing>.
  // It also applied for & ~ & but then got override by & + &
  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  // !!! Interesting, i didn't konw this before...
  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

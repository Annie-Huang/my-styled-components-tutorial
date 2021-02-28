import styled from 'styled-components';

// Create an Input component that'll render an <input> tag with some styles
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Input2 = styled.input.attrs((props) => ({
  // we can define static props
  type: 'text',

  // or we can define dynamic ones
  // size in input[text] is A number indicating how many characters wide the input field should be
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
export const PasswordInput2 = styled(Input2).attrs({
  type: 'password',
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

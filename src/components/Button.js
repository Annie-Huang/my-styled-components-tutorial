import styled, { css } from 'styled-components/macro';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

export const Button1 = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

/*
 * Extending Styles
 */
// The Button from the last section without the interpolations
export const Button2 = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// A new component based on Button, but with some override styles
export const TomatoButton2 = styled(Button2)`
  color: tomato;
  border-color: tomato;
`;

/*
 * "as" polymorphic prop
 */
export const Button3 = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
export const TomatoButton3 = styled(Button3)`
  color: tomato;
  border-color: tomato;
`;

/*
 * "as" polymorphic prop works with custom components too!
 */
export const Button4 = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
export const ReversedButton = (props) => (
  <Button4 {...props} children={props.children.split('').reverse()} />
);

// Define our button, but with the use of props.theme this time
export const Button5 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button5.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

// Define what props.theme will look like
export const theme5 = {
  main: 'mediumseagreen',
};

// Define our button, but with the use of props.theme this time
export const Button6 = styled.button`
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
export const theme6 = {
  fg: 'palevioletred',
  bg: 'white',
};

// This theme swaps `fg` and `bg`
export const invertTheme6 = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

// Define our button
export const Button7 = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// Define what main theme will look like
export const theme7 = {
  main: 'mediumseagreen',
};

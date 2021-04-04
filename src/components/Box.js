import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

theme('mode', {
  light: (props) => props.theme.userProfileAccentColor.light,
  dark: (props) => props.theme.userProfileAccentColor.dark,
});

export const Box = styled.div`
  background-color: ${boxBackgroundColor};
`;

import styled, { keyframes, css } from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

/*
  Keyframes are lazily injected when they're used, which is how they can be code-splitted,
  so you have to use the css helper for shared style fragments:

// ❌ This will throw an error!
const styles1 = `
  animation: ${rotate} 2s linear infinite;
`;

// ✅ This will work as intended
const styles2 = css`
  animation: ${rotate} 2s linear infinite;
`;
*/

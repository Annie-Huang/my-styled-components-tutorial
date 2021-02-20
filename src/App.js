import './App.css';
import styled from 'styled-components';
import { Button, Button1 } from './components/Button';
import { Title } from './components/Typography';

const Container = styled.div`
  text-align: center;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <div className='App'>
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button1>Normal</Button1>
      <Button1 primary>Primary</Button1>
    </div>
  );
}

export default App;

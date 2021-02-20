import './App.css';
import styled from 'styled-components';
import { Button, Button1, Button2, TomatoButton } from './components/Button';
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
      <Container>
        <Button1>Normal</Button1>
        <Button1 primary>Primary</Button1>
      </Container>
      <Container>
        <Button2>Normal Button</Button2>
        <TomatoButton>Tomato Button</TomatoButton>
      </Container>
    </div>
  );
}

export default App;

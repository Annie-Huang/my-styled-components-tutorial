import './App.css';
import styled from 'styled-components';
import {
  Button,
  Button1,
  Button2,
  Button3,
  Button4,
  TomatoButton2,
  TomatoButton3,
} from './components/Button';
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
  const ReversedButton = (props) => (
    <Button4 {...props} children={props.children.split('').reverse()} />
  );

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
        <TomatoButton2>Tomato Button</TomatoButton2>
      </Container>
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <Button3>Normal Button</Button3>
        <Button3 as='a' href='/'>
          Link with Button styles
        </Button3>
        <TomatoButton3 as='a' href='/'>
          Link with Tomato Button styles
        </TomatoButton3>
      </Container>
      <Container>
        <Button4>Normal Button</Button4>
        <Button4 as={ReversedButton}>
          Custom Button with Normal Button styles
        </Button4>
      </Container>
    </div>
  );
}

export default App;

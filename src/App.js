import './App.css';
import styled from 'styled-components';
import {
  Button,
  Button1,
  Button2,
  Button3,
  Button4,
  ReversedButton,
  TomatoButton2,
  TomatoButton3,
} from './components/Button';
import { Title } from './components/Typography';
import { Link, StyledLink } from './components/Link';
import { Input } from './components/Input';
import { GlobalStyle, Thing, Thing2, Thing3 } from './components/Thing';

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
      <Container>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </Container>
      <Container>
        {/*Render a styled text input with the standard input color, and one with a custom input color*/}
        <Input defaultValue='@probablyup' type='text' />
        <Input defaultValue='@geelen' type='text' inputColor='rebeccapurple' />
      </Container>
      <Container>
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className='something'>The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className='something-else'>
          <Thing>Splendid.</Thing>
        </div>
      </Container>
      <Container>
        <Thing2>
          <label htmlFor='foo-button' className='something'>
            Mystery button
          </label>
          <button id='foo-button'>What do I do?</button>
        </Thing2>
      </Container>
      <Container>
        <GlobalStyle />
        <Thing3>I'm blue, da ba dee da ba daa</Thing3>
      </Container>
    </div>
  );
}

export default App;

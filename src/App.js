import './App.css';
import styled from 'styled-components';
import { Button } from './components/Button';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div className='App'>
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </div>
  );
}

export default App;

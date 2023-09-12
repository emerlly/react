import './App.css';
import About from './pages/About/About'
import Paragrafo from './components/Paragrafo/Paragrafo';
import styled from 'styled-components';

const StyledIndex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:  center;


`

function App() {
  return (
    <StyledIndex>
     <About />
     <Paragrafo />
     
   
    </StyledIndex>
  );
    
      
}

export default App;

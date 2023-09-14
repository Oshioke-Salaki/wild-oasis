import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
`;

function App() {
  return (
    <div>
      <H1>The wild oasis</H1>
      <Button></Button>
    </div>
  );
}

export default App;

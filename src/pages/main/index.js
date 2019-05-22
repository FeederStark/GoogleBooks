import React, { useState } from 'react';
import { Container, Button } from './styles';

function Main() {
  const [overDiv, setOverDiv] = useState(false);
  return (
    <Container overDiv={overDiv}>
      <div onMouseEnter={() => setOverDiv(true)} onMouseLeave={() => setOverDiv(false)}>
        <Button to="/home">ACESSAR</Button>
      </div>
    </Container>
  );
}
export default Main;

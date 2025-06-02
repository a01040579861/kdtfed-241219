import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1``;

interface DummyProps {
  text: string;
  active?: boolean;
}

const Dummy = ({ text, active }: DummyProps) => {
  return <Title>{text}</Title>;
};

const App = () => {
  const onClick = (event: React.FormEvent<HTMLFormElement>) => {
    alert("Hello");
  };
  return (
    <Container>
      <Dummy text="Hello" />
      <Dummy text="World" active={true} />
      <button onClick={onClick}>Click</button>
    </Container>
  );
};

export default App;

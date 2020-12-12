import React from "react";
import styled from "styled-components";

export default function App() {
  return (
    <div className="App">
      <Title>hello</Title>
      <Button>This is the button!</Button>
    </div>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  border: none;
  background: #35d362;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
`;

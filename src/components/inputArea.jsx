import React, { useContext } from "react";
import styled from "styled-components";
import editorContext from "../editorContext";

const Container = styled.div`
  width: 50%;
  height: 96%;
  padding: 10px;
  resize: horizontal;
  overflow: auto;
  border-right: 2.5px solid #121212;
`;

const Title = styled.div`
  font-size: 120%;
  font-weight: 700;
  color: #4f666a;
  padding: 8px 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 92%;
  resize: none;
  border: none;
  outline: none;
  overflow: auto;
  font-size: 13px;
  color: #dcdcdc;
  background-color: #212223;
`;

export function MarkedInput(props) {
  const { setMarkdownText } = useContext(editorContext);

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea onChange={onInputChange} />
    </Container>
  );
}

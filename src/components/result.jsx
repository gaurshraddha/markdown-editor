import React, { useContext } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import editorContext from "../editorContext";

const Container = styled.div`
  width: 50%;
  height: 96%;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 120%;
  font-weight: 700;
  color: #4f666a;
  padding: 8px 0;
  border-bottom: 1px solid #282828;
`;

const ResultArea = styled.div`
  width: 100%;
  height: 95%;
  resize: none;
  border: none;
  outline: none;
  overflow: auto;
  font-size: 13px;
  color: #dcdcdc;
`;

export function Result(props) {
  const { markdownText } = useContext(editorContext);
  console.log("Converted Text:", markdownText);

  return (
    <Container>
      <Title>Converted Text</Title>
      <ResultArea>
        <ReactMarkdown children={markdownText} />
      </ResultArea>
    </Container>
  );
}

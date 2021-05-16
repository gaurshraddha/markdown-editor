import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';
import {MarkedInput} from './components/inputArea';
import {Result} from './components/result';
import editorContext from './editorContext';
import {FaPen} from 'react-icons/fa';

const AppContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   overflow-y: scroll;
   overflow-x: hidden;
   flex-direction: column;
   align-items: center;
   background-color: #181818;
   margin-right: 0px;
`;

const Title = styled.div`
   text-align: center;
   font-size: 150%;
   font-weight: 700;
   width: 100%;
   color:#20b2aa;
   background-color: #121212;
   font-family: "Lato", sans-serif;
   padding: 0.5em;
`;

const EditorContainer = styled.div`
   width: 100%;
   height: 98%;
   display: flex;
`;

function App() {

  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <editorContext.Provider value={contextValue} >
      <AppContainer>
        <Title>Markdown Editor <FaPen style= {{fontSize: 20}} /> </Title>
        <EditorContainer>
           <MarkedInput />
           <Result />
        </EditorContainer>
      </AppContainer>
    </editorContext.Provider>  
  );
}

export default App;

import React from 'react';
import QuizProvider from './context/QuizProvider' 

import { Navigate, Route, Router, Routes } from 'react-router-dom';

import Error404 from './components/404/Error404';
import Main from './components/Main';
import Theory from './components/theory/Theory';
import QuizContainer from './components/test/QuizContainer';

function App() {
  return (
    <QuizProvider>
      <Routes> 
          <Route path="/react_quiz/" element={<Main />} />
          <Route path="/react_quiz/theory/:type" element={<Theory />} /> 
          <Route path="/react_quiz/test/:type" element={<QuizContainer />} />
          <Route path="/*" element={< Error404 />} /> 
      </Routes>
      {/* <QuizContainer /> */}
    </QuizProvider>
  );
}

export default App;

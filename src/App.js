import React from 'react';
import QuizProvider from './context/QuizProvider'

import { Route, Routes } from 'react-router-dom';

import Error404 from './components/404/Error404'; 
import Theory from './components/theory/Theory'; 
import MainLayout from './components/layout/MainLayout';
import TestLayout from './components/layout/TestLayout';

function App() {
  return (
    <QuizProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/react_quiz/" element={() => <h5>main</h5> } />
          <Route path="/react_quiz/theory/:type" element={<Theory />} />
        </Route>
        <Route path="/react_quiz/test/:type" element={<TestLayout />} />
        <Route path="/*" element={< Error404 />} />
      </Routes>
      {/* <QuizContainer /> */}
    </QuizProvider>
  );
}

export default App;

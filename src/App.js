import React from 'react'; 
import QuizProvider from './context/QuizProvider'
import QuizContainer from './QuizContainer' 

function App() {
  return (
    <QuizProvider> 
       <QuizContainer/>
    </QuizProvider>
  );
}

export default App;

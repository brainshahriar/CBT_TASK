import React from 'react'
import Home from './components/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Question from './components/Question';
import QuestionSet from './components/QuestionSet';

const App:React.FC = ()=> {
  return (
    <>
    <div className='App'>
    <Router>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/home" element={<Home/>}/>
            <Route  path="/question" element={<Question/>}/>
            <Route  path="/questionset" element={<QuestionSet/>}/>
          </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;

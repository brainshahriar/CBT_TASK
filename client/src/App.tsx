import React from 'react'
import Home from './components/Home';
import SuperAdminHome from './components/SuperAdmin/Home';
import PricipalTestSetter from './components/PrincipalTestSetter/CreateQuestionSet'
import PricipalTestSetterHome from './components/PrincipalTestSetter/Home'
import SubPerson from './components/SubPerson/CreateQuestionSet'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Question from './components/QuestionBank/Question';
import EditQuestions from './components/QuestionBank/EditQuestions';

const App:React.FC = ()=> {
  return (
    <>
    <div className='App'>
    <Router>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/home" element={<Home/>}/>
            <Route  path="/question" element={<Question/>}/>
            <Route  path="/question/edit/:id" element={<EditQuestions/>}/>
            <Route  path="/superadmin" element={<SuperAdminHome/>}/>
            <Route  path="/principaltestsetter" element={<PricipalTestSetterHome/>}/>
            <Route  path="/principaltestsetter/create" element={<PricipalTestSetter/>}/>
            <Route  path="/subperson" element={<SubPerson/>}/>
          </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;

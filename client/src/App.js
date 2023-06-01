import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import React from 'react';
import Axios from 'axios'
import LoginPage from './pages/login/loginPage';
import LogoutPage from './pages/logout/logoutPage';
import RegisterPage from './pages/register/registerPage';
import ResultPage from './pages/result/resultPage';
import HomePage from './pages/home/homePage';
import FormPage from './pages/form/formPage';
import FeedbackPage from './pages/feedback/feedbackPage';
import FeedbackTakenPage from './pages/feedback-taken/feedbackTakenPage';


function App() {

  Axios.defaults.withCredentials = true


  return (
    <div className='App'>
      {/* hello */}
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>

          <Route path='/register' element={<RegisterPage/>}/>

          <Route path='/home' element={<HomePage/>}/>

          <Route path='/form' element={<FormPage/>}/>

          <Route path='/logout' element={<LogoutPage/>}/>
          
          <Route path='/result/:pathVariable' element={<ResultPage/>}/>
          
          
          <Route path='/feedback' element={<FeedbackPage/>}/>
          <Route path='/feedbackTaken' element={<FeedbackTakenPage/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

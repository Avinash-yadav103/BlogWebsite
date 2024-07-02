// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Strip from './components/Strip';
import MainArticle from './components/MainArticle';
import RightPanel from './components/RightPanel';


function App() {
  return (

    <>
      <div className="signin_pop">
        <p><a href="/">Signup for free download<FontAwesomeIcon icon={faArrowRight} /></a></p>
      </div>
      
      <div className='fullpage'>
        <Header />
        <Strip />
        <div className="main">
          <MainArticle main_heading="Welcome to Nook This is the nook" author="Avinash" />
          <RightPanel author="Avinash" />
        </div>
      </div>


    </>
  );
}

export default App;

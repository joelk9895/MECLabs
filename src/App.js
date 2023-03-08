import './App.css';
import React from 'react';
import Header from './components/Header';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import { Dashboard } from './pages/Dashboard';
import Signinbtn from './pages/Signin';


function App() {
  return (
    <div className="App">
      <Signinbtn/>
    </div>
  );
}

export default App;

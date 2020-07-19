import React from 'react';
import './App.css';
import Header from './componens/Header/Header';
import Navbar from './componens/Navbar/Navbar';
import Profile from './componens/Profile/Profile';
import Dialogs from './componens/Dialogs/Dialogs';
import News from './componens/News/News';
import Music from './componens/Music/Music';
import Settings from './componens/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
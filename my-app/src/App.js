import React from 'react';
import './App.css';
import Header from './componens/Header/Header';
import Navbar from './componens/Navbar/Navbar';
import Profile from './componens/Profile/Profile';
import Dialogs from './componens/Dialogs/Dialogs';
import News from './componens/News/News';
import Music from './componens/Music/Music';
import Settings from './componens/Settings/Settings';
import {Route} from "react-router-dom";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/profile' render={() => <Profile
                                                  profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}/>} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
};

export default App;
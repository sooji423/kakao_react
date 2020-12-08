import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Chat from './routes/Chat';
import Profile from './routes/Profile';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Friends} />
      <Route path="/chats" component={Chats} />
      <Route path="/find" component={Find} />
      <Route path="/more" component={More} />
      <Route path="/Chat" component={Chat} />
      <Route path="/Profile" component={Profile} />
    </HashRouter>
  );
}

export default App;

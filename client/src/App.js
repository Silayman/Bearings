import React from 'react';
import NavBar from './components/Navbar.component';
import Feed from './components/Feed.component';
import Login from './components/Login.component';
import Signup from './components/Signup.component';
import Profile from './components/Profile.component';
import CreatePost from './components/Post.component';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Route exact path="/" >
          <Feed />
        </Route>
        <Route path="/accounts/signin">
          <Login/>
        </Route>
        <Route path="/accounts/signup">
          <Signup/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/post">
          <CreatePost/>
        </Route>
    </BrowserRouter>
    
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import './App.css';
import FriendList from './components/Friends';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='login'>
          <Link to="/login">Login</Link>    
          <Link to="/protected">Other Protected Page</Link>
        </div> 
      
        <Switch>
          <PrivateRoute  path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />

        </Switch>
        <Route exact path="/add-friend" component={AddFriend} />
      </div>
    </Router>
  );
}

export default App; 
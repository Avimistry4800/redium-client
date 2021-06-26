import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/main.css'
import AddBlog from "./Components/AddBlog/AddBlog";
import Home from "./Components/Home/Home";
import ManageBlog from "./Components/ManageBlog/ManageBlog";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import Contact from "./Components/Contact/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (

<UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/addblog">
        <AddBlog/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
          <MakeAdmin/>
        </PrivateRoute>
        <PrivateRoute path="/manageBlog">
          <ManageBlog/>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>

  )};

export default App;
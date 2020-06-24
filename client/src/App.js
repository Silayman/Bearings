import React, { useEffect, createContext, useReducer, useContext } from "react";
import NavBar from "./components/Navbar.component";
import Feed from "./components/Feed.component";
import Login from "./components/Login.component";
import Signup from "./components/Signup.component";
import Profile from "./components/Profile.component";
import CreatePost from "./components/Post.component";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { UserReducer, initialState } from "./reducers/UserReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      history.push("/");
      dispatch({ type: "USER", payload: user });
    } else {
      history.push("/accounts/signin");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Feed />
      </Route>
      <Route path="/accounts/signin">
        <Login />
      </Route>
      <Route path="/accounts/signup">
        <Signup />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/post">
        <CreatePost />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

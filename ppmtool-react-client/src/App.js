import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPoject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProejctTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProejctTasks/UpdateProjectTask";
import WelcomePage from "./components/Layout/WelcomePage";
import Login from "./components/UserAuth/Login";
import Register from "./components/UserAuth/Register";
import jwt_decode from "jwt-decode";
import setJWTToken from "./components/Utils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/constants";
import { logout } from "./actions/authAction";
import AuthRoute from "./components/Utils/AuthRoute";

const jwtToken = localStorage.getItem("jwtToken");
if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwt = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwt,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwt.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            {
              //Public Routes
            }
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {
              //Private Routes
            }
            <Switch>
              <AuthRoute exact path="/dashboard" component={Dashboard} />
              <AuthRoute exact path="/addProject" component={AddPoject} />
              <AuthRoute
                exact
                path="/updateProject/:id"
                component={UpdateProject}
              />
              <AuthRoute exact path="/projectBoard/:id" component={ProjectBoard} />
              <AuthRoute
                exact
                path="/addProjectTask/:id"
                component={AddProjectTask}
              />
              <AuthRoute
                exact
                path="/updateProjectTask/:backlog_id/:pt_id"
                component={UpdateProjectTask}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

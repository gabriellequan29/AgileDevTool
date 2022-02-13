import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddPoject from "./components/Project/AddProject"
import { Provider } from "react-redux"
import store from './store';
import UpdateProject from './components/Project/UpdateProject';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import AddProjectTask from './components/ProjectBoard/ProejctTasks/AddProjectTask';
import UpdateProjectTask from './components/ProjectBoard/ProejctTasks/UpdateProjectTask';
import WelcomePage from './components/Layout/WelcomePage';
import Login from './components/UserAuth/Login';
import Register from './components/UserAuth/Register';

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
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddPoject} />
            <Route exact path="/updateProject/:id" component={UpdateProject} />
            <Route exact path="/projectBoard/:id" component={ProjectBoard}/>
            <Route exact path="/addProjectTask/:id" component={AddProjectTask}/>
            <Route exact path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateProjectTask}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

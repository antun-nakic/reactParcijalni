import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import Aplikacija from "./containers/Aplikacija";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Routes>
            <Route
              path='/'
              element={
                this.props.login == null ? (
                  <Login />
                ) : (
                  <Navigate replace to='/app' />
                )
              }
            />
            <Route path='/app' element={<Aplikacija />}></Route>
          </Routes>
        </Container>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);

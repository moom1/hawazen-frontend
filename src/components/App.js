import React, { Component, Fragment } from "react";
import Login from "./Login";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logout from "./Logout";
import Home from "./Home";
import firebase from "../utils/firebase";
import Register from "./Register";

class App extends Component {
  state = {
    users: [],
    loading: true,
    user: null,
  };
  componentDidMount() {
    this.setUsers();
  }

  setUsers = () => {
    const ref = firebase.firestore().collection("users");
    this.setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      this.setState({ users: items });
      this.setLoading(false);
      console.log(items);
    });
  };

  setLoading = (bool) => {
    this.setState({ loading: bool });
  };

  setUser = (loggedUser) => {
    console.log("inside on login");
    console.log("user", loggedUser);
    this.setState({ user: loggedUser });
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <Router>
        <Fragment>
          {/* <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} /> */}

          <div className="container">
            <Switch>
              <Route
                exact
                path="/login"
                render={(history) => (
                  <Login users={this.state.users} onLogin={this.setUser} />
                )}
              />

              <Route
                exact
                path="/home"
                render={(history) => <Home user={this.state.user} />}
              />

              <Route path="/logout" exact component={logout} />
              <Route path="/register" exact component={Register} />

              <Route
                exact
                path="/"
                render={() => <ErrorPage user={this.state.user} />}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;

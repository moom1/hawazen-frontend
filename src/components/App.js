import React, { Component, Fragment } from "react";
import Login from "./Login";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logout from "./Logout";
import Home from "./Home";
import firebase from "../utils/firebase";
import Register from "./Register";
import SearchResult from "./SearchResult";
import Payment from "./Payment";
import Complete from "./Complete";

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
    });
  };

  setLoading = (bool) => {
    this.setState({ loading: bool });
  };

  setUser = (loggedUser) => {
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
              <Route
                exact
                path="/result/:checkInDate/:checkOutDate/:priceMultiplier"
                render={(props) => (
                  <SearchResult
                    user={this.state.user}
                    priceMultiplier={props.match.params.priceMultiplier}
                    checkInDate={props.match.params.checkInDate}
                    checkOutDate={props.match.params.checkOutDate}
                  />
                )}
              />

              <Route
                exact
                path="/result/:checkInDate/:checkOutDate/:priceMultiplier/payment/:roomID"
                render={(props) => (
                  <Payment
                    user={this.state.user}
                    priceMultiplier={props.match.params.priceMultiplier}
                    checkInDate={props.match.params.checkInDate}
                    checkOutDate={props.match.params.checkOutDate}
                    roomId={props.match.params.roomID}
                  />
                )}
              />
              <Route
                exact
                path="/complete/:checkInDate/:checkOutDate/:priceMultiplier/:roomID/:name"
                render={(props) => (
                  <Complete
                    name={props.match.params.name}
                    nights={props.match.params.priceMultiplier}
                    checkInDate={props.match.params.checkInDate}
                    checkOutDate={props.match.params.checkOutDate}
                    roomId={props.match.params.roomID}
                  />
                )}
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

import React, { Component } from "react";
import { Redirect } from "react-router";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import Reservations from "./Reservations";

import { CardDeck } from "react-bootstrap";

export default class Home extends Component {
  render() {
    if (this.props.user === null) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div>
        <Nav user={this.props.user} />
        <CardDeck>
          <Reservations user={this.props.user} />
          <SearchForm />
        </CardDeck>
      </div>
    );
  }
}

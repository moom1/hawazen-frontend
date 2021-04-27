import React, { Component } from "react";
import { Redirect } from "react-router";
import Nav from "./Nav";
import SearchForm from "./SearchForm";

export default class Home extends Component {
  render() {
    if (this.props.user === null) {
      return (
        <Redirect to={{ pathname: "/login", state: { redirect: "/home" } }} />
      );
    }
    return (
      <div>
        <Nav user={this.props.user} />
        <SearchForm />
      </div>
    );
  }
}

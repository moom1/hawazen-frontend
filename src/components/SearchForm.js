import React, { Component } from "react";
import { withRouter } from "react-router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SearchForm extends Component {
  state = {
    email: "",
    password: "",
    toHome: false,
  };

  handleEmail = (e) => {
    this.setState(() => ({
      email: e.target.value,
    }));
  };

  handlePassword = (e) => {
    this.setState(() => ({
      password: e.target.value,
    }));
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState(() => ({
      toHome: true,
    }));

    let page = "/home";

    return this.props.history.push(page);
  };
  render() {
    const { email, password } = this.state;
    return (
      <Card className="center">
        <Card.Body>
          <Card.Header>Let's Start The Journey</Card.Header>

          <div>
            <span className="h2" style={{ color: "#00C8FF" }}>
              {" "}
              Check in
            </span>
          </div>

          <form className="d-block my-2" onSubmit={this.handleLogin}>
            <div className="my-2">
              <input
                className=""
                type="date"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleEmail}
              />
            </div>
          </form>

          <div>
            <span className="h2" style={{ color: "#00C8FF" }}>
              {" "}
              Check Out
            </span>
          </div>

          <form className="d-block my-2" onSubmit={this.handleLogin}>
            <div className="my-2">
              <input
                className=""
                type="date"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleEmail}
              />
            </div>

            <Button
              variant="primary"
              type="submit"
              disabled={email === "" || password === "" ? true : false}
            >
              Check Availability
            </Button>
          </form>
        </Card.Body>
      </Card>
    );
  }
}

export default withRouter(SearchForm);

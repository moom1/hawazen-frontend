import React, { Component } from "react";

import { Redirect } from "react-router";
import firebase from "../utils/firebase";
import Nav from "./Nav";
import Room from "./Room";

export default class SearchResult extends Component {
  render() {
    const { rooms } = this.props;
    const { user, priceMultiplier, checkInDate, checkOutDate } = this.props;
    if (this.props.user === null) {
      return <Redirect to={{ pathname: "/login" }} />;
    }

    return (
      <div>
        <Nav user={user} />
        {rooms.map((room) => {
          return (
            <Room
              key={room.title}
              room={room}
              priceMultiplier={priceMultiplier}
              checkInDate={checkInDate}
              checkOutDate={checkOutDate}
            />
          );
        })}
      </div>
    );
  }
}

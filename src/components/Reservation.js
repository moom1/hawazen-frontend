import React, { Component } from "react";

export default class Reservation extends Component {
  render() {
    const { reservation } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {reservation.room}
        <span className="badge badge-primary badge-pill">
          In: {reservation.checkInDate}
        </span>
        <span className="badge badge-primary badge-pill">
          Out: {reservation.checkOutDate}
        </span>

        <span className="badge badge-primary badge-pill">
          {reservation.Nights} {reservation.Nights > 1 ? "nights" : "night"}
        </span>
      </li>
    );
  }
}

import { Component } from "react";
import SeatLayout from "../SeatLayout";
import "./index.css";

class Seat extends Component {
  render() {
    return (
      <div className="home-seat-container">
        <div className="ticket-container">
          <div className="ticket-types">
            <label htmlFor="ticketType" className="selector-title">
              Ticket type:
            </label>
            <select id="ticketType" className="selector-type">
              <option selected>Ticket Type</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
          <div className="Quantity">
            <label htmlFor="quantity" className="selector-title">
              Quantity:
            </label>
            <select id="quantity" className="quantity-selector">
              <option selected>Qty</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
        </div>
        <SeatLayout/>
      </div>
    );
  }
}

export default Seat;

import { Component } from "react";
import SeatLayout from "../SeatLayout";
import "./index.css";

class Seat extends Component {
  state = { ticketType: "", quantity: "" };

  onSelect = (event) => {
    this.setState({ quantity: event.target.value });
  };

  render() {
    const { ticketType, quantity } = this.state;

    return (
      <div className="home-seat-container">
        <div className="ticket-container">
          <div className="ticket-types">
            <label htmlFor="ticketType" className="selector-title">
              Ticket type:
            </label>
            <select id="ticketType" className="selector-type">
              <option>Ticket Type</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>
          </div>
          <div className="Quantity">
            <label htmlFor="quantity" className="selector-title">
              Quantity:
            </label>
            <select
              id="quantity"
              className="quantity-selector"
              onClick={this.onSelect}
            >
              <option>Qty</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
          </div>
        </div>
        <SeatLayout  quantity={quantity}/>
        <button type="submit" className="proceed-btn">
          PROCEED
        </button>
      </div>
    );
  }
}

export default Seat;

import { Component } from "react";
import "./index.css";

class SeatLayout extends Component {

  onSelect = (event) => {
    const { quantity } = this.props;
    console.log(event.target.count)
    if (quantity > 0) {
      if (event.target.count === quantity) {
        if (event.target.className === "seat") {
          event.target.className = "seat-color";
        }
      } else {
        alert("your selected over the selected quantity");
      }
    } else {
      alert("Please select the number of seats");
    }
  };

  render() {
    return (
      <>
        <div className="seat-container-page">
          <div className="container">
            <div className="row">
              <p>A</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>B</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>C</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>D</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>E</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>F</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>G</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>H</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>I</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>J</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>K</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>L</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>M</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>N</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>O</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>P</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>Q</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>R</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>S</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>T</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>U</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>V</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>W</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>X</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>Y</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
            <div className="row">
              <p>Z</p>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
              <div className="seat" onClick={this.onSelect}></div>
            </div>
          </div>
          <div className="types-of-seat-container">
            <p className="seat-layout">Key to Seat Layout: </p>
            <ul id="seatAvailablity" className="layouts">
              <li className="type-seats">
                <div className="available-seat"></div>
                <p>Available</p>
              </li>
              <li className="type-seats">
                <div className="unavailable-seat"></div>
                <p>Unavailable</p>
              </li>
              <li className="type-seats">
                <div className="your-selection-seat"></div>
                <p>Your Selection</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default SeatLayout;

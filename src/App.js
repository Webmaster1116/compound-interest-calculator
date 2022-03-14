import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

class App extends Component {
  state = {
    fields: {},
  };

  onChange = (updatedValue) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      },
    });
  };

  render() {
    let percentage = 12;
    let daily_rate = 1 + 0.12 / 365;
    let month_rate = Math.pow(daily_rate, 30);
    let year_rate = Math.pow(daily_rate, 365);
    if (
      this.state.fields.currency == "2" ||
      this.state.fields.currency == "3"
    ) {
      percentage = 8;
      daily_rate = 1 + 0.08 / 365;
      month_rate = Math.pow(daily_rate, 30);
      year_rate = Math.pow(daily_rate, 365);
    } else {
      percentage = 12;
    }
    let amount = 1000;
    if (!this.state.fields.amount) {
      amount = 1000;
    } else {
      amount = this.state.fields.amount;
    }

    return (
      <div className="App">
        <Form onChange={(fields) => this.onChange(fields)} />
        <p className="content">
          {/* {JSON.stringify(this.state.fields, null, 2)} */}

          <div>Percentage: {percentage}%</div>
          <div>yield per day: {amount * daily_rate}</div>
          <div>
            yield per month:
            {amount * month_rate}
          </div>
          <div>
            yield per year:
            {amount * year_rate}
          </div>
        </p>
      </div>
    );
  }
}

export default App;

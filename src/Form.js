import React from "react";
import { Input, InputLabel, Select, MenuItem } from "@material-ui/core";

export default class Form extends React.Component {
  state = {
    amount: 1000,
    currency: "1",
  };

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="calculate_form">
        <div className="input-group">
          <InputLabel>Amount: </InputLabel>
          <Input
            name="amount"
            placeholder="Amount"
            type="number"
            value={this.state.amount}
            onChange={(e) => this.change(e)}
          />
        </div>
        <div className="input-group currency-group">
          <InputLabel>Currency: </InputLabel>
          <Select
            className="currency"
            defaultValue={1}
            name="currency"
            onChange={(e) => this.change(e)}
          >
            <MenuItem value="1">USDA</MenuItem>
            <MenuItem value="2">BTC</MenuItem>
            <MenuItem value="3">ETH</MenuItem>
          </Select>
        </div>
      </form>
    );
  }
}

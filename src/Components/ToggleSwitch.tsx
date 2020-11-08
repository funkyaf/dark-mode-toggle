import React, { Component } from "react";
import './ToggleSwitch.css';

interface ToggleProps {
    Name?: string;
    OnChange?: () => any;
}
interface ToggleState {
}

export default class ToggleSwitch extends Component<ToggleProps, ToggleState> {
  render() {
    return (
      <div className="toggle-switch">
        <label className="toggle-switch-label" htmlFor={this.props.Name}>
            <input
            type="checkbox"
            className="toggle-switch-checkbox"
            name={this.props.Name}
            id={this.props.Name}
            onChange={this.props.OnChange}
            />
            <span className="slider round"></span>
        </label>
      </div>
    );
  }
}

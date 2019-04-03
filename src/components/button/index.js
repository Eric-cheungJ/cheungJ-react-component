import React from "react";
import { Component } from "../libs";

export default class Button extends Component {
  onClick = () => {};

  render() {
    return (
      <button
        style={this.style()}
        className={this.className(
          "el-button",
          this.props.type && `el-button--${this.props.type}`,
          this.props.size && `el-button--${this.props.size}`,
          {
            "is-disabled": this.props.disabled,
            "is-loading": this.props.loading,
            "is-plain": this.props.plain
          }
        )}
        disabled={this.props.disabled}
        type={this.props.nativeType}
        onClick={this.onClick.bind(this)}
      >
        <span>{this.props.children}</span>
      </button>
    );
  }
}

Button.defaultProps = {
  type: "default",
  nativeType: "button",
  loading: false,
  disabled: false,
  plain: false
};

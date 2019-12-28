import React, { Component } from "react";

class Robot extends Component {
  // add event
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // Cach 2
  handleClick2 = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  sayHello() {
    alert("hello");
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <div className="caption">
              <h3>{this.props.title}</h3>
              <p>{this.props.name}</p>
              <p>{this.state.isToggleOn ? "ON" : "OFF"}</p>
              <p>
                <a className="btn btn-primary" onClick={this.sayHello}>
                  {this.props.children} SAY HELLO
                </a>
                <a className="btn btn-default" onClick={this.handleClick}>
                  Action
                </a>
                <a className="btn btn-default" onClick={this.handleClick2}>
                  Action2
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Robot;

import React, { Component } from "react";

class Robot extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="thumbnail">
            <div className="caption">
              <h3>{this.props.title}</h3>
              <p>{this.props.name}</p>
              <p>
                <a className="btn btn-primary">{this.props.children}</a>
                <a className="btn btn-default">Action</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Robot;

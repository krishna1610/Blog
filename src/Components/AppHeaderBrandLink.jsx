import React from "react";

class AppHeaderBrandLink extends React.Component {
  render() {
    return (
      <div className={`col-4 ${this.props.divClassName}`}>
        <a className={this.props.linkClassName} href="#">
          {this.props.name}
        </a>
      </div>
    );
  }
}

export default AppHeaderBrandLink;

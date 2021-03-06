import React from "react";

class AppBodyLink extends React.Component {
  render() {
    return (
      <li>
        <a href="#">{this.props.link}</a>
      </li>
    );
  }
}

export default AppBodyLink;

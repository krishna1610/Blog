import React from "react";

class AppHeaderLink extends React.Component {
  render() {
    return (
      <a className="p-2 link-secondary" href="#">
        {this.props.linkName}
      </a>
    );
  }
}

export default AppHeaderLink;

import React from "react";
import AppHeaderBrand from "./AppHeaderBrand";
import AppHeaderLink from "./AppHeaderLink";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        "World",
        "U.S.",
        "Technology",
        "Design",
        "Culture",
        "Business",
        "Politics",
        "Opinion",
        "Science",
        "Health",
        "Style",
        " Travel",
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <AppHeaderBrand />
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            {this.state.links.map((linkName, index) => {
              return <AppHeaderLink key={index} linkName={linkName} />;
            })}
          </nav>
        </div>
      </div>
    );
  }
}

export default AppHeader;

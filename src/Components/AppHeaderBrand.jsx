import React from "react";
import AppHeaderBrandLink from "./AppHeaderBrandLink";
import AppHeaderSearch from "./AppHeaderSearch";

class AppHeaderBrand extends React.Component {
  render() {
    return (
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <AppHeaderBrandLink
            name="Subscribe"
            divClassName="pt-1"
            linkClassName="link-secondary"
          />
          <AppHeaderBrandLink
            name="Large"
            divClassName="text-center"
            linkClassName="blog-header-logo text-dark"
          />
          <AppHeaderSearch />
        </div>
      </header>
    );
  }
}

export default AppHeaderBrand;

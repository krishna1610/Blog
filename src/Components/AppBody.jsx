import React from "react";
import AppBodyCards from "./AppBodyCards";
import AppBodyContent from "./AppBodyContent";
import AppBodyIntro from "./AppBodyIntro";
import AppBodyLinks from "./AppBodyLinks";

class AppBody extends React.Component {
  render() {
    return (
      <main className="container">
        <AppBodyIntro
          heading="Title of a longer featured blog post"
          linkName="Continue reading..."
        />
        <AppBodyCards />
        <div className="row">
          <AppBodyContent />
          <AppBodyLinks />
        </div>
      </main>
    );
  }
}

export default AppBody;

import React from "react";
import AppBodyCard from "./AppBodyCard";

class AppBodyCards extends React.Component {
  render() {
    return (
      <div className="row mb-2">
        <AppBodyCard
          title="World"
          titleClassName="text-primary"
          heading="Featured post"
          postedDate="Nov 12"
        />
        <AppBodyCard
          title="Design"
          titleClassName="text-success"
          heading="Post title"
          postedDate="Nov 11"
        />
      </div>
    );
  }
}

export default AppBodyCards;

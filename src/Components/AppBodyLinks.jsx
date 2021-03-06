import React from "react";
import AppBodyLink from "./AppBodyLink";

class AppBodyLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [
        "March 2014",
        "February 2014",
        "January 2014",
        "December 2013",
        "November 2013",
        "October 2013",
        "September 2013",
        "August 2013",
        "July 2013",
        "June 2013",
        "May 2013",
        "April 2013",
      ],
      socialMediaLinks: ["GitHub", "Twitter", "Facebook"],
    };
  }
  render() {
    return (
      <div className="col-md-4">
        <div className="p-4 mb-3 bg-light rounded">
          <h4 className="fst-italic">About</h4>
          <p className="mb-0">
            Saw you downtown singing the Blues. Watch you circle the drain. Why
            don't you let me stop by? Heavy is the head that{" "}
            <em>wears the crown</em>. Yes, we make angels cry, raining down on
            earth from up above.
          </p>
        </div>

        <div className="p-4">
          <h4 className="fst-italic">Archives</h4>
          <ol className="list-unstyled mb-0">
            {this.state.dates.map((date, index) => {
              return <AppBodyLink key={index} link={date} />;
            })}
          </ol>
        </div>

        <div className="p-4">
          <h4 className="fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
            {this.state.socialMediaLinks.map((socialMediaLink, index) => {
              return <AppBodyLink key={index} link={socialMediaLink} />;
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default AppBodyLinks;

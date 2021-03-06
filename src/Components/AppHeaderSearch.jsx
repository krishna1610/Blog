import React from "react";

class AppHeaderSearch extends React.Component {
  render() {
    return (
      <div className="col-4 d-flex justify-content-end align-items-center">
        <a className="link-secondary" href="#" aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="mx-3"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Search</title>
            <circle cx="10.5" cy="10.5" r="7.5"></circle>
            <path d="M21 21l-5.2-5.2"></path>
          </svg>
        </a>
        <a className="btn btn-sm btn-outline-secondary" href="#">
          Sign up
        </a>
      </div>
    );
  }
}

export default AppHeaderSearch;

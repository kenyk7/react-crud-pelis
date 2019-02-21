import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Sidebar from "./Sidebar";

const propTypes = {
  children: PropTypes.element
};

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="wrapper__sidebar">
          <Sidebar />
        </div>
        <main className="wrapper__main">{children}</main>
      </div>
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;

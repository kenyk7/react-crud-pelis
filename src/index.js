import React from "react";
import ReactDOM from "react-dom";

import Layout from "./layout";
import Home from "./home";

import "./main.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

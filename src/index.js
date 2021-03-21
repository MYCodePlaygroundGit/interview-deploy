import React from "react";
import ReactDom from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import Layout from "antd/lib/layout/layout";

ReactDom.render(
  <Layout style={{ width: "100%" }}>
    <App />
  </Layout>,
  document.getElementById("root")
);

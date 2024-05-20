import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout.js";
import DataProvider from "./hoc/DataContext.js";

function App() {
  return (
    <DataProvider>
      <Layout></Layout>
    </DataProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import DataProvider from "./hoc/DataContext";

function App() {
  return (
    <DataProvider>
      <Layout></Layout>
    </DataProvider>
  );
}

export default App;

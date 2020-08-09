import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import Memes from "./components/Pages/Memes/Memes";
import About from "./components/Pages/About/About";
import MemeGeneratorPage from "./components/Pages/MemeGeneratorPage/MemeGeneratorPage";

import { MemeTemplatesProvider } from "./contexts/MemeTemplatesContext";
import { MemeGeneratorProvider } from "./contexts/MemeGeneratorContext";

const App = () => {
  return (
    <MemeGeneratorProvider>
      <MemeTemplatesProvider>
        <Router>
          <div className="App">
            <Layout>
              <Switch>
                <Route path="/create-a-meme">
                  <MemeGeneratorPage />
                </Route>
                <Route path="/templates">
                  <Memes />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Layout>
          </div>
        </Router>
      </MemeTemplatesProvider>
    </MemeGeneratorProvider>
  );
};

export default App;

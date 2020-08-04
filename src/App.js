import React from "react";
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
      <Router>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/create-a-meme">
                <MemeTemplatesProvider>
                  <MemeGeneratorPage />
                </MemeTemplatesProvider>
              </Route>
              <Route path="/templates">
                <MemeTemplatesProvider>
                  <Memes />
                </MemeTemplatesProvider>
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
    </MemeGeneratorProvider>
  );
};

export default App;

import React, { useEffect, useMemo, useState } from "react";
import Gallery from "./components/gallery/Gallery";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";
import Landing from "./components/landing/Landing";
import { useMoralis } from "react-moralis";
const App = () => {
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/" element={<Landing />} />
                    <Route exact path="/gallery" element={<Gallery />} />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default App;

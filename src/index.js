import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider, useMoralis } from "react-moralis";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "./styles/index.css";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import ConnectWallet from "./components/wallet/ConnectWallet";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";
import Gallery from "./components/gallery/Gallery";

// Include what chains you wanna support.
// 4 = Rinkeby.
const supportedChainIds = [4];

// Include what type of wallet you want to support.
// In this case, we support Metamask which is an "injected wallet".
const connectors = {
    injected: {},
};

// Used for connecting to Moralis so we can pull user NFTs. I left these here without using environment variables
// so you guys can test (not secure). I can generate a new SERVER_URL and APP_ID at any time
const SERVER_URL = "https://54dz9wfocpu0.usemoralis.com:2053/server";
const APP_ID = "UMnyq2Mr8Gr4gBqsg8xzfGOXuajilRxFojia5tHM";

// Finally, wrap App with the MoralisProvider and the ThirdwebWeb3Provider
ReactDOM.render(
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <ThirdwebWeb3Provider
            connectors={connectors}
            supportedChainIds={supportedChainIds}
        >
            <Router>
                <Switch>
                    <Route path="/" element={<Landing />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="*" element={<h1>Page not found!</h1>} status={404} />
                </Switch>
            </Router>
        </ThirdwebWeb3Provider>
    </MoralisProvider>,
    document.getElementById("root")
);

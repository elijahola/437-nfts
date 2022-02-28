import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider, useMoralis } from "react-moralis";

// Import ThirdWeb
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

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
    <React.StrictMode>
        <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
            <ThirdwebWeb3Provider
                connectors={connectors}
                supportedChainIds={supportedChainIds}
            >
                <App />
            </ThirdwebWeb3Provider>
        </MoralisProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

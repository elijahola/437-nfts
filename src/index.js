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

// Used for
const SERVER_URL = "https://54dz9wfocpu0.usemoralis.com:2053/server";
const APP_ID = "UMnyq2Mr8Gr4gBqsg8xzfGOXuajilRxFojia5tHM";

const isServerInfo = APP_ID && SERVER_URL ? true : false;

// Finally, wrap App with ThirdwebWeb3Provider.
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <ThirdwebWeb3Provider
          connectors={connectors}
          supportedChainIds={supportedChainIds}
        >
          <App isServerInfo />
        </ThirdwebWeb3Provider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

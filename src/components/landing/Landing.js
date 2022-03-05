import React, { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import Gallery from "../gallery/Gallery";
import { Navigate as Redirect } from "react-router";
import { useMoralis } from "react-moralis";
import Navbar from "../navbar/Navbar";

const Landing = () => {
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, user, Moralis } =
    useMoralis();
    const [address, setAddress] = useState();

    useEffect(() => {
        const connectorId = window.localStorage.getItem("connectorId");
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
            enableWeb3({ provider: connectorId });
    }, [isAuthenticated, isWeb3Enabled]);

    useEffect(() => {
        if (isAuthenticated) {
            setAddress(user.attributes.ethAddress);
        }
      }, [isAuthenticated]);

    // This is the case where we have the user's address
    // which means they've connected their wallet to our site!
    return (
        <React.Fragment>
            <Navbar />
            <div>
                {!address ? "Loading wallet details..."
                : <p>Landing</p>}
            </div>
        </React.Fragment>
    );
};

export default Landing;

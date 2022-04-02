import React, { useEffect, useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import Navbar from "../navbar/Navbar";
import { useWeb3 } from "@3rdweb/hooks";

const Landing = () => {
    const {
        isWeb3Enabled,
        enableWeb3,
        isAuthenticated,
        isWeb3EnableLoading,
        user,
    } = useMoralis();

    // Makes sure user's wallet is connected
    useEffect(() => {
        const connectorId = window.localStorage.getItem("connectorId");
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
            enableWeb3({ provider: connectorId });
    }, [isAuthenticated, isWeb3Enabled]);

    // // Once authenticated, update address state
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         setAddress(user.attributes.ethAddress);
    //     }
    // }, [isAuthenticated]);

    const { connectWallet, address, error, provider } = useWeb3();
    //address = 0x7430Cb27C5E43d954030b0843d471203D88a2785
    if (!address) {
        return (
            <div className="landing">
                <h1>Welcome to Our NFT Analytics</h1>
                <button
                    onClick={() => connectWallet("injected")}
                    className="btn-hero"
                >
                    Connect your wallet
                </button>
            </div>
        );
    }

    return (
        <React.Fragment>
            <Navbar />
            <div>Landing page</div>
        </React.Fragment>
    );
};

export default Landing;

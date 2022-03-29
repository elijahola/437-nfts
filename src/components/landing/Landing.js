import React, { useEffect, useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import Navbar from "../navbar/Navbar";
import { useWeb3 } from "@3rdweb/hooks";
import Hero from "../hero/hero";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "../../styles/landing/landing.css";

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

    if (!address) {
        return (
            <div className="landing">
                <div className="logodiv">
                <Logo className="logo" />
                </div>
                
                <h3 className="landingtext">Show off your gallery to the metaverse! </h3>
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
        <div>
            <Navbar />
            <br></br>
            <Hero/>
        </div>
    );
};

export default Landing;

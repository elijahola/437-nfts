import React, { useEffect, useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import Navbar from "../navbar/Navbar";

const Landing = () => {
    const {
        isWeb3Enabled,
        enableWeb3,
        isAuthenticated,
        isWeb3EnableLoading,
        user,
    } = useMoralis();
    const [address, setAddress] = useState("");

    // Makes sure user's wallet is connected
    useEffect(() => {
        const connectorId = window.localStorage.getItem("connectorId");
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
            enableWeb3({ provider: connectorId });
    }, [isAuthenticated, isWeb3Enabled]);

    // Once authenticated, update address state
    useEffect(() => {
        if (isAuthenticated) {
            setAddress(user.attributes.ethAddress);
        }
    }, [isAuthenticated]);

    return (
        <React.Fragment>
            <Navbar />
            <div>
                Landing page
            </div>
        </React.Fragment>
    );
};

export default Landing;

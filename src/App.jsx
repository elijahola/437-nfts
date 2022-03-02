import { useEffect, useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import { useWeb3 } from "@3rdweb/hooks";
import Gallery from "./components/gallery/Gallery";

const App = () => {
    // pulls relevant Moralis state objects from Moralis hook
    const { Moralis } = useMoralis();

    // Use the connectWallet hook thirdweb gives us.
    const { connectWallet, address, error, provider } = useWeb3();
    console.log("(App.jsx) 👋 Address:", address);

    // This is the case where the user hasn't connected their wallet
    // to your web app. Let them call connectWallet.
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

    // This is the case where we have the user's address
    // which means they've connected their wallet to our site!
    return (
        <div className="landing">
            <Gallery address={address} />
        </div>
    );
};

export default App;

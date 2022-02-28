import { useEffect, useMemo, useState } from "react";
import { useMoralis } from "react-moralis";

// import thirdweb
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
    // pulls relevant Moralis state objects from Moralis hook
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
        useMoralis();

    // Makes sure Web3 for Moralis is on
    useEffect(() => {
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
            enableWeb3();
    }, [isAuthenticated, isWeb3Enabled]);

    // Get relevant Moralis state objects from Moralis hook
    const { web3, Moralis, user } = useMoralis();

    // Use the connectWallet hook thirdweb gives us.
    const { connectWallet, address, error, provider } = useWeb3();
    console.log("👋 Address:", address);

    // Grab all NFTs from a user's wallet and print them to the console
    Moralis.Web3API.account
        .getNFTs({
            chain: "rinkeby",
            address: address,
        })
        .then((polygonNFTs) => console.log(polygonNFTs));

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
            <h1>👀 wallet connected, now what!</h1>
        </div>
    );
};

export default App;

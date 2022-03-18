import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import "../../styles/gallery/Gallery.css";
import GalleryRow from "./GalleryRow";
import Navbar from "../navbar/Navbar";
import { useWeb3 } from "@3rdweb/hooks";

const Gallery = () => {
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
        useMoralis();
    const { Moralis, user } = useMoralis();
    const [nfts, setNfts] = useState([]);

    // Grabs all ERC-1155 and ERC-721 NFTs associated
    // with the user's wallet on the rinkeby network
    const getNFTs = async (address) => {
        const nfts = await Moralis.Web3API.account.getNFTs({
            chain: "rinkeby",
            address: address,
        });
        return nfts;
    };

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

    // Calls getNFTs when the component is mounted
    // and updates nfts state with fetched NFTs
    useEffect(() => {
        let mounted = true;
        getNFTs(address).then((nfts) => {
            if (mounted) {
                const groupedNFTs = [];
                let temp = [];
                // Organizes NFTs in groups of 3
                nfts.result.forEach((nft, i) => {
                    if (i != 0 && i % 3 == 0) {
                        groupedNFTs.push(temp);
                        temp = [];
                    }
                    temp.push(nft);
                });

                groupedNFTs.push(temp);
                // Update NFTs state with the grouped NFTs
                setNfts(groupedNFTs);
            }
        });
        return () => (mounted = false);
    }, [address]);

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
            <div className="gallery-wrapper">
                <h1>Gallery</h1>
                <div className="gallery">
                    {address
                        ? nfts.map((nftGroup, i) => {
                              return <GalleryRow nfts={nftGroup} key={i} />;
                          })
                        : "No address found..."}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Gallery;

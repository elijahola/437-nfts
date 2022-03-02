import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import GalleryNFT from "./GalleryNFT";

const Gallery = (address) => {
    const { Moralis } = useMoralis();
    const [nfts, setNfts] = useState([]);

    // Grabs all ERC-115 and ERC-721 NFTs associated
    // with the user's wallet on the rinkeby network
    const getNFTs = async (address) => {
        const nfts = await Moralis.Web3API.account.getNFTs({
            chain: "rinkeby",
            address: address,
        });
        return nfts;
    };

    // Calls getNFTs when the component is mounted
    // and updates nfts state with fetched NFTs
    useEffect(() => {
        let mounted = true;
        getNFTs().then((nfts) => {
            if (mounted) {
                setNfts(nfts.result);
                console.log(nfts);
            }
        });
        return () => (mounted = false);
    }, []);

    return (
        <div>
            <h1>Gallery</h1>
            {
                // Iterate through the nfts and render a GalleryNFT
                // component
                nfts.map((nft, i) => {
                    // pass in the current NFT into GalleryNFT
                    return <GalleryNFT nft={nft} key={i} />;
                })
            }
        </div>
    );
};

export default Gallery;

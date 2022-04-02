import React from "react";
import "../../styles/gallery/Gallery.css";
// import { useMoralis } from "react-moralis";
// import { useMoralisWeb3Api } from "react-moralis";





const GalleryNFT = (nft) => {

//     const Web3Api = useMoralisWeb3Api();

// const fetchNFTMetadata = async () => {
//   const options = {
//     address: Moralis.User.current().get("ethAddress"),
//     chain: "rinkeby",
//   };
//   const metaData = await Web3Api.token.getNFTMetadata(options);
//   console.log(metaData);
// };

    let metadata = {};

    if (nft.nft.hasOwnProperty(metadata)) {
        metadata = JSON.parse(nft.nft.metadata);
    }

    const name =
        metadata.hasOwnProperty("name") === true
            ? metadata["name"]
            : "No name found!";
    const description =
        metadata.hasOwnProperty("description") === true
            ? metadata["description"]
            : "No description found!";
    const image =
        metadata.hasOwnProperty("image") === true ? metadata["image"] : "";

    return (
        <div className="gallery-nft">
             <img className = "gallery-nft-image" src={metadata[image]} />
            <p className = "gallery-nft-name">{metadata[name]}</p>
        </div>
    );
};

export default GalleryNFT;

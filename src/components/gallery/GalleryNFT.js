import React from "react";

const GalleryNFT = (nft) => {
    const metadata = JSON.parse(nft.nft.metadata);
    console.log("GalleryNFT metadata:\n", metadata);

    return (
        <div>
            {/* <img src={metadata["image"]} /> */}
            <p>{metadata["name"]}</p>
            <p>{metadata["description"]}</p>
        </div>
    );
};
export default GalleryNFT;

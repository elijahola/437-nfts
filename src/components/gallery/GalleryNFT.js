import React from "react";
import "../../styles/gallery/Gallery.css";

const GalleryNFT = (nft) => {
    if (nft.nft.metadata === null) {
        return "";
    }
    const metadata = JSON.parse(nft.nft.metadata);
    console.log("HELLO WORLD", nft.nft)
    return (
        <div className="gallery-nft">
            <img className = "gallery-nft-image" src={metadata["image"]} />
            <p className = "gallery-nft-name">{metadata["name"]}</p>
            {/* <p>{metadata["description"]}</p> */}
            
        </div>
    );
};

export default GalleryNFT;

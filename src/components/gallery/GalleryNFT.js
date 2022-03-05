import React from "react";
import "../../styles/gallery/Gallery.css";

const GalleryNFT = (nft) => {
    const metadata = JSON.parse(nft.nft.metadata);

    return (
        <div className="gallery-nft">
            <img src={metadata["image"]} />
            <p>{metadata["name"]}</p>
            {/* <p>{metadata["description"]}</p> */}
            
        </div>
    );
};

export default GalleryNFT;

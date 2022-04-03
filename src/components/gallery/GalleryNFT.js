import React from "react";
import "../../styles/gallery/Gallery.css";

const GalleryNFT = (nft) => {
    let metadata = {};

    if (nft !== null && nft.nft !== null && nft.nft.metadata !== null) {
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
            <img src={image} />
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
};

export default GalleryNFT;

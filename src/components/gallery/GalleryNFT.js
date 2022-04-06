import React from "react";
import "../../styles/gallery/Gallery.css";
import noimage from "../../assets/noimage.png"
import { getTokenUri } from "@3rdweb/sdk";

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

    
    
    
    let image =
        metadata.hasOwnProperty("image") === true ? metadata["image"] : noimage;
    //console.log(image);

    if(image.charAt(0) == "i"){
        const i = "https://ipfs.io/ipfs/"
        const newUrl = image.slice(7);
        const combine = i + newUrl;
        image = encodeURI(combine);     
    }
    
    return (
        <div className="gallery-nft">
            <img src={image} />
            <p>{name}</p>
            <p>{description}</p>
        </div>
    );
};

export default GalleryNFT;

import GalleryNFT from "./GalleryNFT";
import "../../styles/gallery/Gallery.css";

const GalleryRow = (nfts) => {

    return (
        <div className="gallery-nft-row">
            {
                nfts.nfts.map((nft, i) => {
                    return <GalleryNFT nft={nft} key={i}/>
                })
            }
        </div>
    );
};

export default GalleryRow;

import React from "react";
import "../../styles/gallery/Gallery.css";
import noimage from "../../assets/noimage.png"
import { getTokenUri } from "@3rdweb/sdk";
// import nftForm from "../form/form";

import { useWeb3 } from "@3rdweb/hooks";
import { useEffect, useState } from "react";


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

    //////////////////////////////////////////////////

    const { connectWallet, address, error, provider } = useWeb3();
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [postLink, setPostLink] = useState("");

    const fetchPosts = async () => {
        const url = "http://54.86.150.173:3001/posts";
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res.json();
    };

    const createPost = async (address, title, postBody, link, image) => {
        const url = "http://54.86.150.173:3001/posts";
        const body = {
            authorWalletAddress: address,
            title: title,
            body: postBody,
            link: link,
            image: image
        };
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return res.json();
    };

    const fetchPostComments = async (postId) => {
        const url = "http://54.86.150.173:3001/fetch_comments";
        const body = {
            postId: postId,
        };
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return res.json();
    };

    const createComment = async (address, postId, commentBody) => {
        const url = "http://54.86.150.173:3001/create_comment";
        const body = {
            authorWalletAddress: address,
            postId: postId,
            body: commentBody,
        };
        let res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        res = await res.json()
        return res;
    };

    const fetchFollowers = async (address) => {
        const url = "http://54.86.150.173:3001/followers";
        const body = {
            followerWalletAddress: address,
        };
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return res.json();
    };

    const follow = async (followerWalletAddress) => {
        const url = "http://54.86.150.173:3001/follow";
        const body = {
            followeeWalletAddress: address,
            followerWalletAddress: followerWalletAddress,
        };
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return res.json();
    };

    const unfollow = async (followerWalletAddress) => {
        const url = "http://54.86.150.173:3001/unfollow";
        const body = {
            followeeWalletAddress: address,
            followerWalletAddress: followerWalletAddress,
        };
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return res.json();
    };

    useEffect(async () => {
        let mounted = true;
        fetchPosts().then(async (allPosts) => {
            console.log("fetchPosts:", allPosts);
            let res = []
            allPosts.forEach(async (post) => {
                let ret = {
                    post: {},
                    comments: {}
                }
                ret.post = post
                const comments = await fetchPostComments(post.post_id)
                console.log(post.title, comments)
                ret.comments = comments
                res.push(ret)
            });
            console.log("res", res)
            setPosts(res);
        });
        return () => (mounted = false);
    }, []);

   /* function selectNFT(){
        console.log("cliked nft");
        createPost(address, title, postBody, link)
    }*/
    


    //////////////////////////////////////////////////
    
    return (
        <div className="gallery-nft" >
            <img src={image} />
            <h3>{name}</h3>
            <p>{description}</p>
            <button className="galleryButton" onClick={() =>
                createPost(
                    address,
                    name,
                    description,
                    image,
                    "img"

                )
            }> Post to Forum</button>







        </div>

        
        
    );
};

export default GalleryNFT;

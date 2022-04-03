import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useWeb3 } from "@3rdweb/hooks";

const Forums = () => {
    const { connectWallet, address, error, provider } = useWeb3();
    const [posts, setPosts] = useState([]);

    // Gets all posts in reverse chronological order
    const getPosts = async () => {
        const url = "http://localhost:3001/posts";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json());
    };

    useEffect(async () => {
        let mounted = true;
        getPosts().then((allPosts) => {
            console.log("Aasd", allPosts);
            setPosts(allPosts);
        });
        return () => (mounted = false);
    }, []);

    if (posts === undefined) {
        return (
            <div>
                <Navbar />
            </div>
        );
    }

    return (
        <div className="forums">
            <Navbar />
            <h1>Welcome to Our Forums</h1>
        </div>
    );
    // });
};
export default Forums;

import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { useWeb3 } from "@3rdweb/hooks";

const Forums = () => {
    const { connectWallet, address, error, provider } = useWeb3();
    const [posts, setPosts] = useState([]);

    // Gets all posts in reverse chronological order
    const getPosts = async () => {
        const url = "http://54.86.150.173:3001/";
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
            console.log("allPosts", allPosts);
            setPosts(allPosts);
        });
        return () => (mounted = false);
    }, []);

    if (posts.length === 0) {
        return (
            <div>
                <Navbar />
                <h1>Welcome to Our Forums</h1>
            </div>
        );
    }

    return (
        <div className="forums">
            <Navbar />
            <h1>Welcome to Our Forums</h1>
            {}
        </div>
    );
};
export default Forums;

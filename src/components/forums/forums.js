import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { useWeb3 } from "@3rdweb/hooks";
import "../../styles/forums/forums.css";

const Forums = () => {
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

    const createPost = async (address, title, postBody, link) => {
        const url = "http://54.86.150.173:3001/posts";
        const body = {
            authorWalletAddress: address,
            title: title,
            body: postBody,
            link: link,
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

    return (
        <div className="forums">
            <Navbar />
            <h1>Welcome to Our Forums</h1>
            <div id="create-post-wrapper">
                <h2>Create a post</h2>
                <input
                    onChange={(e) => setPostTitle(e.target.value)}
                    type="text"
                    placeholder="title"
                />
                <input
                    onChange={(e) => setPostBody(e.target.value)}
                    type="text"
                    placeholder="body"
                />
                <input
                    onChange={(e) => setPostLink(e.target.value)}
                    type="text"
                    placeholder="link"
                />
                <div>
                    <button
                        onClick={() =>
                            createPost(address, postTitle, postBody, postLink)
                        }
                    >
                        Create Post
                    </button>
                </div>
            </div>
            <br />
            <div id="posts-wrapper">
                <h2>All posts</h2>
                {posts.map((post, i) => {
                    return (
                        <div className= "posts" key={i}>
                            {post.post.title}
                            <br />
                            {post.post.body}
                            <br />
                            <a className="black" href={post.post.link}>{post.post.link}</a>
                            <br />
                            <br/>
                            comments:
                            {post.comments.length !== 0 ? (
                                post.comments.map((comment, i) => {
                                    return (
                                        <div key={i}>
                                            <br/>
                                            {comment.body}
                                            <br/>
                                            By {comment.author_wallet_address}
                                            <br/>
                                            {comment.date_created}
                                            <br/>

                                        </div>
                                        
                                    );
                                })
                            ) : (
                                <React.Fragment>
                                    <br />
                                    "No comments!"
                                </React.Fragment>
                            )}
                            <br />
                            <div>
                                <h2>Create comment:</h2>
                                <input
                                    onChange={(e) => setComment(e.target.value)}
                                    type="text"
                                    placeholder="comment here..."
                                />
                                <br />
                                <button
                                    onClick={() =>
                                        createComment(
                                            address,
                                            post.post.post_id,
                                            comment
                                        )
                                    }
                                >
                                    Submit Comment
                                </button>
                            </div>
                            ====================
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Forums;

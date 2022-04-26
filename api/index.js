const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "1234",
    database: "nft",
});

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the NFT Analytics internal API!");
});

app.get("/posts", (req, res) => {
    const query = "SELECT * FROM posts";
    db.query(query, function (error, results, fields) {
        if (error) {
            res.send(error);
            return;
        }
        console.log("posts:", results);
        res.send(results);
    });
});

app.post("/posts", (req, res) => {
    const query = "INSERT INTO posts SET ?";
    const preparedStatement = {
        author_wallet_address: req.body.authorWalletAddress,
        title: req.body.title,
        body: req.body.body,
        link: req.body.link,
        image:req.body.image,
    };
    db.query(query, preparedStatement, (error, results, fields) => {
        if (error) {
            res.send(error);
            return;
        }
        console.log("posts:", results);
        res.send(results);
    });
});

app.post("/fetch_comments", (req, res) => {
    const query = "SELECT * FROM post_comments WHERE post_id = ?";
    const preparedStatement = [req.body.postId];

    db.query(query, preparedStatement, (error, results, fields) => {
        if (error) {
            res.send(error);
            return;
        }
        console.log("fetch_comments:", results);
        res.send(results);
    });
});

app.post("/create_comment", (req, res) => {
    const query = "INSERT INTO post_comments SET ?";
    const preparedStatement = {
        post_id: req.body.postId,
        author_wallet_address: req.body.authorWalletAddress,
        body: req.body.body,
    };
    db.query(query, preparedStatement, (error, results, fields) => {
        if (error) {
            res.send(error);
            return;
        }
        console.log("create_comments:", results);
        res.send(results);
    });
});

app.post("/follow", (req, res) => {
    const query = "INSERT INTO followers SET ?";
    const preparedStatement = {
        followee_wallet_address: req.body.followeeWalletAddress,
        follower_wallet_address: req.body.followerWalletAddress,
    };
    db.query(query, preparedStatement, (error, results, fields) => {
        if (error) {
            res.send(error);
            return;
        }
        console.log("follow:", results);
        res.send(results);
    });
});

app.post("/unfollow", (req, res) => {
    const query =
        "DELETE FROM followers WHERE followee_wallet_address = ? AND follower_wallet_address = ?";
    const preparedStatement = [
        req.body.followeeWalletAdress,
        req.body.followerWalletAdress,
    ];
    db.query(query, preparedStatement, (error, results, fields) => {
        if (error) {
            res.send(error);
            return;
        }
        console.log("unfollow:", results);
        res.send(results);
    });
});

app.post("/followers", (req, res) => {
    const query = "SELECT * FROM followers WHERE followee_wallet_address = ?";
    const preparedStatement = [req.body.followeeWalletAddress];
    db.query(query, preparedStatement, function (error, results, fields) {
        if (error) {
            res.send(error);
            return;
        }
        console.log("followers:", results);
        res.send(results);
    });
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`);
});

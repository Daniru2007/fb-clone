import React, { useEffect, useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Posts from "./Posts";
import db from "./Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                );
            }
        );
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Posts
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    image={post.data.image}
                />
            ))}
        </div>
    );
}

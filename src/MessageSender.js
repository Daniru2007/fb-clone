import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./MessageSender.css";
import VidoecamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(collection(db, "posts"), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`what's on your mind, ${user.displayName}?`}
                        className="messageSender__input"
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (optional)"
                        className=""
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VidoecamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "yellow" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    );
}

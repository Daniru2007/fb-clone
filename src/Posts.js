import React from "react";
import "./Posts.css";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutLineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import { ExpandMoreOutlined } from "@mui/icons-material";

export default function Posts({
    profilePic,
    image,
    username,
    timestamp,
    message,
}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutLineIcon />
                    <p>comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    );
}

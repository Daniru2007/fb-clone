import React from "react";
import "./StoryReel.css";
import Story from "./Story";

export default function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1649779455019-3e8ce07a3589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                profileSrc="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Jake"
            />
            <Story
                image="https://images.unsplash.com/photo-1649901640772-f543e6cfab6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Simon"
            />
            <Story
                image="https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                profileSrc="https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Tim"
            />
            <Story
                image="https://images.unsplash.com/photo-1634077791486-5d6ae8799ef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                profileSrc="https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Paul"
            />
            <Story
                image="https://images.unsplash.com/photo-1649899042805-46ea24c005e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                profileSrc="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Eric"
            />
        </div>
    );
}

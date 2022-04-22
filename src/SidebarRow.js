import React from "react";
import "./SidebarRow.css";
import Avatar from "@mui/material/Avatar";

export default function SidebarRow({ title, src, Icon }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
}

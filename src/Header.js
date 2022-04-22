import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StoreOutLinedIcon from "@mui/icons-material/StoreOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, Icon, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from "./StateProvider";

export default function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png"
                    alt=""
                    draggable="false"
                ></img>
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="search facebook" />
                </div>
            </div>
            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StoreOutLinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    );
}

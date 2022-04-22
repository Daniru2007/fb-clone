import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

export default function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch({ type: actionTypes.SET_USER, user: result.user });
            })
            .catch((error) => alert(error));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png"
                    alt=""
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

import React from "react";
import "./Widgets.css";

export default function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://danirudev.ml/"
                title="danirudev.ml"
                width="340"
                height="100%"
                style={{
                    border: "none",
                    overflow: "hidden",
                }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypt-media"
            ></iframe>
        </div>
    );
}

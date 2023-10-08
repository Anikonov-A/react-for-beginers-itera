import React from "react";

type HeaderProps = {
    text: string;
}
export const Header: React.FC<HeaderProps> = (props) => (
    <div className="header">
        <h1>My first header {props.text}</h1>
    </div>
);
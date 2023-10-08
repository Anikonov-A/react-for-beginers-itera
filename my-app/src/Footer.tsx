import React from "react";

type FooterType = {
    text: string
}
export const Footer: React.FC<FooterType> = (props) => (<footer className="footer">{props.text}</footer>)
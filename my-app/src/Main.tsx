import React from "react";

const userObj = {
    name: "Anton",
    age: 31,
    weight: 70,
}
const p ={
    text:`About me: `
}
export const Main = () => (
    <div className="Main">
        <div className="main-wrapper">
            <p className='paragraph'>{p.text}</p>
            <ul className='main-list'>
                <li className='main-list-item'>My name: {userObj.name}</li>
                <li className='main-list-item'>My age: {userObj.age}</li>
                <li className='main-list-item'>My weight: {userObj.weight}</li>
            </ul>
            <a href="google.com" target='_blank'>Link</a>
        </div>
    </div>
);
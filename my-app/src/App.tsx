import React from 'react';
import './Main.css'
import './Header.css'
import './footer.css'
import {Header} from "./HeaderProps";
import {Main} from "./Main";
import {Footer} from "./Footer";


const App = () => (
    <div className="App">
        <Header text="!!!!"/>
        <Main />
        <Footer text="It's my footer"/>
    </div>
)
export default App;

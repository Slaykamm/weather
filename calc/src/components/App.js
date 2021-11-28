import React, {Component} from "react";

import "../styles/App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Header"
import Main from "./Main"


class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />


            </>

        ); 
    }
}

export default App;

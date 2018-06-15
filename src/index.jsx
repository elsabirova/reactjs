import React, {Component} from 'react';
import ReactDom from 'react-dom';

import MainPage from "./MainPage.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends Component {
    render() {
        return (
                <MainPage/>
        );
    }
}

ReactDom.render(<Layout/>, document.getElementById('layout'));
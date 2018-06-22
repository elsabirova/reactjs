import 'bootstrap/dist/css/bootstrap.min.css';
import './main.sass';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import MainPage from "components/MainPage";
import Blog from "containers/BlogContainer";
import Comments from 'containers/CommentsContainer';
import UserList from 'containers/UserListContainer';
import Footer from "components/Footer";

class Layout extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header size="small"/>
                <div className="content">
                    <Blog/>
                    {/*<MainPage/>
                    <Comments/>
                    <UserList/>*/}
                </div>
                <Footer/>
            </div>
        );
    }
}

ReactDom.render(<Layout/>, document.getElementById('layout'));
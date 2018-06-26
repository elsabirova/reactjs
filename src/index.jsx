import 'bootstrap/dist/css/bootstrap.min.css';
import './main.sass';

import React, {PureComponent} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import routes from './routes';

import Header from 'components/Header';
import Footer from 'components/Footer';

class Layout extends PureComponent {
    render() {
        return (
            <div className="wrapper">
                <Header size="small"/>
                <div className="content">
                    <BrowserRouter>
                        <Switch>
                            {routes.map((route) => <Route {...route}/>)}
                        </Switch>
                    </BrowserRouter>
                </div>
                <Footer/>
            </div>
        );
    }
}

ReactDom.render(<Layout/>, document.getElementById('layout'));
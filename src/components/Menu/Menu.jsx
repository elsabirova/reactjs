import './Menu.sass';

import React, {Component, Fragment} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import {BrowserRouter} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        const {items} = this.props;
        return (
            <Nav className="ml-auto">
                <BrowserRouter>
                    <Fragment>
                        {items.map(item => <NavItem key={item.id}>
                            <NavLink className="text-info" href={item.link}>{item.title}</NavLink>
                        </NavItem>)}
                    </Fragment>
                </BrowserRouter>
            </Nav>
        );
    }
}
import './Menu.css';

import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Menu extends Component {
    render() {
        const {items} = this.props;
        return (
            <div>
                <Nav>
                    {items.map(item => <NavItem><NavLink color="info"
                                                         href={item.link}>{item.title}</NavLink></NavItem>)}
                </Nav>
            </div>
        );
    }
}
import './Menu.sass';

import React, {Component} from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class Menu extends Component {
    hundleLinkMenu = (e) => {
        e.preventDefault();
    }
    render() {
        const {items} = this.props;
        return (
            <div>
                <Nav className="ml-auto">
                    {items.map(item => <NavItem>
                                            <NavLink className="text-info" onClick={this.hundleLinkMenu} href={item.link}>{item.title}</NavLink>
                                        </NavItem>)}
                </Nav>
            </div>
        );
    }
}
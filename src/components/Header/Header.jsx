import './Header.sass';

import React, {Component} from 'react';
import classNames from 'classnames';
import {Navbar, NavbarBrand} from 'reactstrap';

import Menu from 'components/Menu';
import ButtonLogin from "components/ButtonLogin";

const menuItems = [
    {
        link: 'home', title: 'Home'
    },
    {
        link: 'about', title: 'About'
    },
    {
        link: 'contact', title: 'Contacts'
    }
];

export default class Header extends Component {
    render() {
        const {size} = this.props;
        const className = classNames(
            'header',
            {
                'header__small': size === 'small',
                'header__big': size === 'big'
            }
        );
        return (
            <div className={className}>
                <Navbar light expand="md" className="header-content">
                    <NavbarBrand href="/">Blog</NavbarBrand>
                    <Menu items={menuItems}/><ButtonLogin buttonLabel="Login"/>
                </Navbar>
            </div>
        )
    }
}
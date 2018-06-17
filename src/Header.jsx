import './Header.css';

import React, {Component} from 'react';
import classNames from 'classnames';

import Menu from './Menu.jsx';
import ButtonLogin from "./ButtonLogin.jsx";

import {Navbar, NavbarBrand} from 'reactstrap';

const menuItems = [
    {
        link: 'https://geekbrains.ru', title: 'Geekbrains'
    },
    {
        link: 'https://google.com', title: 'Google'
    },
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
                <Navbar light expand="md">
                    <NavbarBrand href="/">Blog</NavbarBrand>
                    <Menu items={menuItems}/>
                    <ButtonLogin buttonLabel="Login"/>
                </Navbar>
            </div>
        )
    }
}
import './Header.sass';

import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import classNames from 'classnames';

import Menu from 'components/Menu';
import ButtonLogin from 'components/ButtonLogin';
import Comments from 'components/Comments/Comments';

const menuItems = [
    {
        id: 1,
        link: '/',
        title: 'Home'
    },
    {
        id: 2,
        link: '/articles',
        title: 'Blog'
    },
    {
        id: 3,
        link: '/comments',
        title: 'Comments'
    },
    {
        id: 4,
        link: '/users',
        title: 'Users'
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
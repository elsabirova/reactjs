import './Header.sass';

import React, {Component} from 'react';
import classNames from 'classnames';
import {Navbar, NavbarBrand} from 'reactstrap';

import Menu from 'components/Menu';
import ButtonLogin from 'components/ButtonLogin';
import Comments from 'components/Comments/Comments';

const menuItems = [
    {
        id: 1,
        link: 'MainPage',
        title: 'Home'
    },
    {
        id: 2,
        link: 'Blog',
        title: 'Blog'
    },
    {
        id: 3,
        link: 'Comments',
        title: 'Comments'
    },
    {
        id: 4,
        link: 'UserList',
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
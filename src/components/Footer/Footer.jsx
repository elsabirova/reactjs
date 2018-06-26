import './Footer.sass';

import React, {Component} from 'react';

import Menu from 'components/Menu';

const menuItems = [
    {
        id: 1,
        link: 'https://geekbrains.ru',
        title: 'Geekbrains'
    },
    {
        id: 2,
        link: 'https://google.com',
        title: 'Google'
    },
];

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <Menu items={menuItems}/>
                </div>
            </div>
        );
    }
}
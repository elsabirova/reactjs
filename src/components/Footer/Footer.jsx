import './Footer.sass';

import React, {Component} from 'react';

import Menu from 'components/Menu';

const menuItems = [
    {
        link: 'https://geekbrains.ru', title: 'Geekbrains'
    },
    {
        link: 'https://google.com', title: 'Google'
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
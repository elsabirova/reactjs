import React, {Component} from 'react';

import Header from './Header.jsx';

import {Media} from 'reactstrap';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Header size="small"/>
                <div className="content">
                    <Media>
                        <Media left href="#">
                        </Media>
                        <Media body>
                            <Media heading>
                                Media heading
                            </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                            commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                            condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                    </Media>
                </div>
            </div>
        );
    }
    
}
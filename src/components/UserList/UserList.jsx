import React, {PureComponent, Fragment} from 'react';

import {Button} from 'reactstrap';

export default class UserList extends PureComponent {
    render() {
        const {users, onLoadMore} = this.props;
        
        return (
            <Fragment>
                <h1>Users</h1>
                
                <ul>
                    {users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>
                
                <Button onClick={onLoadMore} color="info">Load more</Button>
            </Fragment>
        )
    }
}
import './Comments.sass';

import React, {Fragment, PureComponent} from 'react';
import {Button} from 'reactstrap';

export default class Comments extends PureComponent {
    render() {
        const {comments, onLoadMore} = this.props;
        
        return (
            <Fragment>
                <h1>Comments</h1>
                
                {comments.map(comment =>
                    <div className="comments-text" key={comment.id}>
                        {comment.body}
                    </div>
                )}
                
                <Button onClick={onLoadMore} color="info">Load more</Button>
            </Fragment>
        )
    }
}
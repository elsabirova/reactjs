import './Blog.sass';

import React, {PureComponent, Fragment} from 'react';
import {
    Badge,
    Card,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    CardImg,
    Button,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

import Author from "containers/AuthorContainer";

export default class Blog extends PureComponent {
    render() {
        const {articles, loadPage} = this.props;
        
        return (
            <Fragment>
                <h1>Blog <Badge color="light">Secondary Text</Badge></h1>
                {articles.map(article =>
                    <Fragment key={article.id}>
                        <Card className="item-news">
                            <CardImg top width="100%"
                                     src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                     alt="Card image cap"/>
                            <CardBody>
                                <CardTitle>{article.title}</CardTitle>
                                <CardText>{article.body}</CardText>
                                <Button color="info">Read more</Button>
                            </CardBody>
                            <CardFooter> <Author userId={article.userId}/></CardFooter>
                        </Card>
                    </Fragment>
                )}
                
                <Pagination aria-label="Page navigation" className="pagination">
                    <PaginationItem>
                        <PaginationLink className="text-info" previous href="#"/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={(e) => loadPage(1, e)} className="text-info" href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={(e) => loadPage(2, e)} className="text-info" href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={(e) => loadPage(3, e)} className="text-info" href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={(e) => loadPage(4, e)} className="text-info" href="#">
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={(e) => loadPage(5, e)} className="text-info" href="#">
                            5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="text-info" next href="#"/>
                    </PaginationItem>
                </Pagination>
            </Fragment>
        )
    }
}
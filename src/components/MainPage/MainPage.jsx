import './MainPage.sass';

import React, {Component, Fragment} from 'react';
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
import ButtonFade from "../ButtonFade/ButtonFade";

export default class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <h1>Page Heading <Badge color="light">Secondary Text</Badge></h1>
                <Card className="item-news">
                    <CardImg top width="100%"
                             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>Post Title</CardTitle>
                        <ButtonFade/>
                        <Button color="info">Read more</Button>
                    </CardBody>
                    <CardFooter>Posted on January 18, 2017 by Elnara</CardFooter>
                </Card>
                <Card className="item-news">
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="info">Read more</Button>
                    </CardBody>
                    <CardFooter>Posted on January 1, 2017 by Elnara</CardFooter>
                </Card>
                <Card className="item-news">
                    <CardImg top width="100%"
                             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>Post Title</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button color="info">Read more</Button>
                    </CardBody>
                    <CardFooter>Posted on January 18, 2017 by Elnara</CardFooter>
                </Card>
                
                <Pagination aria-label="Page navigation" className="pagination">
                    <PaginationItem>
                        <PaginationLink className="text-info" previous href="#"/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="text-info" href="#">
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="text-info" href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="text-info" href="#">
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="text-info" href="#">
                            4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="text-info" href="#">
                            5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink className="text-info" next href="#"/>
                    </PaginationItem>
                </Pagination>
            
            </Fragment>
        );
    }
    
}
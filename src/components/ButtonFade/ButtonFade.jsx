import React, {Component, Fragment} from 'react';
import {Button, Fade} from 'reactstrap';

export default class ButtonFade extends Component {
    constructor(props) {
        super(props);
        this.state = {fadeIn: true};
    }
    
    toggle = () => {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
    
    render() {
        return (
            <Fragment>
                <Button color="success" onClick={this.toggle}>Toggle Fade</Button>
                <Fade in={this.state.fadeIn} tag="h3" className="mt-3">
                    This content will fade in and out as the button is pressed
                </Fade>
            </Fragment>
        );
    }
};
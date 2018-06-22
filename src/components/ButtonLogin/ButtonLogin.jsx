import React, {Component, Fragment} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';

export default class ButtonLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    render() {
        return (
            <Fragment>
                <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="Login">Login</Label>
                                <Input type="login" name="login" id="Login" placeholder="Login"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="Password" placeholder="Password"/>
                            </FormGroup>
                            <Button color="info" onClick={this.toggle}>Submit</Button>{' '}
                        </Form>
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}
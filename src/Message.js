"use strict";

import './message.css';

export default class Message {
    constructor(styleClass, text) {
        this.text = text;
        this.htmlElement = document.querySelector(styleClass);
    }
    init() {
        this.render();
        this.htmlElement.addEventListener('click', e => {
            const date = new Date();
            
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timezone: 'UTC',
            };
    
            alert( date.toLocaleString("ru", options) );
            
        });
    }
    render() {
        this.htmlElement.innerText = this.text;
    }
    
    
}
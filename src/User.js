"use strict";

import './user.css';

export default class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    sayHi() {
        alert(`Привет, ${this.firstName} ${this.lastName}`);
    }
    
    displayInfo() {
        const divUserInfo = document.querySelector('.user-info');
        console.log(divUserInfo);
        divUserInfo.innerText = `Имя: ${this.firstName} Фамилия: ${this.lastName}`;
    }
}
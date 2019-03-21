"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const   btns = document.querySelectorAll('.btn'),
            display = document.querySelector('.display > input');

    let buffer = '';
    const list = {
        search: function(i) {
            if(i == '+'){list.equal();list.sum()}
            else if(i == '-'){list.equal();list.sub()}
            else if(i == '*'){list.equal();list.mul()}
            else if(i == '/'){list.equal();list.div()}
            else if(i == '√'){list.equal();list.sqrt()}
            else if(i == '='){list.equal()}
        },

        sum: function() {
            let arr = display.value.split('+');
            if(arr.length > 1){
                display.value = +arr[0] + +arr[1];
                list.equal();
            }
            buffer = 'sum';
        },

        sub: function() {
            let arr = display.value.split('-');
            if(arr.length > 1){
                display.value = +arr[0] - +arr[1];
                list.equal();
            }
            buffer = 'sub';
        },

        mul: function() {
            let arr = display.value.split('*');
            if(arr.length > 1){
                display.value = +arr[0] * +arr[1];
                list.equal();
            }
            buffer = 'mul';
        },

        div: function() {
            let arr = display.value.split('/');
            if(arr.length > 1){
                display.value = +arr[0] / +arr[1];
                list.equal();
            }
            buffer = 'div';
        },

        sqrt: function() {
            list.equal();
            display.value = Math.sqrt(+display.value.split('√'));
            buffer = '';
        },

        equal: function() {
            if(buffer == 'sum'){list.sum()}
            else if(buffer == 'sub'){list.sub()}
            else if(buffer == 'mul'){list.mul()}
            else if(buffer == 'div'){list.div()}
            buffer = '';
        }
    }

    btns.forEach( (i) => {
        i.addEventListener('click', () => {
            list.search(i.textContent);
            if(i.textContent != '=' && i.textContent != '√') display.value += i.textContent; 
        });
    });

});
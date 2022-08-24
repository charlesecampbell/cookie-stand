'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let seattle = {
    name: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    cookiesPerHour: [],

    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },
    total: 0,
        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let seattleStand = document.getElementById('SeattleStand');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            seattleStand.appendChild(li)
        }
    },
};
seattle.render();
console.log(seattle);

//Toyoko

let tokyo = {
    name: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    cookiesPerHour: [],

    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },

        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let tokyoStand = document.getElementById('Tokyo');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            tokyoStand.appendChild(li)
        }
    },
};
tokyo.render();

//Dubai
let dubai = {
    name: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    cookiesPerHour: [],

    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },

        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let dubaiStand = document.getElementById('Dubai');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            dubaiStand.appendChild(li)
        }
    },
};
dubai.render();

//Paris
let paris = {
    name: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    cookiesPerHour: [],

    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },

        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let parisStand = document.getElementById('Paris');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            parisStand.appendChild(li)
        }
    },
};
paris.render();

//Lima
let lima = {
    name: 'Paris',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    cookiesPerHour: [],

    //Calculate Random Customer
    randomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer; //The maximum and minimum customers function
    },

        //Cookies Sold Per Hour
    calculateCookiesPerHour:function (){
        for (let i = 0; i < hours.length; i++){
            let hourlyCookies = Math.ceil(this.randomCustomer() * this.avgCookies);
            this.cookiesPerHour.push(hourlyCookies)
        }

    },
    //Render Store

    render:function() {
        this.calculateCookiesPerHour();
        console.log('inside render')
        let limaStand = document.getElementById('Lima');
        for (let i = 0; i < hours.length; i++){
            let li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]}`
            limaStand.appendChild(li)
        }
    },
};
lima.render();
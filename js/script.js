/*
Author: Daniel Frederick
Date: January 8, 2019


@TODO:

*/

class Button {
    constructor(text, menu, f, id=text) {
        this.text = text;
        this.id = id;
    }
}

class Menu {
    constructor(name) {
        this.name = name;
        this.buttons = [];

        this.generateMenu();
    }

    addButton(b) {
        if(b.length == 1) {
            this.buttons.append(b);
        }
        else{
            for(var i in b) {
                this.buttons.append(i);
            }
        }

        this.generateMenu();
    }

    generateMenu() {
        var tb = $('<table/>').attr('id', this.name);
        var row = $('<tr/>').addClass('row')

        for(var i in this.buttons) {
            var b = $('<td/').addClass('button').attr('id', i.id);
            row.append(b);
        }

        tb.append(row);
    }
}

var menu = new Menu('menu');

var b1 = new Button("EOF", menu, 'eof');
var b2 = new Button("Solve", menu, 'solve');

menu.addButton([b1, b2]);
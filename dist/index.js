"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ItemCollection_1 = require("./ItemCollection");
let icollection = new ItemCollection_1.ItemCollection();
icollection.addTodo(`First Task`);
icollection.addTodo(`Eat Mangos`);
icollection.taskDone(1);
icollection.printAllItems();
/*
let item: Item = new Item(11, `First Task`, false);
// this object: class = new instance of the class
item.printTask();
//object print function is executed

*/ 

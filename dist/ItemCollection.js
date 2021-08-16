"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCollection = void 0;
const Item_1 = require("./Item");
class ItemCollection {
    constructor(items = []) {
        this.items = items;
        // it contains an array of items
        this.nextID = 1; // don't want this variable accessible from outside the class
    }
    addTodo(task) {
        let item = new Item_1.Item(this.nextID, task, false);
        this.nextID++;
        this.items.push(item);
    }
    taskDone(taskId) {
        let item = this.items.find((item) => item.taskId == taskId);
        item.done = true;
    }
    printAllItems() {
        this.items.forEach((item) => item.printTask());
    }
}
exports.ItemCollection = ItemCollection;

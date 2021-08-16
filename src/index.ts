import { Item } from "./Item";
import { ItemCollection } from "./ItemCollection";

let icollection: ItemCollection = new ItemCollection();
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
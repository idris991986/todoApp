import { Item } from "./Item";

export class ItemCollection{
    // it contains an array of items
    private nextID: number = 1; // don't want this variable accessible from outside the class

    constructor(public items: Item[] = []){

    }
    public addTodo(task: string):void{
        let item: Item = new Item(this.nextID, task, false);
        this.nextID++;
        this.items.push(item);
    }
    public taskDone(taskId: number):void{
        let item: Item = this.items.find((item)=> item.taskId == taskId);
        item.done =true;
    }
    public printAllItems():void{
        this.items.forEach((item: Item) => item.printTask() );
    }
}
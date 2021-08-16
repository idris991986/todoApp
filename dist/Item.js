"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(taskId, task, done = false) {
        this.taskId = taskId;
        this.task = task;
        this.done = done;
    }
    printTask() {
        console.log(`id = ${this.taskId}, \tTask: ${this.task}, \tCompleted: ${this.done}`);
    }
}
exports.Item = Item;
/**
export class Item{
    public constructor(public taskId: number, public task: string, public done: boolean = false){
     // no code is required
     //tsc complier will generate the required code itself (assigning values)
    }
        public printTask():void{
        console.log(`id = ${this.taskId}, \tTask: ${this.task}, \tCompleted: ${this.done}`)
    }
}

 */ 

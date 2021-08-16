export class Item{
    //class attributes
    taskId: number;
    task: string;
    done: boolean;

    public constructor(taskId: number, task: string, done: boolean = false){
        this.taskId = taskId;
        this.task = task;
        this.done = done;
    }

    public printTask():void{
        console.log(`id = ${this.taskId}, \tTask: ${this.task}, \tCompleted: ${this.done}`)
    }
}

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
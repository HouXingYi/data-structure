

//es6中get是当访问属性的时候触发，set是当改变属性的时候触发
//利用Quakka查看效果  ctrl+shift+p   start on current file

class Data {
    constructor() {
        this.init();
    }
    init(){

        //栈
        this.Stack = require("./js/1.stack.js");
        // this.stack();

        //队列
        this.queuegroup = require("./js/2.queue.js");
        // this.queue();
        // this.priorityQueue();
        // this.loopQueue();

        //链表
        this.LinkedList = require("./js/3.LinkedList.js");
        // this.linkedList();
        
    }
    //栈   利用push()与pop()
    stack(){
        const stack = new this.Stack(); 
        stack.push(5);
        stack.push(8);
        stack.push(11);
        stack.print()
        stack.pop();
        stack.print();        
    }
    //队列 利用push()与shift()
    queue(){
        const queue = new this.queuegroup.Queue();//队列
        queue
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue
        queue.dequeue(); 
        queue          
    }
    //优先队列（队列变种）
    priorityQueue(){
        const priorityQueue = new this.queuegroup.PriorityQueue();
        priorityQueue.enqueue('John', 2)
        priorityQueue.enqueue('Jack', 1)
        priorityQueue.enqueue('Camila', 1)
        priorityQueue.enqueue('Surmon', 3)
        priorityQueue.enqueue('skyRover', 2)
        priorityQueue.enqueue('司马萌', 1)
        priorityQueue.enqueue('Camila', 1)
        priorityQueue.enqueue('Surmon', 3)
        priorityQueue.enqueue('skyRover', 2)
        priorityQueue.enqueue('司马萌', 1)
        priorityQueue.enqueue('Camila', 1)
        priorityQueue.enqueue('Surmon', 3)
        priorityQueue.enqueue('skyRover', 2)
        priorityQueue.enqueue('司马萌', 1)
        console.log(priorityQueue.items);
    }
    //循环队列
    loopQueue(){
        const loopQueue = new this.queuegroup.LoopQueue();
        loopQueue.enqueue('Surmon');
        loopQueue.enqueue('SkyRover');
        loopQueue.enqueue('Even');
        loopQueue.enqueue('Alice');
        console.log(loopQueue.find(26)) // 'Evan'
        console.log(loopQueue.find(87651)) // 'Alice'
    }
    //链表
    linkedList(){
        const linkedList = new this.LinkedList();
        linkedList.append(2)
        linkedList.append(6)
        linkedList.append(24)
        linkedList.append(152)
        linkedList.insert(3, 18)
        console.log(linkedList)
    }    

}

var data = new Data();





















































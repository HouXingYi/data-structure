

//es6中get是当访问属性的时候触发，set是当改变属性的时候触发
//利用Quakka查看效果  ctrl+shift+p   start on current file

class Data {
    constructor() {
        this.init();
    }
    init(){

        //栈 利用push()与pop()  先进后出 (LIFO)
        this.Stack = require("./js/1.stack.js");
        // this.stack();

        //队列  利用push()与shift()  先进先出 (FIFO / First In First Out)
        this.queuegroup = require("./js/2.queue.js");
        // this.queue();
        // this.priorityQueue();
        // this.loopQueue();

        //链表  每个元素由一个存储元素本身的节点和一个指向下一个元素的引用组成，（也就是element和next）
        this.linkedListGroup = require("./js/3.LinkedList.js");
        // this.linkedList();   //普通链表,单项列表,prev为null
        //循环链表,暂无演示


        //集合
        this.Set = require("./js/4.set.js");
        // this.set();
        //对集合可以进行如下操作
        //并集,交集,差集,子集(感觉像纯数学概念)(不写演示代码了)


        //字典 字典是以{ key: value }的形式存储数据  //JS的对象就是字典，字典也叫映射
        this.Dictionary = require("./js/5.dictionary.js");
        this.dictionary();

        //散列

        




        
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
        const linkedList = new this.linkedListGroup.LinkedList();
        linkedList.append(2)
        linkedList.append(6)
        linkedList.append(24)
        linkedList.append(152)
        linkedList.insert(3, 18)
        console.log(linkedList)
    }    

    //集合
    set(){
        const set = new this.Set();
        set.add(1)
        console.log(set.values)  // ["1"] 
        console.log(set.has(1))  // true 
        console.log(set.size) // 1 
        set.add(2) 
        console.log(set.values)  // ["1", "2"] 
        console.log(set.has(2))  // true 
        console.log(set.size) // 2 
        set.remove(1) 
        console.log(set.values) // ["2"] 
        set.remove(2) 
        console.log(set.values) // []
    }

    dictionary(){
        const dictionary = new this.Dictionary()
        dictionary.set('Gandalf', 'gandalf@email.com')
        dictionary.set('John', 'johnsnow@email.com')
        dictionary.set('Tyrion', 'tyrion@email.com')
        console.log(dictionary)
        console.log(dictionary.keys)
        console.log(dictionary.values)
        console.log(dictionary.items)
    }

}

var data = new Data();





















































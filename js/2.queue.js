
//队列
class Queue {
    constructor(items) {
        this.items = items || []
    }
    //进入队列
    enqueue(element){
        this.items.push(element)
    }
    //离开队列
    dequeue(){
        return this.items.shift()
    }
    //队列头部
    front(){
        return this.items[0]
    }
    //清除队列
    clear(){
        this.items = []
    }
    get size(){
        return this.items.length
    }
    get isEmpty(){
        return !this.items.length
    }
    print() {
        console.log(this.items.toString())
        return this.items.toString()
    }
}

//优先队列
class PriorityQueue {
    constructor() {
        this.items = []
    }
    //进入队列
    enqueue(element, priority){
        const queueElement = { element, priority }
        if (this.isEmpty) {
            this.items.push(queueElement)
        } else {

            const preIndex = this.items.findIndex((item) => queueElement.priority < item.priority )//进入的元素与原来的items做优先级对比

            if (preIndex > -1) {   //优先级高，可以插队
                this.items.splice(preIndex, 0, queueElement)//插队
            } else {
                this.items.push(queueElement)//往后排
            }
        }
    }
    dequeue(){
        return this.items.shift()
    }
    front(){
        return this.items[0]
    }
    clear(){
        this.items = []
    }
    get size(){
        return this.items.length
    }
    get isEmpty(){
        return !this.items.length
    }
    print() {
        console.log(this.items)
    }
}


//循环队列
class LoopQueue extends Queue {   //LoopQueue 继承 Queue

    constructor(items) {
        super(items)   //super表示父类的构造函数  //有这行this才能用
    }

    getIndex(index) {
        const length = this.items.length
        return index > length ? (index % length) : index   //如果index大于length，就取余（循环了）
    }

    find(index) {
        return !this.isEmpty ? this.items[this.getIndex(index)] : null
    }

}


//队列整体对象
var queueGroup = {
    Queue,
    PriorityQueue,
    LoopQueue
}


module.exports = queueGroup

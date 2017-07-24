
//各种排序算法

//创建有100个随机值的数组
var items = (function(){
    var arr = [];
    for(let i=0;i<100;i++){
        var ranNum = Math.floor(Math.random()*1000);
        arr.push(ranNum);
    }
    return arr
})();
console.log(items);

//冒泡排序 比较任何两个相邻的项，如果第一个比第二个大，则交换它们
Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                let aux = this[j]
                this[j] = this[j + 1]
                this[j + 1] = aux
            }
        }
    }
}

//选择排序  找到数据结构中的最小值并 将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推
Array.prototype.selectionSort = function() {
    let indexMin
    for (let i = 0; i < this.length - 1; i++){
        indexMin = i
        for (var j = i; j < this.length; j++){ 
            if(this[indexMin] > this[j]) {
                indexMin = j
            }
        } 
        if (i !== indexMin){
            let aux = this[i]
            this[i] = this[indexMin]
            this[indexMin] = aux
        }
    }
    return this
}

//插入排序
Array.prototype.insertionSort = function() {
    let j
    let temp
    for (let i = 1; i < this.length; i++) {
        j = i
        temp = this[i]
        while (j > 0 && this[j - 1] > temp) {
            this[j] = this[j - 1]
            j--
        } 
        this[j] = temp
        // console.log(this.join(', '))
    }
    return this
}

//归并排序
Array.prototype.mergeSort = function() {
    const merge = (left, right) => {
        const result = []
        let il = 0
        let ir = 0
        while(il < left.length && ir < right.length) {
            if(left[il] < right[ir]) {
                result.push(left[il++])
            } else {
                result.push(right[ir++])
            }
        }
        while (il < left.length) {
            result.push(left[il++])
        }
        while (ir < right.length) {
            result.push(right[ir++])
        }
        return result
    }
    const mergeSortRec = array => {
        if (array.length === 1) {
            return array
        }
        const mid = Math.floor(array.length / 2)
        const left = array.slice(0, mid)
        const right = array.slice(mid, array.length)
        return merge(mergeSortRec(left), mergeSortRec(right))
    }
    return mergeSortRec(this)
}

//快速排序
Array.prototype.quickSort = function() {
    const partition = (array, left, right) => {
        var pivot = array[Math.floor((right + left) / 2)]
        let i = left
        let j = right
        while (i <= j) {
            while (array[i] < pivot) {
                i++
            }
            while (array[j] > pivot) {
                j--
            }
            if (i <= j) {
                let aux = array[i]
                array[i] = array[j]
                array[j] = aux
                i++
                j--
            }
        }
        return i
    }
    const quick = (array, left, right) => {
        let index
        if (array.length > 1) {
            index = partition(array, left, right)
            if (left < index - 1) {
                quick(array, left, index - 1)
            }
            if (index < right) {
                quick(array, index, right)
            }
        }
    }
    quick(this, 0, this.length - 1)
    return this
}



//搜索算法

//顺序搜索
Array.prototype.sequentialSearch = function(item) {
    for (let i = 0; i < this.length; i++) {
        if (item === this[i]) return i
    }
    return -1
}
//二分搜索
Array.prototype.binarySearch = function(item) {
    this.quickSort()
    let low = 0
    let mid = null
    let element = null
    let high = this.length - 1
    while (low <= high){
        mid = Math.floor((low + high) / 2)
        element = this[mid]
        if (element < item) {
            low = mid + 1
        } else if (element > item) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

//排序
var a = items.quickSort();
console.log(a);
//查找
var b = a.binarySearch(365);
console.log(b);

module.exports = items































































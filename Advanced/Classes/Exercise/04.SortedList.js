class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }
    //Private methods - JUDGE CANNOT WORK WITH THEM
    #sortArr(arr) {
        return arr.sort((a, b) => a - b);
    }
    #arrLength(arr) {
        return arr.length;
    }
    #isValidIndex(index, arr) {
        return index >= 0 && index < this.arr.length;
    }
    #throwErr() {
        throw new Error("Invalid index!");
    }
    //Methods
    add(element) {
        this.arr.push(element);
        this.arr = this.#sortArr(this.arr);
        this.size = this.#arrLength(this.arr);
    }
    remove(index) {
        if (this.#isValidIndex(index, this.arr)) {
            this.arr.splice(index, 1);
            this.arr = this.#sortArr(this.arr);
            this.size = this.#arrLength(this.arr);
        } else {
            this.#throwErr();
        }
    }
    get(index) {
        if (this.#isValidIndex(index, this.arr)) {
            return this.arr[index];
        }
        this.#throwErr();
    }
    size() {
        return this.arr.length;
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

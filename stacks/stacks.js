class Node {
    constructor(){
        this.value = value;
        this .next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.lenght = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.lenght === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.lenght++;

        return this;
    }

}
const myStack = new Stack();

//Pendiente validar los métodos
//Pendiente adicionar método pop()
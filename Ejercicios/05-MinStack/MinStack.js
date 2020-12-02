//Resolución

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  //LIFO Last-In-First-Out
  constructor(value) {
    this.head = null;
  }

  push(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  pop() {
    const current = this.head;
    this.head = current && current.next;
    return current && current.value;
  }
  peek() {
    return this.head && this.head.value;
  }
}

class MinStack extends Stack {
  constructor() {
    super()
    this.head = null;
    this.minimum = new Stack();
  }

  push(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.minimum.push(value)
    } else {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode && newNode;
      if (this.minimum.peek() > value) this.minimum.push(value);
      else this.minimum.push(this.minimum.peek());
    }
  }

  pop() {
    const current = this.head;
    this.head = current && current.next;
    this.minimum.pop();
    return current && current.value
  }

  min() {
    return this.minimum.peek();
  }

}

//Complejidad Espacial

//En cuanto a los metodos por separados(pop,push,peel,min) todos O(1)

//La complejidad espacial final es de O(N) "" O(2n) no es relevante, aunque es correcto debido
//a los dos stack con los que trabajamos""
class ClownNode {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello from ${this.name}! 🤡`);
  }
}

const node1 = new ClownNode('Node1');
node1.sayHello();

class ClownNode {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hey! I'm ${this.name}, your friendly clown node.`);
  }
}

const clownNodes = [
  new ClownNode('Clown A'),
  new ClownNode('Clown B'),
  new ClownNode('Clown C'),
];

clownNodes.forEach(node => node.greet());

class ClownNode {
  constructor(name) {
    this.name = name;
  }

  async performTrick() {
    return Promise.resolve(`${this.name} performed a trick! 🎪`);
  }
}

(async () => {
  const node = new ClownNode('Async Clown');
  const message = await node.performTrick();
  console.log(message);
})();

function createBinaryNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const newLeft = createBinaryNode(leftKey);
      this.left = newLeft;
      return newLeft;
    },
    addRight(rightKey) {
      const newRight = createBinaryNode(rightKey);
      this.right = newRight;
      return newRight;
    }
  };
}

const TRAVERSAL = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSAL.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSAL.IN_ORDER(node.right, visitFn);
    }
  },
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node);
      TRAVERSAL.PRE_ORDER(node.left, visitFn);
      TRAVERSAL.PRE_ORDER(node.right, visitFn);
    }
  },
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSAL.POST_ORDER(node.left, visitFn);
      TRAVERSAL.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  }
};
function createBinaryTree(rootKey) {
  const root = createBinaryNode(rootKey);
  return {
    root,
    print(traversalType = "IN_ORDER") {
      let result = "";

      const visit = node => {
        result += result.length === 0 ? node.key : ` =>${node.key}`;
      };

      TRAVERSAL[traversalType](this.root, visit);

      return result;
    }
  };
}

const tree = createBinaryTree("a");
const b = tree.root.addLeft("b");
const c = tree.root.addRight("c");
const d = b.addLeft("d");
const e = b.addRight("e");
const f = c.addLeft("f");
const g = c.addRight("g");
const h = d.addLeft("h");
const i = d.addRight("i");

console.log(tree.print()); // h =>d =>i =>b =>e =>a =>f =>c =>g
console.log(tree.print("PRE_ORDER")); // a =>b =>d =>h =>i =>e =>c =>f =>g
console.log(tree.print("POST_ORDER")); //h =>i =>d =>e =>b =>f =>g =>c =>a

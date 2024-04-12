export class TreeNode {
    value: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: any) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export const traversalArray = [];

// Inorder Traversal
export const inorderTraversal = (node: TreeNode | null): void => {
    if (node !== null) {
        inorderTraversal(node.left);
        traversalArray.push(node.value);
        inorderTraversal(node.right);
    }
}

// Preorder Traversal
export const preorderTraversal = (node: TreeNode | null): void => {
    if (node !== null) {
        traversalArray.push(node.value);
        preorderTraversal(node.left);
        preorderTraversal(node.right);
    }
}

// Postorder Traversal
export const postorderTraversal = (node: TreeNode | null): void => {
    if (node !== null) {
        postorderTraversal(node.left);
        postorderTraversal(node.right);
        traversalArray.push(node.value);
    }
}

// // Example usage:
// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// console.log("Inorder Traversal:");
// inorderTraversal(root);

// console.log("Preorder Traversal:");
// preorderTraversal(root);

// console.log("Postorder Traversal:");
// postorderTraversal(root);

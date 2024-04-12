import { cleanup } from '@testing-library/react';
import { TreeNode, inorderTraversal, preorderTraversal, postorderTraversal, traversalArray  } from '../samples/tree/binaryTreeTraversing';

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should traverse tree using inorderTraversal correctly', () => {
    traversalArray.splice(0, traversalArray.length);;
    inorderTraversal(root);
    expect(traversalArray).toEqual([4, 2, 5, 1, 3]);
  });

  it('should traverse tree using preorderTraversal correctly', () => {
    traversalArray.splice(0, traversalArray.length);;
    preorderTraversal(root);
    expect(traversalArray).toEqual([1, 2, 4, 5, 3]);
  });

  it('should traverse tree using postorderTraversal correctly', () => {
    traversalArray.splice(0, traversalArray.length);;
    postorderTraversal(root);
    expect(traversalArray).toEqual([4, 5, 2, 3, 1]);
  });
});

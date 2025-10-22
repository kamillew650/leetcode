import { TreeNode } from "./trees.utils";

function isBalanced(root: TreeNode | null): boolean {
    let isBalanced = true;

    function check(root: TreeNode | null): number {
        if(!root) return 0;
        

        const leftPath = check(root.left);
        const rightPath = check(root.right);

        if(Math.abs(leftPath - rightPath) > 1) {
            isBalanced = false;
        }

        return Math.max(leftPath, rightPath) + 1;
    }

    check(root);

    return isBalanced;
};

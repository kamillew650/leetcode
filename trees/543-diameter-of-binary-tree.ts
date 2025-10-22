import { TreeNode } from "./trees.utils";

function diameterOfBinaryTree(root: TreeNode | null): number {
    let longestPath = 0;

    function calculate(root: TreeNode | null): number {
        if (!root) return 0;
        const leftPath = calculate(root.left);
        const rightPath = calculate(root.right);

        longestPath = Math.max(longestPath, leftPath + rightPath);

        return Math.max(leftPath, rightPath) + 1;
    }

    calculate(root);

    return longestPath;
}

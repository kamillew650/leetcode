import { TreeNode } from "./trees.utils";

function areTreesEqual(firstTree: TreeNode | null, secondTree: TreeNode | null): boolean {
    if(firstTree?.val !== secondTree?.val) {
        return false;
    }

    if(!firstTree && !secondTree) {
        return true;
    }

    return areTreesEqual(firstTree?.left ?? null, secondTree?.left ?? null) && areTreesEqual(firstTree?.right ?? null, secondTree?.right ?? null);
}

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if(!root) {
        return false;
    }

    if(areTreesEqual(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
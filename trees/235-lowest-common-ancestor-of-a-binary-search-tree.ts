import { TreeNode } from "./trees.utils";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(!root || !p || !q) return null;

    const lowerValue = p.val < q.val ? p.val : q.val;
    const higherValue = p.val > q.val ? p.val : q.val;

    let current: TreeNode | null = root;
    while(current !== null) {
        if(current.val <= higherValue && current.val >= lowerValue) return current;

        if(current.val > higherValue) {
            current = current.left;
            continue;
        } else {
            current = current.right;
        }
    } 
	
    return null;
};
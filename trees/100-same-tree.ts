import { TreeNode } from "./trees.utils";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    
    if(p === null && q === null) return true;

    if(p?.val !== q?.val) return false;


    const isLeftTheSame = isSameTree(p?.left!, q?.left!);
    const isRightTheSame = isSameTree(p?.right!, q?.right!);
    
    return isLeftTheSame && isRightTheSame;
};


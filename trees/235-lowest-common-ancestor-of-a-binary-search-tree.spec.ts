import { describe, expect, it } from "vitest";
import { createTreeNode } from "./trees.utils";
import { compareTwoLists, createList } from "../linked-list/linked-list.utils";
import { isSubtree } from "./572-subtree-of-another-tree";
import { lowestCommonAncestor } from "./235-lowest-common-ancestor-of-a-binary-search-tree";


describe("subtree of another tree", () => {
    it("scenario 1", () => {
        const tree = createTreeNode([6,2,8,0,4,7,9,null,null,3,5]);
        const node1 = createTreeNode([2]);
        const node2 = createTreeNode([8]);

        const result = lowestCommonAncestor(tree, node1, node2);

        expect(result?.val).toBe(6);
    })

     it("scenario 2", () => {
        const tree = createTreeNode([6,2,8,0,4,7,9,null,null,3,5]);
        const node1 = createTreeNode([2]);
        const node2 = createTreeNode([4]);

        const result = lowestCommonAncestor(tree, node1, node2);

        expect(result?.val).toBe(2);
    })

     it("scenario 3", () => {
        const tree = createTreeNode([2,1]);
        const node1 = createTreeNode([2]);
        const node2 = createTreeNode([1]);

        const result = lowestCommonAncestor(tree, node1, node2);

        expect(result?.val).toBe(2);
    })
})
import { describe, expect, it } from "vitest";
import { createTreeNode } from "./trees.utils";
import { compareTwoLists, createList } from "../linked-list/linked-list.utils";
import { isSubtree } from "./572-subtree-of-another-tree";


describe("subtree of another tree", () => {
    it("scenario 1", () => {
        const tree1 = createTreeNode([3, 4, 5, 1, 2]);
        const tree2 = createTreeNode([4, 1, 2])
        const result = isSubtree(tree1, tree2);

        expect(result).toBe(true);
    })

    it("scenario 2", () => {
        const tree1 = createTreeNode([3, 4, 5, 1, 2, null, null, null, null, 0]);
        const tree2 = createTreeNode([4, 1, 2])
        const result = isSubtree(tree1, tree2);

        expect(result).toBe(false);
    })
})
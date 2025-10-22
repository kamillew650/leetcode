import {describe, expect, it} from "vitest";
import { invertTree } from "./226-invert-binary-tree";
import { TreeNode } from "./trees.utils";


describe("78. subsets", () => {

    it("test 1", () => {
        const tree = new TreeNode(1);
        expect(invertTree(tree)).toEqual(tree)
    })
}) 
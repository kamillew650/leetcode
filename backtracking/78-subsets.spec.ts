import { describe, expect, it } from "vitest";
import { subsets } from "./78-subsets";

describe("subsets test", () => {
    it("empty scenario", () => {
        const result = subsets([])

        expect(result).toStrictEqual([[]])
    });

    it("scenario 1", () => {
         const result = subsets([1,2,3])

        expect(result).toStrictEqual([[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]])
    })

    it("scenario 2", () => {
         const result = subsets([0])

        expect(result).toStrictEqual([[],[0]])
    })
}) 
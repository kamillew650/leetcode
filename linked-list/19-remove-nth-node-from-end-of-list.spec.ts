import { describe, expect, it } from 'vitest';
import { reorderList } from './143-reorder-list';
import { compareTwoLists, createList, ListNode } from './linked-list.utils';
import { removeNthFromEnd } from './19-remove-nth-node-from-end-of-list';

describe("remove nth node from end of the list", () => {
     it("scenario 1", () => {
        const head = createList([1,2,3,4,5]);
        const result = removeNthFromEnd(head, 2);

        expect(compareTwoLists(result, createList([1,2,3,5]))).toBe(true);
    })

    it("scenario 2", () => {
        const head = new ListNode(1);
        const result = removeNthFromEnd(head, 1);

        expect(result).toBe(null);
    })

         it("scenario 3", () => {
        const head = createList([1,2]);
        const result = removeNthFromEnd(head, 1);

        expect(compareTwoLists(result, createList([1]))).toBe(true);
    })

    it("scenario 4", () => {
        const head = createList([1,2]);
        const result = removeNthFromEnd(head, 2);

        expect(compareTwoLists(result, createList([2]))).toBe(true);
    })
})
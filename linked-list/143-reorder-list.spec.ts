import { describe, expect, it } from 'vitest';
import { reorderList } from './143-reorder-list';
import { createList, ListNode } from './linked-list.utils';

describe("reorder list test", () => {
    it("empty scenario", () => {
        const head = new ListNode(2);
        reorderList(head)

        expect(head.val).toBe(2);
    })

    it("scenario 1", () => {
        const head = createList([1, 2, 3, 4]);
        reorderList(head)
        expect(head?.val).toBe(1);
        expect(head?.next?.val).toBe(4);
        expect(head?.next?.next?.val).toBe(2);
        expect(head?.next?.next?.next?.val).toBe(3);
    })

    it("scenario 2", () => {
        const head = createList([1,2,3,4,5]);
        reorderList(head)
        expect(head?.val).toBe(1);
        expect(head?.next?.val).toBe(5);
        expect(head?.next?.next?.val).toBe(2);
        expect(head?.next?.next?.next?.val).toBe(4);
        expect(head?.next?.next?.next?.next?.val).toBe(3);
    })
})
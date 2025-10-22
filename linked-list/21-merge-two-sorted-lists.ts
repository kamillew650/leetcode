class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null,
): ListNode | null {
    if (!list1 && !list2) return null;

    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    const isList1FistElementLower = list1?.val < list2?.val;

    let newHead = isList1FistElementLower ? new ListNode(list1.val) : new ListNode(list2.val);
    let helperPointer = newHead;
    let list1Pointer: ListNode | null = isList1FistElementLower ? list1.next : list1;
    let list2Pointer: ListNode | null = isList1FistElementLower ? list2 : list2.next;

    while (!!list1Pointer || !!list2Pointer) {
        if (!list1Pointer || list2Pointer?.val! < list1Pointer?.val!) {
            helperPointer.next = new ListNode(list2Pointer?.val);
            helperPointer = helperPointer.next;
            list2Pointer = list2Pointer?.next ?? null;
        } else{
            helperPointer.next = new ListNode(list1Pointer.val);
            helperPointer = helperPointer.next;
            list1Pointer = list1Pointer.next ?? null;
        }
    }

    return newHead;
}

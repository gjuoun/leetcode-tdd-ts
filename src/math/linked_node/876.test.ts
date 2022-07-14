/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null;
  else if (!head.next) return head;
  else if (!head.next.next) return head.next;
  // make sure the list has at least 3 nodes

  const array: ListNode[] = [head];
  let current = head;
  while (current.next) {
    array.push(current);
    current = current.next;
  }

  if (array.length % 2 === 1) {
    // odd array, return last half
    const middleIndex = Math.round(array.length / 2); //?
    return array[middleIndex];
  } else {
    // even array, return middle + 1
    const middleIndex = array.length / 2 + 1; //?
    return array[middleIndex];
  }
}

function middleNode2(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (slow && fast?.next) {
    slow = slow?.next;
    fast = fast?.next?.next;
  }

  return slow;
}

const head1 = new ListNode(1);
const head2 = new ListNode(1, new ListNode(2));

const head5 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

const head6 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  )
);

middleNode(head5); //?
// middleNode(head2); //?

describe("middleNode", () => {
  const cases = [
    { input: head1, output: head1 },
    { input: head2, output: head2.next },
    { input: head5, output: head5.next?.next },
    { input: head6, output: head6.next?.next?.next },
  ];
  it("should pass", () => {
    cases.forEach(({ input, output }) => {
      expect(middleNode(input)).toEqual(output);
    });
  });

  it("should pass", () => {
    cases.forEach(({ input, output }) => {
      expect(middleNode2(input)).toEqual(output);
    });
  });
});

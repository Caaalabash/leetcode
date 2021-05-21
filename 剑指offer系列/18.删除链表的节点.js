function deleteNode(head, val) {
  const dummy = { next: head }
  let prev = dummy
  let cur = head

  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next
    }
    prev = cur
    cur = cur.next
  }

  return dummy.next
}

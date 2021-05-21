function reverseList(head) {
  let prev = null
  let cur = head

  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}

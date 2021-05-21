function mergeTwoLists(l1, l2) {
  const dummy = { next: null }
  let cur = dummy

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = { next: null, val: l1.val }
      l1 = l1.next
    } else {
      cur.next = { next: null, val: l2.val }
      l2 = l2.next
    }
    cur = cur.next
  }
  if (l1) {
    cur.next = l1
  } else if (l2) {
    cur.next = l2
  }

  return dummy.next
}

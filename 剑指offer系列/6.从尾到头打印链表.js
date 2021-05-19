// 从头到尾存储值，reverse
function reversePrint(head) {
  const arr = []
  while (head != null) {
    arr.push(head.val)
    head = head.next
  }
  return arr.reverse()
}

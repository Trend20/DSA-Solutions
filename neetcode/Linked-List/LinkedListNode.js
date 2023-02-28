export default class LinkedListNode {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

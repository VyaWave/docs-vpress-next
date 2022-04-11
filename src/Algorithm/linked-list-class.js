/**
 * Linked List
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  isValidIndex(index) {
    return index < 0 || index >= this.length;
  }

  // 获取链表中索引所对应的元素
  getElementAt = index => {
    if (this.isValidIndex(index)) return null;

    let current = this.head;

    while (index--) {
      current = current.next;
    }

    return current;
  };

  // 向链表中追加节点
  append = val => {
    const node = new ListNode(val);

    if (this.head == null) {
      this.head = node;
    } else {
      const last = this.getElementAt(this.length - 1);
      last.next = node;
    }

    this.length++;
  };

  // 在链表的指定位置插入节点
  insert = (val, index) => {
    if (this.isValidIndex(index)) {
      console.error('===== No Valid Index ======');
      return false;
    }

    const node = new ListNode(val);

    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const preNode = this.getElementAt(index - 1);
      node.next = preNode.next;
      preNode.next = node;
    }

    this.length++;

    return true;
  };

  // 删除链表中指定位置的元素
  remove = val => {
    const index = this.indexOf(val);

    return this.removeAt(index);
  };

  // 删除链表中指定位置的元素，并返回这个元素的值
  removeAt = index => {
    if (index == 0) {
      const nextNode = this.head.next;

      this.head = nextNode;
    } else {
      const preNode = this.getElementAt(index - 1);
      if (preNode && preNode.next && preNode.next.next) {
        preNode.next = preNode.next.next;
      }
    }

    this.length--;

    return true;
  };

  // 获取链表中给定元素的索引
  indexOf = function (val) {
    let current = this.head;

    const length = this.length;

    for (let i = 0; i < length; i++) {
      if ((current.val = val)) return i;

      current = current.next;
    }

    return -1;
  };

  // 获取链表中某个节点
  find = function (val) {
    let current = this.head;

    while (current) {
      if (current.val === val) {
        return current;
      }

      current = current.next;
    }
    return null;
  };

  // 判断链表是否为空
  isEmpty = function () {
    return this.length === 0;
  };

  // 获取链表的长度
  size = function () {
    return this.length;
  };
  // 获取链表的头元素

  getHead = function () {
    return this.head;
  };

  // 清空链表
  cleanAll = function () {
    this.head = null;
    this.length = 0;
  };

  // 序列化链表
  join = function (splitString) {
    let current = this.head;

    let str = '';

    while (current) {
      str += current.val;

      if (current.next) {
        str += splitString;
      }

      current = current.next;
    }

    return str;
  };
}

let linkedList = new LinkedList();

console.info('linkedList', linkedList);
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

console.log(linkedList.join('--'));

linkedList.insert(0, 5);
linkedList.insert(2, 15);
linkedList.insert(4, 25);
console.log(linkedList.join('--'));

// console.log(linkedList.removeAt(0));
// console.log(linkedList.removeAt(1));
// console.log(linkedList.removeAt(2));
console.log(linkedList.join('--'));

console.log(linkedList.indexOf(20));

linkedList.remove(20);

console.log(linkedList.join('--'));

console.log(linkedList.find(10));

linkedList.cleanAll();
console.log(linkedList.size());

/**
 * Linked List
 */

function ListNode(val) {
  this.val = val;
  this.node = null;
}

function LinkedList() {
  this.length = 0;
  this.head = null;
}

LinkedList.prototype.isValidIndex = index => {
  return index < 0 || index >= this.length;
};

// 获取链表中索引所对应的元素
LinkedList.prototype.getElementAt = function (index) {
  if (this.isValidIndex(index)) return null;

  let current = this.head;

  while (index--) {
    current = current.next;
  }

  return current;
};

// 向链表中追加节点
LinkedList.prototype.append = val => {
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
LinkedList.prototype.insert = (val, index) => {
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

// 删除链表中指定位置的元素，并返回这个元素的值
LinkedList.prototype.removeAt = index => {
  if (index == 0) {
    const nextNode = this.head.next;

    this.head = nextNode;
  } else {
    const preNode = this.getElementAt(index - 1);
    preNode.next = preNode.next.next;
  }

  this.length--;

  return true;
};

// 删除链表中指定位置的元素
LinkedList.prototype.remove = val => {
  const index = this.indexOf(val);

  return this.removeAt(index);
};

// 获取链表中给定元素的索引
LinkedList.prototype.indexOf = function (val) {
  let current = this.head;

  const length = this.length;

  for (let i = 0; i < length; i++) {
    if ((current.val = val)) return i;

    current = current.next;
  }

  return -1;
};

// 获取链表中某个节点
LinkedList.prototype.find = function (val) {
  const current = this.head;

  while (current) {
    if (current.val === val) {
      return current;
    }

    current = current.next;
  }
  return null;
};

// 判断链表是否为空
LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// 获取链表的长度
LinkedList.prototype.size = function () {
  return this.length;
};

// 获取链表的头元素
LinkedList.prototype.getHead = function () {
  return this.head;
};

// 清空链表
LinkedList.prototype.clear = function () {
  this.head = null;
  this.length = 0;
};

// 序列化链表
LinkedList.prototype.join = function (splitString) {
  let current = this.head;

  let str = '';

  while (current) {
    str += cur.val;

    if (cur.next) {
      str += splitString;
    }

    current = current.next;
  }

  return str;
};

let linkedList = new LinkedList();

console.info('linkedList', linkedList);
// linkedList.append(10);
// linkedList.append(20);
// linkedList.append(30);

// console.log(linkedList.join('--'));

// linkedList.insert(0, 5);
// linkedList.insert(2, 15);
// linkedList.insert(4, 25);
// console.log(linkedList.join('--'));

// console.log(linkedList.removeAt(0));
// console.log(linkedList.removeAt(1));
// console.log(linkedList.removeAt(2));
// console.log(linkedList.join('--'));

// console.log(linkedList.indexOf(20));

// linkedList.remove(20);

// console.log(linkedList.join('--'));

// console.log(linkedList.find(10));

// linkedList.clear();
// console.log(linkedList.size());

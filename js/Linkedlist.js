class ListItem {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}

class Linkedlist {
  constructor(...items) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (const item of items) {
      this.push(item);
    }
  }
  push(value) {
    const newItem = new ListItem(value);
    {
      if (this.length === 0) {
        this.head = newItem;
        this.tail = newItem;
      } else {
        this.tail.next = newItem;
        newItem.prev = this.item;
        this.tail = newItem;
      }
      return ++this.length;
    }
  }
}

// function hash(key, arrayLength) {
//   let total = 0;

//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLength;
//   }
//   return total;
// }

//Not good at all, not constant time, not very random

// function hash(key, arrayLength) {
//   let total = 0;
//   let primeNumber = 31;

//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;

//     total = (total * primeNumber + value) % arrayLength;
//   }

//   return total;
// }

//slightly better. In allmost constant time, random number using prime

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let primeNumber = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * primeNumber + value) % this.keyMap.length;
    }
    return total;
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        let individualKey = this.keyMap[index][i][0];
        if (individualKey == key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}

let ht = new HashTable();

ht.set("hello world", "goodbye!!");
ht.set("hello world", "goodbye!!");
ht.set("hello world", "goodbye!!");

console.log(ht.keyMap);
console.log(ht.get("hello world"));

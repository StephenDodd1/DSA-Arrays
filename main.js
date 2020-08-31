function main() {
  Array.SIZE_RATIO = 3;
  let arr = new Array();
  arr.push(13);
  arr.push(-2);
  arr.push(3);
  arr.push(1);
  arr.push(-45);
  arr.push(2);
  //arr.pop();
  //arr.pop();
  //arr.pop();
  arr = new Array();
  arr.push("www.thinkful.com /tauh ida parv een");
  arr.push("tauhida praveen");
  function removeSpaces(a) {
    for (let i = 0; i < a.length; i++) {
      arr[i] = a[i].split(" ").join("%20");
    }
  }
  function removeLessThan5(a) {
    for (let i = 0; i < arr.length; i++) {
      if (a[i] < 5) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  function findMaxSum(a) {
    let g = 0;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      g += a[i];
      if (max < g) {
        max = g;
      }
    }
    return console.log(max);
  }

  function mergeTwoArrs(a, b) {
    const c = [];
    console.log(a, b);
    while (a.length !== 0 && b.length !== 0) {
      if (a[0] > b[0]) {
        c.push(b[0]);
        b.shift();
      } else if (a[0] < b[0]) {
        c.push(a[0]);
        a.shift();
      } else {
        c.push(a[0]);
        a.shift();
      }
    }
    if (a.length !== 0) {
      while (a.length !== 0) {
        c.push(a[0]);
        a.shift();
      }
    }
    if (b.length !== 0) {
      while (b.length !== 0) {
        c.push(b[0]);
        a.shift();
      }
    } else console.log(c);
  }
  function removeVowels(str) {
    let newStr = str;
    const vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
      for (let v = 0; v < vowels.length; v++) {
        newStr = newStr.replace(`${vowels[v]}`, "");
      }
    }
    console.log(newStr)
  }
  function productOfAllButSelected(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
      let total = 1
      for(let p = 0; p < arr.length; p++) {
        if(i !== p){
          total *= arr[p]
        }
      }
      newArr.push(total)
    }
    return console.log(newArr)
  }
  productOfAllButSelected([1,2,3])
  //removeVowels(arr[0]);
  //removeVowels(arr[1]);
  //mergeTwoArrs([1, 2, 4, 5, 7], [3, 4, 6]);
  //findMaxSum(arr)
  //removeLessThan5(arr);
  //removeSpaces(arr);
  //console.log(max);
}
module.exports = main;

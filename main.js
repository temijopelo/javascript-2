// String Manipulation Functions

// #1

function revString(str) {
  let count = "";

  for (let i = str.length - 1; i >= 0; i--) {
    count = count + str[i];
  }
  return count;
}
let result = "Bodarin";
console.log("normal:" + result);
let resultRev = revString(result);
console.log("reversed:" + resultRev);

// #2
let text = "David";

function countCharacter(str) {
  return str.length;
}

console.log(countCharacter(text));

// #3

let letter = "bolade is a girl";

function capLetter(str) {
  let wordSplitted = str.split(" ");

  let capWord = wordSplitted
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  return capWord;
}

console.log(capLetter(letter));

// Array

function findMinNumber(arr) {
  if (arr.length === 0) {
    return null;
  }

  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

const seq = [1, 4, 9, 1000, 49, 11, 100, 7, 99, 12000, 57, 717];

function findMaxNumber(arr) {
  if (arr.length === 0) {
    return null;
  }

  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
console.log(findMinNumber(seq));
console.log(findMaxNumber(seq));

function sumNumber(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}

console.log(sumNumber(seq));

// filter array

function filterArray(arr) {
  let filterdArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      {
        filterdArray.push(arr[i]);
      }
    }
  }

  return filterdArray;
}

console.log(filterArray(seq));

// mathematical function

function factorial(n) {
  let count = 1;

  for (let i = 1; i <= n; i++) {
    count = count * i;
  }

  return count;
}

let na = 10;

console.log(factorial(na));

function isPrimeNumber(n) {
  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function checkPrimeNumber(arr) {
  let primeNumber = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrimeNumber(arr[i])) {
      primeNumber.push(arr[i]);
    }
  }

  return primeNumber;
}

let res = checkPrimeNumber(seq);

console.log(res);

function fibu(nns) {
  let fubuseq = [];

  if (nns <= 0) {
    return fubuseq;
  }

  let a = 0,
    b = 1;

  fubuseq.push(a);
  if (nns > 1) {
    fubuseq.push(b);
  }

  for (let i = 2; i < nns; i++) {
    let next = b + a;
    fubuseq.push(next);
    a = b;
    b = next;
  }

  return fubuseq;
}

console.log(fibu(10));

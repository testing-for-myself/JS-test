const {performance} = require('perf_hooks');



const bstBAD = (arr, n) => {
	var left, right, mid;
	left = 0;
	right = arr.length-1;
	mid = arr.length / 2;
	console.log(mid);
	while (left <= right) {
		if(left == right) {
			return false;
		}
		if(arr[mid] == n) {
			return "true " + arr[mid];
		}
		if (arr[mid] > n) {
			//look to the left
			right = mid;
			mid = Math.floor((left+right) / 2);
			console.log("left is; " + left);
			console.log("right is; " + right);
			console.log("mid is; " + mid);
		}
		if (arr[mid] < n) {
			//look to the right
			left = mid;
			mid = Math.floor((left+right) / 2);
						console.log("left is; " + left);
			console.log("right is; " + right);
			console.log("mid is; " + mid);
		}
		//break;
}
	return arr;
}




const bst = (arr,target) => {
	var left =0;
	var right = arr.length-1;

	while (left <= right) {
		let mid = Math.floor((left+right)/2);
		console.log(`mid is ${mid}`);
		if(target === arr[mid]) {
			return true;
		}
		else if (mid > target) {
			right = mid -1;
		}
		else {
			left = mid +1;
			console.log(left);
		}
	}
	return false;
}



console.log(bst([1,2,3,4], 235));
/*



function validParentheses1(parens){

	var parMap = [];
	for(let x = 0; x<parens.length;x++) {
		if(parMap[parens[x]]) {
			parMap[parens[x]] +=1;
		}
		else {
			parMap[parens[x]] = 1;
		}
	}


	var newMap = new Map();
	for (i in parens) {
		var val = parens[i];
		if(newMap.has(val)) {
			newMap.set(parens[i], newMap.get(val)+1);
		}
		else {
			newMap.set(parens[i], 1);
		}
	}


console.log(newMap);
	var count;
	for(let value of newMap.values()) {
		count = values;

		console.log(value);
	} 

	//var openCount = par
	console.log(newMap);
	console.log(newMap[Object.keys(newMap)[0]]);
	//console.log(parMap.keys().next().value);
	//return parMap;
}



function validParentheses(parens) {
	var depth =0;
	for (x in parens) {
		if(parens[x] == '(') {
			depth++;
		}
		else {
			depth--;
		}
		if(depth < 0 ) 
			{ 
				return false;
			 }
	}
	if(depth > 0) {
		return false;
	}
	return true;
}


console.log(validParentheses("((())"));
/*




function toCamelCase(str) {
	var newStr = "";
	str= str.split("");
	for(let x = 0; x<str.length;x++) {
		if(str[x] == '-' || str[x] == '_') {
			str[x+1] = str[x+1].toUpperCase();
		}
		else {
			newStr+=str[x];
		}
	}
	return newStr;
}




console.log(toCamelCase("the-stealth-warrior"));
/*


function leastMissingPositive(arr) {
  arr.sort((a, b) => a - b);
	for(let x =0; x<arr.length;x++) {
		if((arr[x]+1) !== arr[x+1]) {
			if(arr[x]+1 ==0) {
      	continue;
      }
        else {
        	return arr[x]+1;
      }
    }
    else {
    	return 1;
    }
  }
}

console.log(leastMissingPositive([5, 6, 7, 8, 9]));
console.log(leastMissingPositive2([3,5,-1,1]));
/*

function subarraySum(nums, n) {
  let sumsMap = { 0: 1 }; // hash of prefix sums
  let sum = 0;
  for (let num of nums) {
    sum += num; // increment current sum
    if (sumsMap[sum - n]) {
      return true;
    }
    // store sum so far in hash with truthy value
    sumsMap[sum] = true;
  }
  return false;
}

const arr = [1, 2, 99, 3],
  sum = 5;
console.log(subarraySum(arr, sum));
/*



const maxSequence = arr => {

	const allPositives = arr =>arr.every(n => n >0);
	const allNegatives = arr => arr.every(n => n < 0);

	if(arr.length === 0 || allNegatives(arr)) return 0;

	const temp = {start: 0, sum: 0}; 
	let result = {start: 0, end: 0, sum: 0};

	for(let i =0; i <arr.length; i++) {
		temp.sum += arr[i];

		if(temp.sum > result.sum) {
			result = {start: temp.start, end: 1, sum: temp.sum};
		}

		if(temp.sum <0) {
			temp.sum =0;
			temp.start = i+1;
		}
	}
	return result;
}


console.log(maxSequence([1,2,5,5,6,2]));
/*
const removeDuplicates = (arr) => {
	var arrSet = new Set();
	for (let x=0;x<arr.length;x++) {
		arrSet.add(arr[x]);
	}
	return arrSet;
}

console.log(removeDuplicates([1,4,5,5,6,99,2]));

/*
function isLetter(character) {
	return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
  }



const wordCloud = (str) => {
	var wordArray = [];
	for(let x=0; x<str.length;x++) {
		if(isLetter(str[x])) {
			console.log(str[x]);
		}
	}



	var wordMap = [];
	var s = str.split(" ");
	for(x in s) {
		if (wordMap[s[x]]) {
			wordMap[s[x]]+=1;
		}
		else {
			wordMap[s[x]] = 1;
		}
		//console.log(s[x]);
	}
	return wordMap;
}



var str = "After beating the eggs, Dana read the next step:";
console.log(wordCloud(str));
/*

const highestScore = (scores, highestPossibleScore) => {
	var countMap = {};
	for(let x = 0; x<scores.length;x++) {
		if(countMap[scores[x]]) {
			countMap[scores[x]] += 1;
		}
		else {
			countMap[scores[x]] = 1;
		}
	}




  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
console.log(scoreCounts);
  // Populate scoreCounts
  scores.forEach(score => {
    scoreCounts[score]++;
  });
console.log(scoreCounts);
	return countMap;
}

console.log(highestScore([4,77,86,77,55], 100))



/*






class HashmapM {
  constructor(flightLength, moviesArr) {
    this._storage = {};
    this._flightLength = flightLength;
    this._moviesArr = moviesArr;
  }

  hashStr() {
  	let finalHash = 0;
  	for(let i = 0; i < this._moviesArr.length; i++) {
    	for(let j = i + 1; j < this._moviesArr.length; j++) {
        	finalHash+= moviesArr[i] + moviesArr[j];
        	this._storage[finalHash] = [moviesArr[i],moviesArr[j]];
        	finalHash = 0;
    	}
	}
		if(this._storage[flightLength]) {
			return this._storage[flightLength];
		}
  }
}


var flightLength = 180;
var moviesArr = [92, 101, 85, 95];
var a = new HashmapM(flightLength, moviesArr);
console.log(a.hashStr());




  function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];
   const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      console.log(movieLengthsSeen);
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}

console.log(canTwoMoviesFillFlight(moviesArr,flightLength));





/*


class Hashmap {
  constructor() {
    this._storage = [];
  }

  hashStr(str) {
    let finalHash = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      finalHash += charCode;
    }
    console.log(finalHash);
    return finalHash;
  }

  set(key, val) {
    let idx = this.hashStr(key);

    if (!this._storage[idx]) {
      this._storage[idx] = [];
    }

    this._storage[idx].push([key, val]);
    console.log(this._storage);
  }

get(key) {
    let idx = this.hashStr(key);

    if (!this._storage[idx]) {
      return undefined;
    }

    for (let keyVal of this._storage[idx]) {
      if (keyVal[0] === key) {
        return keyVal[1];
      }
    }
  }
}


var b = new Hashmap();
console.log(b.set('name', 'jack'));



/*












class Hashmap {
  constructor() {
    this._storage = [];
  }

  hashStr(str) {
    let finalHash = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      finalHash += charCode;
    }
    return finalHash;
  }

  set(key, val) {
    let idx = this.hashStr(key);

    if (!this._storage[idx]) {
      this._storage[idx] = [];
    }

    this._storage[idx].push([key, val]);
  }

get(key) {
    let idx = this.hashStr(key);

    if (!this._storage[idx]) {
      return undefined;
    }

    for (let keyVal of this._storage[idx]) {
      if (keyVal[0] === key) {
        return keyVal[1];
      }
    }
  }
}

var a = new Hashmap();
a.set('jack', '12345');
console.log(a.get('jack'));
/*



































  class Trie {
  constructor() {
    this.rootNode = {};
  }

  addWord(word) {
    let currentNode = this.rootNode;
    let isNewWord = false;
    // Work downwards through the trie, adding nodes
    // as needed, and keeping track of whether we add
    // any nodes.
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      console.log(char);
      if (!currentNode.hasOwnProperty(char)) {
        isNewWord = true;
        currentNode[char] = {};
      }
      currentNode = currentNode[char];
    }

    // Explicitly mark the end of a word.
    // Otherwise, we might say a word is
    // present if it is a prefix of a different,
    // longer word that was added earlier.
    if (!currentNode.hasOwnProperty('End of Word')) {
      isNewWord = true;
      currentNode['End of Word'] = {};
    }
console.log(currentNode);
    return isNewWord;
  }
}


var a = new Trie();
console.log(a.addWord('www.google.com'));
console.log(a.addWord('www.google.com/about'));
/*






const mergeIntervals = (arr) => {
	var first_start = arr[0][0];
	return first_start;
}




console.log(mergeIntervals([[1, 4], [2, 5], [7, 10], [12, 16]]));
/*


let tes = [1,2,3,4,5];  



function subarraySum(nums, n) {
  let sumsMap = { 0: 1 }; // hash of prefix sums
  let sum = 0;
  let subSum = 0;
  let idx = 0;
  let arrValues = [];
  for (let num of nums) {
    sum += num; // increment current sum
    if (sumsMap[sum - n]) {
    	arrValues.push(num);
    	subSum+=num;
    	while (subSum != n) {
    		let subNum = nums[idx-1];
    		console.log(subNum);
    		arrValues.push(subNum);
    		subSum+=subNum;
    		idx--;
    	}
	console.log(arrValues);
      return true;
    }
    // store sum so far in hash with truthy value
    sumsMap[sum] = true;
    idx++;
  //console.log(sumsMap);    
  }
  return false;
}

console.log(subarraySum([1,2,4,9,4,0,1], 5));
/*


const findDuplicatesJ = (str) => {
	var newArr = str.toLowerCase().split(" ");
	var duplicates = [];
	var counts = {};
	var ch, index, len, count;

	for (index = 0, len = newArr.length; index < len; ++index) {
		ch = newArr[index];
		count = counts[ch];

		counts[ch] = count ? count + 1 : 1;
	}
	for (let k in counts) {
		if (counts[k] > 1) {
			duplicates.push(k);
		};
	}
	return duplicates;
}

function findDuplicatesA(str) {
  const dupes = [];
  const strLowerCase = str.toLowerCase();
  const strArr = strLowerCase.split(" ");
  const wordFreqCounter = {};

  strArr.forEach((word) => {
    if (!wordFreqCounter[word]) {
      wordFreqCounter[word] = 1;
    } else {
      wordFreqCounter[word] += 1;
    }
  });

  let allKeys = Object.keys(wordFreqCounter);

  allKeys.forEach((key) => {
    if (wordFreqCounter[key] > 1) {
      dupes.push(key);
    }
  });

  return dupes;
}



var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6];
  return content;
};
var randSentence = sentence();


const startTime = performance.now();
console.log(findDuplicatesJ(randSentence));
const endTime = performance.now();


console.log(`my time in: ${endTime- startTime} ms`);

const startTime1 = performance.now();
console.log(findDuplicatesJ(randSentence));
const endTime1 = performance.now();


console.log(`algo time in: ${endTime1- startTime1} ms`);

/*

const sumDigits = (num) => {
	let newNum  = num.toString();
	let sum = 0;
	for(x in newNum) {
		sum+=parseInt(newNum[x]);
	}
	return sum >= 10 ? sumDigits(sum) : sum;
}


function sumDigits1(nr){
    let asStr = nr.toString();
    let sum = asStr.split("").reduce((a, c) => {
         a+=parseInt(c);
         return a;
    }, 0);
    //console.log(sum);
    return sum >= 10 ? sumDigits1(sum) : sum;
}



const randNumber = Math.floor(Math.random() *99990000000000000);
console.log(randNumber);
const start1 = performance.now();
console.log(sumDigits(randNumber));
const end1 = performance.now();

console.log(`my time in: ${end1- start1} ms`);


const start21 = performance.now();
console.log(sumDigits1(randNumber));
const end21 = performance.now();

console.log(`their time in: ${end21- start21} ms`);



/*
function majorityElementJ(arr) {
	//arr = arr.join('');
	var counts = {};
var countsWithKeys = [];
// Misc vars
var ch, index, len, count;
// Loop through the string...
for (index = 0, len = arr.length; index < len; ++index) {
    // Get this character
    ch = arr[index]; // Not all engines support [] on strings
    // Get the count for it, if we have one; we'll get `undefined` if we
    // don't know this character yet;
    count = counts[ch];
// If we have one, store that count plus one; if not, store one
    // We can rely on `count` being falsey if we haven't seen it before,
    // because we never store falsey numbers in the `counts` object.
    counts[ch] = count ? count + 1 : 1;
}
console.log(counts);
let counter = 1;
var finalNum;
//console.log(arr.length/2);
for(let k in counts) {
	if (counts[k] > Math.floor(arr.length/2)) {
		return k;
	}
	else {
		return false;
	}
}

}

function majorityElementA(nums) {
  var sortedNums = nums.sort();
  //console.log(sortedNums);
  return sortedNums[Math.floor(nums.length / 2)] ;
}



var randArr = [];
for (let i = 0; i <30; i++) {
  const randNumber = Math.floor(Math.random() *2);
  randArr.push(randNumber);
}
console.log(randArr);

const start1 = new Date();
console.log(majorityElementJ(randArr));
const end1 = new Date();

console.log(`my time in: ${end1- start1} ms`);



const start2 = new Date();
console.log(majorityElementA(randArr));
const end2 = new Date();

console.log(`algo time in: ${end2- start2} ms`);

/*


















function characterMap(str) {
// A map (in JavaScript, an object) for the character=>count mappings
var counts = [];
var countsWithKeys = [];
// Misc vars
var ch, index, len, count;

// Loop through the string...
for (index = 0, len = str.length; index < len; ++index) {
    // Get this character
    ch = str.charAt(index); // Not all engines support [] on strings

    // Get the count for it, if we have one; we'll get `undefined` if we
    // don't know this character yet
    count = counts[ch];

// If we have one, store that count plus one; if not, store one
    // We can rely on `count` being falsey if we haven't seen it before,
    // because we never store falsey numbers in the `counts` object.
    counts[ch] = count ? count + 1 : 1;
}
  var keys = Object.keys(counts);
  keys.sort();
  for (let i = 0; i < keys.length; i++) {
    k = keys[i];
    countsWithKeys[k] = counts[k];

  }

return countsWithKeys;

}




function lonelyNumber(arr) {
	arr = arr.join('');
	var counts = {};
var countsWithKeys = [];
// Misc vars
var ch, index, len, count;
// Loop through the string...
for (index = 0, len = arr.length; index < len; ++index) {
    // Get this character
    ch = arr.charAt(index); // Not all engines support [] on strings
    // Get the count for it, if we have one; we'll get `undefined` if we
    // don't know this character yet;
    count = counts[ch];
// If we have one, store that count plus one; if not, store one
    // We can rely on `count` being falsey if we haven't seen it before,
    // because we never store falsey numbers in the `counts` object.
    counts[ch] = count ? count + 1 : 1;
}

for(let k in counts) {
	if (counts[k] == 1) {
		return k;
	}
}


	//return characterMap(String(str));
}


function findElement(arr) {
  var ones = 0;
  var twos = 0;
  for (var i = 0; i < arr.length; i++) {
    ones = (ones ^ arr[i]) & ~twos;
    twos = (twos ^ arr[i]) & ~ones;
  }
  return ones;
}


const arr = [4,4,6,1,3,1,3];
console.log(lonelyNumber(arr));
console.log(findElement(arr));



















/*





function anaGram1(str1, str2) {
 var a=  characterMap(str1);
 aKeys = Object.keys(a);
 let length = Object.keys(a).length;
 var b = characterMap(str2);
 bKeys = Object.keys(b);
 for(let x = 0; x<length; x++) {
  if (aKeys[x] != bKeys[x] || a[aKeys[x]] != b[bKeys[x]]) {
    return false;
  }
 }
 return true;
}

function isAnagram(str1, str2) {
  let a = str1.toLowerCase();
  let b = str2.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}







const alphabet = "abcdefghijklmnopqrstuvwxyz";
var randStr = "";
var randStr2 = "";

for (let i = 0; i <8000000; i++) {
  randStr += alphabet[Math.floor(Math.random() * 22) + 1]; 
  //const randNumber = Math.floor(Math.random() *100);
  //randArray.push(randNumber);
}
for (let i = 0; i <8000000; i++) {
  randStr2 += alphabet[Math.floor(Math.random() * 22) + 1]; 
}



const start1 = new Date();
console.log(anaGram1(randStr, randStr2));
const end1 = new Date();

console.log(`my time in: ${end1- start1} ms`);

const start2 = new Date();
console.log(isAnagram(randStr, randStr2));
const end2 = new Date();

console.log(`algo time in: ${end2- start2} ms`);











function isPalindrome(str) {
  if (!str || str === "") {
    return true;
  } else {
    let left = 0;
    let right = str.length - 1;
    let leftChar;
    let rightChar;

    while (left < right) {
      leftChar = str.charAt(left).toLowerCase();
      rightChar = str.charAt(right).toLowerCase();

      if (isAlphaNumeric(leftChar) && isAlphaNumeric(rightChar)) {
        if (leftChar == rightChar) {
          left++;
          right--;
        } 
        else {
          return false;
        }
      } 
      else {
        if (!isAlphaNumeric(leftChar)) {
          left++;
        }
        if (!isAlphaNumeric(rightChar)) {
          right--;
        }
      }
    }

    return true;
  }
}

function isAlphaNumeric(c) {
  if (/[^a-zA-Z0-9]/.test(c)) {
    return false;
  } else {
    return true;
  }
}




const isPalindrome2 = (str) => {
	str = str.replace(/[^0-9a-z]/gi, '');
	//str = str.toLowerCase();
	let leftPos = 0;
	let rightPos = str.length-1;
	while (leftPos < rightPos) {
    	if (str.charAt(leftPos) != str.charAt(rightPos)) {
			return false;
		}
	  	rightPos--;	
	  	leftPos++;	
	}
    return  true;
}


function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
const testString = makeid(40000000)


const start21 = new Date();
console.log(isPalindrome(testString));
const end21 = new Date();

console.log(`my time in: ${end21- start21} ms`);

const start22 = new Date();
console.log(isPalindrome2(testString));
const end22 = new Date();

console.log(`algo time in: ${end22- start22} ms`);










function zerosToEnd1(nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[insertPos++] = nums[i];
    }
  }
  for (let j = insertPos; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
}

function zerosToEnd2(nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      insertPos++;
      //nums.splice(i,1);
    }
  }

for (let i = 0; i < insertPos; i++) {
    nums.push(0);
  }

  return nums;
}

const randArray = [];
for (let i = 0; i <100000000; i++) {
  const randNumber = Math.floor(Math.random() *100);
  randArray.push(randNumber);
}


*/
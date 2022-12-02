# JS-Code-Prep

Local development for hackerrank and neetcode 150.

## Intention

For the first few [twoSum, validAnagrams, containsDuplicates, groupAnagrams] I
wanted to aim for the lowest Big-O notation values. Practically, I realize there
is more value in getting a working solution, then making it slightly more
efficient without seeking perfection. This better reflects real world scenarioes
rather than performing premature optimization.

### Example

Practically speaking, for a problem like groupAnagrams I would prefer to sort
the strings and use a map, like so:

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const arr = [];

  const mapper = new Map(); // Space - O(n)

  for (let i = 0; i < strs.length; i++) {
    const newStr = arrange(strs[i]); // Time - O(nlogn)
    createMap(mapper, newStr, strs[i]);
  }
  for (let [key, value] of mapper) {
    arr.push(value);
  }
  return arr;
};

function arrange(str) {
  return str.split('').sort().join(''); // Time - O(nlogn)
}

function createMap(mapTab, key, val) {
  if (!mapTab.get(key)) {
    mapTab.set(key, [val]);
  } else {
    mapTab.set(key, [...mapTab.get(key), val]);
  }
}
```

rather than being more efficient with a solution like this:

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  if (!strs.length) return [];
  const res = new Map();
  for (let str of strs) {
    const key = getKey(str);
    if (res.has(key)) {
      res.get(key).push(str);
    } else {
      res.set(key, [str]);
    }
  }
  return [...res.values()];
};

const getKey = (s) => {
  let key = 1;
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 107
  ];
  const aCharCode = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    key = primes[s.charCodeAt(i) - aCharCode] * key;
  }
  return key;
};
```

## Use

1. Run `make create` and type a \[name\] where \[name\] is 'questionName_number'
   e.g. 'validAnagrams_242'
1. Add the input and expected output to the `input/[name].json`
1. Solve problem in `src/neetcode/[name].ts`
1. Run the file in VSCode (see [launch.json](.vscode/launch.json))

## See

`make help`

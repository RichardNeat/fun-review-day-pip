# JS Fundamentals Review Day

Today you have several sections to work through. You are expected to use TDD throughout in order to demonstrate your understanding of the topics and of good TDD practices (the tests for _Section 3 - Using Closures_ have been written for you). Have fun!

**tip:** When running the test command you can pass jest a fileName pattern as an argument in the command line. e.g. `npm test 1` will only run tests that contain 1, just `__tests__/1-at-the-zoo.test.js` in this case. You might find this useful to only run the tests you want to work on.

## Submitting your work

At the end of each section please push your work up to github and send us a link to your repo. This can be done via the `/nchelp review` slack command. Leave a comment in the form letting us know which section you've completed and add a link to your repo. Your repo url will be of the form `https://github.com/yourGithubUserName/fun-review-day`. You can copy this from the address bar in your browser or run `git remote -v` in the terminal.

**tip** If you forgot to fork and cloned the Northcoders repo directly you can fork it afterwards and then change the remote by running `git remote set-url origin your_repo_link_here`.

## Section 1 At-The-Zoo (Array Methods)

For each of these challenges, be sure to use the appropriate array-method, and demonstrate your understanding of TDD.

### 1 - `classifyAnimals`

In the daily life of a zoo keeper, it can often be a hassle keep tracking of all the different animal types in the zoo. Using JavaScript, however, you can help the zoo keeper by implementing a function that can collect all the animals of a specific type into a single array.

Your function should take an array of animal objects and an animal type string, and return a new array of animal objects whose type is the same as the given type.

```js
const animals = [
  { name: 'koala bear', type: 'mammal' },
  { name: 'python', type: 'reptile' },
  { name: 'otter', type: 'mammal' },
  { name: 'eagle', type: 'bird' }
];

classifyAnimals(animals, 'mammal');
// returns [{ name: 'koala bear', type: 'mammal' }, { name: 'otter' , type: 'mammal' }]

classifyAnimals(animals, 'reptile');
// returns [{ name: 'python', type: 'reptile' }]
```

### 2 - `createZooDisplays`

Visitors love the different animals on display but have recently remarked that they'd love a small display so passers-bys can learn a bit more about each of these fascinating critters. Implement a function that creates a zoo sign for each animal you've got on display.

Given an array of animal objects containing `name`, `species` and `nativeRegion` keys, your `createZooDisplays` function should return a new array with the text ( formatted as `My name is <name>, and I am a <species> and I'm originally from <nativeRegion>` ) for each animal.

```js
const animals = [
  {
    name: 'Montgomery',
    species: 'Southern African meerkat',
    nativeRegion: 'Botswana'
  }
];

createZooDisplays(animals); // returns ['My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana']
```

```js
const animals = [
  {
    name: 'Montgomery',
    species: 'Southern African meerkat',
    nativeRegion: 'Botswana'
  },
  {
    name: 'Salome',
    species: 'Rattlesnake',
    nativeRegion: 'Argentina'
  }
];

createZooDisplays(animals);
/* returns
['My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana',
 'My name is Salome, and I am a Rattlesnake and I'm originally from Argentina']
*/
```

### 3 - `createAnimalTally`

It turns out that classifying the animals isn't enough for the zoo keeper and they'd really like to have an object giving a tally of the different animals in the zoo. Implement a function that takes an array of different animal types and returns a tally object counting each of the different animal types.

```js
createAnimalTally(['tiger']); // returns { tiger: 1 }
createAnimalTally(['tiger', 'parrot', 'parrot']); // returns { tiger: 1, parrot: 2 }
```

Your final test should be using the `ncArk` from the `/data/zoo-data file` _DO NOT COPY AND PASTE THIS INTO YOUR SPEC FILE - it's huge!_ Be sure to export it properly. It should return the following object:

```js
{ platypus: 69,
  lion: 85,
  seal: 80,
  eagle: 74,
  elephant: 67,
  parrot: 83,
  chimp: 106,
  snake: 83,
  tiger: 71,
  koala: 82 }
```

?????? `Push your work to Github and submit it before moving on` ??????
?????? `Commit and push your work to github then use /nchelp review to submit` ??????

## Section 2 - OOP Banking App

You are building a mobile banking app for a new tech startup! The CTO of the company wants you to design a `User` class that will have various features enabling a user to interact with their new account.

The CTO's specification for the `User` class is detailed below. Be sure to write tests for each element of behaviour you want from the class.

It must have a `currentBalance` property, which will be a **number** representing amount of pounds, starting at `0`:

```js
const anatUser = new User();
anatUser.currentBalance; // 0;
```

It must have a `pots` property, which will be an **empty object** that will store pots for saving money for specific things.

```js
const anatUser = new User();
anatUser.pots; // {};
```

It must have a `depositMoney` method which will update the the `currentBalance` in pounds:

```js
const anatUser = new User();
anatUser.depositMoney(10.56);
anatUser.currentBalance; // 10.56
anatUser.depositMoney(2.3);
anatUser.currentBalance; // 12.86
```

It must have a `createNewPot` method which will add a new property to the `pots` property with a key for the type of the pot being created and an object containing the `potBalance`:

```js
const anatUser = new User();
anatUser.pots; // {}

anatUser.createNewPot('holiday');
anatUser.pots.holiday;
/** {
   potBalance: 0
 }
**/
anatUser.createNewPot('mortgage_deposit');
anatUser.pots.mortgage_deposit;
/** {
   potBalance: 0
 }
**/
```

It must have an `addToPot()` method which will add money to the `potBalance` of a given pot:

```js
const anatUser = new User();
anatUser.pots; // {}

anatUser.createNewPot('holiday');
anatUser.addToPot('holiday', 10);
anatUser.pots.holiday;
/** {
   potBalance: 10
 }
**/
anatUser.addToPot('holiday', 30);
anatUser.pots.holiday;
/** {
   potBalance: 40
 }
**/
```

It must have a `transferToPot()` method which will transfer money from the `currentBalance` to the `potBalance`. If there is **insufficient money** in the `currentBalance` then the function should have no effect on the current User.

```js
const anatUser = new User();

anatUser.createNewPot('holiday');
anatUser.depositMoney(10);
anatUser.transferToPot('holiday', 5.03);

anatUser.currentBalance; // 4.97
anatUser.pots.holiday;
/*
{
  potBalance: 5.03
}
*/
```

?????? `Push your work to Github and submit it before moving on` ??????
?????? `Commit and push your work to github then use /nchelp review to submit` ??????

## Section 3 - Using Closures

### 1 - `makeStringDivider`

Write a higher-order function called `makeStringDivider`.

Your `makeStringDivider` function should:

- take a number (representing the length of each substring) as an argument
- return a new function

The new function should:

- take a string to be divided into a series of substrings, each of the length determined by the number originally passed to `makeStringDivider`
- return an array containing a list of the substrings

_Note:_ if the string cannot be divided evenly, then the final substring in the array should be shorter.

### For Example:

```js
const divideStringInto3s = makeStringDivider(3);
divideStringInto3s(''); // []
divideStringInto3s('northcoders!'); // ['nor', 'thc', 'ode', 'rs!']
```

```js
const divideStringInto4s = makeStringDivider(4);
divideStringInto4s('the quick, brown fox'); // ['the ', 'quic', 'k, b', 'rown', ' fox']
divideStringInto4s('goodbye'); // ['good', 'bye']
```

### 2 - `makeIteratorFunc`

Write a higher-order function called `makeIteratorFunc`.

It should do the following:

- take an array and an iteratee (function to be called on the elements of the array) as its arguments
- return a new function

The new function should:

- on first invocation, return the result of calling the passed iteratee function with the first element in the array
- on each subsequent invocation, return the result of calling the passed iteratee function with the next element in the array
- return undefined once the iteratee has been called with all elements of the array

### For example:

```js
const doubleNum = (num) => {
  return num * 2;
};

const doubleIterator = makeIteratorFunc([3, 4, 5], doubleNum);
doubleIterator(); // returns 6
doubleIterator(); // returns 8
doubleIterator(); // returns 10
```

```js
const shoutString = (str) => {
  return str.toUpperCase();
};

const shoutingIterator = makeIteratorFunc(['hello', 'world'], shoutString);
shoutingIterator(); // returns 'HELLO'
shoutingIterator(); // returns 'WORLD'
shoutingIterator(); // returns undefined
```

?????? `Push your work to Github and submit it before moving on` ??????
?????? `Commit and push your work to github then use /nchelp review to submit` ??????

## Section 4 - Recursion

### 1 - `deepKeys`

Implement a function `deepKeys` that will take an object as its argument and go through that object, including any nested objects, and collect all of the keys into a single array.

```js
deepKeys({ a: 1, b: 2, c: 3 }); // ['a','b','c']
deepKeys({ a: 1, b: 2, c: { d: 10 } }); // ['a','b','c','d']
deepKeys({ a: 1, b: { e: 10 }, c: { d: 10, e: { f: 100, h: 10 } } }); // [ 'a', 'b', 'e', 'c', 'd', 'e', 'f', 'h' ]
```

### 2 - `deepRoute`

Implement a function called `deepRoute`. This function will return a route string representing the route to a given element in a nested array. The format of the route string should be with the index of each nested array separated by an '`->`'. The function should return an empty string in the case where the item is not inside the array.

```js
deepRoute(['a', 'b', 'c'], 'z'); // returns ''
deepRoute(['a', 'b', 'c'], 'a'); // returns '0'
deepRoute(['a', 'b', 'c'], 'c'); // returns '2'
deepRoute(['a', 'b', ['c', 'd'], 'e'], 'c'); // returns '2->0' (2 for the position in the lowest level, 0 in the nested array)
deepRoute(['a', 'b', ['c', ['d'], 'e', 'f']], 'd'); // returns '2->1->0'
```

## Section 5 - Additional

Well done if you've got through everything. This is the end of work we would like you to submit but there some additional challenges below if you'd like some more practice. You'll have to setup your own files and tests for each of these problems.

### 1 - ADVANCED - `rememberMe`

_This challenge is advanced, if you've reached it, please proceed with the other sections before attempting this_

Write a higher-order function called `rememberMe`, which takes a function as it's only argument.

It should do the following:

- take a function
- return a new function.

The new function should:

- if the new function has not previously been called with those arguments, it should return the output of the original function, but store it in a cache
- if the function has been called with those arguments, it should return the output of the original function **WITHOUT** having to execute the functionality

### 2 - ADVANCED - `flat`

Reimplement the array method `flat`. You can find the [docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

# js-Group
Exercise from Eloquent Javascript ( A Set clone )

## Groups

- The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

- Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

- Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

- Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

## Result 

```js
let group = Group.from([5, 78, 96]);
console.log(group);
// -> Group { members: [ 5, 78, 96 ] }
console.log(group.has(78));
// -> true
console.log(group.has(10));
// -> false
group.add(10);
group.add(78);
group.add(78);
group.add(96);
console.log(group);
// -> Group { members: [ 5, 78, 96, 10 ] }
group.delete(10);
console.log(group.has(10));
// -> false
```

### Iterator Result

```js
console.log(group.members);
// -> 
// [
//   5,
//   78,
//   96,
//   'Rocket',
//   false,
//   27,
//   { x: 3, y: 4 },
//   'John',
//   [ 'a', 2, 'b' ]
// ]

for(const member of group){
  console.log(`member: ${member}`);
}
// ->
// member: 5
// member: 78
// member: 96
// member: Rocket
// member: false
// member: 27
// member: [object Object]
// member: John
// member: a,2,b
```
class Group{
  constructor(){
    this.members = [];
  }

  add(value){
    if(!this.has(value)) this.members.push(value);  
  }

  delete(value){
    this.members = this.members.filter( member => member != value);
  }

  has(value){
    return this.members.includes(value);
  }

  static from(collection){
    let group = new Group();
    for(let value of collection){
      if(!group.has(value)) group.add(value);
    }
    return group;

  }

  [Symbol.iterator] = function () {
    let index = 0;
    let members = this.members

    return{
      next(){
        if( index < members.length){
          return {
            value: members[index++],
            done: false
          }
        }else{
          return {
            value: undefined,
            done: true
          }
        }

      } // next() 

    } // iterator functio () return
    
  } // [Symbol.iterator] = function () 
}


let group = Group.from([5, 78, 96]);
console.log(group.members);
// -> Group { members: [ 5, 78, 96 ] }
console.log(group.has(78));
// -> true
console.log(group.has(10));
// -> false
group.add(10);
group.add(78);
group.add(78);
group.add(96);
console.log(group.members);
// -> Group { members: [ 5, 78, 96, 10 ] }
group.delete(10);
console.log(group.has(10));
// -> false
console.log(`\n-----------------------------\n|         Iterator          |\n-----------------------------\n`)

group.add(`Rocket`);
group.add(false);
group.add(27);
group.add({x:3, y:4});
group.add(`John`);
group.add([`a`, 2, `b`]);

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
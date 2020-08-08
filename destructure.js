const person = {name: 'Jack willian', age: 17, job: 'facebooking', gfName: 'Emma', address: 'bern', phone: +41789696677, friends: ['carlos', 'jessica', 'tom', 'pedro'] }


// const {phone, gfName, address} = person ;
// // const gfName = person.gfName;
// // const phone = person.phone


// console.log(gfName, phone, address, phone);
// console.log(gfName, phone, address, phone);
// console.log(gfName, phone, address, phone);
// console.log(gfName, phone, address, phone);

const friends = ['amir', 'salaman', 'shah', 'arman'];

const [chotoFriend, nextFriend,...restFriend]= friends;

console.log(restFriend)


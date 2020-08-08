const ages = [30,31,32,30,33];
const ages2 = [24,28,29,38,45];
const ages3 = [22,25,20,39,47];
//old//
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

const allAges2 = [...ages, ...ages2, 5, ...ages3]

//console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 350;

const takaPoisa = [650, 450, 350];
//es6 new system
const maximum = Math.max(...takaPoisa);

//old system
//const maximum = Math.max(business, minister, sochib);
console.log(maximum)

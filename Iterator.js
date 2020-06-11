console.log(19);
var names=['Ian','Kipchumba','Koech','Kulei'];
names.forEach(names=>{
    console.log(names);
});
var numbers=[1233,422,904,24,12,29];
var no=numbers.map(number=>{
    return number-10;
});
console.log(numbers);
console.log(no);
var shortName=names.filter(name=>{
    return name.length<4;
});
console.log(shortName);
var shortNameIndex=names.findIndex(name=>{
    return name.length<4;
});
console.log(shortNameIndex);
const sumNums=numbers.reduce((accumulator,current)=>{
    return accumulator+current;
});
console.log(sumNums);
const Password=(Math.random()*sumNums);
console.log(Password);
const some=numbers.some(number=>{
    return number>500;
});
console.log(some);
const every=numbers.every(number=>{
    return number>1000;
});
console.log(every);
const every2=numbers.every(number=>{
    return number>10;
});
console.log(every2);

const person={
    name:'Ian',
    age:19,
    height:5.4,
    
};
console.log(person.name);


//Iterating through objects

const entries=Object.entries(person);
console.log(entries);
for(const property in person){
    console.log(`${property}:${person[property]}`);
};

//Destructuring assignment

const Vampire={
    residence:'Transylvania'
};
const {residence}=Vampire;
console.log(residence);
let Electonics={
    Inventory:"Phones",
    Employees:"12",
    storeInfo:function(){
        return (`${this.Inventory}:${this.Employees}`);
    }
    
};
console.log(Electonics.storeInfo());
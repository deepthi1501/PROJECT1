// let a=+("1")
// let b=+("3")
// function add(a,b){
//     return a+b
// }

// ----
// let ans=add(a,b)
// console.log(ans)
// let result(20>12)? "big":"small";
// console.log(result)
// for (let i=0;i<5;i++){
//     console.log(i);
// }

// ----
// let i=0;
// while(i<5){
//     console.log(i)
//     i++;
// }
// ----
// let i=0;
// do{
//     console.log(i);
//     i++;   
// }while(i<5);
// let person={name:"john", age:30,city:"india"};
// for(let key in person){
//     console.log(key + person[key]);
// }

// -----
// let arr=[10,20,30];
// for(let value of arr){
//     console.log(value);
// }
// let a=prompt()
// console.log(len(a))
// ---

// let a=24;
// switch(a){
//     case 3:
//         console.log("to small");
//         break;
//     case 4:
//         console.log("exactly");
//         break;
//     default:
//         console.log("cases are not matched")
// }
// -----
// let Sayhii=function(){
//     alert("hello");
// ---
// };
// let sum=(a,b)=>a+b;
// alert(sum(1,2));
// ---
// let age =prompt("what is your age");
// let welcome =(age<18)?()=>alert("not allowed"): ()=>alert("allowed");
// welcome();
// ----

// let car={
//     brand:"bmw",
//     model:"old",
//     year:"2024"
// };
// console.log(car.brand)
// car.city="hyd"
// -----

// let book={
//     title:"1984",
//     author:"gergo orwell"
// };
// function hasproperty(obj,prop){
// return prop in obj;
// }
// console.log(hasproperty(book,"title"));
// console.log(hasproperty(book,"year"));
// -----

// let student={
//     name:"deepthi",
//     age:"20",
//     grade:"A"
// };
// for(let key in student){
//     console.log(student);
// }
// ----------------
 
// function countproperties(obj){
//     let count=0;
//     for(let key in obj){
//         count++;
//     }
//     return count;
// }
//     let user={
//         name:"john",
//         age:"20",
//         isadmin:"true"
//     };
// console.log(countproperties(user));
// --------

// let calculator={
//     num1: 10,
//     mum2: 5,
//     add(){
//         return this.num1+this.num2;
//     }
//     subtract(){
//         return this.num1-this.num2;
//     }
// };
// console.log(calculator.add());
// console.log(calculator.subtract());
// -----
// let user={
//     name:"deepthiii",
//     age:20
// };
// function cloneobject(obj){
//     let clone={};
//     for(let key in obj){
//         clone[key]=obj[key];

//     }
//     return clone; 
// }
// let userclone=cloneobject(user);
// console.log(userclone);
// -----

// function sumALL(...args){
// let sum=0;
// for(let arg of args)sum+=arg;
// return sum;
// }
// console.log(sumALL(1));
// console.log(sumALL(1,2));
// console.log(sumALL(1,2,3));
// -----------------


// function outerfunction(){
//     let counter=0
//     function innerfunction(){
//         counter+=1
//         return counter
//     }
//     return innerfunction
// }
// let increment=outerfunction()
// console.log(increment())
// console.log(increment())
// console.log(increment())
// ---------------------------

// let animal={
//     eats:"yes i eats"
// };
// let rabbit={
//     jumps:true
// };
// rabbit.__proto__=animal
// console.log(rabbit.eats)
// --------------------------
// let animal={
//     eats:"yes i eats",
//     Walk(){
//         console.log("animal walks")
//     }
// };
// let rabbit={
//     jumps:true,
//     __proto__:animal
// };
// let longfar={
//     earlenth:12,
//     __proto__:rabbit
// }
// longfar.walk()
// console.log(longfar.jumps)
// rabbit.walk()
// ---------------------------------

// var employee1={firstname:"john",lastname:"doe"};
// var employee2={firstname:"jimmy",lastname:"bill"};
// function invite(one,two){
//     console.log(one+this.firstname+this.lastname+two)
// }
// invites.call(employee1,"hello","how are you");
// invites.call(employee2,"hello","how are you");
// ------------------

// var employee1={firstname:"john",lastname:"doe"};
// var employee2={firstname:"jimmy",lastname:"bill"};
// function invite(once,two){
//     console.log(one+this.firstname+this.lastname+two)
// }

// invite.call(employee1,"hello","how are you");
// invite.call(employee2,"hello","how are you");
// let invitefunction=invite.bind(employee1,"hello","how are you");
// invitefunction()
// -----------------------
// class car{
//     constructor(brand,model){
//         this.brand=brand;
//         this.model=model;
//     }
//     start(){
//         console.log('${this.brand}${this.model}is starting');
//     }
//     drive(){
//         console.log('${this.brand}${this.model}is driving');
//     }
// }
// const mycar=new car('tatyto','corolla');
// mycar.start();

// class eletriccar extends car{
//     constructor(brand,model,battrycapacity){
//         super(brand,model);
//         this.battrycapacity=battrycapacity;
//     }
//     charge(){
//         console.log('${this.brand}${this.model} this battry is full.');
//     }
// }
// const myeletriccar=new eletriccar('tesla','model s','100wh');
// eletriccar.start();
// eletriccar.charge();
// ---------------------
// let myelement=document.getElementById("mypara");
// myelement.textContent="hi";
// ------------------------------
const iteminput = document.getElementById("itemlist");
const button = document.getelementbyclass("additembutton");
const itemlist = document.getElementsByTagName("iteminput");
button.addeventlistener("click",function(){
        if (iteminput.Value.trim()!== ''){
        let newitem= document.createElement("li");
        newitem.textContent=iteminput.Value;
        itemlist.appendchild(newitem)
        iteminput.Value=""
    }
    });

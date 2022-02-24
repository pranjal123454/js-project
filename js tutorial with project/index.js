1.//ways to print in js

// document.write("pranjal");
console.log("hello pandit ji");

2.//console api

console.warn("this is a warning");
console.error("this is an error");

3.//variables
var num1=32;
var num2=32;
console.log(num1+num2);

4.//datatypes
//number
var num1=43;

//string
var str1="this is string";

//objects
var marks={
    ravi:88,
    shubham:99,
    teja:66

}
console.log(marks)
//booleans
var a=true;
var b=false;
console.log(a,b);

//undefined
var und=undefined;
console.log(und);
var and;
console.log(and)
var n=null;
console.log(n);
/*there are two datatype in javascript 
1.primitive datatypes -undefined,null,number,boolean,string,symbol
2.referencedatatypes-arrays and object
*/
var arr=[2,4,5,6,7];
console.log(arr);

//logical operator
//and operator
console.log(true&&true); //dono true hone hi chayein
console.log(true&&false);
//or operator
console.log(true||true); //koi ek bhi true ho to saare true
console.log(true||false);

//functions in javascript
function avg(a,b){
    return (a+b)/2;
}
c=avg(4,14);
console.log(c);
//loops in javascript
 arr1=[9,8,7,6,5,4]
 for(var i=0;i<arr.length;i++)
 {
     if(i==2){
         continue; //i=2 ke liye run ni hogaconsole .log 3 ke liye hoga
     }
    // console.log(arr1[i]);
 }

 //for each loop
 arr.forEach(function(element){
     //console.log(element);
 })
 //array methods
 var myArr=["fruit" , "apple " , "cake" , "fan" ];
 console.log(myArr.length);
// myArr.pop();
// myArr.sort();
// myArr.toString();

//strings methods
let mylovelystring="pranjal is good boy good";
console.log(mylovelystring.lengh);
console.log(mylovelystring.indexOf("good"));
console.log(mylovelystring.lastIndexOf("good"));
console.log(mylovelystring.slice(0,3));
d=mylovelystring.replace("pranjal", "kunal");
console.log(d,mylovelystring);



//date
let mydate=new Date();
//console.log(mydate);
//console.log(mydate.getTime());
//console.log(mydate.getFullYear());
//console.log(mydate.getDay);


 //DOM
 let elem=document.getElementById('click');
 console.log(elem);
 let elemclass=document.getElementsByClassName("container");
 console.log(elemclass);
 elemclass[0].style.background="yellow";

 //console.log(elem.innerHtml);
 //console.log(elem.innerText);
 var tn=document.getElementsByTagName('button');
 console.log(tn);
 createdelement=document.createElement('b');
 createdelement.innerText="this is para";
 tn[0].appendChild(createdelement);


 //selector using query
 sel=document.querySelector('.container')
 console.log(sel); //single element return krega
 sel1=document.querySelectorAll('.container');
 console.log(sel1); //saare elemts ko target krega


 //events in javascript
 function clicked(){
     console.log("the button was clicked");
 }
 window.onload=function(){
    console.log("the document was loaded");

    
 }

 firstContainer.addEventListener('click',function(){
     console.log("click hua");
 })
 firstContainer.addEventListener('mouseover',function(){
    console.log("mouse in");})
    firstContainer.addEventListener('mouseout',function(){
        console.log("mouseout");})

        //set timeout and set interval
 logkaro=()=>{
     console.log("i m   ur log");
 }
 
  setTimeout(logkaro,2000);  //phla argument function hota hn or dusra kitne miliseconds bd chlna hn
  



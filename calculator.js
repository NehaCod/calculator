
let displayValue="";
let inputText=document.querySelector(".box");
inputText.value=displayValue;
let ans=document.querySelector(".ans");
ans.innerHTML= "0";

let clear=document.querySelector(".clear");
let back=document.querySelector(".back");
let per=document.querySelector(".per");
let divide=document.querySelector(".divide");
let seven=document.querySelector(".seven");
let eight=document.querySelector(".eight");
let nine=document.querySelector(".nine");
let multiply=document.querySelector(".multiply");
let four=document.querySelector(".four");
let five=document.querySelector(".five");
let six=document.querySelector(".six");
let minus=document.querySelector(".minus");
let one=document.querySelector(".one");
let two=document.querySelector(".two");
let three=document.querySelector(".three");
let plus=document.querySelector(".plus");
let zero=document.querySelector(".zero");
let dot=document.querySelector(".dot");
let equal=document.querySelector(".equal");


clear.addEventListener("click",()=>{
        displayValue="";
        inputText.value=displayValue;
        ans.innerHTML="0";
});
back.addEventListener("click",()=>{
    const backSpace=inputText.value.slice(0,-1);
    displayValue=backSpace;
    inputText.value=displayValue;  
});
equal.addEventListener("click",()=>{
    let result= eval(displayValue);
    displayValue=result;
    inputText.value=inputText.value;
    ans.innerHTML="  =" + displayValue
});
one.addEventListener("click",()=>{
    displayValue=displayValue + one.innerHTML;
    inputText.value=displayValue;
});
two.addEventListener("click",()=>{
    displayValue=displayValue + two.innerHTML;
    inputText.value=displayValue;
});
three.addEventListener("click",()=>{
    displayValue=displayValue + three.innerHTML;
    inputText.value=displayValue;
});
four.addEventListener("click",()=>{
    displayValue=displayValue + four.innerHTML;
    inputText.value=displayValue;
});
five.addEventListener("click",()=>{
    displayValue=displayValue + five.innerHTML;
    inputText.value=displayValue;
});
six.addEventListener("click",()=>{
    displayValue=displayValue + six.innerHTML;
    inputText.value=displayValue;
});
seven.addEventListener("click",()=>{
    displayValue=displayValue + seven.innerHTML;
    inputText.value=displayValue;
});
eight.addEventListener("click",()=>{
    displayValue=displayValue + eight.innerHTML;
    inputText.value=displayValue;
});
nine.addEventListener("click",()=>{
    displayValue=displayValue + nine.innerHTML;
    inputText.value=displayValue;
});
zero.addEventListener("click",()=>{
    displayValue=displayValue + zero.innerHTML;
    inputText.value=displayValue;
});
plus.addEventListener("click",()=>{
    displayValue=displayValue + '+';
    inputText.value=displayValue;
});
minus.addEventListener("click",()=>{
    displayValue=displayValue + '-';
    inputText.value=displayValue;
});
divide.addEventListener("click",()=>{
    displayValue=displayValue +'/';
    inputText.value=displayValue;
});
multiply.addEventListener("click",()=>{
    displayValue=displayValue + '*';
    inputText.value=displayValue;
});
dot.addEventListener("click",()=>{
    displayValue=displayValue +'.';
    inputText.value=displayValue;
});
per.addEventListener("click",()=>{
    displayValue=displayValue +'%';
    inputText.value=displayValue;
});




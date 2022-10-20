let homeEl=document.getElementById("home-ele");
let count1=0;
function plusa1(){
    count1++
homeEl.innerText=count1;
}
function plusa2(){
    count1+=2;
    homeEl.innerText=count1;
}
function plusa3(){
    count1+=3;
    homeEl.innerText=count1;
}
let guestEl=document.getElementById("guest-ele");
let count2=0;
function plusb1(){
    count2++
guestEl.innerText=count2;
}
function plusb2(){
    count2+=2;
    guestEl.innerText=count2;
}
function plusb3(){
    count2+=3;
    guestEl.innerText=count2;
}
function reset(){
    homeEl.innerText=count1=0;
    guestEl.innerText=count2=0;
}
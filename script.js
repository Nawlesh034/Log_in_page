let singIN = document.getElementById('sign-in');
let signUP = document.getElementById('sign-up');
let nameField = document.getElementById('name-field');
let title = document.getElementById('heading');
// let hover = document.getElementsByClassName('subMit:hover');
let change = document.getElementById('toggle');
let pass = document.getElementById('passWord');

signUP.style.backgroundColor="rgb(158,78,234)";


change.addEventListener('click',function()
{  

if (change.src.match("img/hidden.png")) {
    change.src = "img/eye.png";
    pass.type ='text';
} else {
    change.src = "img/hidden.png";
    pass.type ='password';
}
}) ;
    // let change = document.getElementById('toggle'); // toggle is class for password seeing
  
singIN.addEventListener('click',function(){
    nameField.style.maxHeight="0"
    title.innerHTML = "Sign In"
    singIN.style.backgroundColor="rgb(158,78,234)"
    signUP.style.backgroundColor="#ece7e7"
   
   
    // signUP.style.Color="white"
})
signUP.addEventListener('click',function(){
    nameField.style.maxHeight="65px";
    title.innerHTML = "Sign Up"
    signUP.style.backgroundColor="rgb(158, 78, 234)"
    singIN.style.backgroundColor="#ece7e7"
   
})




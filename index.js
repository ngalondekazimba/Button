//console.log("hello")
//window.alert('this is an alert !')
// accept user input

// 1. using window prompt
 /*let username ;
username = window.prompt("what is your name:");
   2. html textbox*/

   let username;
document.getElementById("btnSubmit").onclick= function(){

username = document.getElementById("txtName").value;
document.getElementById("Welcome").textContent = username;
};




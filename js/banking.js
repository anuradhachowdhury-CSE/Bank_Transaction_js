document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault();
    
   const emails = document.getElementById('user-email');
   const userEmail = emails.value;
   const passwords = document.getElementById('user-password');
   const userPass = passwords.value;

   if( userEmail == "c@gmail.com" && userPass == "123" ){ 
     window.location.href = "bank-state.html";
   }
   else{
       console.log('your email & password is not correct!!!')
   }
});



// document.getElementById('deposit-btn').addEventListener('click',function(e){
//   e.preventDefault();
//  const depositInput = document.getElementById('user-depo');
//  const depoInput = depositInput.value;
//  console.log(depoInput);
//  const DepoTotal =document.getElementById('deposit-total');
//  DepoTotal.innerText = depoInput;
//  depositInput.value = " ";
// });
// document.getElementById('deposit-btn').addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('depo');
// })

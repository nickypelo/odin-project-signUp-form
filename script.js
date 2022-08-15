const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const create = document.querySelector(".btn");
const errorMsg = document.getElementById('password-error');
const errorMsg2 = document.getElementById('confirm-error');
const input = document.querySelectorAll('.inputBox');


create.addEventListener('click', ()=>{
    if(confirmPassword !== password){
        errorMsg.textContent = "**Passwords do not match";
        errorMsg2.textContent = "**Passwords do not match";
        confirmPassword.setAttribute('style', 'border: 2px red dotted;');
        password.setAttribute('style', 'border: 2px red dotted;');
    }
    else{
        password.setAttribute('style', 'border: 2px green dotted;');
        confirmPassword.setAttribute('style', 'border: 2px green dotted;');

    }
   
})

input.forEach((reset) =>{
    reset.addEventListener('click',()=>{
        errorMsg.textContent = "**Passwords do not match";
        errorMsg2.textContent = "**Passwords do not match";
    })
})

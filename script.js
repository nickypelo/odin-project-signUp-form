const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const create = document.querySelector(".btn");
const errorMsg = document.getElementById('password-error');
const errorMsg2 = document.getElementById('confirm-error');
const input = document.querySelectorAll('.inputBox');


create.addEventListener('click', ()=>{
    if(password.value !==""){
        if(confirmPassword.value === password.value){
            password.setAttribute('style', 'border: 2px green dotted;');
            confirmPassword.setAttribute('style', 'border: 2px green dotted;');
            
        }
        else if((confirmPassword.value !== password)){
            errorMsg.textContent = "**Passwords do not match";
            errorMsg2.textContent = "**Passwords do not match";
            confirmPassword.setAttribute('style', 'border: 2px red dotted;');
            password.setAttribute('style', 'border: 2px red dotted;');
          
        }
    }
    else{
        password.setAttribute('placeholder', 'Enter a password')
        errorMsg.textContent ="**Empty"
        errorMsg2.textContent ="**Empty"
    }
   
})

input.forEach((reset) =>{
    reset.addEventListener('click',()=>{
        if((errorMsg != "") && (errorMsg2 != "")){
            errorMsg.textContent = "";
            errorMsg2.textContent = "";
        } 
    })
})

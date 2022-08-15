const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;
const create = document.querySelector('.btn');
const login = document.querySelector('.login')


create.addEventListener('click', ()=>{
    if(confirmPassword !== password){
        confirmPassword.setAttribute('title', 'The password does not match. Try again.')
        confirmPassword.setAttribute('style', 'border: 2px red dotted;');
        password.setAttribute('style', 'border: 2px red dotted;');
        login.textContent = "Name"
    }
    else{

    }
})

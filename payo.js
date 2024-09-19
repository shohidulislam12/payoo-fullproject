
const loginButton=document.getElementById('loginButton');
loginButton.addEventListener('click',function(event){
    event.preventDefault();
    const password=document.getElementById('password');
    if(password.value=="1111"){
        window.location.href="home.html"
    }
    else{
        alert('wrong pin');
        password.value='';
    }
})

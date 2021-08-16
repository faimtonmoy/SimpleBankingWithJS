document.getElementById("log-in-submit").addEventListener('click',function(){
    const userField= document.getElementById('user-email');
    const userEmail= userField.value;
    const passwordField= document.getElementById('user-password');
    const userPassword= passwordField.value;
    if(userEmail== 'faim@gmail.com' && userPassword== 'faim')
    {
        window.location.href= 'banking.html';
    }
    
})


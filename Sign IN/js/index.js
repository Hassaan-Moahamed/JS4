
var login=document.getElementById('regiter');
var loginEmail=document.getElementById('loginEmail')
var loginPass=document.getElementById('loginPass')
var Alertall=document.getElementById('Alertall');
var Alertsucc=document.getElementById('Alertsucc');
var Alertemail=document.getElementById('Alertemail')


var usersList=[];

if(localStorage.getItem('userslist')!=null){
    usersList=JSON.parse(localStorage.getItem('userslist'));
}


login.addEventListener("submit", function (e) {
    e.preventDefault();
    correctLogIn();

   })

function correctLogIn(){
    if(loginEmail.value=='' || loginPass.value==''){

        Alertall.classList.replace('d-none','d-block')
    }
    else{
        Alertall.classList.replace('d-block','d-none')
        for(var i=0;i<usersList.length;i++){
            if(usersList[i].email==loginEmail.value && usersList[i].password==loginPass.value)
                {
                Alertsucc.classList.replace('d-none','d-block');
                Alertemail.classList.replace('d-block','d-none')
                localStorage.setItem('username',usersList[i].code);
           window.location.href="file:///C:/Users/PC/OneDrive/Desktop/js%20assignment%204/index.html";
            }
            else{
                Alertemail.classList.replace('d-none','d-block')
                Alertsucc.classList.replace('d-block','d-none')
            }
        }
    }
   
}

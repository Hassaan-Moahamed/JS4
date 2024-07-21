var sign = document.getElementById("regiter");
var SignName=document.getElementById('SignName');
var SignEmail=document.getElementById('SignEmail');
var SignPass=document.getElementById('SignPass');
var alerall=document.getElementById('Alertall');
var alersucc=document.getElementById('Alertsucc');
var emailExist=document.getElementById('emailExist');
var usersList=[];
if(localStorage.getItem('userslist')!=null){
    usersList=JSON.parse(localStorage.getItem('userslist'));
}

sign.addEventListener("submit", function (e) {
    e.preventDefault();
    if(CheckOfValid()){
        if(emailExisting()){
        emailExist.classList.replace('d-none','d-block');
        alersucc.classList.replace('d-block','d-none');
        }
        else{
        emailExist.classList.replace('d-block','d-none');
        Adduser(); 
        // window.location.href="file:///C:/Users/PC/OneDrive/Desktop/js%20assignment%204/Sign%20IN/index.html"
        
         }
   }
    
})
function Adduser(){ 
   var user={
    code:SignName.value,
    email:SignEmail.value,
    password:SignPass.value
   }
   
   usersList.push(user);
   localStorage.setItem('userslist',JSON.stringify(usersList));
}
function valdiation(Pattren,element,alert){
     var pattren=Pattren;
    if(pattren.test(element.value)){
        console.log('valid');
        alert.classList.replace('d-block','d-none')
        return true
    }
    else{
        console.log('invalid');
        alert.classList.replace('d-none','d-block')
        return false
    }
}
function emailExisting(){
    for(var i=0 ;i<usersList.length;i++){
        if(usersList[i].email==SignEmail.value){
            return true;  
        }
        else{
            return false;
        }
    }
}
function CheckOfValid(){
    if(SignName.value==''|| SignEmail.value=='' || SignPass.value=='' ){
        alersucc.classList.replace('d-block','d-none'); 
        alerall.classList.replace('d-none','d-block');
        Alertname.classList.replace('d-block','d-none');
        Alertemail.classList.replace('d-block','d-none')
        Alertpass.classList.replace('d-block','d-none')
        return false;
    }
    else{

        alerall.classList.replace('d-block','d-none');
        alersucc.classList.replace('d-block','d-none');
        valdiation(/^[a-zA-Z0-9$_]{3,}$/,SignName,Alertname);
        valdiation(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,SignEmail,Alertemail);
        valdiation( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,SignPass,Alertpass);
      if( valdiation(/^[a-zA-Z0-9$_]{3,}$/,SignName,Alertname)==true&&
       valdiation(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,SignEmail,Alertemail)==true&&
       valdiation( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,SignPass,Alertpass)==true){
        alersucc.classList.replace('d-none','d-block');
        return true
      }
    }
}

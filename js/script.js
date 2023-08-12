// inputs
var signUpName=document.getElementById('signUp-name');
var signUpEmail=document.getElementById('signUp-mail');
var signUpPassword=document.getElementById('signUp-pass');
var signInEmail=document.getElementById('signin-email');
var signInPassword=document.getElementById('signin-pass');
// button
var signUpBtn=document.getElementById('sign-up');
// var signInBtn=document.getElementById('sign');
var button=document.getElementById('btn');
// alert
var success=document.getElementById('succ');

// array to save data
var alldata;

// get value from localStorage
if(localStorage.getItem("alldata" !== null)){
    alldata=json.parse(localStorage.getItem("alldata"))
}else{
    alldata=[]
}


// login and signup btn
button.addEventListener("click", function(){
    // login
    if(button.innerHTML=="login"){

    if(emptyInputsSignIn() === true){

        showAlert("All inputs is required");

    }else if(checkMailAndPass() === true){
        window.location.href="login.html"
    }else{
        showAlert("incorrect email or password");

    }

// sign up
    }
    else if(button.innerHTML=="Sign Up"){
        if(emptyInputs()===true){
            showAlert("All inputs is required");


        }else if(emailExist()===true){
            showAlert("email already exists");
            clear();

        }else{
           
        var data={
            name:signUpName.value,
            email:signUpEmail.value,
            pass:signUpPassword.value,
        }
        alldata.push(data);
        showAlert("Success");
        success.classList.replace("text-danger","text-success")

        setToLocalStorage();
        clear();
        console.log(alldata) 
        }



    }
})

// signupbtn and signinbtn
signUpBtn.addEventListener("click", function(){
    if(signUpBtn.innerHTML=="Sign Up"){
        window.location.href="signUp.html"


    }else if(signUpBtn.innerHTML=="Sign in"){
        window.location.href="index.html"
    }
})
// to save data in local storage
function setToLocalStorage(){
localStorage.setItem("alldata",JSON.stringify(alldata) )
}

// to clear inputs
function clear(){
    signUpName.value='';
    signUpEmail.value='';
    signUpPassword.value='';
}

// handel empty inputs
// empty signUp inputs
function emptyInputs(){
    if(button.innerHTML == "Sign Up"){
        if(signUpName.value==="" || signUpEmail.value==="" || signUpPassword.value===""){
            return true
        }else{
            return false
        }
    }else if(button.innerHTML == "login"){
        if(signUpEmail.value==="" || signUpPassword.value===""){
            return true
        }else{
            return false
        }

    }

}

// empty signIn inputs
function emptyInputsSignIn(){
    if(signInEmail.value==="" || signInPassword.value===""){
        return true
    }else{
        return false
    }
    }

// to show alert
function showAlert(text){
    success.innerHTML=text
           success.classList.replace("opacity-0","opacity-100")
           setTimeout(() => {
            success.classList.replace("opacity-100","opacity-0")

           }, 3000);
}

// to check email exist
function emailExist(){
for(var i=0 ;i<alldata.length ;i++){
    if(alldata[i].email === signUpEmail.value){
        return true;
    }
}
}

// check mail and password
function checkMailAndPass(){
    for(var i=0; i< alldata.length ;i++){
        if(alldata[i].email === signInEmail.value && alldata[i].pass === signInPassword.value){
            console.log(alldata[i]);
            localStorage.setItem("userName",alldata[i].name)
            return true;
        }else{
            return false;
        }
    }
}

// welcome part
var welcomeBtn=document.getElementById('welcome-btn')
var welcomeText=document.getElementById('welcome')

var userName=localStorage.getItem('userName')

welcomeText.innerHTML=`Welcome ${userName}`

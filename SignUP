const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  
  checkInputs();
  
  
  
  
});

function checkInputs(){
  
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const emailValue = email.value.trim();
  const mobileValue = mobile.value.trim();
  
   if(usernameValue === '')
     {
       setErrorFor(username, 'Username cannot be blank');
	   
     } 
  else{
       setSuccessFor(username); 
     }
  


  
  if(passwordValue === '')
     {
       setErrorFor(password, 'Password cannot be blank');
	   
     } 
  else{
       setSuccessFor(password); 
     }
  
  

  if(password2Value === '')
     {
       setErrorFor(password2, 'Confirm Password cannot be blank');
     } 
  else{
       setSuccessFor(password2); 
     }
  
  
  
  if(emailValue === '')
     {
       setErrorFor(email, 'Email cannot be blank');
     } 
  else if (!isEmail(emailValue))
  {
	  
	  setErrorFor(email, 'Email is not valid !!!');
  }
  else
  {
       setSuccessFor(email); 
     }
  
  
  if(mobileValue === '')
     {
       setErrorFor(mobile, 'Mobile Number cannot be blank');
     } 
  else if (!isPhone(mobileValue))
  {
	  setErrorFor(mobile, 'Enter valid Phone number !!!');
  }
  else
    {
       setSuccessFor(mobile); 
     }
  
  }

  
  
 
  
  

function setErrorFor(input, message){
  const formControl= input.parentElement;
  const small = formControl.querySelector('small');
  
  small.innerText= message
  
  formControl.className = 'form-control error';
  
}



function setSuccessFor(input)
{
	const formControl= input.parentElement;
	formControl.className = 'form-control success';
}


function isEmail(email)
{
	
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  
     
}

function isPhone(phone)
{
	return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
}

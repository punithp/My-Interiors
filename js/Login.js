


document.getElementById("btn1").click = function ()
{
	var name= admin;
	var passwrd = Admin123;
	var uname = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	if (uname == name && pass == passwrd )
	{
		alert ("Login successfully");
        window.location.href = "H:\punITH\Project\MyInteriors\Home.html"; // Redirecting to Home page.
        return false;
	}
	else
	{
		alert("Invalid Username/Password");
	}
	
	
	if(uname == "" || uname == null )
	{
		alert("Please enter the valid user name");
		return false;
	}
	
	 else if (password == null || password == "") 
	 {
       alert("Please enter the password.");
       return false;
     }
	
}







/*
function formValidation()
{

const name = document.getElementById('name');
const Password = document.getElementById('password');
const Form = document.getElementById('myForm');

if(name.value = "" )
	{
		messages.push('Name is required');
	}

if(Password.value.length < 6)
	{
		messages.push("Password must be greater than 6 Characters");
	}
	
}

*/
function validate()
{
      let fname= document.getElementById('fname');
      let lname= document.getElementById('lname');
      let uname= document.getElementById('Uname');
    let phno= document.getElementById('phno');
    let email = document.getElementById("email");
    let pass= document.getElementById('password');
    let copass= document.getElementById('confpass');


    let reg=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexp =/^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;
    let passexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
if(fname.value=="")
    {
     alert("All fields are required");
     return false;
}

if(lname.value=="")
    {
     alert("All fields are required");
     return false;
}



if(uname.value=="")
{
 alert("All fields are required");
 return false;
}


if(phno.value=="")
{
 alert("All fields are required");
 return false;
}
else if(regexp.test(phno.value)==false)
{
  alert("Enter a valid phone number");
  return false;
}


   
if(email.value=="")
{
 alert("All fields are required");
 return false;
}
else if(reg.test(email.value)==false)
{
  alert("Enter a valid email id");
  return false;
}



if(pass.value=="")
{
 alert("All fields are required");
 return false;
}

else if(passexp.test(pass.value)==false)
{
  alert("Enter valid password");
  return false;
}



if(copass.value=="")
{
 alert("All fields are required");
 return false;
}
else if(pass.value!=copass.value)
{
  alert("Passwords does not match");
  return false;
}
else{
  alert("passwords match");
return true;
}

}

  var pass = document.getElementById("password")
  pass.addEventListener('keyup',function(){
  checkPassword(pass.value)
  
  })
  function checkPassword(password)

    {
  
  var strengthbar= document.getElementById('strength');
  var strength=0;

  if(password.match(/[a-z0-9]+/))
  {
    strength += 1;
  
  }
  

 
  if(password.match(/[A-Z]+/))
  {
    strength += 1;
  
  }
  



  if(password.match(/[0-9]+/) && (password.length>=8))
  {
    strength += 1;
  
  }
  
  switch(strength)
  {



    case 0:
    strengthbar.style.width ='0%';
    document.getElementById('strength1').innerText="Enter password";
    break;

    case 1:
    strengthbar.style.width ='30%';
    
document.getElementById('strength1').innerText="Poor";
    strengthbar.style.backgroundColor='red';
   break;

    case 2:
    strengthbar.style.width ='60%';
    document.getElementById('strength1').innerText="Medium";
    strengthbar.style.backgroundColor='orange';
    break;

    case 3:
    strengthbar.style.width ='100%';
    document.getElementById('strength1').innerText="strong";
    strengthbar.style.backgroundColor='green';
    break;

   


  }
}



pass.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
pass.onblur = function() {
  document.getElementById("message").style.display = "none";
}













  
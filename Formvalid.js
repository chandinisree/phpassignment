function validateForm(){  
var Fname=document.myform.fname.value;
var Lname=document.myform.lname.value;      
var num=document.myform.phone.value;
var dob=document.myform.DOB.value;
var email=document.myform.email.value;
var gender=document.myform.gen.value;
var mark=document.myform.Percentage.value; 
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  


if (Fname==null || Fname==""){  
  alert("Enter Firstname");  
  document.myform.fname.focus();
  return false;  
}
if (Lname==null || Lname==""){  
  alert("Enter Lastname");  
  document.myform.lname.focus();
  return false;  
}

if (dob==null || dob==""){  
  alert("Enter Date of Birth ");  
  document.myform.DOB.focus();
  return false;  
}


if (num==null || num==""){  
  alert("Enter Phone Number");  
  document.myform.phone.focus();
  return false;  
}


if (isNaN(num)){  
 alert("Enter Numeric value only");  
 document.myform.phone.focus();
  return false;  
}else if (num.length!=10) {
	alert("Enter a valid number");
	document.myform.phone.focus();
	return false;
}

if (email==null || email==""){  
  alert("Enter Email "); 
  document.myform.email.focus(); 
  return false;  
}
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Enter a valid Email address ");
  document.myform.email.focus();  
  return false;  
  }  


if (gender==null || gender==""){  
  alert("Select your gender"); 
 document.myform.gen[0].focus();
  return false;  
}

if (mark==null || mark==""){  
  alert("Enter your Mark");  
  document.myform.Percentage.focus();
  return false;  
}

else{
alert("Submited Successfully")  
  return true;  
  }  

}


//Add input box
function add_lastName(){
    document.getElementById("LAST-NAME").style.display = "";
    document.getElementById("addln").style.display="none";
    document.getElementById("addage").style.display="";
    
}
function add_age(){
    document.getElementById("AGE").style.display = "";
    document.getElementById("addage").style.display="none";
    document.getElementById("addnum").style.display="";
}
function add_mobileNumber(){
    document.getElementById("MOBILE-NUMBER").style.display = "";
    document.getElementById("addnum").style.display="none";
    document.getElementById("addmail").style.display="";
}
function add_email(){
    document.getElementById("E-MAIL").style.display = "";
    document.getElementById("addmail").style.display="none";
    document.getElementById("addpass").style.display="";
}
function add_password(){
    document.getElementById("PASSWORD").style.display = "";
    document.getElementById("addpass").style.display="none";
}

//Hide input box
function remove_lastName(){
    document.getElementById("LAST-NAME").style.display='none';
    document.getElementById("AGE").style.display='none';
    document.getElementById("MOBILE-NUMBER").style.display='none';
    document.getElementById("E-MAIL").style.display='none';
    document.getElementById("PASSWORD").style.display='none';
    document.getElementById("addln").style.display="";
}
function remove_age(){
    document.getElementById("AGE").style.display='none';
    document.getElementById("MOBILE-NUMBER").style.display='none';
    document.getElementById("E-MAIL").style.display='none';
    document.getElementById("PASSWORD").style.display='none';
    document.getElementById("addage").style.display="";
}
function remove_mobileNumber(){
    document.getElementById("MOBILE-NUMBER").style.display='none';
    document.getElementById("E-MAIL").style.display='none';
    document.getElementById("PASSWORD").style.display='none';
    document.getElementById("addnum").style.display="";
}
function remove_email(){
    document.getElementById("E-MAIL").style.display='none';
    document.getElementById("PASSWORD").style.display='none';
    document.getElementById("addmail").style.display="";
}
function remove_password(){
    document.getElementById("PASSWORD").style.display='none';
    document.getElementById("addpass").style.display="";
}

function validate(){

    var nameRegEx = /^[a-zA-Z]{3,100}$/;
    var fname = document.getElementById("first_name").value;
    var result = nameRegEx.test(fname);
    
    var lname = document.getElementById("last_name").value;
    var result2 = nameRegEx.test(lname);

    var ageRegEx = /^\d+$/;
    var age = document.getElementById("age").value;
    var result3 = ageRegEx.test(age);

    var numRegEx = /^\d{10}$/;
    var num = document.getElementById("number").value;
    var result4 = numRegEx.test(num);

    var mailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var mail = document.getElementById("email").value;
    var result5 = mailRegEx.test(mail);

    var passRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/ 
    var pass = document.getElementById("password").value;
    var result6 = passRegEx.test(pass);

    if(result && result2 && result3 && result4 && result5 && result6){
        alert("Form is submitted")
    }else{
        alert("Form is not Valid")
    }
    if(result){
        document.getElementById("first_name").style.borderColor = "green";
    }else{
        document.getElementById("first_name").style.borderColor = "red";
    }
    if(result2){
        document.getElementById("last_name").style.borderColor = "green";
    }else{
        document.getElementById("last_name").style.borderColor = "red";
    }
    if(result3){
        document.getElementById("age").style.borderColor = "green";
    }else{
        document.getElementById("age").style.borderColor = "red";
    }
    if(result4){
        document.getElementById("number").style.borderColor = "green";
    }else{
        document.getElementById("number").style.borderColor = "red";
    }
    if(result5){
        document.getElementById("email").style.borderColor = "green";
    }else{
        document.getElementById("email").style.borderColor = "red";
    }
    if(result6){
        document.getElementById("password").style.borderColor = "green";
    }else{
        document.getElementById("password").style.borderColor = "red";
    }

}




















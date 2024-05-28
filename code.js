var fname;
var lname;
var email;
var pword;
var cnum;
var reason;
var sex;

var firstnamedata;
var lastnamedata;
var emaildata;
var sexdata;
var reasondata;


function submitting(){

    //getting value
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    pword = document.getElementById("pword").value;
    cnum = document.getElementById("cnum").value;
    reason = document.getElementById("reason").value;
    sex = document.getElementsByName("opt").value;
    //storing in localStorage
    localStorage.setItem("fname",fname);
    localStorage.setItem("lname",lname);
    localStorage.setItem("email",email);
    localStorage.setItem("pword",pword);
    localStorage.setItem("cnum", cnum);
    localStorage.setItem("reason", reason);
    localStorage.setItem("opt",sex);
   
    //open the second page
    
    getData();
   

function getData(){
    //read and get value from localStorage
    firstnamedata = localStorage.getItem("fname");
    lastnamedata = localStorage.getItem("lname");
    emaildata = localStorage.getItem("email");
    sexdata = localStorage.getItem("opt");
    reasondata = localStorage.getItem("reason");
    
    displayData();
}
}

function displayData(){
    //to display
    window.location.href="secondpage.html";
    document.getElementById("tellmewhy").innerText=firstnamedata;

    document.getElementById("whatfname").innerHTML= fname;
    document.getElementById("whatlname").innerHTML = lastnamedata;
    alert(reasondata);
    document.getElementsByName("tellmewhy").innerHTML = reasondata;
    alert(reasondata);
    document.getElementById("whatemail").innerHTML = emaildata;
    
}

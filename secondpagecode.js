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

    getdisplayData();

    //open the second page
    window.location.href="secondpage.html";
}

function getdisplayData(){
    //read and get value from localStorage
    firstnamedata = localStorage.getItem("fname");
    lastnamedata = localStorage.getItem("lname");
    emaildata = localStorage.getItem("email");
    sexdata = localStorage.getItem("opt");
    reasondata = localStorage.getItem("reason");

    //to display
    document.getElementById("whatfname").innerHTML = firstnamedata;
    document.getElementById("whatlname").innerHTML = lastnamedata;
    document.getElementById("tellmewhy").innerHTML = reasondata;
    document.getElementById("whatemail").innerHTML = emaildata;

}
const form = document.getElementById("reportForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const report={

anonymous:document.getElementById("anonymous").checked,

fullname:document.getElementById("fullname").value,

email:document.getElementById("email").value,

phone:document.getElementById("phone").value,

category:document.getElementById("category").value,

date:document.getElementById("date").value,

time:document.getElementById("time").value,

location:document.getElementById("location").value,

severity:document.getElementById("severity").value,

description:document.getElementById("description").value,

status:"Pending"

};

let reports=JSON.parse(localStorage.getItem("reports")) || [];

reports.push(report);

localStorage.setItem("reports",JSON.stringify(reports));

alert("Incident Report Submitted Successfully!");

form.reset();

window.location.href="reports.html";

});
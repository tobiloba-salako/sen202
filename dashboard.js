let reports = JSON.parse(localStorage.getItem("reports")) || [];

const tableBody = document.getElementById("tableBody");

const searchInput = document.getElementById("searchInput");

const filterCategory = document.getElementById("filterCategory");

function renderTable() {

tableBody.innerHTML = "";

let keyword = searchInput.value.toLowerCase();

let category = filterCategory.value;

let filtered = reports.filter(report => {

let matchesSearch =

report.location.toLowerCase().includes(keyword) ||

report.category.toLowerCase().includes(keyword);

let matchesCategory =

category === "All" ||

report.category === category;

return matchesSearch && matchesCategory;

});

filtered.forEach((report,index)=>{

tableBody.innerHTML += `

<tr>

<td>${report.anonymous ? "Anonymous" : report.fullname}</td>

<td>${report.category}</td>

<td>${report.location}</td>

<td>${report.date}</td>

<td>${report.severity}</td>

<td>

<span class="status ${report.status=="Pending" ? "pending":"resolved"}">

${report.status}

</span>

</td>

<td>

<button class="action-btn resolve"

onclick="resolveReport(${index})">

Resolve

</button>

<button class="action-btn delete"

onclick="deleteReport(${index})">

Delete

</button>

</td>

</tr>

`;

});

updateCards();

}

function updateCards(){

document.getElementById("totalReports").innerText=reports.length;

document.getElementById("pendingReports").innerText=

reports.filter(r=>r.status=="Pending").length;

document.getElementById("resolvedReports").innerText=

reports.filter(r=>r.status=="Resolved").length;

document.getElementById("theftReports").innerText=

reports.filter(r=>r.category=="Theft").length;

}

function resolveReport(index){

reports[index].status="Resolved";

localStorage.setItem("reports",JSON.stringify(reports));

renderTable();

}

function deleteReport(index){

if(confirm("Delete this report?")){

reports.splice(index,1);

localStorage.setItem("reports",JSON.stringify(reports));

renderTable();

}

}

searchInput.addEventListener("keyup",renderTable);

filterCategory.addEventListener("change",renderTable);

renderTable();
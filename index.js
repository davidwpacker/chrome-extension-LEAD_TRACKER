let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "" // this clears the input field after clicking submit button
    renderLeads();
})
 
function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>" }
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += 
    `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]} </a>
        </li>
    `
    // template string/literals

ulEl.innerHTML = listItems
}


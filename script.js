/* =========================
   APPLY JOB FUNCTION
========================= */

const applyButtons = document.querySelectorAll(".job-card button");

applyButtons.forEach(button => {
button.addEventListener("click", () => {

let jobName = button.parentElement.querySelector("h3").innerText;

// APPLY STORAGE
let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

if(!appliedJobs.includes(jobName)){
appliedJobs.push(jobName);
localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

showToast("Applied for " + jobName + " 🎉");
}
else{
showToast("Already Applied ❗");
}

});
});


/* =========================
   SHOW TOAST FUNCTION
========================= */

function showToast(message){

let toast = document.createElement("div");
toast.className = "toast";
toast.innerText = message;

document.body.appendChild(toast);

// show
setTimeout(() => {
toast.classList.add("show");
}, 100);

// hide
setTimeout(() => {
toast.classList.remove("show");
toast.remove();
}, 2500);
}


/* =========================
   SAVE JOB FUNCTION
========================= */

const saveButtons = document.querySelectorAll(".job-card button");

saveButtons.forEach(button => {
button.addEventListener("click", () => {

let jobName = button.parentElement.querySelector("h3").innerText;

let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

if(!savedJobs.includes(jobName)){
savedJobs.push(jobName);
localStorage.setItem("savedJobs", JSON.stringify(savedJobs));

showToast("Job Saved ❤️");
}
else{
showToast("Already Saved ❗");
}

});
});


/* =========================
   DARK MODE TOGGLE
========================= */

function toggleDarkMode(){
document.body.classList.toggle("dark");
}
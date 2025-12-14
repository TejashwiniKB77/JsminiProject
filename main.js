let collegeName = "Infomatics National PU College";
let totalCourses = 8;
let isAdmissionOpen = true;
let facilities = ["Labs", "Library", "Sports"];
let collegeInfo = { city: "Bengaluru", state: "Karnataka" };
let result = null;
let temp;

window.addEventListener("load", () => {
  if (!navigator.onLine) {
    alert("You are offline. Some features may not work.");
  }
});

const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
  alert("You are viewing this site on a mobile or tablet");
}

setTimeout(() => {
  console.log("Welcome to " + collegeName);
}, 2000);

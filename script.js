const today = new Date();
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
document.getElementById("dateface").innerText = today.toLocaleDateString('en-US', options);

// Go to homepage
var homeHandler = (event) => {
  event.preventDefault();
  console.log("Home clicked");
  window.location.replace("/");
};
// Go to Dashboard
var dashboardHandler = (event) => {
  event.preventDefault();
  console.log("Dashboard clicked");
  //   window.location.replace("/dashboard");
};
// Go to login page
var loginHandler = (event) => {
  event.preventDefault();
  console.log("Login clicked");
  window.location.replace("/login");
};

// Assign elements to handlers
document.getElementById("homepage").addEventListener("click", homeHandler);
document
  .getElementById("dashboard")
  .addEventListener("click", dashboardHandler);
document.getElementById("login-out").addEventListener("click", loginHandler);

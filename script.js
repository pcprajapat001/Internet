document.addEventListener("DOMContentLoaded", function () {
  const statusElement = document.getElementById("status");
  const statusIconElement = document.getElementById("statusIcon");
  const statusTextElement = document.getElementById("statusText");

  function updateOnlineStatus() {
    if (navigator.onLine) {
      statusIconElement.src = "onlineimg.png";
      statusTextElement.textContent = "Online";
      statusElement.classList.remove("offline");
      statusElement.classList.add("online");
    } else {
      statusIconElement.src = "offline.png";
      statusTextElement.textContent = "Offline";
      statusElement.classList.remove("online");
      statusElement.classList.add("offline");
    }
  }

  updateOnlineStatus(); // Initial status check

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
});

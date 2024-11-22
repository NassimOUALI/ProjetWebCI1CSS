document.addEventListener("DOMContentLoaded", () => {
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return decodeURIComponent(value);
    }
    return null;
  }

  const username = getCookie("username");
  const loginTime = getCookie("loginTime");

  if (!username || !loginTime) {
    window.location.href = "./login.html";
    return;
  }

  const profileName = document.getElementById("profile-name");
  if (profileName) {
    profileName.textContent = username;
  }

  const connectedTimeElement = document.getElementById("connected-time");
  function updateConnectedTime() {
    const now = new Date().getTime();
    const connectedTime = now - parseInt(loginTime, 10); // Time in milliseconds
    const seconds = Math.floor((connectedTime / 1000) % 60);
    const minutes = Math.floor((connectedTime / (1000 * 60)) % 60);
    const hours = Math.floor((connectedTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(connectedTime / (1000 * 60 * 60 * 24));

    let timeString = `${seconds} second${seconds !== 1 ? "s" : ""}`;
    if (minutes > 0) timeString = `${minutes} minute${minutes !== 1 ? "s" : ""}, ` + timeString;
    if (hours > 0) timeString = `${hours} hour${hours !== 1 ? "s" : ""}, ` + timeString;
    if (days > 0) timeString = `${days} day${days !== 1 ? "s" : ""}, ` + timeString;

    connectedTimeElement.textContent = `Been connected for: ${timeString}`;
  }

  updateConnectedTime();
  setInterval(updateConnectedTime, 1000);
});

// Function to get a specific cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {

  // Function to delete a cookie
  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  const navigation = document.getElementById("navigation");

  const username = getCookie("username");

  if (username) {
    navigation.innerHTML += `
		<li><a href="./profile.html">Profile</a></li>
      <li>
        <button id="logout-button" class="primary log"><a href="#">Logout</a></button>
      </li>
    `;

    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      deleteCookie("username");
      console.log("You have been logged out.");
      window.location.href = "./index.html";
    });
  } else {
    navigation.innerHTML += `
      <li>
        <button class="primary log">
          <a href="./login.html">Login</a>
        </button>
      </li>
      <li>
        <button class="secondary log">
          <a href="./joinus.html">Join-us</a>
        </button>
      </li>
    `;
  }
});

function login(username, expiryDays = 7) {
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
  }

  if (username) {
    
    setCookie("username", username, expiryDays);
    setCookie("loginTime", Date.now(), expiryDays);

    console.log("Login successful!");
    window.location.href = "./profile.html";
  } else {
    console.log("Login failed. Please enter a valid username.");
  }
}
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const usernameInput = document.getElementById("username").value; 
    login(usernameInput);
  });
}

const cardEnrollButtons = document.querySelectorAll("div.course-card > button");

cardEnrollButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let username = getCookie("username");
    event.preventDefault();
    window.location.href = username ? './profile.html' : './login.html';
  });
});

let header = document.querySelector('nav');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.backgroundColor = '#fff1e6';
    header.style.borderBottom = '#000 SOLID 1px';
    header.style.boxShadow = '1px 1px 2px rgba(0, 0, 0, .3)'
	} else {
    header.style.boxShadow = '1px 1px 2px rgba(0, 0, 0, .0)'
    header.style.borderBottom = '#FFF SOLID 0px';
		header.style.backgroundColor = 'transparent';
	}
});
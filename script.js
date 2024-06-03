const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginBtn = document.querySelector(".loginBtn");
const closeBtn = document.querySelector(".closePage");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

loginBtn.addEventListener("click", () => {
  wrapper.style.transform = "scale(1)";
});

closeBtn.addEventListener("click", () => {
  wrapper.style.transform = "scale(0)";
});

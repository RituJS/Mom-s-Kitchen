import "./style.css";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const content = document.getElementById("content");

const topSection = document.createElement("div");
const heading = document.createElement("h1");
heading.textContent = "Mom\'s Kitchen";
topSection.appendChild(heading);
content.appendChild(topSection);
const listItems = document.createElement("ul");
content.appendChild(listItems);
const home = document.createElement("li");
home.textContent = "Home";
listItems.appendChild(home);
const menu = document.createElement("li");
menu.textContent = "Menu";
listItems.appendChild(menu);
const contact = document.createElement("li");
contact.textContent = "Contact";
listItems.appendChild(contact);
let homeClicked = false;
let menuClicked = false;
let contactClicked = false;
let homeResult = document.createElement("div");
let menuResult = document.createElement("div");
let contactResult = document.createElement("div");
content.append(homeResult, menuResult, contactResult);
menuResult.classList.add("hide");
contactResult.classList.add("hide");
homeResult.classList.add("hide");
home.addEventListener("click", () => {
  if (!homeClicked) {
    homeClicked = true;
    homeResult = renderHome();
    content.append(homeResult);
    homeResult.classList.remove("hide");
    menuResult.classList.add("hide");
    contactResult.classList.add("hide");
    menuClicked = false;
    contactClicked = false;
  }
});

window.addEventListener("load", () => {
  homeClicked = true;
  homeResult = renderHome();
  content.append(homeResult);
  homeResult.classList.remove("hide");
  menuResult.classList.add("hide");
  contactResult.classList.add("hide");
  menuClicked = false;
  contactClicked = false;
});

menu.addEventListener("click", () => {
  if (!menuClicked) {
    menuClicked = true;
    menuResult = renderMenu();
    menuResult.classList.remove("hide");
    content.appendChild(menuResult);
    homeResult.classList.add("hide");
    contactResult.classList.add("hide");
    homeClicked = false;
    contactClicked = false;
  }
});

contact.addEventListener("click", () => {
  if (!contactClicked) {
    contactClicked = true;
    contactResult = renderContact();
    contactResult.classList.remove("hide");
    content.appendChild(contactResult);
    homeResult.classList.add("hide");
    menuResult.classList.add("hide");
    homeClicked = false;
    menuClicked = false;
  }
});

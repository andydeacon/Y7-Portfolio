// create array to store 3 reviews that are selectable by the user
// 01 is default

const reviews = [
  {
      id: 1,
      quote: "Y&7’s research and user testing helped us identify key user pain points and in an extremely short time-to-market and launch a highly competitive offering.",
      author: "Marcus Richards",
      position: "Project Manager, Charity X",
      img: "./images/MarcusRichards.png"
  },
  {
      id: 2,
      quote: "I cannot thank Y&7 enough for their expertise, they consistently deliver on their promises and have enabled our startup to thrive in an uncertain market.",
      author: "Lenny Hendridge",
      position: "CEO, My New Charity PLC",
      img: "./images/LennyHendridge.png"
  },
  {
      id: 3,
      quote: "Y&7 worked on a campaign to recruit an army of good to help the needy in the face of an evil adversary.  Well done, you shall pass...",
      author: "Gandalf the grey",
      position: "Keeper of the Good",
      img: "./images/Gandalf.png"
  }
];

// Following Javascript to demonstrate using the DOM
// If this website was ever going to be released, this could be changed to jquery code
// Partnering contact.js using jQuery to demonstrate knowledge of its use

// get review elements from document and store as consts

const quote = document.getElementById("quotetext");
const author = document.getElementById("author");
const position = document.getElementById("position");
const img = document.getElementById("authorimg");

// target 3 buttons and store in consts.  These allow the user to select from one of three reviews

const btn1 = document.querySelector("#selling-point-container1");
const btn2 = document.querySelector("#selling-point-container2");
const btn3 = document.querySelector("#selling-point-container3");

// set first as starting review
let currentItem = 0;

// load initial items
window.addEventListener("DOMContentLoaded", function () {
  showReview();
});

// function to display relevant information to the review selected

function showReview() {
  const item = reviews[currentItem];
  quotetext.textContent = item.quote;
  author.textContent = item.author;
  position.textContent = item.position;
  img.src = item.img;
}


// change color state of selected and unselected review buttons
// Note for future development, would refactor to optimise code to shorter length

btn1.addEventListener("click", function() {
  btn1.style.backgroundColor = "#FB7161";
  btn2.style.backgroundColor = "#FFF";
  btn3.style.backgroundColor = "#FFF";
  currentItem = 0;
  showReview();
});

btn2.addEventListener("click", function() {
  btn1.style.backgroundColor = "#FFF";
  btn2.style.backgroundColor = "#FB7161";
  btn3.style.backgroundColor = "#FFF";
  currentItem = 1;
  showReview();
});

btn3.addEventListener("click", function() {
  btn1.style.backgroundColor = "#FFF";
  btn2.style.backgroundColor = "#FFF";
  btn3.style.backgroundColor = "#FB7161";
  currentItem = 2;
  showReview();
});

// NEWSLETTER SIGN UP
// target newsletter sign up submit button - Submitting a valid email triggers an alert to the user
// there is no functionality beyond the alert and the user currently doesnt receive an email

const btnSubmit = document.querySelector(".submit-btn");
const emailAddress = document.querySelector(".email-address");

btnSubmit.addEventListener("click", function() {
  alert("An invitation email has been sent to " + emailAddress.value + ".  Follow the instructions on the email to confirm your subscription to our newletter.");
});

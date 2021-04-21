const reviews = [
  {
      id: 1,
      quote: "Y&7’s research and user testing helped us identify key user pain points and in an extremely short time-to-market and launch a highly competitive offering.",
      author: "Marcus Richards",
      position: "Project Manager, Charity X",
      img: "images/MarcusRichards.png"
  },
  {
      id: 2,
      quote: "I cannot thank Y&7 enough for their expertise, they consistently deliver on their promises and have enabled our startup to thrive in an uncertain market.",
      author: "Lenny Hendridge",
      position: "CEO, My New Charity PLC",
      img: "images/LennyHendridge.png"
  },
  {
      id: 3,
      quote: "Y&7 worked on a campaign to recruit an army of good to help the needy in the face of an evil adversary.  Well done, you shall pass...",
      author: "Gandalf the grey",
      position: "Keeper of the Good",
      img: "images/Gandalf.png"
  }
];
// select items

const quote = document.getElementById("quotetext");
const author = document.getElementById("author");
const position = document.getElementById("position");
const img = document.getElementById("authorimg");

const btn1 = document.querySelector("#selling-point-container1");
const btn2 = document.querySelector("#selling-point-container2");
const btn3 = document.querySelector("#selling-point-container3");

const sellBtns = document.querySelectorAll("sell-btn");

const btnSubmit = document.querySelector(".submit-btn");

// set starting items
let currentItem = 0;

// load initial items
window.addEventListener("DOMContentLoaded", function () {
  showReview();
});

// show review based on items

function showReview() {
  const item = reviews[currentItem];
  quotetext.textContent = item.quote;
  author.textContent = item.author;
  position.textContent = item.position;
  img.src = item.img;
}


// show next review

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

btnSubmit.addEventListener("click", function() {
  alert("You have been subscribed to our newsletter, you can unsubscribe any time by clicking the unsubscribe link from any correspondence. Close this message to continue.");
});

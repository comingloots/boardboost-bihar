// =============================
// BoardBoost Bihar v1.0
// script.js
// =============================

console.log(" BoardBoost Bihar Loaded");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const subjects = [
  "Mathematics",
  "Science",
  "Social Science",
  "Hindi",
  "English"
];

// Search Button
if (searchBtn) {
  searchBtn.addEventListener("click", searchSubject);
}

// Enter Key
if (searchInput) {
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchSubject();
    }
  });
}

function searchSubject() {

  const keyword = searchInput.value.trim().toLowerCase();

  if (keyword === "") {
    alert("Please enter a subject name.");
    return;
  }

  const found = subjects.find(subject =>
    subject.toLowerCase().includes(keyword)
  );

  if (found) {

    alert("Opening " + found);

    window.location.href = "subjects.html";

  } else {

    alert("No subject found.");

  }

}

// Card Animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("click", () => {

card.style.transform="scale(.95)";

setTimeout(()=>{

card.style.transform="scale(1)";

},150);

});

});
const answerBox = document.getElementById("answerBox");
const showAnswerBtn = document.getElementById("showAnswerBtn");

if(showAnswerBtn){

showAnswerBtn.onclick = function(){

if(answerBox.style.display==="block"){

answerBox.style.display="none";
showAnswerBtn.innerText="Show Answer";

}else{

answerBox.style.display="block";
showAnswerBtn.innerText="Hide Answer";

}

}

}

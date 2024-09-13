// ************OMOR************

//
let theLists = document.querySelectorAll(".rating li");
let submit = document.querySelector(".submitMe");
let ratingValue = document.querySelector(".ratingValue");

theLists.forEach((node) => {
  node.addEventListener("click", function (e) {
    let valueofnode = node.innerText;
    let result = ratingValue.innerText;
    theLists.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    // alert(valueofnode);
    ratingValue.innerHTML = valueofnode;
  });
});

submit.addEventListener("click", function () {
  document.querySelector(".heroContent").style.display = "none";
  document.querySelector(".villianContent").style.display = "flex";
  setInterval(() => {
    location.reload();
  }, 5000);
});

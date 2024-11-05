// console.log("bonjour")
//ws counter
const counter = document.querySelector(".counter");
// console.log(cpt)
const plus = document.querySelector(".incr");
// console.log(plus)
const minus = document.querySelector(".decr");
// console.log(minus);

plus.addEventListener("click", function () {
  counter.innerHTML++;
});

minus.addEventListener("click", function () {
  if (counter.innerHTML > 0) {
    counter.innerHTML--;
  }
});
// ***************************************************************


window.addEventListener("resize", function () { document.body.style.backgroundColor='black' });
  var division = document.createElement("div"); //cree un div
  document.body.appendChild(division); //attacher div au body
  division.setAttribute("class", "container"); //attribut class = container
  division.style.margin = "4%";

  division.addEventListener("mouseover", function () {
    division.style.backgroundColor = "red";
  });
  division.addEventListener("mouseout", function () {
    division.style.backgroundColor = "gray";
  });


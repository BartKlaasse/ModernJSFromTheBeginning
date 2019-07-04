// Les 22 Examining the dom

function ExaminingDom() {
  let val;

  // geeft de dom terug aan de waarde val
  val = document;
  // geeft de dom terug als array
  val = document.all;
  val = document.all[1];
  // Geeft de hoeveelheid elementen in de dom
  val = document.all.length;
  // geeft de body terug
  val = document.body;
  // geeft de url terug
  val = document.URL;
  // geeft de domain terug
  val = document.domain;

  // selecteren zonder gebruik te maken van selectors (niet slim)
  val = document.links;
  val = document.links[0];
  val = document.links[0].className;
  val = document.links[0].classList;
  val = document.links[0].classList[0];
  // images ophalen
  val = document.images;
  // haalt alle scripts op
  val = document.scripts;
  val = document.scripts[0].getAttribute("src");

  // HTML collection omzetten naar een array om foreach te kunnen gebruiken
  let scripts = document.scripts;
  let scriptsArr = Array.from(scripts);
  scriptsArr.forEach(function(script) {
    console.log(script.getAttribute("src"));
  });

  console.log(val);
}

// Les 23 DOM selectors for single elements

function singleElementSelectors() {
  // single element selector, haalt het eerst element van bijvoorbeeld een div class='classlink'

  // voorbeeld: document.getElementById
  console.log(document.getElementById("classlink1"));

  // get things from element
  console.log(document.getElementById("classlink1").id);
  console.log(document.getElementById("classlink1").className);

  // change styling & text of element
  document.getElementById("classlink1").style.color = "#333";
  document.getElementById("classlink1").style.padding = "5px";
  document.getElementById("classlink1").style.display = "block";

  // change content
  document.getElementById("classlink1").textContent = "Link content";
  document.getElementById("classlink1").innerText = "Inner text";
  // insert html
  document.getElementById("classlink1").innerHTML =
    '<span style="color:red">Dit gaat er overheen</span>';

  // iedere keer getElementById aanroepen is niet erg effecient. daarom doen we het op de onderstaande manier

  const classLink = document.getElementById("classlink2");
  classLink.innerHTML =
    '<span style="color:red">Dit gaat er ook overheen</span>';

  // Query Selector... is nieuwer en krachtiger. je bent nu niet meer afhankelijk van id's
  // Queryselector op basis van #id
  console.log(document.querySelector("#classlink3"));
  // Queryselector op basis van .class
  console.log(document.querySelector(".classlink"));
  // Queryselector op basis van element
  console.log(document.querySelector("h1"));
  // Query selector haalt alleen het eerste element op.
  document.querySelector("a").style.color = "yellow";
  // Subclasses/nested element ophalen
  document.querySelector("ul li").style.color = "green";
  // laatste nested element selecteren
  document.querySelector("li:last-child").style.color = "green";
  // 2de nested element selecteren
  document.querySelector("li:nth-child(2)").style.color = "purple";
  document.querySelector("li:nth-child(2)").textContent = "Hallo";
  // eerste even of oneven element selecteren
  document.querySelector("li:nth-child(odd)").style.background = "#ccc";
  document.querySelector("li:nth-child(even)").style.background = "#bbb";

}

// Les 24 multiple element selectors

function multipleElementSelectors(){

}

// ExaminingDom();
// singleElementSelectors();
multipleElementSelectors();

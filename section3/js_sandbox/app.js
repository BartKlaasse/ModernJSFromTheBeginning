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

function singleElementSelectors(){

}

// ExaminingDom();
singleElementSelectors();
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

function multipleElementSelectors() {
  //   // meerdere elementen ophalen met classname getElementsByClassName
  //   const items = document.getElementsByClassName("classlink");
  //   console.log(items);
  //   // specifiek item ophalen
  //   console.log(items[0]);
  //   //specifiek item bewerken
  //   items[0].style.color = "red";
  //   items[1].textContent = "Hoi";
  //   // alle "sub"elementen ophalen uit specifiek element
  //   const listItems = document
  //     .querySelector("ul")
  //     .getElementsByClassName("classlink");
  //   console.log(listItems);
  //   // meerdere elementen ophalen op basis van tagname getElementsByTagName
  //   let ahref = document.getElementsByTagName("a");
  //   console.log(ahref);
  //   // specifiek item ophalen
  //   console.log(ahref[0]);
  //   //specifiek item bewerken
  //   ahref[0].style.color = "yellow";
  //   ahref[1].textContent = "Hoi";
  //   //convert html collection into array
  //   ahref = Array.from(ahref);
  //   ahref.reverse()
  //   console.log(ahref);
  //   ahref.forEach(function(ahref){
  //       console.log(ahref.className);
  //       ahref.textContent = 'Link';
  //   })
  // //Query alle a selectors met classname classlink die zich bevinden binnen de LI elementen - document.querySelectorAll
  // // Returned informatie automatisch als array
  // const items = document.querySelectorAll('li a.classlink');
  // console.log(items);
  // items.forEach(function(item,index){
  //   console.log(item.className + ' Index:' + index);
  // });
  // // Even en Oneven selectors ophalen
  // const itemsOdd = document.querySelectorAll('li:nth-child(odd)');
  // const itemsEven = document.querySelectorAll('li:nth-child(even)');
  // itemsOdd.forEach(function(item,index){
  //   item.style.background = '#ccc';
  // });
  // itemsEven.forEach(function(item,index){
  //   item.style.background = '#bbb';
  // });
}

// Traversing the dom les 25

function DomTraversing() {
//   // Dom Traversing is het omhoog en naar beneden bewegen binnen de dom

//   let val;

//   const list = document.querySelector("ul");
//   const listItem = document.querySelector("li.liclass:first-child");

//   // Get all childNodes of ul - returns nodelist met voor Linebreaks een text node
//   val = list.childNodes;
//   // Get specific childNode.nodeName of ul
//   val = list.childNodes[0].nodeName;
//   // get specific childNode.nodeType of ul
//   // Er zijn verschillende nodeTypes namelijk:
//   // 1 - Element
//   // 2 - Attribute (deprecated)
//   // 3 - Text mode
//   // 8 - Comment
//   // 9 - Document itself
//   // 10 - Doctype

//   val = list.childNodes[1].nodeType;
//   // Get all children of element nodes as HTMLcollection
//   val = list.children;
//   // Get specific child
//   val = list.children[0];
//   // modify specific node
//   list.children[1].textContent = "Dit is een specifieke node";
//   // Going down is getting a child
//   // Get children of children
//   val = list.children[0].children;
//   val = list.children[0].children[0];

//   // Get first child including text nodes
//   val = list.firstChild;
//   // Get first element child
//   val = list.firstElementChild;

//   // Get last child
//   val = list.lastChild;
//   // get last element child
//   val = list.lastElementChild;
//   // Get the count of all child elements in list
//   val = list.childElementCount;

//   // Going up is getting a parent
//   // Get parent node
//   val = listItem.parentNode;

//   // Get parent element
//   val = listItem.parentElement;

//   // Get Parent of parent
//   val = listItem.parentElement.parentNode;

//   // Get next sibling
// val = listItem.nextSibling;

// // get next element sibling
// val = listItem.nextElementSibling;
// // get the one next to that
// val = listItem.nextElementSibling.nextElementSibling;

// // get previous sibling
// val = listItem.previousSibling;
// // get the previous sibling element - geeft null terug als er geen eerdere sibling is
// val = listItem.previousElementSibling;

//   console.log(val);
}

// Creating Elements les 26
function creatingTheElements(){

}

// ExaminingDom();
// singleElementSelectors();
// multipleElementSelectors();
// DomTraversing();
creatingTheElements();

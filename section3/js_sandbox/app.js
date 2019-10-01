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

// function creatingTheElements() {
//   // We gaan extra element aanmaken
//   const li = document.createElement("li");
//   // add a class
//   li.className = "liclass";
//   // add a id
//   li.id = "liclassid1";
//   // add a attribute
//   li.setAttribute("title", "new item");
//   // create a textnode and append it to the li.
//   li.appendChild(document.createTextNode("Pre text link"));
//   // create new a href for li
//   const link = document.createElement("a");
//   // add classes to link
//   link.className = "classlink";
//   link.innerText = "Klik hier ";
//   link.href = "#";
//   // append link into li
//   li.appendChild(link);
//   // append li as child of ul
//   document.querySelector("ul.navlist").appendChild(li);
//   console.log(li);
// }

// Removing and replacing Elements les 27

function removeReplaceElements() {
  // // replace an element
  // // create a new element
  // const newHeading = document.createElement('h3');
  // // add an id
  // newHeading.id = 'MainTitle'
  // // add a new textnode
  // newHeading.appendChild(document.createTextNode('Dit is sectie 3'));
  // // get the old heading
  // const oldHeading = document.getElementById('MainTitle');
  // // Get the parent so we can use replaceChild
  // const parentMain = document.querySelector('.MainSection');
  // // replace
  // parentMain.replaceChild(newHeading,oldHeading);
  // // Get all Li elements we might want to remove
  // const lis = document.querySelectorAll('li');
  // // get the parent of the li's we want to remove
  // const list = document.querySelector('ul');
  // // remove list item
  // lis[2].remove();
  // // Removing specific Child element
  // list.removeChild(lis[0])
  // // Adding and removing Classes
  // const firstLi = document.querySelector('li:first-child');
  // const link = firstLi.children[0];
  // let val;
  // // laat de classnames zien als string
  // val = link.className;
  // // laat de classnames zien als lijst
  // val = link.classList;
  // // Laat een specifieke className zien uit de list
  // val = link.classList[0];
  // link.classList.add('test');
  // link.classList.remove('test');
  // // Adding, Removing and Removing Attributes
  // // haalt de waarde van het attribute op
  // val = link.getAttribute('href');
  // // wijzigd de waarde van het attribute
  // val = link.setAttribute('href', 'http://google.com');
  // // kijkt of link een attribute heeft en geeft een boolean terug
  // val = link.hasAttribute('href');
  // // verwijder een attribute
  // link.removeAttribute('href');
  // console.log(val)
}

function ElementListener() {
  // we gaan een functie maken die luistert naar events op een bepaalde class
  // De addeventlistener maakt gebruikt van een lege functie
  // document.querySelector('.btn-primary').addEventListener('click',function(e){
  //   console.log('Test');
  //   // Prevent default zorgt ervoor dat de default actie na de click niet word uitgevoerd
  //   // e.preventDefault();
  // });

  // in plaats van een lege functie kan je ook een eigen functie gebruiken
  // het gebruik van een named functie is netter
  document.querySelector(".btn-primary").addEventListener("click", onClick);

  function onClick(e) {
    // console.log('test')
    // val krijgt de waarde van het event object
    let val;
    val = e;

    // Speciefiek element opvragen van het event
    val = e.target;
    val = e.target.id;
    val = e.target.className;

    val = e.target.classList;

    // Elementen van het event aanpassen
    e.target.innerText = "Hoi";

    // Event type
    val = e.type;

    // Coordinaten relatief van scherm
    // clientY aantal pixels vanaf Y axis vanwaar de muis exact heeft geklikt
    val = e.clientY;

    // de offset vanaf center knop
    val = e.offsetY;

    console.log(val);
  }
}

function mouseEvents() {
  const clearBtn = document.querySelector(".clear-tasks");
  const card = document.querySelector(".card");
  const heading = document.querySelector("h5");

  // Click a element
  // clearBtn.addEventListener('click', runEvent);

  // Double Click a element
  // clearBtn.addEventListener('dblclick', runEvent);

  // Mousedown on a element
  // clearBtn.addEventListener('mousedown', runEvent);

  // Mouse up on element
  // clearBtn.addEventListener('mouseup', runEvent);

  // Mouse enters a element
  // card.addEventListener('mouseenter',runEvent);

  // Mouse leaves a element
  // card.addEventListener('mouseleave', runEvent);

  // Mouse over element
  // card.addEventListener('mouseover', runEvent);

  // Mouse out of element
  // card.addEventListener('mouseout', runEvent);

  // Mouse moves in element
  card.addEventListener("mousemove", runEvent);

  // Event handler
  function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
  }
}

function inputEvents() {
  // we gaan keyboard en inputevents afhandelen

  const form = document.querySelector("form");
  const taskInput = document.getElementById("task");
  const heading = document.querySelector("h5");
  const select = document.querySelector("select");

  // Eventlistener op de submit knop
  // form.addEventListener('submit', runEvent);

  // Keydown event
  // taskInput.addEventListener('keydown', runEvent);

  // Key up event
  // taskInput.addEventListener('keyup', runEvent);

  // Key press event
  // taskInput.addEventListener('keypress', runEvent);

  // Focus event
  // taskInput.addEventListener('focus', runEvent);

  // Blur event
  // taskInput.addEventListener('blur', runEvent);

  // Cut event
  // taskInput.addEventListener('cut', runEvent);

  // Paste event
  // taskInput.addEventListener('paste', runEvent);

  // General Input event
  // taskInput.addEventListener('input', runEvent);

  // Voor de select opties moet materialize ui even worden uitgecomment in index.html
  // Change event
  select.addEventListener("change", runEvent);

  function runEvent(e) {
    // Logt het event type
    console.log(`EVENT TYPE: ${e.type}`);

    // logt het value van het target van het event
    console.log(e.target.value);

    // heading.innerText = e.target.value;

    // // Haalt de waarde op die in de inputbox staat
    // console.log(taskInput.value);

    // // voorkomt redirects naar andere pagina's
    // e.preventDefault();

    // // clears input value
    // taskInput.value = "";
  }
}

function eventBubblingAndDelegation() {
  // Bij event bubbling begint het event bij het gekozen element, vervolgens "bubbelt" het event naar alle parents van het element.
  // Bij event delegation geef je de parent aan als beginplaats en ga je daarna logica gebruiken om naar het benodigde element te navigeren?

  // Voorbeeld event bubbling. klik op task list en zie dat de card content en card ook het event regristreren
  // document.querySelector(".card-title").addEventListener("click", function() {
  //   console.log("card title");
  // });
  // document.querySelector(".card-content").addEventListener("click", function() {
  //   console.log("card content");
  // });
  // document.querySelector(".card").addEventListener("click", function() {
  //   console.log("card");
  // });

  // Event delegation voorbeeld
  // in bovenstaande code zie je dat alleen het eerste element met de class .delete-item een event listener heeft gekregen.

  // const delItem = document.querySelector('.delete-item');

  // delItem.addEventListener('click', deleteItem);

  // function deleteItem(){
  //   console.log('delete item');
  // }

  // Nu gaan we de eventlistener koppelen aan een parent en vervolgens een conditional statement gebruiken om het juiste element op te halen.

  document.body.addEventListener("click", deleteItem);

  function deleteItem(e) {
    // pakt de parent van het event met de exacte classname, als het niet exact matcht gebruik dan 2de voorbeeld
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //   console.log('delete item');
    // }

    // if(e.target.parentElement.classList.contains('delete-item')){
    //   console.log('delete item');
    // }

    if (e.target.parentElement.classList.contains("delete-item")) {
      console.log("delete item");
      // onderstaande verwijderd het element.
      e.target.parentElement.parentElement.remove();
    }
  }
}

function localSessionStorage() {
  // Je kan alleen strings opslaan in localstorage, arrays etc moet je eerst parsen naar een string

  // // Set localstorage
  // localStorage.setItem('name', 'John');
  // localStorage.setItem('age', '30');

  // // Set session storage
  // sessionStorage.setItem('name', 'Beth');

  // // Remove Key from storage
  // sessionStorage.removeItem('name');

  // // Get from storage
  // const name = localStorage.getItem('name');
  // const age = localStorage.getItem('age');

  // console.log(name, age);

  // // Clear all from storage
  // localStorage.clear();

  // Iedere key is uniek, als je een key hergebruikt voor meerdere values dan word het vorige value overscreven
  // Je kan wel een een array omzetten naar een string, en dan vervolgens deze string opslaan in localstorage
  document.querySelector("form").addEventListener("submit", function(e) {
    const task = document.getElementById('task').value;

    let tasks;

    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert('task saved');

    e.preventDefault();
  });

  const tasks = JSON.parse(localStorage.getItem('tasks'));

  tasks.forEach(function(task){
    console.log(task);
  })
}

// ExaminingDom();
// singleElementSelectors();
// multipleElementSelectors();
// DomTraversing();
// creatingTheElements();
// removeReplaceElements();
// ElementListener();
// mouseEvents();
// inputEvents();
// eventBubblingAndDelegation();
localSessionStorage();

// Single line Comment

/* 
Multi line comment
*/

// Console les 5

function ConsoleLogFunctions() {
  // In deze functie zitten verschillende console.log functies

  // Alert (Geen onderdeel van console.log)
  alert("test");

  // Console clearen
  console.clear();

  //Console log string
  console.log("test");
  //Console log ints
  console.log(123);

  // console log variabelen
  var greeting = "hoi";
  console.log(greeting);
  //console log array
  console.log([1, 2, 3]);

  //console log object
  console.log({ a: 1, b: 2 });

  // Console log object as table
  console.table({ a: 1, b: 2 });

  // console log an error
  console.error("Dit is een error yo!");

  // console log an warning
  console.warn("dit is een warning yo!");

  // console timer
  console.time("hello");
  console.log("Een manier om te timen hoelang een script ergens over doet");
  console.timeEnd("hello");
}

// Variabelen les 6
/* 
Er zijn 3 soorten variabelen namelijk var, let en const
de variabele let en const zijn eigenlijk de enige die je nog gebruikt ivm block level scope.
*/

function Vars() {
  // Variabele declareren van type var
  var name = "John doe";
  console.log(name);

  // aan een var en een let variabele kan je later opnieuw een waarde aan toewijzen
  // Nu hoef je niet meer het type aan te geven.
  name = "steve smith";
  console.log(name);

  // Variabele initialiseren
  var greeting;
  // Console log geeft een undefined output
  console.log(greeting);
  // Nu een waarde geven aan de variabele greeting
  greeting = "hallo";
  console.log(greeting);
}

/* 
Conventies single word variabele:
Variabele kunnen het volgende bewaren: letters, numbers, _, $ tekens
de naam van de variabele kan niet beginnnen met een nummer.


Conventies multi word variabele:
er word aangeraden om gebruik te maken van camelcase tijdens deze course
bijvoorbeeld:
var firstName <-- de N van Name is een hoofdletter

*/

function Lets() {
  // Let Variabelen:

  //Variabele initialiseren van het type let:
  let name;

  // Variabele declareren van type let
  name = "John doe";
  console.log(name);

  // aan een var en een let variabele kan je later opnieuw een waarde aan toewijzen
  // Nu hoef je niet meer het type aan te geven.
  name = "steve smith";
  console.log(name);
}

function Constants() {
  // Const Variabelen

  // een const variabele blijft constant, de waarde van de variabele kan dus niet worden gewijzigd.
  const name = "john";
  console.log(name);
  // een const variabele moet worden gedeclareerd. deze mag je dus niet initaliseren

  // de inhoud van een const arrays of object kan wel veranderd worden.
  const person = {
    name: "john",
    age: 30
  };
  console.log(person);

  // hier word de inhoud van een attribuut? gewijzigd.
  person.name = "jaap";
  person.age = 25;
  console.log(person);

  // een voorbeeld met een array
  const numbers = [1, 2, 3, 4];
  console.log(numbers);
  // voegt de waarde 5 toe aan de array
  numbers.push(5);
  console.log(numbers);
}

// Data types les 7

/* 
Er zijn 2 soorten datatypes, primitieve datatypes en reference datatypes. 

primitieve datatypes worden opgeslagen op de locatie van de variabele(on the stack)
Bijvoorbeeld:
Strings
Number (onder andere Int decimal double float hoort in dit type)
Boolean
Null
Undefined
Symbols (ES6)

reference datatypes worden opgeslagen op de "heap". het is dus een referentie naar de locatie.
Bijvoorbeeld:
Arrays
Object literals
Functions
Dates
En al het andere....
*/

function PrimitiveDataTypes() {
  // We gaan met de functie typeof het type van de variabele naar de console loggen

  // String
  const name = "John doe";
  console.log(typeof name);

  // Number
  const age = 45;
  console.log(typeof age);

  // boolean
  const hasKids = true;
  console.log(typeof hasKids);

  // null (genereert het type object)
  const car = null;
  console.log(typeof car);

  // undefined
  let test;
  console.log(typeof test);

  // symbol
  const sym = Symbol();
  console.log(typeof sym);
}

function referenceDataTypes() {
  // We gaan met de functie typeof het type van de variabele naar de console loggen
  // deze zijn allemaal het data type object

  // Array
  const hobbies = ["movies", "music"];
  console.log(typeof hobbies);

  // Object literal
  const adress = {
    city: "Amsterdam",
    land: "Nederland"
  };
  console.log(typeof adress);
  // Date
  const today = new Date();
  console.log(today);
  console.log(typeof today);
}

// Type conversion les 8
function TypeConversion() {
  //Het veranderen van datatypes

  let val;

  // Number to string
  val = String(55);
  val = String(4 + 4);

  // Bool to string
  val = String(true);

  // Date to string
  val = String(new Date());

  // Array to string
  val = String([1, 2, 3, 4]);

  // number to string
  val = (5).toString();

  //Boolean to string
  val = true.toString();

  // Strings to number
  val = Number("52");

  // Number to boolean
  val = Number(true);
  val = Number(false);
  val = Number(null);
  val = Number("Hello"); // Famous NaN error here :)
  val = Number([1, 2, 3]);

  // ParseInt maakt er een Int van, dus geen cijfers achter de komma
  val = parseInt("100");
  val = parseInt("100.30");

  //ParseFloat maakt er een getal van met cijfers achter de komma
  val = parseFloat("11.2101");

  //Output
  console.log(val);
  console.log(typeof val);
  console.log(val.length);
  console.log(val.toFixed());
}
function typeCohersion() {
  // Als we 2 values bij elkaar optellen en 1 van de values is een string dan word de andere value ook een string
  const val1 = "5";
  const val2 = 5;
  const sum = val1 + val2;
  // Dit geeft als log een string 55

  console.log(sum);
  console.log(typeof sum);
}

// Numbers & Math Objects les 9
// ProTip: gebruik geen functienaam die hetzelfde is als een object naam uit js

function quickMath() {
  const num1 = 100;
  const num2 = 50;
  let val;

  // Simple math
  val = num1 + num2;
  val = num1 * num2;
  val = num1 - num2;
  val = num1 / num2;
  val = num1 % num2;

  // Math Object
  val = Math.PI;
  val = Math.E;
  // afronden naar dichtsbijzijnde number
  val = Math.round(2.8);
  // afronden omhoog
  val = Math.ceil(2.6);
  // afronden omlaag
  val = Math.floor(2.8);
  // Wortel
  val = Math.sqrt(64);
  // Laagste getal
  val = Math.min(2, 33, 52, 12, 5);
  // Hoogste getal
  val = Math.max(22, 12, 2, 4, 222);
  // Random getal
  val = Math.random() * 20 + 1;
  // Random getal afgerond
  val = Math.floor(Math.random() * 20 + 1);

  //Output
  console.log(val);
  console.log(typeof val);
}

// Les 10 String methods en Concatenation

function stringingStringsTogether() {
  const firstName = "Bart";
  const lastName = "Klaasse";
  const age = 24;
  const str = "Hoi ik heet Bart Klaasse";
  const tags = "Javascript,C#,Pannenkoekenbakker";

  let val;

  // Samenvoegen
  val = firstName + lastName;

  // Concatenation voorbeeld
  val = firstName + " " + lastName;

  // Appending to string
  val = "Brad ";
  val += "Traversy";

  val = "Hoi ik heet " + firstName + " en ik ben " + age;

  // Escaping van een special character zoals quote characters
  val = "Wauw dat i's cool, ik kan niet wachten";

  // Length property/method
  val = firstName.length;

  // Concat method
  val = firstName.concat(" ", lastName);

  // touppercase method
  val = firstName.toUpperCase();
  val = firstName.toLowerCase();

  // Strings benaderen als read only array
  val = firstName[2];

  // IndexOf method, eerste index van een karakter vinden
  val = lastName.indexOf("a");

  // LastIndexOf method, laatste index van een karakter vinden
  val = lastName.lastIndexOf("a");

  // CharAt  het omgekeerde van index of
  val = firstName.charAt("2");

  // Laatste karakter van de string
  val = firstName.charAt(firstName.length - 1);

  // Substring ophalen
  val = firstName.substring(0, 3);

  // Slice het opdelen van een string
  val = firstName.slice(0, 3);

  // Inverted slice
  val = firstName.slice(-2);

  // Split , een string opsplitsen naar een array
  val = str.split(" ");
  val = tags.split(",");

  // Replace
  val = str.replace("Bart", "SuperBart");

  // Includes
  val = str.includes("Hoi");
  val = str.includes("Pannenkoek");

  console.log(val);
}

// Template Literals Les 11

function TemplateLiterals() {
  const name = "bart";
  age = 24;
  job = "developer";
  city = "den helder";
  let html;

  // Zonder template literals (es5)
  html =
    "<ul><li>Name: " +
    name +
    "</li><li>Age: " +
    age +
    "</li><li>Job: " +
    job +
    "</li><li>city: " +
    city +
    "</li></ul>";

  // Met template literals
  // backticks geven aan dat het een literal is
  html = `
    <ul>
    <li> Name: ${name}</li>
    <li> Age: ${age}</li>
    <li> Job: ${job}</li>
    <li> City: ${city}</li>
    <li> ${2 + 2}</li>
    <li> ${hello()} </li>
    <li> ${age > 30 ? 'Ouder dan 30' : 'Jonger dan 30'}</li>
    </ul>
    `;

function hello(){
  return 'hello';
}
  document.body.innerHTML = html;

  console.log(html);
}



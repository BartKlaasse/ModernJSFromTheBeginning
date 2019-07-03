// Single line Comment

/* 
Multi line comment
*/

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

// Variabelen
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

// Data types

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

// Type conversion
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
typeCohersion();

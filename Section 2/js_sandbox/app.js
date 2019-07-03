// Single line Comment

/* 
Multi line comment
*/

function ConsoleLogFunctions(){
// In deze functie zitten verschillende console.log functies

// Alert (Geen onderdeel van console.log)
alert('test');

// Console clearen
console.clear();

//Console log string
console.log('test');
//Console log ints
console.log(123);

// console log variabelen
var greeting = 'hoi';
console.log(greeting);
//console log array
console.log([1,2,3]);

//console log object
console.log({a:1,b:2});

// Console log object as table
console.table({a:1, b:2});

// console log an error
console.error('Dit is een error yo!');

// console log an warning
console.warn('dit is een warning yo!');

// console timer
console.time('hello')
console.log('Een manier om te timen hoelang een script ergens over doet')
console.timeEnd('hello');
}

// Variabelen
/* 
Er zijn 3 soorten variabelen namelijk var, let en const
de variabele let en const zijn eigenlijk de enige die je nog gebruikt ivm block level scope.
*/

function Vars(){
// Variabele declareren van type var
var name = 'John doe';
console.log(name);

// aan een var en een let variabele kan je later opnieuw een waarde aan toewijzen
// Nu hoef je niet meer het type aan te geven.
name = 'steve smith';
console.log(name);

// Variabele initialiseren
var greeting;
// Console log geeft een undefined output
console.log(greeting);
// Nu een waarde geven aan de variabele greeting
greeting = 'hallo';
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

function Lets(){
// Let Variabelen:

//Variabele initialiseren van het type let:
let name;

// Variabele declareren van type let
name = 'John doe';
console.log(name);

// aan een var en een let variabele kan je later opnieuw een waarde aan toewijzen
// Nu hoef je niet meer het type aan te geven.
name = 'steve smith';
console.log(name);
}

function Constants(){
// Const Variabelen

// een const variabele blijft constant, de waarde van de variabele kan dus niet worden gewijzigd.
const name = 'john'
console.log(name);
// een const variabele moet worden gedeclareerd. deze mag je dus niet initaliseren

// de inhoud van een const arrays of object kan wel veranderd worden.
const person = {
    name: 'john',
    age: 30
}
console.log(person);

// hier word de inhoud van een attribuut? gewijzigd.
person.name = 'jaap';
person.age = 25;
console.log(person);

// een voorbeeld met een array
const numbers = [ 1,2,3,4]
console.log(numbers);
// voegt de waarde 5 toe aan de array
numbers.push(5)
console.log(numbers);
}


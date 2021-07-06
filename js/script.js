/*
!Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array 
    con altri cognomi: ‘Bianchi’, ‘Neri’,
     ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia
     in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1)
   della lista in cui il nuovo utente si trova
 */

//list of surnames
var arr = ["bianchi", "neri", "rossi", "verdi", "gialli"];
var msg = "";   //for concat string msg;
var surname = "";
var reg = "[0-9]";// regular expression for number validation
var listElements=document.getElementById("list-elements");

//validation  for string that contain string number and empty string
do {
    surname = prompt("inserisci il cognome: ");

} while (!surname && surname.match(reg));

//if passed validation than push surname in arr

arr.push(surname.toLowerCase());
//debug inline
console.log("Prima dell'ordinamento:");
console.table(arr);
//now, sort 
arr.sort();

//iteration for   html elments output
for(var i=0; i<arr.length; i++){
    msg+="<li>"+ (i+1)+": "+ arr[i]+ "</li> \n";
}

listElements.innerHTML=msg;
//debug inline
console.log("dopo l'ordinamento:");
console.table(arr);
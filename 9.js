//console.log("Janani");
//step 01: Create an XHR object
var request = new XMLHttpRequest();
// step 02: request a connection which data you need to receive
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// STEP 03: Sending a connection request
request.send();
// step 04: once data successfully received 
// from server 200 status
request.onload=function(){
var data = JSON.parse(request.response);
//console.log(data);

//Get all the countries from Asia continent /region using Filter function
var res = data.filter((element) => element.region == "Asia");
var countryName = res.map(element => element.name);
console.log(countryName);

//Get all the countries with a population of less than 2 lakhs using Filter function
var pop = data.filter((element) => element.population < 200000 )
var countryName = pop.map(element => element.name);
console.log(countryName);

//Print the following details name, capital, flag using forEach function
Object.keys(data).forEach((ele) => {
    console.log(`NAME: ${data[ele].name} CAPITAL: ${data[ele].capital} FLAG: ${data[ele].flag}`);
});

//Print the total population of countries using reduce function
var pop = res.map(element => element.population);
//console.log(pop);
var popSum = pop.reduce((acc,cv) => acc + cv);
console.log(popSum);

//Print the country which uses US Dollars as currency.
var usDlr = data.filter((element) => element.currencies[0] == "USD");
var countryName = usDlr.map((element) => element.name);
console.log(countryName);
}
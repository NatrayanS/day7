//print the following details name, captal, flags using forEach function

console.log("print the following details name, captal, flags using forEach function");

var reg = new XMLHttpRequest();

reg.open("GET", "https://restcountries.com/v3.1/all");

reg.send();

reg.onload= function (){
    var country=JSON.parse(this.response);
    country.forEach((ele)=>{
        console.log(`name : ${ele.name.common}; \ncapital: ${ele.capital}; \nflags : ${ele.flag}`);
    })
}
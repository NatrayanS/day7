//print the total population of countries using reduce function

console.log("print the total population of countries using reduce function");


var reg = new XMLHttpRequest();

reg.open("GET", "https://restcountries.com/v3.1/all");

reg.send();

reg.onload= function (){
    var populations=JSON.parse(this.response);
    let population = populations.reduce((acc,ele)=>{
        return acc+ele.population;
    })
    console.log(`The Total Population Of Countries : ${population}`);
}
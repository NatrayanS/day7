//Get all the countries with a population of less then 2 lakhs using Filter function


var reg = new XMLHttpRequest();

reg.open("GET", "https://restcountries.com/v3.1/all");

reg.send();

reg.onload= function (){
    let continent = JSON.parse(this.response);
    const populations =continent.filter((a)=>{
        return a.population<200000;
    })
    console.log(populations);
    for(let i =0; i< populations.length;i++){
       let nam = `${populations[i].name.common}` ;
       let pop = `${populations[i].population}`;
       console.log(nam +":"+ pop);
    }
}
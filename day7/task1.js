//task 01. Get all the countries from Asia continent/region using Filter function

console.log("Get all the countries from Asia continent/region using Filter function");

var reg = new XMLHttpRequest();

reg.open("GET", "https://restcountries.com/v3.1/all");

reg.send();

reg.onload= function (){
    let continent = JSON.parse(this.response);
    const asia =continent.filter((a)=>{
        if(a.region=='Asia'){
            return a.name;
        }
    })
    console.log(asia);

    for(let i =0; i< asia.length;i++){
        console.log("Asia Continent :", asia[i].name.common);
    }
};
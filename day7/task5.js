//printg the country which uses US Dollars as currency.

console.log("printg the country which uses US Dollars as currency.");

var reg = new XMLHttpRequest();

reg.open("GET", "https://restcountries.com/v3.1/all");

reg.send();

reg.onload= function (){
    var usdols=JSON.parse(this.response);
    /* let usds = usdols.filter((a)=>{
        if(a.currencies.USD.name === 'United States dollar'){
            return a.name.common;
        }
    }) */
    console.log(usdols); 
}



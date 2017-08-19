var output = [];
//var count = 0
var fs = require("fs");
//const content= JSON.stringify(output);

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});

var myWriteStream1= require("fs").createWriteStream("Main.json")
lineReader.on('line', function (line) {
  var jsonFromLine = {};

   // this is my conditional. Set line 2
    var lineSplit = line.split(',');
    // select columns you want
    jsonFromLine.CountryName = lineSplit[0];
    jsonFromLine.Population = lineSplit[5];
    jsonFromLine.GDP = lineSplit[9];
    jsonFromLine.PurchasingPower = lineSplit[17];
    // ...  
    output.push(jsonFromLine);
    });

lineReader.on('close', function (line) {
	output.shift();
myWriteStream1.write(JSON.stringify(output,null,2))									
});

//--------------------------------------------------------------------------part 1 main ends----------------------------------------------------------------


var output2 = [];
//var count = 0
/*var fs = require("fs");*/
//const content= JSON.stringify(output);

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});

var myWriteStream2= require("fs").createWriteStream("Population.json")
lineReader.on('line', function (line) {
  var jsonFromLine = {};

   // this is my conditional. Set line 2
    var lineSplit = line.split(',');
    // select columns you want
    jsonFromLine.CountryName = lineSplit[0];
    jsonFromLine.Population = lineSplit[5];
   
    if (jsonFromLine.CountryName == 'European Union' || jsonFromLine.CountryName == 'World') {

   } else {
    output2.push(jsonFromLine);
}
    });

lineReader.on('close', function (line) {
var obj=output2.filter(e => e.Population )											
    .sort((a, b) => (b.Population - a.Population))
  
    obj.shift();
    myWriteStream2.write(JSON.stringify(obj,null,2))
});

//---------------------------------------------------------------------part 2 population ends----------------------------------------------------------------


var output3 = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});

var myWriteStream3= require("fs").createWriteStream("Gdp.json")
lineReader.on('line', function (line) {
  var jsonFromLine = {};

   // this is my conditional. Set line 2
    var lineSplit = line.split(',');
    // select columns you want
    jsonFromLine.CountryName = lineSplit[0];
    jsonFromLine.GDP = lineSplit[9];

   if (jsonFromLine.CountryName == 'European Union' || jsonFromLine.CountryName == 'World') {

   } else {
    output3.push(jsonFromLine);
}
    });

lineReader.on('close', function (line) {
var obj=output3.filter(e => e.GDP )													//
    .sort((a, b) => (b.GDP - a.GDP))
     //removing the header
   obj.shift();
    myWriteStream3.write(JSON.stringify(obj,null,2))									
});


//---------------------------------------------------------------------part 3 gdp ends----------------------------------------------------------------


var output4 = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});

var myWriteStream4= require("fs").createWriteStream("PurchasingPower.json")
lineReader.on('line', function (line) {
  var jsonFromLine = {};

   // this is my conditional. Set line 2
    var lineSplit = line.split(',');
    // select columns you want
    jsonFromLine.CountryName = lineSplit[0];
    jsonFromLine.PurchasingPower = lineSplit[17];

   if (jsonFromLine.CountryName == 'European Union' || jsonFromLine.CountryName == 'World') {

   } else {
    output4.push(jsonFromLine);
}
    });

lineReader.on('close', function (line) {
var obj=output4.filter(e => e.PurchasingPower )											
    .sort((a, b) => (b.PurchasingPower - a.PurchasingPower))
     //removing the header
    obj.shift();
    myWriteStream4.write(JSON.stringify(obj,null,2))
});


//---------------------------------------------------------------part 4 purchasing power ends----------------------------------------------------------------


var output5 = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});

var myWriteStream5= require("fs").createWriteStream("PopulationGrowth.json")
lineReader.on('line', function (line) {
  var jsonFromLine = {};

   // this is my conditional. Set line 2
    var lineSplit = line.split(',');
    // select columns you want
    jsonFromLine.CountryName = lineSplit[0];
    jsonFromLine.Population = lineSplit[2]-lineSplit[5];
    jsonFromLine.PurchasingPower = lineSplit[17]-lineSplit[14];
   
    
    output5.push(jsonFromLine);

    });

lineReader.on('close', function (line) {
var obj=output5.filter(e => e.Population )										
    .sort((a, b) => (b.Population - a.Population))
   
    myWriteStream5.write(JSON.stringify(obj,null,2))
});


//---------------------------------------------------------------part 5 population growth ends----------------------------------------------------------------

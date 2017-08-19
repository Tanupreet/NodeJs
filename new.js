/*var fs= require('fs');

fs.readFile('datafile.csv','utf-8',function(err,data){
fs.writeFile('writeme.txt',data);
console.log(data);
});





/*fs.writeFileSync('writeme.txt',read);*/


/*var fs = require('fs');
fs.readFile('datafile.csv', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    for(i in array) {
        console.log(array[i]);
    }
})*/


/*var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('datafile.csv');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
  data += chunk;
    a = data
       .trim()
       .split('\n')
       .map((data) => data.split(','));


});


readerStream.on('end',function(){
for(i=0; i<=20; i++){
console.log(a[i][0],a[i][5]);

}
});

readerStream.on('error', function(err){
  console.log(err.stack);
});
*/

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



var output6 = [];

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});

var myWriteStream6= require("fs").createWriteStream("Continent.json")
lineReader.on('line', function (line) {
  var jsonFromLine = {};

   // this is my conditional. Set line 2
    var lineSplit = line.split(',');
    // select columns you want
    jsonFromLine.Continent=lineSplit[0]
    
    if(jsonFromLine.Continent == 'Australia')
    {
    	jsonFromLine.Population=lineSplit[5];
    
   output6.push(jsonFromLine);
}
	if(jsonFromLine.CountryName == 'India' || jsonFromLine.CountryName == 'China' || jsonFromLine.CountryName == 'Indonesia' || jsonFromLine.CountryName == 'Japan' || jsonFromLine.CountryName == 'Saudi Arabia' || jsonFromLine.CountryName == 'Republic of Korea')
    {
    	jsonFromLine.Continent=='Asia'
    	jsonFromLine.Population=lineSplit[5][5];
    
   output6.push(jsonFromLine);
}

    });

lineReader.on('close', function (line) {
/*var obj=output6.filter(e => e.Population )										
    .sort((a, b) => (b.Population - a.Population))
   */
    myWriteStream6.write(JSON.stringify(output6,null,2))
});




/*var myWriteStream2= require("fs").createWriteStream("Population.json")
lineReader.on('close', function (line) {
var obj=output.filter(e => e.Population )											//part 2 population
    .sort((a, b) => (b.Population - a.Population))
  

    myWriteStream2.write(JSON.stringify(obj,null,2))
});


var myWriteStream3= require("fs").createWriteStream("Gdp.json")
lineReader.on('close', function (line) {
var obj=output.filter(e => e.GDP )													//part 3 gdp
    .sort((a, b) => (b.GDP - a.GDP))
    
    myWriteStream3.write(JSON.stringify(obj,null,2))
});



var myWriteStream4= require("fs").createWriteStream("PurchasingPower.json")
lineReader.on('close', function (line) {
var obj=output.filter(e => e.PurchasingPower )											//part 4 purchasing power
    .sort((a, b) => (b.PurchasingPower - a.PurchasingPower))
    
    myWriteStream4.write(JSON.stringify(obj,null,2))
});








output.filter(function (e) {
    return e.Population;
}).sort(function (a, b) {
    return b.Population - a.Population;
}).map(function (e) {
    console.log("{ CountryName :" '"'+e.CountryName +'"' " Population :" '"'+e.Population+'"'"},");
});



lineReader.on('close', function (line) {
    console.log(output); // list output 
});*/
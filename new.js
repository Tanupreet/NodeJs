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
myWriteStream1.write(JSON.stringify(output,null,2))									//part 1 main
});


var myWriteStream2= require("fs").createWriteStream("Population.json")
lineReader.on('close', function (line) {
var obj=output.filter(e => e.Population )											//part 2 population
    .sort((a, b) => (b.Population - a.Population))
    /*console.log(obj);*/

    myWriteStream2.write(JSON.stringify(obj,null,2))
});


var myWriteStream3= require("fs").createWriteStream("Gdp.json")
lineReader.on('close', function (line) {
var obj=output.filter(e => e.GDP )													//part 3 gdp
    .sort((a, b) => (b.GDP - a.GDP))
    /*console.log(obj);*/
    myWriteStream3.write(JSON.stringify(obj,null,2))
});



var myWriteStream4= require("fs").createWriteStream("PurchasingPower.json")
lineReader.on('close', function (line) {
var obj=output.filter(e => e.PurchasingPower )											//part 4 purchasing power
    .sort((a, b) => (b.PurchasingPower - a.PurchasingPower))
    /*console.log(obj);*/
    myWriteStream4.write(JSON.stringify(obj,null,2))
});








/*output.filter(function (e) {
    return e.Population;
}).sort(function (a, b) {
    return b.Population - a.Population;
}).map(function (e) {
    console.log("{ CountryName :" '"'+e.CountryName +'"' " Population :" '"'+e.Population+'"'"},");
});*/



/*lineReader.on('close', function (line) {
    console.log(output); // list output 
});*/
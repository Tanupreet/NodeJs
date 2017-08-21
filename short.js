var output = []
var output2 = []
var output3 = []
var output4 = []
var output5 = []

var fs = require("fs")

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('Table1.3_g20_2013.csv')
});

var myWriteStream1= require("fs").createWriteStream("Main.json")
var myWriteStream2= require("fs").createWriteStream("Population.json")
var myWriteStream3= require("fs").createWriteStream("Gdp.json")
var myWriteStream4= require("fs").createWriteStream("PurchasingPower.json")
var myWriteStream5= require("fs").createWriteStream("PopulationGrowth.json")
    lineReader.on('line', function (line) {
    var jsonFromLine= {}
    var jsonFromLine2= {}
    var jsonFromLine3= {}
    var jsonFromLine4 = {}
    var jsonFromLine5 = {}

   // this is my conditional. Set line 2
    var lineSplit = line.split(',');
    // select columns you want
    jsonFromLine.CountryName = lineSplit[0];
    jsonFromLine.Population = lineSplit[5];
    jsonFromLine.GDP = lineSplit[9];
    jsonFromLine.PurchasingPower = lineSplit[17];
    jsonFromLine2.CountryName = lineSplit[0];
    jsonFromLine2.Population = lineSplit[5];
    jsonFromLine3.CountryName = lineSplit[0];
    jsonFromLine3.GDP = lineSplit[9];
     jsonFromLine4.CountryName = lineSplit[0];
    jsonFromLine4.PurchasingPower = lineSplit[17];
    jsonFromLine5.CountryName = lineSplit[0];
    jsonFromLine5.Population = lineSplit[2]-lineSplit[5];
    jsonFromLine5.PurchasingPower = lineSplit[17]-lineSplit[14];
    
    output.push(jsonFromLine);
    if (jsonFromLine.CountryName == 'European Union' || jsonFromLine.CountryName == 'World' 
    	||jsonFromLine2.CountryName == 'European Union' || jsonFromLine2.CountryName == 'World'
    	||jsonFromLine3.CountryName == 'European Union' || jsonFromLine3.CountryName == 'World'
    	||jsonFromLine4.CountryName == 'European Union' || jsonFromLine4.CountryName == 'World'
    	||jsonFromLine5.CountryName == 'European Union' || jsonFromLine5.CountryName == 'World')
    	 {
 } else {
     output2.push(jsonFromLine2);
     output3.push(jsonFromLine3);
    output4.push(jsonFromLine4);
      output5.push(jsonFromLine5);
}});

lineReader.on('close', function (line) {
	output.shift();
	myWriteStream1.write(JSON.stringify(output,null,2))	

	var obj2=output2.filter(e => e.Population )											
    .sort((a, b) => (b.Population - a.Population))
    obj2.shift();
    myWriteStream2.write(JSON.stringify(obj2,null,2))
	
	var obj3=output3.filter(f => f.GDP )													
    .sort((c, d) => (d.GDP - c.GDP))
     //removing the header
   obj3.shift();
    myWriteStream3.write(JSON.stringify(obj3,null,2))	

    var obj4=output4.filter(e => e.PurchasingPower )											
    .sort((a, b) => (b.PurchasingPower - a.PurchasingPower))
    
    obj4.shift();
    myWriteStream4.write(JSON.stringify(obj4,null,2))	

    var obj5=output5.filter(e => e.Population )										
    .sort((a, b) => (b.Population - a.Population))
   
    myWriteStream5.write(JSON.stringify(obj5,null,2))				
});